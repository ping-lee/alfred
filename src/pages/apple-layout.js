import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import '../fonts/applelayout.css';

class AppleLayout extends React.Component {
  constructor() {
    super();
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {
    this._handleClick();
  }

  _handleClick() {
    this._acc.classList.toggle('menu-opened');
  }
  render() {
    return (
      <div className="header" ref={a => (this._acc = a)}>
        <div className="burger-container" onClick={this._handleClick}>
          <div id="burger">
            <div className="bar topBar"></div>
            <div className="bar btmBar"></div>
          </div>
        </div>
        <div className="icon icon-apple">
          <FontAwesomeIcon icon={faApple} />
        </div>
        <ul className="menu">
          <li className="menu-item">
            <a href="#">Mac</a>
          </li>
          <li className="menu-item">
            <a href="#">iPad</a>
          </li>
          <li className="menu-item">
            <a href="#">iPhone</a>
          </li>
          <li className="menu-item">
            <a href="#">Watch</a>
          </li>
          <li className="menu-item">
            <a href="#">TV</a>
          </li>
          <li className="menu-item">
            <a href="#">Music</a>
          </li>
          <li className="menu-item">
            <a href="#">Support</a>
          </li>
        </ul>
        <div className="shop icon icon-bag"></div>
      </div>
    );
  }
}

export default AppleLayout;
