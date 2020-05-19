import React from "react";
import logo from "../logo192.png";
import { connect } from "react-redux";
import { addCard } from "../Action/addCard";
import nextId from "react-id-generator";

class Entery extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    id: "",
    title: "",
    desc: "",
    status: "todo",
  };

  handleChange(event) {
    event.preventDefault();
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ id: nextId(), [nam]: val });
  }

  handleSubmit() {
    this.props.addCard(this.state);
  }

  render() {
    return (
      <span
        style={{
          height: "100%",
          width: "25%",
          position: "fixed",
          left: "0%",
          paddingTop: 10,
          paddingLeft: 5,
          paddingRight: 5,
          overflowY: "scroll",
          paddingBottom: 70,
        }}
      >
        <div className="card">
          {/* <img src={logo} className="card-img-top" /> */}
          <div className="card-body">
            <h5 className="card-title">Create Kanban Cards</h5>
            <p className="card-text"></p>
          </div>
        </div>
        <div>
          <div className="input-group mb-3">
            <input
              name="title"
              type="text"
              onChange={this.handleChange}
              className="form-control"
              placeholder="Card Title"
            />
          </div>
        </div>
        <div>
          <div className="input-group">
            <textarea
              name="desc"
              onChange={this.handleChange}
              className="form-control"
              placeholder="Card Description"
            ></textarea>
          </div>
        </div>
        <div>
          <button
            onClick={this.handleSubmit}
            className="btn btn-primary btn-lg btn-block"
            style={{ margin: 5 }}
          >
            Create a kanban Card
          </button>
        </div>
      </span>
    );
  }
}

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, { addCard })(Entery);
