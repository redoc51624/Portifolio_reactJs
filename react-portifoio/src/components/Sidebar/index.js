import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import {Link, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome,faUser} from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faLinkedin, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';

const Sidebar =()=> (
    <div className='nav-bar'>
        <Link className="logo" to='/'>
            <img src={LogoS} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="logo subtitle"/>
        </Link>
    <nav>
        <NavLink exact="true" activeclassName="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d44d4e"/>
        </NavLink>
        <NavLink exact="true" activeclassName="active"  className= "about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d44d4e"/>
        </NavLink>
        <NavLink exact="true" activeclassName="active" className= "contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d44d4e"/>
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target="_blank" rel='noreferrer' href="www.linkedin.com">
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href="www.github.com">
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href="www.linkedin.com">
                <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href="www.skype.com">
                <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
            </a>
        </li>
    </ul>
    </div>
)


export default Sidebar;