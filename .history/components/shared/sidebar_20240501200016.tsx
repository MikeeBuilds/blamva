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
            width={18}
            height={}
            />
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar