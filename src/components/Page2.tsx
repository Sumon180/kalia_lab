import { CiLocationOn } from 'react-icons/ci';
import { FiGlobe } from 'react-icons/fi';
import Menu from './Menu';
import { useState } from 'react';
import Card from './Card';

const Page2 = () => {
    const [toggle, setToggle] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)
    const [toggle4, setToggle4] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }
    const handleClick2 = () => {
        setToggle2(!toggle2)
    }
    const handleClick3 = () => {
        setToggle3(!toggle3)
    }
    const handleClick4 = () => {
        setToggle4(!toggle4)
    }

    return (
        <>
            <div className="flex flex-col min-h-screen w-screen">
                <div className="flex items-center bg-white py-5 w-full sticky">
                    <div className='flex items-center ml-96'>
                        <CiLocationOn className=" text-2xl" />
                        <p>Bullindamm 11, <span>20095 Hamburg</span></p>
                        <div className='flex items-center ml-5 bg-indigo-400 px-3 text-white'>
                            <FiGlobe />
                            <Menu />
                        </div>
                    </div>
                </div>
                <div className='ml-96'>
                    <h1 className="text-2xl mt-7">Wählen Sie eine Filiale aus</h1>
                    <div className="flex flex-col">
                        <div className="flex flex-col items-start w-9/12 cursor-pointer py-5 border-b border-blue-gray-300 transition-all duration-300">
                            <div onClick={handleClick} className="flex items-center justify-center gap-2">
                                <p className=' text-gray-800'>Beratung</p>
                                {toggle ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 focus:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                                }
                            </div>
                            {
                                toggle ?
                                    <div className='flex flex-wrap gap-3 mt-3'>
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                    </div> : ""
                            }
                        </div>
                        <div className="flex flex-col items-start w-9/12 cursor-pointer py-5 border-b border-blue-gray-300 transition-all duration-300">
                            <div onClick={handleClick2} className="flex items-center justify-center gap-2">
                                <p className=' text-gray-800'>Ästhetische Medizin - Botulinum</p>
                                {toggle2 ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 focus:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                                }
                            </div>
                            {
                                toggle2 ?
                                    <div className='flex flex-wrap gap-3 mt-3'>
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                    </div> : ""
                            }
                        </div>
                        <div className="flex flex-col items-start w-9/12 cursor-pointer py-5 border-b border-blue-gray-300 transition-all duration-300">
                            <div onClick={handleClick3} className="flex items-center justify-center gap-2">
                                <p className=' text-gray-800'>Ästhetische Medizin - Hyaluron</p>
                                {toggle3 ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 focus:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                                }
                            </div>
                            {
                                toggle3 ?
                                    <div className='flex flex-wrap gap-3 mt-3'>
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                        <Card />
                                    </div> : ""
                            }
                        </div>
                        <div className="flex flex-col items-start w-9/12 cursor-pointer py-5 transition-all duration-300">
                            <div onClick={handleClick4} className="flex items-center justify-center gap-2">
                                <p className=' text-gray-800'>Kollagenbooster</p>
                                {toggle4 ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 focus:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                                }
                            </div>
                            {
                                toggle4 ?
                                    <div className='flex flex-wrap gap-3 mt-3'>
                                        <Card />
                                    </div> : ""
                            }
                        </div>

                    </div>
                </div>
                <div className='bg-gray-400 mt-10'>
                    <div className="ml-96 py-5">
                        <h5 className=' text-2xl mb-2'>Sie finden uns hier</h5>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29248.661237088007!2d89.82059700807562!3d23.601368467450605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe2534aaa4fc7f%3A0x4daf43ffdb19a28e!2sFaridpur!5e0!3m2!1sen!2sbd!4v1683085018721!5m2!1sen!2sbd"
                                width="600"
                                height="350"
                                style={{ border: "0" }}
                                loading="lazy" >
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page2