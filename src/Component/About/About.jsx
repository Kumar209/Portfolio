import React from 'react';
import Card from './Card';
import About_data from './AboutAPI';
import CV from '../pdf/CV.pdf';
import './About.css';
import edu_img from '../pic/edu_img.svg';

const About = () => {
    return (
        <React.Fragment>
            <div className="About" id="about">
                <div className="container top">
                    <div className="heading text-center">
                        <h4>1 YEAR OF EXPERIENCE</h4>
                        <h1>About Myself</h1>
                    </div>

                    <div className="intro d_flex">
                        <div className="about_me left">
                            <p>I am extremely proficient in Front-End Development using HTML, Cascade Style Sheets (CSS3), Bootstrap, Javascript, React.Js And apart from Front-End, I have good knowledge in Back-End using ExpressJS & MongoDB as well as in designing using Figma, and continuously engage in trying to extend my skills with new technology.</p>
                        </div>
                        <div className="resume right">
                            <h3>Any Type Of Query & Discussion</h3>
                            <h4><i class="fa-solid fa-envelope"></i>prashantkumarlmp666@gmail.com</h4>
                            <a href={CV} download="CV.pdf"><button className='btn_shadow resumebtn'><i className="fa-solid fa-download"></i>Download Resume</button></a>
                        </div>
                    </div>

                    <div className="content-section mtop d_flex">
                        <div className="left1">
                            <div className="heading">
                                <h4>2017 - 2024</h4>
                                <h1>Education Quality</h1>
                            </div>

                            <div className="content grid_edu">
                                {About_data.map((val, id) => {
                                    if (val.category === "Education") {
                                        return <Card key={id} year={val.year} title={val.title} desc={val.desc} place={val.place} />
                                    }
                                })}
                            </div>
                        </div>

                        <div className="right1">
                            <div className="right_img">
                                <img src={edu_img} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default About;