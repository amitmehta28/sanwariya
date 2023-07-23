import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '/public/images/Logo.png'
import searchIcon from '/public/icons/search.svg'

const Header = () => {

    const [sideBar, setSideBar] = useState(false);
    const [searchBar, setSearchBar] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [isShown, setIsShown] = useState(0);
    const [text, setText] = useState('All Product');
    
    const [data, setData] = useState([]);

    const [serchedData, setSerchedData] = useState();
    return (
        <>
            <header className="py-8 ">
                <div className='container'>
                    <div className='flex justify-between bg-white items-center'>
                        <Image src={logo} width={276} height={40} alt='logo' />
                        <nav>
                            <ul className='flex gap-6'>
                                <li><Link href="/" className='nav-info hover:text-primary hover:border-b-2 border-primary'>HOME</Link> </li>
                                <li className='nav-info hover:text-primary flex gap-2 items-center'>
                                    <p>ABOUT US</p>
                                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L4.93934 4.93934C5.52513 5.52513 6.47517 5.52483 7.06095 4.93905C8.4141 3.5859 9.42961 2.57039 11 1" stroke="#110833" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                </li>
                                <li className='nav-info hover:text-primary flex gap-2 items-center'>
                                    <p>PRODUCTS</p>
                                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L4.93934 4.93934C5.52513 5.52513 6.47517 5.52483 7.06095 4.93905C8.4141 3.5859 9.42961 2.57039 11 1" stroke="#110833" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                </li>
                                <li><Link href="/" className='nav-info hover:text-primary'>CONTACT US</Link> </li>
                            </ul>
                        </nav>
                        <div className={`relative transition-300 `}>
                                <Image src={searchIcon} width={18} height={18} alt="Search Icon" className='cursor-pointer' onClick={() => { setSearchBar(true) }} />

                              
                            </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header