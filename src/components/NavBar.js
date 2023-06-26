import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {LinkedInIcon, GithubIcon, GmailIcon } from './Icons'

const CustomLink = ({href, title, className=""}) => {
  const router = useRouter();
  console.log(router);
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block bg-dark 
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}
      >&nbsp;</span>
    </Link>
  )
}
const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
            <CustomLink href='/' title="Home" className='mr-4' />
            <CustomLink href='/about' title="Sobre Mim" className='mx-4' />
            <CustomLink href='/projects' title="Projetos" className='mx-4' />
            <CustomLink href='/articles' title="Artigos" className='ml-4' />
        </nav>
        <nav className='flex items-center justify-center flex-wrap'>
            <Link href='/' target={"_blank"}><LinkedInIcon /></Link>
            <Link href='/' target={"_blank"}><GithubIcon /></Link>
            <Link href='/' target={"_blank"}><GmailIcon /></Link>
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
        </div>
        </header>
  )
}

export default NavBar