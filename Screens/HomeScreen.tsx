import type { NextPage } from 'next'
import { motion } from "framer-motion"

const HomeScreen: NextPage = () => {

    return (
        <div className=' text-center px-4 bg-black-prime w-full h-screen flex justify-center items-center flex-col gap-4'>
            <motion.div
                animate={{
                    scale: [1, 1.2, 1.2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "100%"],
                }}
                className=' bg-yellow-prime w-52 h-52'
            >

            </motion.div>

            <div className='text-3xl sm:text-4xl text-yellow-prime uppercase font-bold'>
                i&apos;m burhan haroon.
            </div>

            <div className='text-2xl sm:text-4xl text-white uppercase font-bold'>
                WEB DEVELOPER
            </div>

            <div className=' leading-6 text-white text-sm text-center'>
                I&apos;m a Lahore based Software Engineer &amp; MERN Stack developer focused on crafting clean &amp; user‑friendly experiences. I am passionate about building excellent software that improves the lives of those around me.
            </div>

            <div className='about-button relative h-14 px-9 pr-16 flex justify-center items-center gap-4 text-white border border-yellow-prime rounded-full'>
                <div className='uppercase font-bold'>MORE ABOUT ME</div>
                <div className='absolute -right-2 w-14 h-14 bg-yellow-prime rounded-full'>
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
            </div>
        </div>
    )
}

export default HomeScreen
