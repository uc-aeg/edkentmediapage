import React from 'react'

const AccordComponent = ({ icon }) => {

    const array = [
        { key: '01', dummyhead: 'Lorem Ipsum is Simply Dummy Text', dummytext: 'Lorem Ipsum is simply dummy text of the printing..' },
        { key: '02', dummyhead: 'Lorem Ipsum is Simply Dummy Text', dummytext: 'Lorem Ipsum is simply dummy text of the printing..' },
        { key: '03', dummyhead: 'Lorem Ipsum is Simply Dummy Text', dummytext: 'Lorem Ipsum is simply dummy text of the printing..' },
        { key: '04', dummyhead: 'Lorem Ipsum is Simply Dummy Text', dummytext: 'Lorem Ipsum is simply dummy text of the printing..' },
        { key: '05', dummyhead: 'Lorem Ipsum is Simply Dummy Text', dummytext: 'Lorem Ipsum is simply dummy text of the printing..' }
    ]

    return (
        <div className="item" >
            <div className="acc-flex">
                <img src={icon} alt="accordion" style={{ marginTop: '-3px', marginLeft: '-9px', width: '24px', height: '24px' }} />
                <p style={{ fontSize: '14px', fontWeight: '600px' }}>Lorem Ipsum is Simply Dummy Text</p>
            </div>
            {array.map(component => {
                return <div key={component.key} className="acc-flex">
                    <p style={{ color: '#b4b1b1', fontSize: '10px' }}>{component.key}</p>
                    <p style={{ color: '#000', fontSize: '10px' }}>{component.dummyhead}
                        <br /><span style={{ color: '#b4b1b1' }}>{component.dummytext}</span>
                    </p>
                </div>
            })}
        </div>
    );
}

export default AccordComponent;