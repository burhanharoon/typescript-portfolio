import type { NextPage } from 'next'
import { motion } from "framer-motion"


const AboutScreen: NextPage = () => {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            transition={{ ease: 'anticipate' }}
            className=' text-white py-20 px-8 flex flex-col justify-center items-center gap-12'
        >
            {/* <motion.div
        //     initial={{ scale: 0, rotate: 10 }}
        //     animate={{ scale: 0, rotate: 0 }}
        //     transition={{ type: "inertia", velocity: 50 }}
        //     className=' text-white py-20 px-8 flex flex-col justify-center items-center gap-12'
        //  */}

            <motion.div variants={item} className=' text-[56px] relative text-4xl z-10 font-bold uppercase'>
                <span>About </span>
                <span className=' text-yellow-prime'>me</span>
                <div className=' tracking-widest text-[110px] absolute z-0 top-0 -left-20 opacity-20'>
                    RESUME
                </div>
            </motion.div>


            <motion.div variants={item} className='grid grid-cols-none md:grid-cols-2 gap-4'>

                <div>
                    <h1 className='uppercase text-3xl font-semibold mb-8'>PERSONAL INFOS</h1>
                    <div className='grid grid-cols-2 gap-4 md:gap-8'>
                        <div>
                            <span className=' opacity-80'>First Name: </span>
                            <span>Burhan </span>
                        </div>
                        <div>
                            <span className=' opacity-80'>Last Name: </span>
                            <span>Haroon</span>
                        </div>
                        <div>
                            <span className=' opacity-80'>Age: </span>
                            <span>20 Years</span>
                        </div>
                        <div>
                            <span className=' opacity-80'>Nationality: </span>
                            <span>Pakistani </span>
                        </div>
                        <div>
                            <span className=' opacity-80'>Freelance: </span>
                            <span>Available</span>
                        </div>
                        <div>
                            <span className=' opacity-80'>Languages: </span>
                            <span>English, Hindi, Urdu </span>
                        </div>
                        <div>
                            <span className=' opacity-80'>Phone No: </span>
                            <span>+92 316 4180039 </span>
                        </div>
                        <div>
                            <span className=' opacity-80'>Email: </span>
                            <span>mirzaburhan0007@gmail.com </span>
                        </div>
                    </div>
                </div>

                <div className='hidden md:grid grid-cols-2 gap-4 w-full'>

                    <div className=' border border-light-black-prime rounded px-5 py-12'>
                        <h1 className='text-5xl font-bold text-yellow-prime'>2+</h1>
                        <div className='flex gap-2'>
                            <div className='mt-2 bg-white w-8 h-[1px]' ></div>
                            <div className='uppercase'>YEARS OF EXPERIENCE</div>
                        </div>
                    </div>
                    <div className=' border border-light-black-prime rounded px-5 py-12'>
                        <h1 className='text-5xl font-bold text-yellow-prime'>10+</h1>
                        <div className='flex gap-2'>
                            <div className='mt-2 bg-white w-8 h-[1px]' ></div>
                            <div className='uppercase'>Completed Projects</div>
                        </div>
                    </div>
                    <div className=' border border-light-black-prime rounded px-5 py-12'>
                        <h1 className='text-5xl font-bold text-yellow-prime'>2+</h1>
                        <div className='flex gap-2'>
                            <div className='mt-2 bg-white w-8 h-[1px]' ></div>
                            <div className='uppercase'>Happy Customers</div>
                        </div>
                    </div>
                    <div className=' border border-light-black-prime rounded px-5 py-12'>
                        <h1 className='text-5xl font-bold text-yellow-prime'>2+</h1>
                        <div className='flex gap-2'>
                            <div className='mt-2 bg-white w-8 h-[1px]' ></div>
                            <div className='uppercase'>Awards Won</div>
                        </div>
                    </div>

                </div>
            </motion.div>

            <motion.div variants={item} className='about-button relative px-9 pr-20 flex justify-center items-center gap-4 text-white border border-yellow-prime rounded-full'>
                <div className='uppercase flex w-full justify-center items-center h-14 font-bold'>Download CV</div>
                <div className='absolute -right-0 w-14 h-14 bg-yellow-prime rounded-full'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill='#fff'
                            d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z" />
                    </svg>
                </div>
            </motion.div>


            <motion.div variants={item} className='grid md:hidden grid-cols-2 gap-4 w-full'>

                <div className=' border border-light-black-prime rounded px-5 py-12'>
                    <h1 className='text-5xl font-bold text-yellow-prime'>2+</h1>
                    <div className='flex gap-2'>
                        <div className='mt-2 bg-white w-8 h-[1px]' ></div>
                        <div className='uppercase'>YEARS OF EXPERIENCE</div>
                    </div>
                </div>
                <div className=' border border-light-black-prime rounded px-5 py-12'>
                    <h1 className='text-5xl font-bold text-yellow-prime'>10+</h1>
                    <div className='flex gap-2'>
                        <div className='mt-2 bg-white w-8 h-[1px]' ></div>
                        <div className='uppercase'>Completed Projects</div>
                    </div>
                </div>
                <div className=' border border-light-black-prime rounded px-5 py-12'>
                    <h1 className='text-5xl font-bold text-yellow-prime'>2+</h1>
                    <div className='flex gap-2'>
                        <div className='mt-2 bg-white w-8 h-[1px]' ></div>
                        <div className='uppercase'>Happy Customers</div>
                    </div>
                </div>
                <div className=' border border-light-black-prime rounded px-5 py-12'>
                    <h1 className='text-5xl font-bold text-yellow-prime'>2+</h1>
                    <div className='flex gap-2'>
                        <div className='mt-2 bg-white w-8 h-[1px]' ></div>
                        <div className='uppercase'>Awards Won</div>
                    </div>
                </div>


            </motion.div>

            {/* Skills */}


        </motion.div>
    )
}

export default AboutScreen
