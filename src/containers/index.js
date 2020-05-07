import React, { Component } from "react";
import LazyLoad from "react-lazy-load";
import { connect } from "react-redux";
import { getAllWorks } from "../actions";

import About from "../assets/images/About.png";
import NatureMan from "../assets/images/NatureMan.png";
import WorkingTable from "../assets/images/WorkingTable.png";

import Card from "../components/card";
import FloatingButton from "../components/floatingButton";
import JustTag from "../components/justTag";
import { Envelope, Phone, Pin } from "../components/icons";
import Modal from "../components/modal";
import Slider from "../components/slider";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showFAB: false
    };
  }

  componentDidMount() {
    this.props.getWorksList();
  }

  handleModalOpen = () => {
    this.setState({ showModal: true });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  handleFABOpen = () => {
    this.setState({ showFAB: true });
  };

  handleFABClose = () => {
    this.setState({ showFAB: false });
  };

  render() {
    const isShow = this.props.works.length > 0 ? true : false;
    let worksList = [];

    if (isShow) {
      worksList = this.props.works;
    }
    return (
      <div>
        <Modal closeModal={this.handleModalClose} isShow={this.state.showModal}>
          <div className="prolog">
            <h2 className="h2 prolog-title">Prolog</h2>
            <p>
              Hallo temen - temen...
              <br />
              Jadi lewat mindyksi ini, <br />
              nantinya aku akan bercerita segala sesuatu <br />
              mulai dari pekerjaan, pengalaman, dll.
            </p>
            <br />
            <br />
            <p>
              Selamat berbahagia semuanya...{" "}
              <span>
                <input
                  style={{ border: "none", background: "none" }}
                  value="😘"
                  disabled
                />
              </span>
            </p>
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
            <LazyLoad width="100%">
              <img
                className="header-illustration"
                src={WorkingTable}
                alt="Woking Table Images"
              />
            </LazyLoad>
          </div>
        </div>

        {/* about */}
        <div className="about" id="meId">
          <div className="about-banner row">
            <div className="col-12 col-md-6 mb-4 text-center d-flex align-items-center justify-content-center">
              <LazyLoad width="100%">
                <img src={About} alt="About illustration" />
              </LazyLoad>
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
          <h1 className="exp-title text-center">Corat - coret</h1>
          {/* <Card src={project1} /> */}
          <Slider sum={this.props.works.length}>
            {worksList.map((item, index) => {
              return (
                <Card
                  key={index}
                  src={item.image}
                  base={item.base}
                  name={item.name}
                  year={item.year}
                  team={item.team}
                  detail={item.detail}
                ></Card>
              );
            })}
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
            <JustTag text="yohni.123@gmail.com">
              <Envelope />
            </JustTag>
          </div>
        </div>
        <FloatingButton
          isActive={this.state.showFAB}
          fabActive={this.handleFABOpen}
          fabDeactive={this.handleFABClose}
        ></FloatingButton>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    works: state.works,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getWorksList: () => {
      dispatch(getAllWorks());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
