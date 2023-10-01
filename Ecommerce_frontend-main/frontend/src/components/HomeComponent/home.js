import React from "react";
import Scrolling from "./carousel";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div
            className="jumbotron text-center"
            id="box"
            style={{ marginTop: "1rem",padding: "1rem", boxShadow: "10px 10px 5px black" }}
          >
            <h1
              id="header"
              style={{
                textShadow:
                  "1px 1px 2px black, 0 0 25px white, 0 0 5px darkgray",
              }}
            >
              Welcome to Online Grocery Store
            </h1>
            <p>Best Quality Products For Quality Conscious Customers</p>
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <Scrolling />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
