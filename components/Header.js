import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon, 
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'
import HeaderItem from './HeaderItem'

function Header() {
    return (
        <header className="flex-col flex sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl top-7">
                <HeaderItem title="HOME" Icon={HomeIcon}/>
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
                <HeaderItem title="VERFIED" Icon={BadgeCheckIcon}/>
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon}/>
                <HeaderItem title="SEARCH" Icon={SearchIcon}/>
                <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
            </div>
            <Image 
                className="object-contain"    
                src="https://i.ibb.co/GJMwK4F/TMOVI.png" 
                width={100}
                height={50}
            />
        </header>
    )
}

export default Header
