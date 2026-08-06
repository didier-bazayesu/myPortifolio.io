const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file));
  });
  return filelist;
};

const files = walkSync(path.join(__dirname, 'src')).filter(f => f.endsWith('.tsx'));

const replacements = [
  { regex: /text-amber-50\b/g, replace: 'text-zinc-50' },
  { regex: /text-amber-100\b/g, replace: 'text-zinc-100' },
  { regex: /text-amber-200\b/g, replace: 'text-sky-300' },
  { regex: /text-amber-300\b/g, replace: 'text-sky-400' },
  { regex: /text-amber-400\b/g, replace: 'text-sky-500' },
  { regex: /text-amber-500\b/g, replace: 'text-sky-500' },
  { regex: /text-amber-600\b/g, replace: 'text-sky-600' },
  { regex: /text-amber-700\b/g, replace: 'text-sky-700' },
  { regex: /text-amber-800\b/g, replace: 'text-indigo-400' },
  { regex: /text-amber-900\b/g, replace: 'text-indigo-300' },
  { regex: /text-amber-950\b/g, replace: 'text-zinc-100' },

  { regex: /bg-amber-50\b/g, replace: 'bg-zinc-50' },
  { regex: /bg-amber-100\b/g, replace: 'bg-zinc-800' },
  { regex: /bg-amber-200\b/g, replace: 'bg-zinc-700' },
  { regex: /bg-amber-300\b/g, replace: 'bg-indigo-500' },
  { regex: /bg-amber-400\b/g, replace: 'bg-indigo-500' },
  { regex: /bg-amber-500\b/g, replace: 'bg-indigo-600' },
  { regex: /bg-amber-600\b/g, replace: 'bg-indigo-700' },
  { regex: /bg-amber-700\b/g, replace: 'bg-indigo-800' },
  { regex: /bg-amber-800\b/g, replace: 'bg-indigo-900' },
  { regex: /bg-amber-900\b/g, replace: 'bg-zinc-800' },
  { regex: /bg-amber-950\b/g, replace: 'bg-zinc-900' },

  { regex: /border-amber-100\b/g, replace: 'border-zinc-800' },
  { regex: /border-amber-200\b/g, replace: 'border-zinc-700' },
  { regex: /border-amber-300\b/g, replace: 'border-zinc-600' },
  { regex: /border-amber-400\b/g, replace: 'border-indigo-400' },
  { regex: /border-amber-500\b/g, replace: 'border-indigo-500' },
  { regex: /border-amber-600\b/g, replace: 'border-indigo-600' },
  { regex: /border-amber-700\b/g, replace: 'border-indigo-700' },
  { regex: /border-amber-800\b/g, replace: 'border-indigo-500' },
  { regex: /border-amber-900\b/g, replace: 'border-zinc-700' },
  { regex: /border-amber-950\b/g, replace: 'border-zinc-800' },

  { regex: /from-amber-/g, replace: 'from-indigo-' },
  { regex: /via-amber-/g, replace: 'via-indigo-' },
  { regex: /to-amber-/g, replace: 'to-indigo-' },

  { regex: /text-stone-50\b/g, replace: 'text-zinc-50' },
  { regex: /text-stone-100\b/g, replace: 'text-zinc-100' },
  { regex: /text-stone-200\b/g, replace: 'text-zinc-200' },
  { regex: /text-stone-300\b/g, replace: 'text-zinc-300' },
  { regex: /text-stone-400\b/g, replace: 'text-zinc-400' },
  { regex: /text-stone-500\b/g, replace: 'text-zinc-500' },
  { regex: /text-stone-600\b/g, replace: 'text-zinc-400' },
  { regex: /text-stone-700\b/g, replace: 'text-zinc-300' },
  { regex: /text-stone-800\b/g, replace: 'text-zinc-200' },
  { regex: /text-stone-900\b/g, replace: 'text-zinc-100' },
  { regex: /text-stone-950\b/g, replace: 'text-zinc-50' },

  { regex: /bg-stone-50\b/g, replace: 'bg-zinc-950' },
  { regex: /bg-stone-100\b/g, replace: 'bg-zinc-900' },
  { regex: /bg-stone-200\b/g, replace: 'bg-zinc-800' },
  { regex: /bg-stone-300\b/g, replace: 'bg-zinc-800' },
  { regex: /bg-stone-400\b/g, replace: 'bg-zinc-700' },
  { regex: /bg-stone-500\b/g, replace: 'bg-zinc-700' },
  { regex: /bg-stone-600\b/g, replace: 'bg-zinc-800' },
  { regex: /bg-stone-700\b/g, replace: 'bg-zinc-800' },
  { regex: /bg-stone-800\b/g, replace: 'bg-zinc-900' },
  { regex: /bg-stone-900\b/g, replace: 'bg-zinc-950' },
  { regex: /bg-stone-950\b/g, replace: 'bg-zinc-950' },
  
  { regex: /border-stone-100\b/g, replace: 'border-zinc-800' },
  { regex: /border-stone-200\b/g, replace: 'border-zinc-800' },
  { regex: /border-stone-300\b/g, replace: 'border-zinc-700' },
  { regex: /border-stone-800\b/g, replace: 'border-zinc-700' },
  { regex: /border-stone-900\b/g, replace: 'border-zinc-800' },

  { regex: /from-stone-/g, replace: 'from-zinc-' },
  { regex: /to-stone-/g, replace: 'to-zinc-' },

  // Replace font families from the old theme
  { regex: /font-serif-luxury/g, replace: 'font-serif-luxury' }, // Wait, index.css remapped this to sans-serif
  { regex: /font-serif/g, replace: 'font-sans' }, 

  // Fix up specific hardcoded colors if any
  { regex: /\[#c5a059\]/g, replace: '[#6366f1]' },
  { regex: /\[#fdfcf0\]/g, replace: '[#18181b]' },
  { regex: /\[rgba\(251,191,36,0.8\)\]/g, replace: '[rgba(99,102,241,0.8)]' }
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  replacements.forEach(r => {
    content = content.replace(r.regex, r.replace);
  });
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated:', file);
  }
});
