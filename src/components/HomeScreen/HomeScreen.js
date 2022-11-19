import React from 'react'
import css from './HomeScreen.module.css';

export const HomeScreen = ({ title }) => {
  return (
    <HomeScreen className={css.HomeScreen}>
      <span>{title}</span>
    </HomeScreen>
  )
}


