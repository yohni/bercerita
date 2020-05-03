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
      <div className={`fab-outer ${this.props.isShow ? "showed" : "hidden"}`}>
        <div className="fab-header">
          <div className="fab-header-title">
            <div className="fab-header-icon">
              <Pencil width={18} height={18} />
            </div>
            <div><strong>Kolom Curhat</strong></div>
          </div>
          <div>
            <Cross width={18} height={18} color="#ffffff" />
          </div>
        </div>
        <div className="fab-body">
          <div className='fab-writer'>
            <form>
              <input type="text" placeholder="Siapa Namamu?" />
              <textarea placeholder="Curhat Disini ya, Nanti aku baca deh" />
              <input className="send-btn" type="submit" value="Kirim" />
            </form>
          </div>
          <div className="fab-success">

          </div>
        </div>
      </div>
    );
  }
}

export default FloatingButton;
