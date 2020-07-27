import React, { Component } from "react";
//import Slider from "./dynamic_components/Slider";
import SPA from "./static_component/SPA";

// const style = {
//   container: "container",
//   header: "header",
//   headerSign: "header-sign",
//   main: "main",
//   footer: "caption-container",
// };

class App extends Component {
  render() {
    return (
      <>
        <SPA />
        {/* <Slider /> */}
      </>
    );
  }
}

export default App;
