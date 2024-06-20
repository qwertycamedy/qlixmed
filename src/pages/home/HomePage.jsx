import React from 'react'

import Hero from './hero/Hero'
import MyPage from '@components/_UI/MyPage'

import cl from './HomePage.module.scss'

const HomePage = () => {
  return (
    <MyPage classNames={cl.home} hiddenTitle={'Qlix'} metaTitle='Главная Qlix.kz' metaDescr='главная страница Qlix.kz'>
      <Hero />
    </MyPage>
  )
}

export default HomePage
