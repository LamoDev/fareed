import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="flex">
            <div className="logos flex">
                <div className="eqrar-logo flex">
                    <img src="images/eqrarLogo.png" alt="eqrar logo" />
                </div>
                <div className="eqrarCamp-logo flex">
                    <img src="images/eCamp.png" alt="eCamp logo" />
                </div>
            </div>
            <div className="freed-logo flex">
                <img src="images/blackAndpurple.png" alt="Freed logo" />
            </div>

            <div className="nav-bar">
                <ul className="flex">
                    <li><Link to="/timeline">قصتنا</Link></li>
                    <li><Link to="/team">نخبة فريد</Link></li> {/* Updated link */}
                    <li><Link to="/coming-soon">مبادراتنا</Link></li>
                    <li><Link to="/coming-soon">معرض فريد</Link></li>
                    <li><Link to="/coming-soon">للتواصل</Link></li>
                </ul>
            </div>
            <button className="menu-button" onClick={() => setShowMenu(true)}>
                <FontAwesomeIcon icon={faBars} />
            </button>

            {showMenu && (
                <div className="fixed">
                    <ul className="menu-box">
                        <li>
                            <button className="close-icon" onClick={() => setShowMenu(false)}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </li>
                        <li><Link to="/timeline">قصتنا</Link></li>
                        <li><Link to="/team">نخبة فريد</Link></li> {/* Updated link */}
                        <li><Link to="/coming-soon">مبادراتنا</Link></li>
                        <li><Link to="/coming-soon">معرض فريد</Link></li>
                        <li><Link to="/coming-soon">للتواصل</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
}