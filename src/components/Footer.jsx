import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black absolute w-full mx-auto p-3 pt-40 z-10'>
       <div className='flex justify-center'>
       <img style={{width: "100px"}} src="/logo-footer.png" alt="" />
       </div>
        <div className='grid grid-cols-1 w-9/12 mx-auto md:grid-cols-3 justify-center gap-10 text-white py-10 text-center'>
            <div>
                <h2>About Us</h2>
                <p className='text-white text-opacity-60 text-sm'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
            <div>
                <h2>Quick Links</h2>
                <ul className='text-white text-opacity-60 text-sm'>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h2>Subscribe</h2>
                <p className='text-white text-opacity-60 text-sm'>Subscribe to our newsletter for the latest updates.</p>
                <p>
                <div className="join">
                <div>
                <div>
                <input className="input input-bordered  join-item" placeholder="Enter your Email" />
                </div>
               </div>
            <button className="btn bg-gradient-to-r from-[#FFFF00] to-[#ef855f] join-item">Search</button>
               </div>
              </p>
            </div>
        </div>
        <hr />
        <h3 className='text-center  text-white text-opacity-60 text-sm font-sm py-4'>@2024 Your Company All Rights Reserved.</h3>
    </div>
  ) 
}

