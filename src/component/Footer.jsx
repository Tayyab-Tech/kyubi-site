import React from 'react'
import { FaPinterest, FaLinkedinIn, FaXbox   } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import Link from 'next/link';
function Footer() {
  return (
    <>
      <div className='bg-black text-white px-[60px] py-[20px] flex md:flex-row flex-col justify-between items-center gap-[30px]'>
        <div className='text-white'>
          © 2024 Kyubi Studio
        </div>
        <div>
          <ul className='list-none flex items-center gap-[30px]'>
            <li><Link href="#"><FaPinterest /></Link></li>
            <li><Link href="#"><AiFillTwitterCircle /></Link></li>
            <li><Link href="#"><FaSquareInstagram /></Link></li>
            <li><Link href="#"><MdFacebook /></Link></li>
            <li><Link href="#"><FaLinkedinIn /></Link></li>
            <li><Link href="#"><FaXbox /></Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
