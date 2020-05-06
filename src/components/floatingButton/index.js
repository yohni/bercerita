import React, { Component } from "react";
import { postStories } from "../../actions";

import { Cross, Pencil, SuccessCircle } from "../icons";

class FloatingButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      writing: true,
      name: '',
      story: ''
    };
  }

  handleClick = () => (
    this.setState({writing: false})
  )

  postStory = (event) => {
    const { name, story } = this.state;
    const { dispatch } = this.props
    if(name && story){
      dispatch(postStories({name: name, story: story}))
      .then(
        this.setState({name:'', story: ''})
      )
    }
  }
    

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
              <input type="text" placeholder="Siapa Namamu?" />
              <textarea placeholder="Curhat Disini ya, Nanti aku baca deh" />
              <input className="send-btn" type="submit" value="Kirim" onClick={this.handleClick} />
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

export default FloatingButton;
