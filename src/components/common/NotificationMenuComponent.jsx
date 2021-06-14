import React from 'react';

const NotificationMenuComponent = ({ show }) => {
    return (
        <>
            { show && (
                <ul className="dropdown-menu" role="menu" style={{ right: '105px', width: '18rem' }}>
                    <li className="dropdown-item">
                        <div className="acc-flex" style={{ marginBottom: '0' }}>
                            <i class="fas fa-file-archive" style={{ marginRight: '8px' }}></i>
                            <p style={{ color: '#b4b1b1', fontSize: '11px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry<br />5 Dec 2020</p>
                        </div>
                    </li>
                    <li className="dropdown-item">
                        <div className="acc-flex" style={{ marginBottom: '0' }}>
                            <i class="fas fa-file-archive" style={{ marginRight: '8px' }}></i>
                            <p style={{ color: '#b4b1b1', fontSize: '11px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry<br />5 Dec 2020</p>
                        </div>
                    </li>
                    <li className="dropdown-item">
                        <div className="acc-flex" style={{ marginBottom: '0' }}>
                            <i class="fas fa-file-archive" style={{ marginRight: '8px' }}></i>
                            <p style={{ color: '#b4b1b1', fontSize: '11px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry<br />5 Dec 2020</p>
                        </div>
                    </li>
                </ul>
            )}
        </>
    );
}

export default NotificationMenuComponent;