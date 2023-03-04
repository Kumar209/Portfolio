import React, { useState } from 'react';
import photo1 from '../pic/photo1.jpg';
import './Contact.css';

const Contact = () => {
  return (
    <React.Fragment>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>
          <div className="contact_content btn_shadow box d_flex">
            <h2>Stay Connected</h2>
            <h4>prashantkumarlmp666@gmail.com</h4>
            <p>+91 9559717070</p>
            <div className="button mtop">

              <a href="https://twitter.com/KumarP666?t=1YZGgL5bTUQ8nPnsavq9Ew&s=09" target="_blank">
                <buttton className="contact_btn btn_shadow"><i class="fa-brands fa-twitter"></i></buttton>
              </a>

              <a href="https://github.com/Kumar209" target="_blank">
                <buttton className="contact_btn btn_shadow"><i class="fa-brands fa-github"></i></buttton>
              </a>

              <a href="#contact" target="_blank">
                <buttton className="contact_btn btn_shadow"><i class="fa-brands fa-facebook"></i></buttton>
              </a>

              <a href="https://www.linkedin.com/in/prashant-kumar-verma-862793203/" target="_blank">
                <buttton className="contact_btn btn_shadow"><i class="fa-brands fa-linkedin-in"></i></buttton>
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Contact