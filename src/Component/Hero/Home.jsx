import React from 'react';
import './Home.css';
import photo1 from '../pic/photo1.jpg';
import hero from '../pic/hero.png';


import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
    return (
        <React.Fragment>
            <section className="hero" id="home">
                <div className="container f_flex top">
                    <div className="left top">
                        <h3>WELCOME TO MY WORLD</h3>
                        <h1>Hi, I'm <span>Prashant Kumar Verma</span></h1>
                        <h2>a <span>
                            <Typewriter
                                words={['Frontend Developer', 'Backend Developer', 'Full Stack Web Developer', 'Coder']}
                                loop={50}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000} />
                        </span></h2>

                        <p>I'm a full stack web developer based in India. I am highly-proficient in MERN stack and looking for opportunities to learn and build. So...lets's connect! and start building!</p>

                        <div className="hero_btn d_flex">
                            <div className="col_1">
                                <h4>FIND ME ON</h4>
                                <div className="button">
                                    <a href="https://github.com/Kumar209" target="_blank">
                                        <button className='btn_shadow'>
                                            <i class="fa-brands fa-github"></i>
                                        </button>
                                    </a>

                                    <a href="https://twitter.com/KumarP666?t=1YZGgL5bTUQ8nPnsavq9Ew&s=09" target="_blank">
                                        <button className='btn_shadow'>
                                            <i class="fa-brands fa-twitter"></i>
                                        </button>
                                    </a>

                                    <a href="https://www.linkedin.com/in/prashant-kumar-verma-862793203/" target="_blank">
                                        <button className='btn_shadow'>
                                            <i class="fa-brands fa-linkedin-in"></i>
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <div className="col_1">
                                <h4>MESSAGE ME</h4>

                                <a href="#contact">
                                    <button className="btn_shadow btn_mine">
                                        CONTACT ME
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="right_img">
                            <img src={photo1} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home;