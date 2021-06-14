import React from 'react'

const InfoCircle = ({ show }) => {
    return (
        <>
            { show && (
                <ul className="dropdown-menu" role="menu" style={{ right: '167px', }}>
                    <li className="dropdown-item"><i class="fas fa-file-archive" style={{ marginRight: '8px' }}></i>Menu Option 1</li>
                    <li className="dropdown-item" style={{ border: 'none' }}><i class="fas fa-file-archive" style={{ marginRight: '8px' }}></i>Menu Option 2</li>
                    <p style={{ backgroundColor: 'white', color: '#0d6efd', padding: '0px 14px', fontSize: '11px', fontWeight: '600' }}>RESOURCES</p>
                    <li className="dropdown-item"><i class="fas fa-file-archive" style={{ marginRight: '8px' }}></i>Menu Option 3</li>
                    <li className="dropdown-item"><i class="fas fa-file-archive" style={{ marginRight: '8px' }}></i>Menu Option 4</li>
                </ul>
            )}
        </>
    );
}

export default InfoCircle;