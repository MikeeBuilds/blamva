import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {

    const pathname = usePathname()
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
              {navLinks.map((link) => {
                const isActive = link.route === pathname

                return (
                    <li key={link.route} className={`sidebar-nav_element group
                    
                    ${isActive? 'bg-purple-gradient text-white' : 'text-gr'}`}>

                    </li>
                )
              })}
            </ul>
         </SignIn>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar