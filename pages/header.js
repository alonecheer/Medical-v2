import React from "react";
import "../public/static/style/main.css";
const Header = () => {
  return (
    <header>
      <title>Header</title>
      <div className="container">
        <div className="nav-gid">
          <div className="name-web">
            <a href="/">
              <div className="link">
                <h1>Dictionary</h1>
                <span>Medical terminology</span>
              </div>
            </a>
          </div>
          <div className="fr">
            <ul className="menu">
              <div className="dropdown">
                <li>
                  <a href="#">Category</a>
                </li>
                <div className="dropdown-content">
                  <a href="/disease">疾病 โรค</a>
                  <a href="/medicine">药品 ยา</a>
                </div>
              </div>
              <li>
                <a href="#">Conversations</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
