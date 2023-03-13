import React from 'react';
import { Link, Outlet } from 'react-router-dom';

class Root extends React.Component {
  render() {
    return (
      <>
        <header className="h-[60px] flex flex-row items-center justify-center shadow-md">
          <div className="wrapper">
            <nav>
              <ul className="flex flex-row items-center content-center space-x-10 text-sm font-semibold text-slate-800">
                <li>
                  <Link
                    to="/"
                    className="underline decoration-brand decoration-2 underline-offset-4 hover:text-brand"
                  >
                    Main
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-brand">
                    About
                  </Link>
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
