import MySection from '@components/_UI/MySection'
import cl from './Head.module.scss'
import MadeIn from '@components/madeIn/MadeIn'
import { Link } from 'react-router-dom'
import Slider from '../slider/Slider'

const Head = () => {
  return (
    <MySection classNames={cl.head} innerCl={cl.inner}>
      <MadeIn />
      <Link className={cl.goBack + ' link link-accent'} to={'/'}>
        <svg
          className="ico-40 stroke"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M25 11L15 20L25 29"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </Link>
      <Slider />
    </MySection>
  )
}

export default Head
