import React from 'react';

const Card = (props) => {
    return (
        <React.Fragment>
            <div className="box btn_shadow">
                <img src={props.image} alt="" />
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </React.Fragment>
    )
}

export default Card;