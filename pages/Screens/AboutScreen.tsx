import type { NextPage } from 'next'
import Button from '../Components/Button'

const AboutScreen: NextPage = () => {

    return (
        <div className='p-12 text-white h-screen flex flex-col justify-center items-center gap-12'>

            <div className=' text-[56px] relative text-4xl z-10 font-bold uppercase'>
                <span>About </span>
                <span className=' text-yellow-prime'>me</span>
                <div className=' tracking-widest text-[110px] absolute z-0 top-0 -left-20 opacity-20'>
                    RESUME
                </div>
            </div>

            <div className=' text-left w-full'>
                <h1 className='uppercase text-3xl font-semibold mb-8'>PERSONAL INFOS</h1>

                <div className='grid grid-cols-2 gap-4'>
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

            <Button width={"w-60"} title="Download CV" />

            <div className='grid grid-cols-2 gap-4'>

                <div className=' border border-light-black-prime rounded p-8'>
                    <h1>2+</h1>
                    <div className='flex '>
                        <div>-</div>
                        <div className='uppercase'>-YEARS OF EXPERIENCE</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutScreen
