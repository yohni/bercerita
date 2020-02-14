import React from "react";
import { SocialGithub, SocialInstagram, SocialLinkedIn, SocialTwitter } from '../icons';

const Footer = props => (
  <footer className="footer-wrapper">
    <div className='container'>
      <div className="footer-social d-flex justify-content-center">
        <a href='https://twitter.com/yohni_finan' target="blank" className='social-icon'>
          <SocialTwitter />
        </a>
        <a href='https://www.instagram.com/achmadyohni/' target="blank" className='social-icon'>
          <SocialInstagram />
        </a>
        <a href='https://github.com/yohni' target='blank' className='social-icon'>
          <SocialGithub />
        </a>
        <a href='https://www.linkedin.com/in/achmad-yohni-wahyu-f-669107131/' target='blank' className='social-icon'>
          <SocialLinkedIn />
        </a>
      </div>
      <div className='text-center mb-4'>&copy; Copyright 2020 Mindyksi &bull; Made with <span className='text-danger'>&hearts;</span> in DIY</div>
    </div>
  </footer>
);

export default Footer;
