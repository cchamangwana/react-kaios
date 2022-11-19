import React from 'react'
import css from './WelcomeNote.module.css';

export const WelcomeNote = ({ title }) => {
  return (
    <welcomeNote className={css.welcomeNote}>
      <span>{title}</span>
    </welcomeNote>
  )
}


