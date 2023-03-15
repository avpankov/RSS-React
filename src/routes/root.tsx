import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

class Root extends React.Component {
  render() {
    return (
      <>
        <header className="h-[60px] flex flex-row items-center justify-center shadow-md">
          <div>
            <nav>
              <ul className="flex flex-row items-center content-center space-x-10 text-sm font-semibold text-slate-800">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? 'underline decoration-brand decoration-2 underline-offset-4 hover:text-brand'
                        : 'hover:text-brand'
                    }
                  >
                    Main
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? 'underline decoration-brand decoration-2 underline-offset-4 hover:text-brand'
                        : 'hover:text-brand'
                    }
                  >
                    About
                  </NavLink>
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
