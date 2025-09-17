import VanillaCssCard from "./components/VanillaCssCard";
import InlineStyleCard from "./components/InlineStyleCard";
import InternalStyleCard from "./components/InternalStyleCard";
import CssModuleCard from "./components/CssModuleCard";
import StyledComponentCard from "./components/StyledComponentCard";
import TailwindCard from "./components/TailwindCard";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>

      <h1>React Styling Examples</h1>
      <VanillaCssCard name="Manish" role="Developer" active />
      <InlineStyleCard name="Raghuwanshi" role="Designer" active={false} />
      <InternalStyleCard name="Alex" role="Manager" active />
      <CssModuleCard name="Sam" role="Engineer" active={false} />
      <StyledComponentCard name="Raj" role="Tester" active dark={dark} />
      <TailwindCard name="Amit" role="DevOps" active={false} dark={dark} />
    </div>
  );
}

export default App;
