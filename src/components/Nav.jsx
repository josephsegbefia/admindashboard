import React from 'react';

// Routing
import { Link } from 'react-router-dom';

const SubNav = ({ routes, parentRoutePath }) => (
    <>
        {
            routes.map((route, index) => (
                <Link key = {index} to={`${parentRoutePath}${route.url}`} className="navbar-item">
                    {route.name}
                </Link>
            ))
        }
    </>
);

const Nav = ({ routes }) => (
    <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
      <div className="navbar-menu">
        <div className="navbar-start">
            {
                routes.map((route, index) => {
                    if(route.subnav) {
                        return (
                            <div key = {index} className="navbar-item has-dropdown is-hoverable">
                                <Link to={route.url} className="navbar-link">
                                    {route.name}
                                </Link>
                                <div className="navbar-dropdown">
                                    <SubNav routes={route.subnav} parentRoutePath={route.url} />
                                </div>
                            </div>
                        );
                    }

                    return (
                        <Link to={route.url} className="navbar-item">
                            {route.name}
                        </Link>
                    );
                })
            }
        </div>

        <div className = "navbar-end">
            <div className = "navbar-item">
                <div className = "buttons">
                    <Link to="/signout" className="button is-light">
                        Sign out
                    </Link>
                </div>
            </div>
        </div>
    </div>
  </nav>
);

export default Nav;
