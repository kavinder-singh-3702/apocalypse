import React from "react"; // Import React at the top of your file

import "./App.css";
import World from "./components/world";
import World_2 from "./components/world_2";
import Timeline from "./components/timeline";

function App() {
  return (
    <div className="website bg-black">
      <World />

      <World_2 />

      {/* <Timeline /> */}

      {/* <Bg /> */}
    </div>
  );
}

export default App;
