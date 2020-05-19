import React from "react";

import { connect } from "react-redux";
import Card from "./Card";

class Complete extends React.Component {
  render() {
    return (
      <span
        style={{
          height: "100%",
          width: "25%",
          position: "fixed",
          left: "75%",
          paddingTop: 10,
          paddingLeft: 5,
          paddingRight: 5,
          overflowY: "scroll",
          paddingBottom: 70,
        }}
      >
        <button type="button" class="btn btn-primary btn-lg btn-block">
          COMPLETE
        </button>
        {this.props.state
          .filter((item) => item.status === "complete")
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

export default connect(mapStateToProps, {})(Complete);
