import React, { useState } from 'react';
import InfoCircle from '../common/InfoCircle';
import NotificationMenuComponent from '../common/NotificationMenuComponent';
import UserDropdownMenu from '../common/UserDropdownMenu';
import "./Navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [openinfomenu, setOpenInfoMenu] = useState(false);
    const [openbellicon, setOpenBellIcon] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    return (
        <nav className="navbar">
            <div className="navbar__right">
                <button className="btn btn-primary">Button1</button>
                <i className="fas fa-info-circle" style={{ fontStyle: "italic" }} onClick={() => setOpenInfoMenu(!openinfomenu)}></i>
                <InfoCircle show={openinfomenu} />
                <i className="fas fa-bell" onClick={() => setOpenBellIcon(!openbellicon)}></i>
                <NotificationMenuComponent show={openbellicon} />
                <i className="fas fa-user"></i>
                <span style={{ marginLeft: '-9px' }} className="dropdown-toggle" data-toggle="dropdown" onClick={() => toggle(!open)}>Jason Statham<span className="caret"></span></span>
                <UserDropdownMenu open={open} />
            </div>
        </nav>
    );
};

export default Navbar;