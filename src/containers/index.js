import React, { Component } from "react";
import About from "../assets/images/About.png";
import NatureMan from "../assets/images/NatureMan.png";
import WorkingTable from "../assets/images/WorkingTable.png";

import project1 from "../assets/images/project1.jpg";

import Card from "../components/card";
import JustTag from "../components/justTag";
import { Phone, Pin } from "../components/icons";
import Modal from "../components/modal";
import Slider from "../components/slider";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleModalOpen = () => {
    this.setState({ showModal: true });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <Modal closeModal={this.handleModalClose} isShow={this.state.showModal}>
          <div className="prolog">
            <h2 className="h2 prolog-title">Prolog</h2>
            <p>Hallo temen - temen...<br/>
              Jadi lewat mindyksi ini, <br/>nantinya aku akan bercerita segala sesuatu <br/>mulai dari pekerjaan, pengalaman, dll.
            </p>
            <br />
            <br />
            <span><p>Selamat berbahagia semuanya... ✌</p></span>
          </div>
        </Modal>

        {/* header */}
        <div className="main-header row">
          <div className="col-12 col-md-6">
            <h1 className="header-greet">SELAMAT DATANG KAMU,</h1>
            <div className="header-talk">Bagaimana?</div>
            <div className="header-talk">Udah Berhasil Belum?</div>
            <div className="header-talk">
              Istirahat Dulu, Besok Kita Coba Lagi?
            </div>
            <button onClick={this.handleModalOpen} className="header-prolog">
              PROLOG
            </button>
          </div>
          <div className="col-0 col-md-6">
            <img
              className="header-illustration"
              src={WorkingTable}
              alt="Woking Table Images"
            />
          </div>
        </div>

        {/* about */}
        <div className="about" id="meId">
          <div className="about-banner row">
            <div className="col-12 col-md-6 mb-4 text-center d-flex align-items-center justify-content-center">
              <img src={About} alt="About illustration" />
            </div>
            <div className="col-12 col-md-6 about-detail">
              <h1>Kenalan Dulu Yuk!</h1>
              <div>
                Hallo kenalin, namaku <strong>Yohni</strong>
              </div>
              <div>
                Seorang <strong>Software Engineer</strong>
              </div>
              <br />
              <p>
                Tujuh bulan sudah aku bareng temen” membangun sebuah produk.
                Hampir empat tahun bermain tentang computer science dan
                mendapati forntend masih jadi favorit.
              </p>

              <p>
                Ku pikir semua itu cukup, nyatanya terlalu naif. Tujuh bulan
                empat tahun masihlah kurang. Menuntut ilmu itu tiada henti, tapi
                memberi manfaat dengan ilmu itu kini mulai dicari.{" "}
              </p>
            </div>
          </div>
        </div>

        {/* exp */}
        <div className="exp" id="expId">
          <h1 className="exp-title text-center">Pengalaman</h1>
          {/* <Card src={project1} /> */}
          <Slider sum={6}>
            <Card src={project1} />
            <Card src={project1} />
            <Card src={project1} />
            <Card src={project1} />
            <Card src={project1} />
            <Card src={project1} />
          </Slider>
        </div>

        {/* contact */}
        <div className="contact" id="contactId">
          <img
            className="contact-illustration"
            src={NatureMan}
            alt="Nature Man"
          />
          <h1 className="contact-title">KONTAK</h1>
          <h2 className="contact-sub">Ayo Berteman!</h2>
          <div className="contact-main ml-5 mt-4">
            <JustTag text="Sleman, DIY">
              <Pin />
            </JustTag>
            <JustTag text="+62856-4870-5773">
              <Phone />
            </JustTag>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
