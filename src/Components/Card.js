import React from "react";
import { connect } from "react-redux";
import { deleteCard } from "../Action/deleteCard";
import { addCard } from "../Action/addCard";

class Card extends React.Component {
  constructor() {
    super();
    this.delete = this.delete.bind(this);
    this.select = this.select.bind(this);
  }
  delete() {
    this.props.deleteCard(this.props.content.id);
  }

  select() {
    this.props.deleteCard(this.props.content.id);
    if (this.props.content.status === "todo") {
      var stat = "progress";
    }
    if (this.props.content.status === "progress") {
      var stat = "complete";
    }

    this.props.addCard({
      id: this.props.content.id,
      title: this.props.content.title,
      desc: this.props.content.desc,
      status: stat,
    });
  }

  render() {
    return (
      <div class="Card">
        <h5 class="card-title">{this.props.content.title}</h5>
        <p class="card-text">{this.props.content.desc}</p>
        <div>
          <span>
            <button class="btn btn-primary" onClick={this.select}>
              Select
            </button>
          </span>
          <span style={{ width: "30%" }}>
            <button class="btn btn-success" onClick={this.delete}>
              Delete
            </button>
          </span>
        </div>
      </div>

      /* <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a>
        </div> */
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, { deleteCard, addCard })(Card);
