import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";

function App() {
  return (
    /* Parent of full width and height
    Divided into 2 panels
    Left Panel has Navigation, header, Resume Data Sections
    Right Panel has Rendered Resume and Resume Template Modifier */
    <div className="w-screen h-screen flex">
      {/* Left side of screen for the navigation and data entry */}
      <div className="flex-none w-1/2">
        <LeftPanel />
      </div>
      {/* Right side of screen for showing the rendered resume and template selection */}
      <div className="flex-none w-1/2">
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
