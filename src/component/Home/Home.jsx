import { useState } from 'react'
import '../../assets/style/Home.scss'

function Home() {
  return (
    <section className='home'>
      <div className='my-detail'>
        <div className='my-name'>I'm Max | FTHR</div>
        <div className='my-role'>
          <div>
            <div>FrontEn</div>
            <div>Mobile</div>
          </div>
          <div className='role'>Deverloper</div>
        </div>
        <div className='my-role padding'>UI/UX Design</div>
        <div className='my-text'>Welcome to my playground!</div>
      </div>
      <img src='https://github.com/featherflare/.github/raw/main/portfolio/my.png' />
      <div className='my-contacts'>
        <a
          href='https://www.instagram.com/'
          target='_blank'
          rel='noreferrer'
          className='my-contact-img'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='-4 -4 32 32'
            fill='none'
            stroke='var(--theme-bg-color)'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle
              cx='12'
              cy='12'
              r='16'
              fill='var(--text-color)'
              stroke='none'
            ></circle>
            <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
            <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
            <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
          </svg>
        </a>
        <a
          href='https://github.com/'
          target='_blank'
          rel='noreferrer'
          className='my-contact-img'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='-4 -4 32 32'
            fill='var(--theme-bg-color)'
            stroke='var(--theme-bg-color)'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle
              cx='12'
              cy='12'
              r='16'
              fill='var(--text-color)'
              stroke='none'
            ></circle>
            <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
          </svg>
        </a>
        <a
          href='https://www.linkedin.com/'
          target='_blank'
          rel='noreferrer'
          className='my-contact-img'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='-4 -4 32 32'
            fill='var(--theme-bg-color)'
            stroke='none'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle
              cx='12'
              cy='12'
              r='16'
              fill='var(--text-color)'
              stroke='none'
            ></circle>
            <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
            <rect x='2' y='9' width='4' height='12'></rect>
            <circle cx='4' cy='4' r='2'></circle>
          </svg>
        </a>
        <a href='mailto:your.email@example.com' className='my-contact-img'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='-4 -4 32 32'
            fill='none'
            stroke='var(--theme-bg-color)'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle
              cx='12'
              cy='12'
              r='16'
              fill='var(--text-color)'
              stroke='none'
            ></circle>
            <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
            <polyline points='22,6 12,13 2,6'></polyline>
          </svg>
        </a>
        <a href='tel:+1234567890' className='my-contact-img'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='-4 -4 32 32'
            fill='var(--theme-bg-color)'
            stroke='none'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle
              cx='12'
              cy='12'
              r='16'
              fill='var(--text-color)'
              stroke='none'
            ></circle>
            <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Home
