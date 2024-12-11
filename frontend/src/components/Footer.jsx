import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-28 -mt-5' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>AppointDoc revolutionizes healthcare appointments by offering a seamless, user-friendly platform for patients, doctors, and administrators. It simplifies scheduling, integrates secure payments, and ensures efficient management of medical services. Built using modern web technologies, AppointDoc is a step towards making healthcare more accessible, organized, and efficient for everyone involved.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 934342453234</li>
            <li>appointdoc2024@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ AppointDoc - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
