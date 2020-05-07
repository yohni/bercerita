import React, { Component } from "react";
import { postStories } from "../../actions";
import { connect } from "react-redux";

import { Cross, Pencil, SuccessCircle } from "../icons";

class FloatingButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      writing: true,
      name: "",
      story: ""
    };
  }

  handleClick = () => this.setState({ writing: false });

  postStory = event => {
    event.preventDefault();
    const { name, story } = this.state;
    if (name && story) {
      console.log("Hallo")
      this.props.postYourStory({name: name, story: story})
    }
  };

  render() {
    return (
      <div className={`fab-outer ${!this.props.isActive ? "hide-outer" : ""}`}>
        <div className="fab-header">
          <div className="fab-header-title">
            <div
              className={`fab-header-icon ${
                !this.props.isActive ? "fab-active" : ""
              }`}
              onClick={!this.props.isActive ? this.props.fabActive : null}
            >
              <Pencil width={18} height={18} />
            </div>
            <div>
              <strong>Kolom Curhat</strong>
            </div>
          </div>
          <div className="fab-close" onClick={this.props.fabDeactive}>
            <Cross width={18} height={18} color="#ffffff" />
          </div>
        </div>
        <div className="fab-body">
          <div className={`fab-writer ${this.state.writing ? "active" : ""}`}>
            <form onSubmit={this.postStory}>
              <input
                type="text"
                placeholder="Siapa Namamu?"
                onChange={e => this.setState({ name: e.target.value })}
              />
              <textarea 
                placeholder="Curhat Disini ya, Nanti aku baca deh" 
                onChange={e => this.setState({ story: e.target.value })}
                />
              <input
                className="send-btn"
                type="submit"
                value="Kirim"
                onClick={this.handleClick}
              />
            </form>
          </div>

          <div className={`fab-success ${!this.state.writing ? "active" : ""}`}>
            <div className="fab-success-icon">
              <SuccessCircle width={32} height={32} />
            </div>
            <div>Curhatmu Sudah Terkirim</div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    story: state.story,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    postYourStory: (event) => {
      dispatch(postStories(event));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FloatingButton);
