import React from "react";
import { Helmet } from "react-helmet";

const MyPage = ({
  children,
  metaTitle = "MMO",
  metaDescr = "MMO",
  hiddenTitle = 'скрытый заголовок',
  classNames,
}) => {
  return (
    <main className={`${classNames} main`}>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescr} />
      </Helmet>
      <h1 className="title-hidden">{hiddenTitle}</h1>
      {children}
    </main>
  );
};

export default MyPage;
