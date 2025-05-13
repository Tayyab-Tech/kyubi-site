
'use client'
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';


function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const toggleSubMenu = (menu) => {
    setActiveSubMenu((prev) => (prev === menu ? null : menu));
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('#hero')?.clientHeight || 400; // fallback if not found
      const scrollY = window.scrollY;

      if (scrollY > heroHeight / 2) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <header className={`z-[999] transition-all duration-300  bg-black`}>
      <div className='w-[90%] mx-auto flex items-center justify-between py-4'>
        {/* Logo */}
        <div className='w-[100%] md:w-52 h-16 flex items-center justify-between '>
          <Link href="/" className='w-52 m-0 p-0 font-bold text-white'>
            KYUBI
          </Link>
          {/* Menu Button */}
          <div className="md:hidden cursor-pointer z-[10000]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className="w-6 h-5 relative transition-all duration-300 ease-in-out">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full bg-[#1F195E] transition-transform duration-300 ease-in-out ${
                  mobileMenuOpen ? 'rotate-45 top-2.5' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 h-0.5 w-full bg-[#1F195E] transition-opacity duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-full bg-[#1F195E] transition-transform duration-300 ease-in-out ${
                  mobileMenuOpen ? '-rotate-45 bottom-2.5' : ''
                }`}
              />
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden lg:flex items-center gap-10 text-[16px] font-medium'>
          <li><Link href="/" className='text-[#1F195E] hover:text-[#9C4C9A] font-bold'>Home</Link></li>

          {/* Company Dropdown */}
          <li className='relative group text-[#1F195E]  flex items-center gap-1 cursor-pointer font-bold'>
            Company <IoIosArrowDown />
            <ul className='absolute top-full left-0 w-48 bg-white font-normal rounded-md p-4 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200'
              style={{ boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.1), -4px 0 8px rgba(0, 0, 0, 0.1), 4px 0 8px rgba(0, 0, 0, 0.1)' }}>
              <li className='hover:text-[#9C4C9A] text-[#1F195E] mt-3'><Link href="/about-us">About Us</Link></li>
              <li className='hover:text-[#9C4C9A] text-[#1F195E]  mt-3'><Link href="/portfolio">Portfolio</Link></li>
              <li className='hover:text-[#9C4C9A] text-[#1F195E]  mt-3'><Link href="/our-team">Team</Link></li>
            </ul>
          </li>

          {/* Services Dropdown */}
          <li className='relative group text-[#1F195E]  flex items-center gap-1 cursor-pointer font-bold'>
            Services <IoIosArrowDown />
            <ul className='absolute top-full left-0 w-56 bg-white font-normal rounded-md p-4 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200'
               style={{ boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.1), -4px 0 8px rgba(0, 0, 0, 0.1), 4px 0 8px rgba(0, 0, 0, 0.1)' }}>
              <li className='hover:text-[#9C4C9A] text-[#1F195E] '><Link href="/services">All Services</Link></li>
              {/* <li className='hover:text-[#9C4C9A] text-[#1F195E]  py-2'><Link href={`/services/Software-Development`}>Software Development</Link></li> */}
              {/* Software Development */}
              <li className='relative group/item my-2'>
                <div className='flex items-center justify-between cursor-pointer hover:text-[#9C4C9A]'>
                  <span>Software Development</span> <IoIosArrowDown className='text-sm' />
                </div>
                <ul className='absolute right-full top-0 mr-2 mt-1 w-80 bg-white rounded-md p-4 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-10'
                   style={{ boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.1), -4px 0 8px rgba(0, 0, 0, 0.1), 4px 0 8px rgba(0, 0, 0, 0.1)' }}>
                  <li className='hover:text-[#9C4C9A] mb-2'><Link href="/services/Software-Development/ai-web-apps" >AI Web Apps</Link></li>
                  <li className='hover:text-[#9C4C9A] mb-2'><Link href="/services/Software-Development/api-integration">API Integration</Link></li>
                  <li className='hover:text-[#9C4C9A] mb-2'><Link href="/services/Software-Development/chatbot-development">Chatbot Development</Link></li>                  
                </ul>
              </li> 
              {/* Web Development */}
              <li className='relative group/item'>
                <div className='flex items-center justify-between cursor-pointer hover:text-[#9C4C9A]'>
                  <span>Web Development</span> <IoIosArrowDown className='text-sm' />
                </div>
                <ul className='absolute right-full top-0 mr-2 mt-1 w-80 bg-white rounded-md p-4 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-10'
                   style={{ boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.1), -4px 0 8px rgba(0, 0, 0, 0.1), 4px 0 8px rgba(0, 0, 0, 0.1)' }}>
                  <li className='hover:text-[#9C4C9A] mb-2'><Link href="/services/web-development/custom-webdesign-and-development">Custom Web Design & Development</Link></li>
                  <li className='hover:text-[#9C4C9A] mb-2'><Link href="/services/web-development/wordPress-webdesign-and-Development">WordPress Web Design & Development</Link></li>
                  <li className='hover:text-[#9C4C9A] mb-2'><Link href="/services/web-development/ecommerce-Webdevelopment">E-commerce Web Development</Link></li>
                  <li className='hover:text-[#9C4C9A] mb-2'><Link href="/services/web-development/portfolio-webdevelopment">Portfolio Web Development</Link></li>
                  <li className='hover:text-[#9C4C9A] mb-2'><Link href="/services/web-development/lms">LMS Websites</Link></li>
                </ul>
              </li> 
             {/* Digital Marketing */}
              <li className='relative  text-[#1F195E]  group/item mt-3'>
                <div className='flex items-center justify-between cursor-pointer hover:text-[#9C4C9A]'>
                  <span>Digital Marketing</span> <IoIosArrowDown className='text-sm' />
                </div>
                <ul className='absolute right-full top-0 mr-2 mt-1 w-80 bg-white rounded-md p-4 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-10'
                   style={{ boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.1), -4px 0 8px rgba(0, 0, 0, 0.1), 4px 0 8px rgba(0, 0, 0, 0.1)' }}>
                  <li className='hover:text-[#9C4C9A] mb-2'><Link href="/services/digital-marketing/social-media-marketing">Social Media Marketing </Link></li>
                  <li className='hover:text-[#9C4C9A] mb-2'><Link href="/services/digital-marketing/search-engine-optimization">Search Engine Optimization (SEO)</Link></li>
                  <li className='hover:text-[#9C4C9A] mb-2'><Link href="/services/digital-marketing/google-ads">Google Ads</Link></li>
                  <li className='hover:text-[#9C4C9A] mb-2'><Link href="/services/digital-marketing/graphic-designing">Graphic Designing</Link></li>
                </ul>
              </li>              
              {/* Recruitment */}
              <li className='relative  text-[#1F195E]  group/item mt-3'>
                <div className='flex items-center justify-between cursor-pointer hover:text-[#9C4C9A]'>
                  <span>Recruitment</span> <IoIosArrowDown className='text-sm' />
                </div>
                <ul className='absolute right-full top-0 mr-2 mt-1 w-56 bg-white rounded-md p-4 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-10'
                   style={{ boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.1), -4px 0 8px rgba(0, 0, 0, 0.1), 4px 0 8px rgba(0, 0, 0, 0.1)' }}>
                  <li className='hover:text-[#9C4C9A] mb-2'><Link href="/services/Recruitment/JobPosting">Job Posting</Link></li>
                  <li className='hover:text-[#9C4C9A] mb-2'><Link href="/services/Recruitment/Talent-Sourcing">Talent Sourcing</Link></li>
                  <li className='hover:text-[#9C4C9A] mb-2'><Link href="/services/Recruitment/CVs-and-Resumes">CVs & Resumes</Link></li>
                </ul>
              </li>              
            </ul>
          </li>

          <li><Link href="/blogs" className=' text-[#1F195E] font-bold hover:text-[#9C4C9A]'>Blogs</Link></li>
          <li><Link href="/contact" className=' text-[#1F195E] font-bold hover:text-[#9C4C9A]'>Contact</Link></li>          
        </ul>
      </div>

      {/* Mobile Menu */}
       <div
        className={`fixed inset-0 z-[9999] shadow-lg bg-white h-[70%] transform transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
        <div className='flex justify-between items-center px-5 py-4 z-[999]'>
          <img src="/Logo.png" alt="Logo" className="h-10" />
        </div>

        <div className='h-[83%] overflow-auto px-5 pb-10'>
          <ul className='flex flex-col  text-[#1F195E]  gap-4 text-lg font-semibold'>
            <li><Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about-us" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>            
            <li><Link href="/portfolio"  onClick={() => setMobileMenuOpen(false)}>Portfolio</Link></li>
            <li><Link href="/our-team"  onClick={() => setMobileMenuOpen(false)}>Team</Link></li>

            {/* software development */}
            <li className='pt-2'>
              <div className='flex justify-between items-center cursor-pointer' onClick={() => toggleSubMenu('software')}>
                <span>Software Development</span>
                <IoIosArrowDown className={`${activeSubMenu === 'software' && 'rotate-180'} transition-transform`} />
              </div>
              {activeSubMenu === 'software' && (
                <ul className='pl-4 text-base font-normal mt-2 space-y-2'>
                  <li><Link href="/services/Software-Development/ai-web-apps" onClick={() => setMobileMenuOpen(false)}>AI Web Apps</Link></li>
                  <li><Link href="/services/Software-Development/api-integration" onClick={() => setMobileMenuOpen(false)}>API Integration</Link></li>
                  <li><Link href="/services/Software-Development/chatbot-development" onClick={() => setMobileMenuOpen(false)}>Chatbot Development</Link></li>
                </ul>
              )}
            </li>
            {/* Web Development */}
            <li className='pt-2'>
              <div className='flex justify-between items-center cursor-pointer' onClick={() => toggleSubMenu('web')}>
                <span>Web Development</span>
                <IoIosArrowDown className={`${activeSubMenu === 'web' && 'rotate-180'} transition-transform`} />
              </div>
              {activeSubMenu === 'web' && (
                <ul className='pl-4 text-base font-normal mt-2 space-y-2'>
                  <li><Link href="/services/web-development/wordPress-webdesign-and-Development" onClick={() => setMobileMenuOpen(false)}>WordPress</Link></li>
                  <li><Link href="/web-development/ecommerce-Webdevelopment" onClick={() => setMobileMenuOpen(false)}>E-commerce</Link></li>
                  <li><Link href="/services/web-development/lms" onClick={() => setMobileMenuOpen(false)}>LMS websites</Link></li>
                  <li><Link href="/services/web-development/custom-webdesign-and-development" onClick={() => setMobileMenuOpen(false)}>Custom Development</Link></li>
                </ul>
              )}
            </li>

            {/* Digital Marketing */}
            <li className='pt-2'>
              <div className='flex justify-between items-center cursor-pointer' onClick={() => toggleSubMenu('marketing')}>
                <span>Digital Marketing</span>
                <IoIosArrowDown className={`${activeSubMenu === 'marketing' && 'rotate-180'} transition-transform`} />
              </div>
              {activeSubMenu === 'marketing' && (
                <ul className='pl-4 text-base font-normal mt-2 space-y-2'>
                  <li><Link href="/services/digital-marketing/search-engine-optimization" onClick={() => setMobileMenuOpen(false)}>SEO</Link></li>
                  <li><Link href="/services/digital-marketing/google-ads" onClick={() => setMobileMenuOpen(false)}>Google Ads</Link></li>
                  <li><Link href="/services/digital-marketing/graphic-designing" onClick={() => setMobileMenuOpen(false)}>Graphhic Designing</Link></li>
                  <li><Link href="/services/digital-marketing/social-media-marketing" onClick={() => setMobileMenuOpen(false)}>Social Media Marketing</Link></li>
                </ul>
              )}
            </li>

            {/* Recruitment */}
            <li className='pt-2'>
              <div className='flex justify-between items-center cursor-pointer' onClick={() => toggleSubMenu('recruit')}>
                <span>Recruitment</span>
                <IoIosArrowDown className={`${activeSubMenu === 'recruit' && 'rotate-180'} transition-transform`} />
              </div>
              {activeSubMenu === 'recruit' && (
                <ul className='pl-4 text-base font-normal mt-2 space-y-2'>
                  <li><Link href="/services/Recruitment/JobPosting" onClick={() => setMobileMenuOpen(false)}>Job Posting</Link></li>
                  <li><Link href="/services/Recruitment/Talent-Sourcing" onClick={() => setMobileMenuOpen(false)}>Talent Sourcing</Link></li>
                  <li><Link href="/services/Recruitment/CVs-and-Resumes" onClick={() => setMobileMenuOpen(false)}>CVs & Resumes</Link></li>
                </ul>
              )}
            </li>
            <li><Link href="/blog" onClick={() => setMobileMenuOpen(false)}>Blogs</Link></li>
            <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}


export default Header;