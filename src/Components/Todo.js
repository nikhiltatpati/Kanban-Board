import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

class Todo extends React.Component {
  render() {
    return (
      <span
        style={{
          height: "100%",
          width: "25%",
          position: "fixed",
          left: "25%",
          paddingTop: 10,
          paddingLeft: 5,
          paddingRight: 5,
          overflowY: "scroll",
          paddingBottom: 70,
        }}
      >
        <button type="button" class="btn btn-primary btn-lg btn-block">
          ToDo
        </button>

        {this.props.state
          .filter((item) => item.status === "todo")
          .map((elem) => (
            <Card content={elem} />
          ))}
      </span>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, {})(Todo);
