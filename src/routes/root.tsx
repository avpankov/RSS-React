import React from 'react';
import { Link, Outlet } from 'react-router-dom';

class Root extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className="wrapper">
            <nav>
              <ul className="flex flex-row">
                <li>
                  <Link to="/">Main</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </>
    );
  }
}

export default Root;
