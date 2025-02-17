'use client'
import React, { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    newsletter: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
  };

  return (
    <div>
      <h1 className='pb-4 text-slate'>CONTACT</h1>
      <div className='lg:flex gap-10 justify-between'>
        <div className='w-full lg:w-3/5 flex flex-col gap-5 text-gray'>
          <p>To make an enquiry, join our mailing list, or stay in touch, please fill in the form below:</p>
          <h3 className='text-2xl'>Enquiry form</h3>
          <form onSubmit={handleSubmit}>
            <div className='flex w-full justify-between mb-4'>
              <p>Name *</p>
              <input type="text" name="name" className='w-[70%] border-2 border-[#D8D8D8]' value={formData.name} onChange={handleChange} required />
            </div>
            <div className='flex w-full justify-between mb-4'>
              <p>Email *</p>
              <input type="email" name="email" className='w-[70%] border-2 border-[#D8D8D8]' value={formData.email} onChange={handleChange} required />
            </div>
            <div className='flex w-full justify-between mb-4'>
              <p>Phone</p>
              <input type="text" name="phone" className='w-[70%] border-2 border-[#D8D8D8]' value={formData.phone} onChange={handleChange} />
            </div>
            <div className='flex w-full justify-between mb-4'>
              <p>Message *</p>
              <textarea name="message" value={formData.message} className='w-[70%] border-2 border-[#D8D8D8]'  onChange={handleChange} rows="6" required ></textarea>
            </div>
            <div className='flex w-full justify-between mb-4'>
              <p>Receive newsletter</p>
              <div className='w-[70%] flex gap-3 pl-2'>
                <label className='flex gap-3 items-center'>
                  <input type="radio" name="newsletter" className='w-[70%] border-2 border-[#D8D8D8]' value="Yes" checked={formData.newsletter === 'Yes'} onChange={handleChange} required /> Yes
                </label>

                <label className='ml-5 flex gap-3 items-center'>
                  <input type="radio" name="newsletter" className='w-[70%] border-2 border-[#D8D8D8]' value="No" checked={formData.newsletter === 'No'} onChange={handleChange} required/> No
                </label>
              </div>
            </div>
            <button className="bg-black px-6 py-3 mt-5 text-gray hover:text-white flex ml-[30%]" type="submit">
              SEND ENQUIRY
            </button>
          </form>
          <div className="text-gray border-t-[1px] border-[#1010101A]">
            <p className='py-3'>* denotes required fields</p>
            <p>
              In order to respond to your enquiry, we will process the personal data you have supplied in
              accordance with our privacy policy (available on request). You can unsubscribe or change your
              preferences at any time by clicking the link in our emails.
            </p>
          </div>
        </div>
        <div  className='w-full lg:w-2/5'>
          <div style={{ width: '100%', height: '600px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_URL"
              width="100%"
              height="100%"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
