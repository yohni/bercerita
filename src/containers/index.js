import React, { Component } from 'react';
import WorkingTable from '../assets/images/WorkingTable.png';
import About from '../assets/images/About.png';
import project1 from '../assets/images/project1.jpg';

import Card from '../components/card';
import Slider from '../components/slider';

class Main extends Component {
  render() {
    return (
      <div>
        {/* header */}
        <div className='main-header row'>
          <div className='col-12 col-md-6'>
            <h1 className='header-greet'>SELAMAT DATANG KAMU,</h1>
            <div className='header-talk'>Bagaimana?</div>
            <div className='header-talk'>Udah Berhasil Belum?</div>
            <div className='header-talk'>Istirahat Dulu, Besok Kita Coba Lagi?</div>
            <button className='header-prolog'>PROLOG</button>
          </div>
          <div className='col-0 col-md-6'>
            <img className='header-illustration' src={WorkingTable} alt="Woking Table Images"/>
          </div>
        </div>
        
        {/* about */}
        <div className='about'>
          <div className='about-banner row'>
            <div className='col-12 col-md-6 mb-4 text-center d-flex align-items-center justify-content-center'>
              <img src={About} alt="About illustration" />
            </div>
            <div className='col-12 col-md-6 about-detail'>
              <h1>Kenalan Dulu Yuk!</h1>
              <div>Hallo kenalin, namaku <strong>Yohni</strong></div>
              <div>Seorang <strong>Software Engineer</strong></div>
              <br />
              <p>Tujuh bulan sudah aku bareng temen” membangun sebuah produk. Hampir empat tahun bermain tentang computer science dan mendapati forntend masih jadi favorit.</p>

              <p>Ku pikir semua itu cukup, nyatanya terlalu naif. Tujuh bulan empat tahun masihlah kurang. Menuntut ilmu itu tiada henti, tapi memberi manfaat dengan ilmu itu kini mulai dicari. </p>
            </div>
          </div>
        </div>

        {/* exp */}
        <div className='exp'>
          <h1 className='exp-title text-center'>Pengalaman</h1>
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
      </div>
    );
  }
}

export default Main;