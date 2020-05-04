import React, { Component } from "react";
import { Cross, Pencil } from "../icons";

class FloatingButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "open"
    };
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
              onClick={!this.props.isActive? this.props.fabActive: null}
            >
              <Pencil width={18} height={18} />
            </div>
            <div>
              <strong>Kolom Curhat</strong>
            </div>
          </div>
          <div onClick={this.props.fabDeactive}>
            <Cross width={18} height={18} color="#ffffff" />
          </div>
        </div>
        <div className="fab-body">
          <div className="fab-writer">
            <form>
              <input type="text" placeholder="Siapa Namamu?" />
              <textarea placeholder="Curhat Disini ya, Nanti aku baca deh" />
              <input className="send-btn" type="submit" value="Kirim" />
            </form>
          </div>
          <div className="fab-success"></div>
        </div>
      </div>
    );
  }
}

export default FloatingButton;
