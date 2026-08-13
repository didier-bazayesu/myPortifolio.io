import StackPage from "./components/StackPage";
import Spine from "./components/Spine";
import Cover from "./sections/Cover";
import Profile from "./sections/Profile";
import Craft from "./sections/Craft";
import Work from "./sections/Work";
import IndexSection from "./sections/Index";
import Colophon from "./sections/Colophon";

import ProgressBar from "./components/ProgressBar";

const chapters = [
  { id: "cover", label: "Cover", node: <Cover /> },
  { id: "profile", label: "Profile", node: <Profile /> },
  { id: "craft", label: "Craft", node: <Craft /> },
  { id: "work", label: "Work", node: <Work /> },
  { id: "index", label: "Index", node: <IndexSection /> },
  { id: "colophon", label: "Colophon", node: <Colophon /> },
];

function App() {
  return (
    <main className="bg-ink font-body">
      <ProgressBar />
      <Spine chapters={chapters.map(({ id, label }) => ({ id, label }))} />
      {chapters.map((c, i) => (
        <StackPage key={c.id} id={c.id} index={i}>
          {c.node}
        </StackPage>
      ))}
    </main>
  );
}

export default App;
