import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const TypeWriter = () => {
  const [text, count] = useTypewriter({
    words: [
      'Desenvolvedor Front-End',
      'apaixonado por café',
      'Desenvolvedor Back-End',
      'adoro música',
      'Desenvolvedor Full-Stack',
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <h1>
      <span className='my-4 text-2xl font-medium'>Eu sou, {text}</span>
      <Cursor cursorColor='#1b1b1b' cursorStyle='_' />

    </h1>
  )
}

export default TypeWriter