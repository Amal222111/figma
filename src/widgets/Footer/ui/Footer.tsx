import style from '../../../app/styles/Footer.module.scss'
export default function Footer() {
    return (
        <>
            <div className="bg-gray-100 p-6">
                <div className={style.topFooter}>
                    <div>
                        <h1 className="text-xl font-semibold">Join our newsletter for £10 offs</h1>
                        <p className="text-gray-500">
                            Register now to get latest updates on promotions & <br />
                            coupons. Don’t worry, we not spam!
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <div>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="border border-gray-300 bg-white px-3 py-2 rounded-tl-md rounded-bl-md flex-1"
                                />
                                <button className="bg-purple-600 text-white font-semibold px-6 py-2 rounded-tr-md rounded-br-md hover:bg-purple-700">
                                    SEND
                                </button>
                            </div>
                            <div className="flex text-sm">
                                <p className='text-purple-800'>
                                    By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.middleFooter}>
                    <div>
                        <div className='pb-10'>
                            <h1>Do You Need Help ?</h1>
                            <p className='text-gray-500'>Autoseligen syr. Nek diarask fröbomba. Nör <br />
                                antipol kynoda nynat. Pressa fåmoska.</p>
                        </div>
                        <div className='flex gap-5 pb-10'>
                            <div>
                                <img src='./public/phone.png' alt="" />
                            </div>
                            <div>
                                <p className='text-gray-500'>Monday-Friday: 08am-9pm</p>
                                <h1 className='text-xl'>0 800 300-353</h1>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div>
                                <img src='./public/mail.png' alt="" />
                            </div>
                            <div>
                                <p className='text-gray-500'>Need help with your order?</p>
                                <h1>info@example.com</h1>
                            </div>
                        </div>
                    </div>
                    <div className='text-gray-500'>
                        <h1 className='text-black'>
                            Make Money with Us
                        </h1>
                        <p className='pb-1'>Sell on Grogin</p>
                        <p className='pb-1'>Sell Your Services on Grogin</p>
                        <p className='pb-1'>Sell on Grogin Business</p>
                        <p className='pb-1'>Sell Your Apps on Grogin</p>
                        <p className='pb-1'>Become an Affilate</p>
                        <p className='pb-1'>Advertise Your Products</p>
                        <p className='pb-2'>Sell-Publish with Us</p>
                        <p>Become an Blowwe Vendor</p>
                    </div>

                    <div className='text-gray-500'>
                        <h1 className='text-black'>
                            Let Us Help You
                        </h1>
                        <p className='pb-1'>Accessibility Statement</p>
                        <p className='pb-1'>Your Orders</p>
                        <p className='pb-1'>Returns & Replacements</p>
                        <p className='pb-1'>Shipping Rates & Policies</p>
                        <p className='pb-1'>Refund and Returns Policy</p>
                        <p className='pb-1'>Privacy Policy</p>
                        <p className='pb-1'>Terms and Conditions</p>
                        <p className='pb-2'>Cookie Settings</p>
                        <p>Help Center</p>
                    </div>
                    <div className='text-gray-500'>
                        <h1 className='text-black'>
                            Get to Know Us
                        </h1>
                        <p className='pb-1'>Careers for Grogin</p>
                        <p className='pb-1'>About Grogin</p>
                        <p className='pb-1'>Inverstor Relations</p>
                        <p className='pb-1'>Grogin Devices</p>
                        <p className='pb-1'>Customer reviews</p>
                        <p className='pb-1'>Social Responsibility</p>
                        <p>Store Locations</p>
                    </div>
                    <div>
                        <h1>
                            Download our app
                        </h1>
                        <div className='flex gap-2 pb-3'>
                            <img src="./public/googlePlay.png" alt="" />
                            <p className='text-gray-500'>Download App Get <br />
                                -10% Discount</p>
                        </div>
                        <div className='flex gap-2 pb-10'>
                            <img src="./public/appStore.png" alt="" />
                            <p className='text-gray-500'>Download App Get <br />
                                -20% Discount</p>
                        </div>
                        <div>
                            <h1>
                                Follow us on social media:
                                <div className='flex'>
                                    <img src="./public/facebook.png" alt="" />
                                    <img src="./public/twitter.png" alt="" />
                                    <img src="./public/instagram.png" alt="" />
                                    <img src="./public/in.png" alt="" />
                                </div>

                            </h1>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 '>
                   <div>
                 <p className='text-purple-800'>Copyright 2024 © Jinstore WooCommerce WordPress Theme. All right reserved. Powered by BlackRise Themes.</p>
                 <div className='flex'>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                 </div>
                   </div>
                   <div className='flex'>
                   <p></p>
                   <p></p>
                   <p></p>
                   </div>
                </div>
            </div>


        </>
    )
}