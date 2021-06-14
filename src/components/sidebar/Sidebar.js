import { Link } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <h1>LOGO</h1>
                <i
                    onClick={() => closeSidebar()}
                    className="fa fa-times"
                    id="sidebarIcon"
                    aria-hidden="true"
                ></i>
            </div>

            <div className="sidebar__menu">
                <h2>Heading 1</h2>
                <div className="sidebar__link active_menu_link">
                    <i className="fas fa-bars active_menu_link"></i>
                    <Link to="/">Menu Option 1</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-bars" aria-hidden="true"></i>
                    <Link to="/">Menu Option 2</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-bars" aria-hidden="true"></i>
                    <Link to="/">Menu Option 3</Link>
                </div>
                <h2>Heading 2</h2>
                <div className="sidebar__link">
                    <i className="fas fa-bars" aria-hidden="true"></i>
                    <Link to="/">Menu Option 4</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-bars"></i>
                    <Link to="/">Menu Option 5</Link>
                </div>
                <h2>Heading 3</h2>
                <div className="sidebar__link">
                    <i className="fas fa-bars"></i>
                    <Link to="/">Menu Option 6</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-bars"></i>
                    <Link to="/">Menu Option 7</Link>
                </div>
                <h2>Heading 4</h2>
                <div className="sidebar__link">
                    <i className="fas fa-bars"></i>
                    <Link to="/">Menu Option 8</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fas fa-bars"></i>
                    <Link to="/">Menu Option 9</Link>
                </div>
            </div>
            <div className="sidebar__link" style={{ position: 'absolute', bottom: '-22rem' }}>
                <i className="fas fa-bars"></i>
                <Link to="/">Logout</Link>
            </div>
        </div>
    );
};

export default Sidebar;
