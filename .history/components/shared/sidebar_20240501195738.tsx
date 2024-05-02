import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='fle size-full flex-col gap-4'>
        <Link className='sidebar-logo'></Link>
      </div>
    </aside>
  )
}

export default Sidebar