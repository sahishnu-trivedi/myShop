import IMAGES from '@/assets/Images'
import React from 'react'
import Button from '../button/Button'

function Footer() {
  return (
    <footer className='footer-main'>
        <div className='footer-bg py-14'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-5'>
                    <div className='footer-logo'>
                        <IMAGES.logoSvg />
                    </div>
                    <div className='footer-links'>
                        <h2 className='text-2xl mb-7 font-bold'>Customer services</h2>
                        <ul>
                            <li className='text-lg mb-1'><a href='#'>Contact Us</a></li>
                            <li className='text-lg mb-1'><a href='#'>Track Order</a></li>
                            <li className='text-lg mb-1'><a href='#'>Return Order</a></li>
                            <li className='text-lg'><a href='#'>Cancel Order</a></li>
                        </ul>
                    </div>
                    <div className='footer-links'>
                        <h2 className='text-2xl mb-7 font-bold'>Company</h2>
                        <ul>
                            <li className='text-lg mb-1'><a href='#'>About Us</a></li>
                            <li className='text-lg mb-1'><a href='#'>Terms &amp; Conditions</a></li>
                            <li className='text-lg mb-1'><a href='#'>Privacy Policy</a></li>
                            <li className='text-lg'><a href='#'>Cancellation Policy</a></li>
                            <li className='text-lg'><a href='#'>Refund Policy</a></li>
                            <li className='text-lg'><a href='#'>15 Days Return Policy</a></li>
                        </ul>
                    </div>
                    <div className='footer-links'>
                        <h2 className='text-2xl mb-7 font-bold'>Connect with us</h2>
                        <ul>
                            <li className='text-lg mb-1'>
                                <a href='#'>
                                    <span className='inline-block me-2'>
                                        <IMAGES.facebookSvg />
                                    </span>
                                    Facebook
                                </a>
                            </li>
                            <li className='text-lg mb-1'>
                                <a href='#'>
                                    <span className='inline-block me-2'>
                                        <IMAGES.instaSvg />
                                    </span>
                                    Instagram
                                </a>
                            </li>
                            <li className='text-lg mb-1'>
                                <a href='#'>
                                    <span className='inline-block me-2'>
                                        <IMAGES.xSvg />
                                    </span>
                                    X
                                </a>
                            </li>
                            <li className='text-lg'>
                                <a href='#'>
                                    <span className='inline-block me-2'>
                                        <IMAGES.threadSvg />
                                    </span>
                                    Thread
                                </a>
                            </li>
                            <li className='text-lg'>
                                <a href='#'>
                                    <span className='inline-block me-2'>
                                        <IMAGES.pintrestSvg />
                                    </span>
                                    Pintrest
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-links'>
                        <h2 className='text-2xl mb-7 font-bold'>Connect with us</h2>
                        <div className='p-5 md:p-3 border border-grey rounded-2xl bg-white flex context-between items-center'>
                            <input className='text-xl md:text-lg w-full' placeholder='Enter your email' />
                            <Button useClass='bg-secondary p-4 rounded-lg md:p-2' buttonText={<IMAGES.arrowWhiteSvg />}/>
                        </div>
                    </div>
                </div>
                <div className='footer-text-block'>
                    <h2 className='text-2xl mt-14 font-bold'>DoozyWoozy® a smooth experience of esthetic clothing e-commerce</h2>
                    <p className='text-sm mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed gravida est. Mauris varius mauris ut nunc fringilla varius. Maecenas sed tortor odio. Aliquam ultricies risus sit amet enim hendrerit, nec imperdiet est egestas. Quisque arcu sem, semper eu cursus id, porta ac felis. Vivamus ac mollis nunc. Praesent mattis est quis ligula dignissim fermentum. Pellentesque euismod euismod felis, a efficitur risus laoreet in. Donec at sollicitudin nunc.</p>
                    
                    <h3 className='text-xl mt-6'>Lorem ipsum sit</h3>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed gravida est. Mauris varius mauris ut nunc fringilla varius. Maecenas sed tortor odio. Aliquam ultricies risus sit amet enim hendrerit, nec imperdiet est egestas. Quisque arcu sem, semper eu cursus id, porta ac felis. Vivamus ac mollis nunc. Praesent mattis est quis ligula dignissim fermentum. Pellentesque euismod euismod felis, a efficitur risus laoreet in. Donec at sollicitudin nunc.</p>
                    <h3 className='text-xl mt-6'>Lorem ipsum sit</h3>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed gravida est. Mauris varius mauris ut nunc fringilla varius. Maecenas sed tortor odio. Aliquam ultricies risus sit amet enim hendrerit, nec imperdiet est egestas. Quisque arcu sem, semper eu cursus id, porta ac felis. Vivamus ac mollis nunc. Praesent mattis est quis ligula dignissim fermentum. Pellentesque euismod euismod felis, a efficitur risus laoreet in. Donec at sollicitudin nunc.</p>
                    <h3 className='text-xl mt-6'>Lorem ipsum sit</h3>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed gravida est. Mauris varius mauris ut nunc fringilla varius. Maecenas sed tortor odio. Aliquam ultricies risus sit amet enim hendrerit, nec imperdiet est egestas. Quisque arcu sem, semper eu cursus id, porta ac felis. Vivamus ac mollis nunc. Praesent mattis est quis ligula dignissim fermentum. Pellentesque euismod euismod felis, a efficitur risus laoreet in. Donec at sollicitudin nunc.</p>
                </div>
            </div>
        </div>
        <div className='text-center p-5'>
            <p className='text-sm'>Copyright 2024-2032  |  All rights are reserved with DoozyWoozy®</p>
        </div>
    </footer>
  )
}

export default Footer
