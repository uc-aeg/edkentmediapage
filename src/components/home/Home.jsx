import React, { useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import CardComponent from '../common/CardComponent';
import ChartComponent from '../common/ChartComponent';
import AccordComponent from '../common/AccordComponent';
import img2 from '../../assets/type2.jpg';
import img3 from '../../assets/type3.jpg';
import img4 from '../../assets/type4.jpg';
import acc1 from '../../assets/acc1.jpeg';
import acc2 from '../../assets/acc2.jpeg';
import acc3 from '../../assets/acc3.jpeg';
import 'react-circular-progressbar/dist/styles.css';
import './Home.css';


const Home = () => {
    const [toggle, buttonToggle] = useState(false);
    const [show, setAccordion] = useState(false);
    const percentage = 85, width = 13;
    return (
        <main>
            <div className="main__container">
                {/* Accordion Section */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" onClick={() => setAccordion(!show)}>
                            Lorem Ipsum
                        </button>
                    </h2>
                    {show && <div className="accordion-collapse" aria-labelledby="headingOne">
                        <div className="accordion-body">
                            <AccordComponent icon={acc1} />
                            <AccordComponent icon={acc2} />
                            <AccordComponent icon={acc3} />
                        </div>
                    </div>}
                </div>
                {/* Tab buttons */}
                <div className="main__title">
                    <button className="btn btn-outline-primary mt-10 padding" onClick={() => buttonToggle(!toggle)} disabled={toggle}>Tab 1</button>
                    <button className="btn btn-outline-primary mt-10 padding mr-14" onClick={() => buttonToggle(!toggle)} disabled={!toggle}>Tab 2</button>
                </div>
                <div className="main__cards">
                    <div className="card">
                        <div className="card_inner">
                            <div style={{ width: '58px', height: '58px', marginLeft: '-6px', paddingRight: '12px' }}>
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    strokeWidth={width}
                                    styles={buildStyles({
                                        strokeLinecap: 'butt',
                                        pathColor: '#0d6efd',
                                        textColor: '#000'
                                    })}
                                />
                            </div>
                            <p className="font-bold text-title">50/200
                                <br />
                                <span className="text-black">TYPE1</span>
                            </p>
                        </div>
                    </div>
                    {/* Card Section */}
                    <CardComponent
                        img={img2}
                        num='1356'
                        type='TYPE2'
                        toggle=''
                        alt='card 1'
                    />
                    <CardComponent
                        img={img3}
                        num='1258'
                        type='TYPE3'
                        toggle={toggle}
                        alt='card 2'
                    />
                    <CardComponent
                        img={img4}
                        num='534'
                        type='TYPE4'
                        toggle={toggle}
                        alt='card 3'
                    />
                </div>
                {/* Chart Section */}
                <ChartComponent date='Sept20, 2020 - Jan15, 2020' />
            </div>
        </main>

    );
}

export default Home;