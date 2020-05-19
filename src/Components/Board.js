import React from "react";
import Complete from "./Complete";
import Entery from "./Entery";
import Progress from "./Progress";
import Todo from "./Todo";

export default class Board extends React.Component {
  render() {
    return (
      <div>
        <Entery></Entery>
        <Todo></Todo>
        <Progress></Progress>
        <Complete></Complete>
      </div>
    );
  }
}
