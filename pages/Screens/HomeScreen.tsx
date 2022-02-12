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

            <Button width={"w-72"} title={"More about me"} />
        </div>
    )
}

export default HomeScreen
