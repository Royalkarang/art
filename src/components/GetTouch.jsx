"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import confirmImg from "../../public/confirm_bid.png"
import { useRouter } from 'next/navigation';

const GetTouch = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneCode: 'us',
    phoneNumber: '',
    bidValue: '',
    message: '',
    newsletter: '',
    privacyPolicy: false,
  });

  const [modal, setModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setModal(true);
  };

  if(!isOpen) return null;
  return (
    <div className='fixed inset-0 w-full h-full bg-black bg-opacity-40 z-30 overflow-auto'>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-full h-full bg-white p-6 relative overflow-auto py-20'>
          {/* Close Button */}
          <button className='absolute right-4 top-4 text-3xl' onClick={onClose}>
            &times;
          </button>

          {/* Form Content */}
          <div className='max-w-xl mx-auto flex flex-col gap-3'>
            <p className='text-center text-sm'>Contact us</p>
            <h1 className='text-center text-3xl'>Get in touch</h1>
            <p className='text-center text-xl'>We'd love to hear from you. Please fill out this form.</p>

            <form className='w-full flex flex-col gap-4 text-sm' onSubmit={handleSubmit}>
              <input type='text' name='fullName' placeholder='Full Name' required className='w-full p-2 border border-[#D0D5DD]' onChange={handleChange} />

              <label className='w-full'>
                <p>Email</p>
                <input type='email' name='email' required placeholder='you@company.com' className='w-full p-2 border border-[#D0D5DD]' onChange={handleChange} />
              </label>

              <label className='w-full'>
                <p>Phone number</p>
                <div className='flex border border-[#D0D5DD]'>
                  <select name='phoneCode' className='p-2 border-r border-[#D0D5DD]' onChange={handleChange}>
                    <option value='us'>USA</option>
                    <option value='ind'>India</option>
                  </select>
                  <input type='tel' name='phoneNumber' placeholder='+1 (555) 000-0000' className='w-full p-2' onChange={handleChange} />
                </div>
              </label>

              <label className='w-full'>
                <input type='text' name='bidValue' required placeholder='$2100' className='w-full p-2 border border-[#D0D5DD]' onChange={handleChange} />
                <p className='text-xs'>Current Bid Value</p>
              </label>

              <label className='w-full'>
                <p>Message</p>
                <textarea name='message' rows={5} className='w-full p-2 border border-[#D0D5DD]' onChange={handleChange} ></textarea>
              </label>
              
              <label className='w-full flex gap-4'>
                <p>Receive newsletter</p>
                <div className='flex gap-4'>
                  <label>
                    <input type='radio' name='newsletter' value='yes' required onChange={handleChange} />
                    <span> Yes </span>
                  </label>
                  <label>
                    <input type='radio' name='newsletter' value='no' required onChange={handleChange} />
                    <span> No </span>
                  </label>
                </div>
              </label>
              <label className='w-full flex gap-3'>
                <input type='checkbox' name='privacyPolicy' required onChange={handleChange} />
                <p>
                  You agree to our friendly{' '}
                  <a href='#' className='text-blue-500'>
                    Privacy Policy
                  </a>
                </p>
              </label>
              <button type='submit' className='bg-black text-white px-6 py-2 w-full'>
                PLACE YOUR BID NOW
              </button>
            </form>
          </div>
        </div>
      </div>
      {modal && <ConfirmBid isModalOpen={modal} handleClose={() => setModal(false)} />}
    </div>
  );
};

export default GetTouch;


const ConfirmBid = ({isModalOpen, handleClose}) => {

  if(!isModalOpen) return null;
  return (
    <div className='fixed inset-0 w-full h-full bg-black bg-opacity-40 z-40 overflow-auto'>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-full h-full bg-white p-6 relative overflow-auto py-20'>
        <button className='absolute right-4 top-4 text-3xl' onClick={handleClose}>
            &times;
          </button>
          <div className='flex flex-col gap-4 max-w-lg mx-auto text-center text-lg'>
            <Image src={confirmImg} alt='' width={300} height={300} className='mx-auto'/>
          <div className=' flex flex-col gap-2 mx-auto'>
            <p> Thank you</p>
            <p> Your Bid has been accepted</p>
            <a href="/auctions" className='underline'> keep beeding</a>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

