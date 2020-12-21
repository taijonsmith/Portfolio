import React, { useState, useEffect } from 'react';
import './App.css';
import './custom_components/css/custom_styles.css';
import DesignOne from './custom_components/design_one'


function App() {
  const [mobile_mode, setMobileMode] = useState(window.matchMedia("(max-width: 600px)").matches);
  const [selected, setSelected] = useState(1);

  useEffect((event) => {
    window.matchMedia("(max-width: 600px)").addEventListener("change", () => {
      set_mobile_mode(event)});

    return function cleanup() {
      window.matchMedia("(max-width: 600px)").removeEventListener("change", () => {set_mobile_mode(event)});
    }
  });

  function set_mobile_mode(e) {
    if (e) {
      if (e.matches) {
        // the viewport is 600 pixels wide or less
        setMobileMode(true);
      }
      else {
        setMobileMode(false);
      }
    }
  }

  function edit_class(action, element, class_name) {
    if (element) {
      if (action === "remove" && class_name) {
        let re = new RegExp(`\\b${class_name}\\b`, 'g');
        element.className = element.className.replace(re, "").trim();
      }
      else if (action === "add" && class_name) {
        if (element.className.split(" ").indexOf(class_name) === -1) {
          element.className += " " + class_name;
        }
      }
    }
    return;
  }

  return (
    <div className="App">
      <DesignOne hidden={selected !== 1} mobile_mode={mobile_mode} edit_class={edit_class}/>
    </div>
  );
}

export default App;
