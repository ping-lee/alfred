import React from 'react';
import { rhythm } from '../utils/typography';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import '../fonts/applelayout.css';

class AppleLayout extends React.Component {
  constructor() {
    super();
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {
    //this._handleClick();
  }

  _handleClick() {
    this._acc.classList.toggle('menu-opened');
  }
  render() {
    return (
      <div>
        <div className="header" ref={a => (this._acc = a)}>
          <div className="burger-container" onClick={this._handleClick}>
            <div id="burger">
              <div className="bar topBar"></div>
              <div className="bar btmBar"></div>
            </div>
          </div>
          <div className="icon icon-apple">
            <Link to="/">
              <FontAwesomeIcon icon={faPagelines} />
            </Link>
          </div>
          <ul className="menu">
            <li className="menu-item">
              <Link to="/">Life</Link>
            </li>
            <li className="menu-item">
              <a href="#">Is</a>
            </li>
            <li className="menu-item">
              <a href="#">About</a>
            </li>
            <li className="menu-item">
              <a href="#">Passion</a>
            </li>
          </ul>
          <div className="shop icon icon-bag"></div>
        </div>
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `2.625rem ${rhythm(3 / 4)}`,
            marginTop: '50px',
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default AppleLayout;
