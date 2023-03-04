import React from 'react';

const Card = (props) => {
    return (
        <React.Fragment>
            <div className='card_content box btn_shadow f_flex'>
                <div className='grad_icon'>
                    <i class="fa-solid fa-graduation-cap"></i>
                </div>
                <div className="edu_content">
                    <div className="title_content d_flex">
                        <div className="title">
                            <span>{props.year}</span>
                            <h2>{props.title}</h2>
                        </div>
                    </div>
                    <p>{props.desc}</p>
                    <p>Studied from {props.place}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Card;