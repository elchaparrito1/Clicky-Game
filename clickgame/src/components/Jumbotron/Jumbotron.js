import React from "react";
import "./Jumbotron.css";


class Jumbotron extends React.Component {
    render() {
      return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center">One Click to Rule Them All!</h1>
                <p className="lead text-center">Choose your heros to destroy the one ring, but do not choose the same hero twice!</p>
            </div>
        </div>
      )
    }
  }
  

export default Jumbotron;