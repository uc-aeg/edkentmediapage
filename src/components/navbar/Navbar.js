import React, { useState, useEffect, useRef } from 'react';
import InfoCircle from '../common/InfoCircle';
import NotificationMenuComponent from '../common/NotificationMenuComponent';
import UserDropdownMenu from '../common/UserDropdownMenu';
import "./Navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [openinfomenu, setOpenInfoMenu] = useState(false);
    const [openbellicon, setOpenBellIcon] = useState(false);

    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setOpen(open);
                setOpenInfoMenu(openinfomenu);
                setOpenBellIcon(openbellicon);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    return (
        <nav className="navbar">
            <div className="navbar__right">
                <button className="btn btn-primary">Button1</button>
                <i className="fas fa-info-circle" style={{ fontStyle: "italic" }} onClick={() => setOpenInfoMenu(!openinfomenu)} ref={wrapperRef}></i>
                <InfoCircle show={openinfomenu} />
                <i className="fas fa-bell" onClick={() => setOpenBellIcon(!openbellicon)} ref={wrapperRef}></i>
                <NotificationMenuComponent show={openbellicon} />
                <i className="fas fa-user"></i>
                <span style={{ marginLeft: '-9px' }} className="dropdown-toggle" data-toggle="dropdown" onClick={() => setOpen(!open)} ref={wrapperRef}>Jason Statham<span className="caret"></span></span>
                <UserDropdownMenu open={open} />
            </div>
        </nav>
    );
};

export default Navbar;