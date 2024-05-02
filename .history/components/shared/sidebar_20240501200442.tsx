import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='fle size-full flex-col gap-4'>
        <Link href="/" className='sidebar-logo'>
            <Image 
            src="/assets/images/logo-text.svg" 
            alt='logo'
            width={180}
            height={28}
            />
        </Link>

        <nav className='sidebar-nav'>
         <SignIn>
            <ul className='sidebar-nav_elements'>
              {navLinks.map((link) => (
                <li key={link.name} className='sidebar-nav_element'>
                  <Link href={link.href} passHref>
                    <a className='sidebar-nav_link'>
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
         </SignIn>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar