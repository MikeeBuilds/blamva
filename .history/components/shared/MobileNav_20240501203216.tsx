import React from 'react' 
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'


const MobileNav = () => {
  return (
   <header className='header'>
     <Link href="/" className='flex items-center gap-2 md:py-2'>
        <Image 
        src="/assets/images/logo-text.svg" 
        alt='logo'
        
        />
     </Link>
   </header>
)
}

export default MobileNav