'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosArrowDown } from 'react-icons/io';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/studio';

  const isActive = (href) => pathname === href;

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('#hero')?.clientHeight || 400;
      const scrollY = window.scrollY;
      setIsSticky(scrollY > heroHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <header
      className={`z-[999] transition-all duration-300 ${isHome ? 'bg-white' : 'bg-black'
        } h-[102px]`}
    >
      <div className='w-[90%] mx-auto flex items-center justify-between py-4'>
        {/* Logo and Hamburger */}
        <div className='w-[100%] md:w-52 h-16 flex items-center justify-between'>
          <Link
            href="/"
            className={`w-52 m-0 p-0 font-bold ${isHome ? 'text-black' : 'text-white'} text-[22px]`}
          >
            KYUBI
          </Link>
          <div
            className="md:hidden cursor-pointer z-[10000]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-5 relative transition-all duration-300 ease-in-out">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full ${isHome ? 'bg-[#888888]' : 'bg-white'
                  } transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 top-2.5' : ''
                  }`}
              />
              <span
                className={`absolute left-0 top-2.5 h-0.5 w-full ${isHome ? 'bg-[#888888]' : 'bg-white'
                  } transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-full ${isHome ? 'bg-[#888888]' : 'bg-white'
                  } transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 bottom-2.5' : ''
                  }`}
              />
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden lg:flex items-center gap-[32px] text-[14px] font-medium ${isHome ? 'text-black' : 'text-[#888888]'
            }`}
        >
          <li>
            <Link
              href="/studio"
              className={`${isActive('/contact')
                  ? isHome
                    ? 'text-black font-bold'
                    : 'text-[#888888] font-bold'
                  : isHome
                    ? 'text-black'
                    : 'text-[#888888]'
                }`}
            >
              Studio
            </Link>
          </li>
          {/* <li>


            <Link
              href="/work"
              className={`${isActive('/work')
                  ? isHome
                    ? 'text-black font-bold'
                    : 'text-[white] font-bold'
                  : isHome
                    ? 'text-black'
                    : 'text-[#888888]'
                }`}
            >
              Work
            </Link>
          </li> */}
          <li>

            <Link
              href="/services"
              className={`${isActive('/services')
                  ? isHome
                    ? 'text-black font-bold'
                    : 'text-[white] font-bold'
                  : isHome
                    ? 'text-black'
                    : 'text-[#888888]'
                }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/clients"
              className={`${isActive('/clients')
                  ? isHome
                    ? 'text-black font-bold'
                    : 'text-[white] font-bold'
                  : isHome
                    ? 'text-black'
                    : 'text-[#888888]'
                }`}
            >
              clients
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${isActive('/contact')
                  ? isHome
                    ? 'text-black font-bold'
                    : 'text-[white] font-bold'
                  : isHome
                    ? 'text-black'
                    : 'text-[#888888]'
                }`}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[9999] shadow-lg bg-black h-[100%] transform transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className='flex justify-between items-center px-5 py-4 z-[999]'>
          <Link href="/" className='w-52 m-0 p-0 font-bold text-white text-[22px]'>
            KYUBI
          </Link>
        </div>

        <div className='h-[83%] overflow-auto px-5 pb-10'>
          <ul className='flex flex-col gap-4 text-lg font-semibold'>
            {/* Primary Links */}
            <li><Link href="/" onClick={() => setMobileMenuOpen(false)} className={`${isActive('/') ? 'text-white' : 'text-[#888888]'}`}>Studio</Link></li>
            {/* <li><Link href="/about-us" onClick={() => setMobileMenuOpen(false)} className={`${isActive('/about-us') ? 'text-white' : 'text-[#888888]'}`}>Work</Link></li> */}
            <li><Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className={`${isActive('/portfolio') ? 'text-white' : 'text-[#888888]'}`}>Services</Link></li>
            <li><Link href="/our-team" onClick={() => setMobileMenuOpen(false)} className={`${isActive('/our-team') ? 'text-white' : 'text-[#888888]'}`}>Clients</Link></li>
            <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={`${isActive('/contact') ? 'text-white' : 'text-[#888888]'}`}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
