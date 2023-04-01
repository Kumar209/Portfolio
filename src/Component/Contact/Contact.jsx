import React, { useState } from "react"
import contact1 from "../pic/contact1.png"
import "./Contact.css"

const Contact = () => {
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shadow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Prashant Kumar Verma</h1>
                  {/* <p>Chief Operating Officer</p> */}
                  <p>I am available for freelance work. Connect with me via and call in to my account.</p> <br />
                  <p>Phone: +91 9559717070</p>
                  <p>Email: prashantkumarlmp666@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                  <a href="https://github.com/Kumar209" target="_blank">
                    <button className='btn_shadaw'>
                      <i className='fa-brands fa-github'></i>
                    </button>
                  </a>

                    <button className='btn_shadaw'>
                      <i className='fab fa-instagram'></i>
                    </button>

                    <a href="https://twitter.com/KumarP666?t=1YZGgL5bTUQ8nPnsavq9Ew&s=09" target="_blank">
                    <button className='btn_shadaw'>
                      <i className='fab fa-twitter'></i>
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shadow'>
              <form action="https://formsubmit.co/4e2e667fc27396a444d5aba7421c0bac" method="POST">
                {/* Honeypot */}
                {/* <input type="text" name="_honey" style="display:none" /> */}

                {/* Disable Captcha */}
                 <input type="hidden" name="_captcha" value="false" /> 

                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='Fullname'/>
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='Phone' />
                  </div>
                </div>

                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='Email'/>
                </div>

                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='Subject'/>
                </div>

                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='Message'></textarea>
                </div>

                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
