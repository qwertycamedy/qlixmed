
import { Link } from 'react-router-dom';
import './NotFound.scss'

const NotFound = ({
  children,
  classNames,
  innerCl,
  titleNeed = true,
  title,
  titleCl,
  subtitleNeed = true,
  subtitle,
  subtitleCl,
  goBackNeed = false,
  ...props
}) => {
  return (
    <section className={`${classNames} notFound`} {...props}>
      <div className="container">
        <div className={`notFound__inner ${innerCl}`}>
          {titleNeed && <h3 className={`notFound__title ${titleCl}`}>{title}</h3>}
          {subtitleNeed && <p className={`notFound__subtitle ${subtitleCl}`}>{subtitle}</p>}
          {children}
          {goBackNeed && (
            <Link className="notFound__btn btn btn-accent" to={'/'}>
              Вернуться на главную
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default NotFound;
