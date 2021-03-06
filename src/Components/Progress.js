import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

class Progress extends React.Component {
  render() {
    return (
      <span
        style={{
          height: "100%",
          width: "25%",
          position: "fixed",
          left: "50%",
          paddingTop: 10,
          paddingLeft: 5,
          paddingRight: 5,
          overflowY: "scroll",
          paddingBottom: 70,
        
        }}
      >
         <button type="button" class="btn btn-primary btn-lg btn-block">
          PROGRESS
        </button>
       
        {this.props.state
          .filter((item) => item.status === "progress")
          .map((elem) => (
            <Card content={elem} />
          ))}
      </span>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { state };
};

export default connect(mapStateToProps, {})(Progress);
