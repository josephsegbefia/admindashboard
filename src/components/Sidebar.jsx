/* eslint-disable no-unused-vars */
import React from "react";

import { NavLink, useLocation } from "react-router-dom";

import routes from "../routes";


const Sidebar = () => {
  const location = useLocation();
  const areaRoute = routes.find(route => route.url === `/${location.pathname.split('/')[1]}`);
  return (
    <aside className = "menu">
      <p className = "menu-label">
        {areaRoute && areaRoute.name}
      </p>
      <ul className = "menu-list">
        {
          areaRoute &&
          areaRoute.subnav &&
          areaRoute.subnav.map(route => (
            <li>
              <NavLink to = {`${areaRoute.url}${route.url}`} activeClassName = "is-active">
                {route.name}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}

export default Sidebar
