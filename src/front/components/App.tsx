import React from "react";

const App = () => {
  return (
    <button
      onClick={() => {
        // @ts-ignore
        window.electron.openFolder();
      }}
    >
      Open folder
    </button>
  );
};

export default App;
