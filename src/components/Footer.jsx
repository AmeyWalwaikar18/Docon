import React from 'react'
import logo from "../assets/Logo-Docon.svg";

const Footer = () => {
  return (
    <div className='w-full mt-[100px] py-[15px] pt-[75px] bg-slate-200'>
        <div className='flex justify-evenly'>
            <div className='w-[25%] text-left'>
                <img src={logo} alt="logo" />
                <p className='text-[18px] text-slate-700'>Block-1, 4th Floor, Prestige Blue Chip Software Park Adugodi, Dairy Colony. Karnataka - 560029</p>
            </div>
            <div className='text-[18px] text-slate-700'>
                <p className='text-[22px] font-medium text-slate-900 pb-3'>Company</p>
                <p>Services</p>
                <p>Career</p>
                <p>About Us</p>
                <p>Patients</p>
            </div>
            <div className='text-[18px] text-slate-700'>
                <p className='text-[22px] font-medium text-slate-900 pb-3'>Resources</p>
                <p>Blogs & Case</p>
                <p>Studies</p>
                <p>FAQs</p>
            </div>
            <div className='text-[18px] text-slate-700'>
                <p className='text-[22px] font-medium text-slate-900 pb-3'>Legal</p>
                <p>Privacy</p>
                <p>Terms</p>
                <p>Refund & Cancellation</p>
                <p>Contact</p>
            </div>
        </div>

        <div className='text-slate-600 mt-[60px]'>
        © All rights reserved. Docon technologies Pvt. Ltd 2022
        </div>

    </div>
  )
}

export default Footer