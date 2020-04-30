import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer id="footer">
          <div className="container">
            <div className="copyright">
              &copy; Copyright <strong><span>Parth Parmar</span></strong>
            </div>
            <div className="credits">            
              All Rights Reserved 
            </div>
          </div>
        </footer>
        <a href="/#" className="back-to-top"><i className="icofont-simple-up"></i></a>
      </React.Fragment>
    );
  }
}

export default Footer;
