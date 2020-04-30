import React, { Component } from "react";
import Header from "./Components/Header";
import Maincontent from "./Components/Maincontent";
import Footer from "./Components/Footer";



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Maincontent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
