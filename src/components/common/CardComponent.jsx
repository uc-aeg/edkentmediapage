import React from 'react';

const CardComponent = ({ img, num, type, toggle }) => {
    const classes = () => {
        let display = 'card ';
        display += toggle ? 'd-none' : 'd-flex';
        return display;
    }
    return (
        <div className={classes()}>
            <div className="card_inner">
                <div style={{ marginLeft: '-6px', marginRight: '17px' }} >
                    <img src={img} alt="card image" style={{ width: '55px', height: '55px' }} />
                </div>
                <p className="font-bold text-title">{num}
                    <br />
                    <span className="text-black">{type}</span>
                </p>
            </div>
        </div>
    );
}

export default CardComponent;