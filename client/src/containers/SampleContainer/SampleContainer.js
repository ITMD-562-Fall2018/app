import React, { Component } from "react";
import "./SampleContainer.css";

import SampleComponent from "../../components/SampleComponet/SampleComponent";

class SampleContainer extends Component {
  render() {
    return (
      <div className="SampleContainer">
        <h1>I'm a Sample Container</h1>
        <SampleComponent />
      </div>
    );
  }
}

export default SampleContainer;
