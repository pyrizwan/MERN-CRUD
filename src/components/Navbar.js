import React from 'react';
  import { Link } from 'react-router-dom';

  export default class Nav extends React.Component {

    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
      }

      
    render() {    
      return (
        <nav className="Nav">
          <div className="Nav__container">
            <Link to="/" className="Nav__brand">
              <img src="logo.svg" className="Nav__logo" />
            </Link>

            <div className="Nav__right">
              <ul className="Nav__item-wrapper">
                <li className="Nav__item">
                  <Link className="Nav__link" to="/path1">Link 1</Link>
                </li>
                {!localStorage.getItem('jwtToken') &&
               
                <li className="Nav__item">
                  <Link className="Nav__link" to="/login">Login</Link>
                </li>
                 }
                  {!localStorage.getItem('jwtToken') &&
               
                <li className="Nav__item">
                  <Link className="Nav__link" to="/register">Register</Link>
                </li>
                  }
               

                <li className="Nav__item">
                 
                {localStorage.getItem('jwtToken') &&
                <button class="btn btn-primary" onClick={this.logout}>Logout</button>
              }

                </li>

              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }