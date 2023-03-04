import React, { useState } from 'react';

const Card = (props) => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <React.Fragment>
            <div className="box btn_shadow">
                <div className="img">
                    <img src={props.image} alt="" onClick={toggleModal} />
                </div>

                <div className="category d_flex">
                    <span onClick={toggleModal} >{props.category}</span>
                    <label>
                        <i className="fa-solid fa-heart"></i>
                    </label>
                </div>

                <div className="title">
                    <h2 onClick={toggleModal} >{props.title}</h2>
                    <a href="#popup" className="arrow" onClick={toggleModal}><i className="fas fa-arrow-right"></i></a>
                </div>
            </div>

            {/*------------------------ Popup Modal ----------------------*/}
            {modal && (
                <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-content d_flex">
                        <div className="modal-img left">
                            <img src={props.image} alt="project-img" />
                        </div>

                        <div className="modal-text right">
                            <span>Featured - {props.featured} </span>
                            <h1>{props.title}</h1>
                            <p> {props.desc1} </p>
                            <p> {props.desc2} </p>

                            <div className="button f_flex mtop">
                                <a href={props.live_website} target="_blank">
                                    <button className="btn_shadow">
                                        VISIT WEBSITE <i className="fas fa-chevron-right"></i>
                                    </button>
                                </a>

                                <a href={props.githublink} target="_blank">
                                    <button className="btn_shadow">
                                        VIEW PROJECT <i className="fas fa-chevron-right"></i>
                                    </button></a>
                            </div>

                            <button className="close-modal btn_shadow" onClick={toggleModal}><i className="fas fa-times"></i></button>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}

export default Card;