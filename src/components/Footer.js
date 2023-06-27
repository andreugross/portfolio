import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; Todos os Direitos Reservados.</span>
        <div className='flex items-center'>
          Construído <span className='text-primary text-2xl px-1'>&#9825;</span> por&nbsp; <Link href='/' className='underline underline-offset-2' target={'_blank'}>André Gross</Link>
        </div>
        <Link href='/' target={'_blank'} className='underline underline-offset-2'>Diga Olá</Link>
      </Layout>
    </footer>
  )
}

export default Footer