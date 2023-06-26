import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/'>Sobre Mim</Link>
            <Link href='/'>Projetos</Link>
            <Link href='/'>Artigos</Link>
        </nav>
        <h2>Logo</h2>
        <nav>
            <Link href='/' target={"_blank"}>L</Link>
            <Link href='/' target={"_blank"}>G</Link>
            <Link href='/' target={"_blank"}>E</Link>
        </nav>
        </header>
  )
}

export default NavBar