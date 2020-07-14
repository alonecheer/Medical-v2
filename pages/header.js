import React from 'react'
import '../public/static/style/main.css'
const Header = () => {
    return(
        <div>
 <header>
        <nav>
          <div className="container">
            <div className="nav-grid">
              <div className="logo">
                <h1>Dictionary</h1>
                <span>Medical terminology</span>
              </div>
              <div className="fr">
                <ul className="menu">
                  <li>
                    <a href="/">SEARCH</a>
                  </li>
                  <div className="dropdown">
                    <li>
                      <a href="#">Category</a>
                    </li>
                    <div className="dropdown-content">
                      <a href="/disease">疾病 หมวดโรค</a>
                      <a href="/medicine">药品 หมวดยา</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>
                  <li>
                      <a href="/conversations">Conversations</a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
        </div>
    )
}
export default Header;