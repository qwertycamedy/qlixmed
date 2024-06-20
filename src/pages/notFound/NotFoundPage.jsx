import MyPage from "@components/_UI/MyPage";
import NotFound from "@components/_UI/notFound/NotFound";
import React from "react";

import '@components/_UI/notFound/NotFound.scss'

const NotFoundPage = () => {
  return (
    <MyPage
      hiddenTitle="404"
      metaTitle="Страница не найдена"
      metaDescr="Такой страницы не существует на Biotech.kz"
    >
      <NotFound>
        <h3 className="notFound__title">404</h3>
        <p className="notFound__subtitle">
          Кажется что-то пошло не так! <br/> Страница, которую вы запрашиваете, не
          существует. Возможно она устарела, была удалена, или был введен
          неверный адрес в адресной строке.
        </p>
      </NotFound>
    </MyPage>
  );
};

export default NotFoundPage;
