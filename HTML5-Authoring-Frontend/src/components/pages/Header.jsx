import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation
import PropTypes from 'prop-types';
import '../pages/Header.css';

const Header = ({ username }) => {
  return (
    <div className="header">
      <Link to="/" className="home-link">
        <FontAwesomeIcon icon={faHome} className="home-icon" />
      </Link>
      {username && (
        <div className="user-info">
          <FontAwesomeIcon icon={faUser} className="user-icon" />
          <span className="username">{username}</span>
        </div>
      )}
    </div>
  );
};
Header.propTypes = {
    username: PropTypes.string
}
export default Header;
