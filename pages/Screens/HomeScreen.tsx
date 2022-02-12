import type { NextPage } from 'next'
import Button from '../Components/Button'

const HomeScreen: NextPage = () => {


    return (
        <div className=' text-center px-12 bg-black-prime w-full h-screen flex justify-center items-center flex-col gap-4'>
            <div className=' bg-yellow-prime w-64 h-64 rounded-full'>

            </div>

            <div className=' text-4xl text-yellow-prime uppercase font-bold'>
                i'm burhan haroon.
            </div>

            <div className=' text-4xl text-white uppercase font-bold'>
                WEB DEVELOPER
            </div>

            <div className=' text-white text-sm text-center'>
                I'm a Lahore based Software Engineer &#38; MERN Stack developer focused on crafting clean &#38; user‑friendly experiences. I am passionate about building excellent software that improves the lives of those around me.
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
