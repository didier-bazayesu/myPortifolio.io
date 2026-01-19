import type { Plugin } from 'vite';

export function cssFirst(): Plugin {
  return {
    name: 'css-first',
    apply: 'build', // Only apply in build mode, not dev mode
    transformIndexHtml(html) {
      // Extract CSS links (both external and internal), but skip duplicates
      const cssLinkRegex = /<link[^>]*rel=["']stylesheet["'][^>]*>/g;
      // Extract module scripts
      const scriptRegex = /<script[^>]*type=["']module["'][^>]*><\/script>/g;
      // Extract preload links
      const preloadRegex = /<link[^>]*rel=["']modulepreload["'][^>]*>/g;
      
      const cssLinks: string[] = [];
      const scripts: string[] = [];
      const preloads: string[] = [];
      const seenUrls = new Set<string>();
      
      let match;
      while ((match = cssLinkRegex.exec(html)) !== null) {
        // Extract href to check for duplicates
        const hrefMatch = match[0].match(/href=["']([^"']+)["']/);
        if (hrefMatch) {
          const url = hrefMatch[1];
          if (!seenUrls.has(url)) {
            seenUrls.add(url);
            cssLinks.push(match[0]);
          }
        } else {
          cssLinks.push(match[0]);
        }
      }
      
      while ((match = scriptRegex.exec(html)) !== null) {
        scripts.push(match[0]);
      }
      
      while ((match = preloadRegex.exec(html)) !== null) {
        preloads.push(match[0]);
      }
      
      // Remove CSS links, scripts, and preloads from their original positions
      let result = html;
      cssLinks.forEach(link => {
        result = result.replace(link, '');
      });
      scripts.forEach(script => {
        result = result.replace(script, '');
      });
      preloads.forEach(preload => {
        result = result.replace(preload, '');
      });
      
      // Insert in correct order: preloads, CSS links, then scripts after </head>
      const headCloseIndex = result.lastIndexOf('</head>');
      if (headCloseIndex !== -1) {
        const preloadsHtml = preloads.length > 0 ? preloads.join('\n  ') + '\n  ' : '';
        const cssLinksHtml = cssLinks.length > 0 ? '\n  ' + cssLinks.join('\n  ') : '';
        const scriptsHtml = scripts.length > 0 ? '\n' + scripts.join('\n') : '';
        
        result = result.slice(0, headCloseIndex) + 
                 preloadsHtml +
                 cssLinksHtml +
                 '\n  </head>' +
                 scriptsHtml;
      }
      
      return result;
    },
  };
}

