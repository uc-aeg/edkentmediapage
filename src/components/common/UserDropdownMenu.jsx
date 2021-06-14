import React from 'react'

const UserDropdownMenu = ({ open }) => {
    return (
        <>
            {open && (
                <ul className="dropdown-menu" role="menu">
                    <li className="dropdown-item"><i class="fas fa-heart-broken" style={{ marginRight: '8px' }}></i>Menu 1</li>
                    <li className="dropdown-item"><i class="fas fa-heart-broken" style={{ marginRight: '8px' }}></i>Menu 2</li>
                    <li className="dropdown-item"><i class="fas fa-heart-broken" style={{ marginRight: '8px' }}></i>Menu 3</li>
                    <li className="dropdown-item" style={{ backgroundColor: '#f1f8ff' }}>
                        <div className="progress-bar">
                            <span style={{ color: '#2572fe' }}>Lorem Ipsum</span>
                            <span style={{ fontSize: '10px', color: '#9b9797' }}>(1050/2000)</span>
                        </div>
                        <progress value="65" max="100" style={{ height: '12px', width: '190px', marginTop: '7px' }}></progress>
                    </li>
                    <li className="dropdown-item"><i class="fas fa-sign-out-alt" style={{ marginRight: '8px' }}></i>Logout</li>
                </ul>
            )}
        </>
    );
}

export default UserDropdownMenu;