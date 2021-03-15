import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="bg">
        <div>
          <img
            className="img1"
            src="https://image.shutterstock.com/image-photo/casually-handsome-confident-young-man-600w-439433326.jpg"
            alt="Here is Shams"
          />
        </div>
        <h1>Donel {this.props.class}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default About;
