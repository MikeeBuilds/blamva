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


const MobileNav = () => {
  return (
   <header className='header'>
     <Link href="/" className='flex items-center gap-2 md:py'></Link>
   </header>
)
}

export default MobileNav