import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

class Root extends React.Component<object, { name: string }> {
  constructor(props: { name: string }) {
    super(props);
    this.state = {
      name: 'Main',
    };
  }

  componentDidMount() {
    if (location.pathname === '/') this.setState({ name: 'Main' });
    if (location.pathname === '/about') this.setState({ name: 'About' });
  }

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
                    onClick={() => this.setState({ name: 'Main' })}
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
                    onClick={() => this.setState({ name: 'About' })}
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <h2 className="absolute left-0">Page: {this.state.name}</h2>
        </header>
        <main>
          <Outlet />
        </main>
      </>
    );
  }
}

export default Root;
