import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

import "./Breadcrumbs.scss";

const routes = [
  { path: "/", breadcrumb: "Главная" },
  { path: "s", breadcrumb: "Услуги" },
  { path: 's/:userId', breadcrumb: 'Продавец'},
  { path: 's/:userId/:productId', breadcrumb: 'Услуга'},
];

const Breadcrumbs = ({classNames, linkCl}) => {
  const crumbs = useBreadcrumbs(routes);

  return (
    <ul className={`crumbs ${classNames}`}>
      {crumbs.map(crumb => (
        <li className="crumbs__item" key={crumb.match.pathname}>
          <Link className={`${linkCl} crumbs__link link link-accent`} to={crumb.match.pathname}>
            {crumb.breadcrumb}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
