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
        <header className="">
            <div>
                <HeaderItem title="HOME" Icon={HomeIcon}/>
                <HeaderItem title="TRENDING'" Icon={LightningBoltIcon}/>
                <HeaderItem title="VERFIED" Icon={BadgeCheckIcon}/>
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon}/>
                <HeaderItem title="SEARCH" Icon={SearchIcon}/>
                <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
            </div>
            <Image 
                className="object-contain"    
                src="https://i.ibb.co/GJMwK4F/TMOVI.png" 
                width={200}
                height={100}
            />
        </header>
    )
}

export default Header
