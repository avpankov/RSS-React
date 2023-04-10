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
    switch (location.pathname) {
      case '/':
        this.setState({ name: 'Main' });
        break;
      case '/about':
        this.setState({ name: 'About' });
        break;
      case '/form':
        this.setState({ name: 'Form' });
        break;
      default:
        this.setState({ name: '404' });
    }
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
                <li>
                  <NavLink
                    to="/form"
                    className={({ isActive }) =>
                      isActive
                        ? 'underline decoration-brand decoration-2 underline-offset-4 hover:text-brand'
                        : 'hover:text-brand'
                    }
                    onClick={() => this.setState({ name: 'Form' })}
                  >
                    Form
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <span className="absolute left-2 before:block before:absolute before:-inset-x-2 before:-inset-1 before:-skew-y-6 before:bg-brand inline-block">
            <span className="relative text-white font-semibold">{this.state.name}</span>,
          </span>
        </header>
        <main>
          <Outlet />
        </main>
      </>
    );
  }
}

export default Root;
