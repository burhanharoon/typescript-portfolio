import type { NextPage } from 'next'
import { motion } from "framer-motion"
import { useState } from 'react'
import frontend from "../data/frontend"
import otherLanguages from "../data/otherLanguages"
import backend from "../data/backend"


const AboutScreen: NextPage = () => {
    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)

    let color1 = show1 ? "#15803D" : "#111"
    let color2 = show2 ? "#1D4ED8" : "#111"
    let color3 = show3 ? "#7E22CE" : "#111"

    const changePreview = (divNumber: number) => {
        if (divNumber === 1) {
            !show1 && setShow1(true); setShow2(false); setShow3(false)
        } else if (divNumber === 2) {
            !show2 && setShow1(false); setShow2(true); setShow3(false)
        } else {
            !show3 && setShow1(false); setShow2(false); setShow3(true)
        }
    }
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
            <motion.div variants={item} className=' text-[56px] relative text-4xl z-10 font-bold uppercase'>
                <span>About </span>
                <span className=' text-yellow-prime'>me</span>
                <div className=' tracking-widest text-7xl sm:text-[110px] absolute z-0 -top-4 sm:-top-8 -left-16 sm:-left-40 opacity-20'>
                    RESUME
                </div>
            </motion.div>


            <motion.div variants={item} className='  place-content-center grid items-center grid-cols-none md:grid-cols-3 gap-8 sm:gap-4'>

                {/* Personal Info */}
                <div className='md:col-span-2 h-min'>
                    <h1 className='uppercase text-3xl font-semibold mb-8'>PERSONAL INFOS</h1>
                    <div className='text-sm sm:text-base grid grid-cols-2 gap-4 md:gap-8'>
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
                            <span>mirzaburhan0007 @gmail.com </span>
                        </div>
                    </div>
                </div>


                {/* Skills */}
                <div className='w-full flex justify-center'>
                    <motion.div variants={item} className=' bg-white w-80 h-96 rounded-3xl p-4 text-black flex flex-col justify-start gap-4'>
                        <motion.div className='flex sm:cursor-pointer'>

                            <motion.div
                                onClick={() => { changePreview(1) }}
                                initial={{ width: 0 }}
                                animate={show1 ? { width: 200 } : { width: "50px" }}
                                transition={{ duration: 0.5 }}
                                className={show1 ? 'py-4 px-4 gap-2 rounded-3xl bg-green-300 flex justify-start' : 'py-4 rounded-3xl  flex justify-center'}
                            >

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                    width={25}
                                    height={25}
                                >
                                    <path fill={color1} d="M45.274 2.325A1.001 1.001 0 0 0 44.536 2H5.464a1.001 1.001 0 0 0-.996 1.089l3.52 39.427c.037.412.324.759.722.873l16.011 4.573a1.012 1.012 0 0 0 .548 0l16.024-4.573c.398-.114.685-.461.722-.873l3.518-39.427c.024-.28-.07-.557-.259-.764zm-8.427 13.594H18.036l.447 5.09h17.911l-1.343 15.04-10.057 3.041-.099-.03-9.942-3.012-.542-6.13h4.869l.214 2.38 5.556 1.164 5.457-1.166.581-6.435H14.045l-1.321-14.807h24.559l-.436 4.865z" />
                                </svg>

                                {show1 && <motion.h1 initial={{ x: -40, opacity: 0 }} animate={{ x: [-10, 0], opacity: 1 }} transition={{ delay: 0.3, duration: 0.3 }} className=' text-green-700 font-bold'>Frontend</motion.h1>}
                            </motion.div>

                            <motion.div
                                onClick={() => { changePreview(2) }}
                                initial={{ width: "100px" }}
                                animate={show2 ? { width: "200px" } : { width: "50px" }}
                                transition={{ duration: 0.5 }}
                                className={show2 ? 'py-4 px-4 gap-2 rounded-3xl bg-blue-300 flex justify-start' : 'py-4 rounded-3xl  flex justify-center'}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    width={25}
                                    height={25}
                                >
                                    <path fill={color2} d="M21.3 6a.3.3 0 0 0-.3.3V15h2V7.231a.502.502 0 0 0-.248-.432l-1.302-.758A.3.3 0 0 0 21.3 6zM15.407 25.677a.642.642 0 0 1-.297-.078l-.935-.555c-.141-.078-.073-.107-.024-.122.185-.063.224-.078.423-.195.019-.01.049-.005.068.005l.72.428a.092.092 0 0 0 .088 0l2.813-1.626a.094.094 0 0 0 .044-.078v-3.247c0-.034-.015-.063-.044-.078L15.45 18.51a.091.091 0 0 0-.088 0l-2.813 1.621c-.029.015-.044.049-.044.078v3.247a.09.09 0 0 0 .044.073l.769.443c.419.209.677-.039.677-.282v-3.208c0-.044.034-.083.083-.083h.355c.044 0 .083.034.083.083v3.208c0 .56-.302.876-.832.876-.161 0-.292 0-.647-.175l-.74-.423a.599.599 0 0 1-.297-.51v-3.247c0-.209.112-.409.297-.511l2.813-1.626a.605.605 0 0 1 .589 0l2.813 1.626c.18.107.297.302.297.511v3.247a.585.585 0 0 1-.297.511l-2.813 1.626a.541.541 0 0 1-.292.082zm2.273-3.203c0-.608-.409-.769-1.275-.886-.876-.117-.964-.175-.964-.38 0-.17.073-.394.72-.394.579 0 .793.127.881.516.01.039.039.063.078.063h.365c.024 0 .044-.01.058-.024.015-.019.024-.039.019-.063-.058-.672-.501-.983-1.402-.983-.803 0-1.28.341-1.28.905 0 .618.477.784 1.246.862.92.092.993.224.993.404 0 .316-.253.448-.847.448-.745 0-.91-.185-.964-.555-.005-.039-.039-.068-.083-.068h-.365a.082.082 0 0 0-.083.083c0 .472.258 1.037 1.489 1.037.903-.001 1.414-.351 1.414-.965zm2.653-2.438c0 .297-.243.54-.54.54a.542.542 0 0 1-.54-.54c0-.307.253-.54.54-.54a.535.535 0 0 1 .54.54zm-.087 0a.453.453 0 0 0-.458-.453.456.456 0 0 0 0 .911.465.465 0 0 0 .458-.458zm-.22.301H19.9a6.203 6.203 0 0 1-.024-.19c-.01-.034-.019-.054-.063-.054h-.107v.243h-.117v-.608h.209c.073 0 .214 0 .214.161 0 .112-.073.136-.117.151.083.005.088.058.102.136.005.05.015.132.029.161zm-.136-.428c0-.083-.058-.083-.088-.083h-.097v.17h.092c.079.001.093-.053.093-.087zm-4.95-3.198-.019-.034v.044l.019-.01zM6.749 12.817l-2.995-1.745a.5.5 0 0 0-.508 0L.251 12.817a.505.505 0 0 0-.251.437v4.463c0 .218.236.353.424.244l1.328-.773A.503.503 0 0 0 2 16.755v-2.642l1.5-.874 1.5.874v2.642c0 .178.095.342.248.432l1.328.773A.281.281 0 0 0 7 17.717v-4.463a.505.505 0 0 0-.251-.437z" />
                                    <path fill={color2} d="M8 13.251v3.497c0 .18.095.346.251.436l2.995 1.745a.507.507 0 0 0 .508 0l2.995-1.745a.502.502 0 0 0 .251-.435v-3.497a.502.502 0 0 0-.251-.436l-2.995-1.745a.507.507 0 0 0-.508 0l-2.995 1.745a.502.502 0 0 0-.251.435zM19.5 13.237l1.5.874v1.778l-1.5.874-1.5-.874v-1.778l1.5-.874m0-2.235a.5.5 0 0 0-.254.069l-2.995 1.745a.502.502 0 0 0-.251.435v3.497c0 .18.095.346.251.436l2.995 1.745a.5.5 0 0 0 .508 0l2.995-1.745a.502.502 0 0 0 .251-.435v-3.497a.504.504 0 0 0-.251-.436l-2.995-1.745a.5.5 0 0 0-.254-.069zM29.094 17.726 26 15.905V14.11l1.5-.874 1.5.874v1.25c0 .167.141.192.235.136.378-.222 1.517-.883 1.517-.883a.499.499 0 0 0 .248-.431v-.93a.502.502 0 0 0-.251-.436l-2.995-1.745a.503.503 0 0 0-.508 0l-2.995 1.745a.502.502 0 0 0-.251.435v3.497c0 .18.095.346.251.436l2.905 1.756a.499.499 0 0 0 .51.004l1.428-.831a.224.224 0 0 0 0-.387z" />
                                    <path fill={color2} d="M26.643 14.503v.998L27.5 16l.857-.499v-.998l-.857-.499z" />
                                </svg>
                                {show2 && <motion.h1 initial={{ x: -40, opacity: 0 }} animate={{ x: [-10, 0], opacity: 1 }} transition={{ delay: 0.3, duration: 0.3 }} className='font-bold text-blue-700'>Backend</motion.h1>}
                            </motion.div>

                            <motion.div
                                onClick={() => { changePreview(3) }}
                                initial={{ width: "100px" }}
                                animate={show3 ? { width: "200px" } : { width: "50px" }}
                                transition={{ duration: 0.5 }}
                                className={show3 ? 'py-4 px-4 gap-2 rounded-3xl bg-purple-300 flex justify-start' : 'py-4 rounded-3xl  flex justify-center'}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 64 64"
                                    width={25}
                                    height={25}
                                >
                                    <path fill={color3} d="M0 34.89v-5.78l19.984-10.128v6.008L7.967 32.026l12.016 6.983v6.008L0 34.89zM44.016 45.018V39.01l12.016-6.983-12.016-7.036v-6.008L64 29.11v5.779L44.016 45.018zM24 51l10.398-38H40l-9 38h-7z" />
                                </svg>
                                {show3 && <motion.h1 initial={{ x: -40, opacity: 0 }} animate={{ x: [-10, 0], opacity: 1 }} transition={{ delay: 0.3, duration: 0.3 }} className=' text-purple-700 font-bold'>Other</motion.h1>}
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className=' flex flex-col gap-2'
                        >
                            {show1 && frontend.map(language => {
                                return (
                                    <motion.div variants={item} key={language.id} className='p-3 flex items-center gap-4 rounded-xl bg-[#EAEAEA]'>

                                        {language.icon}
                                        {language.title}

                                    </motion.div>
                                )
                            })}
                            {show2 && backend.map(language => {
                                return (
                                    <motion.div variants={item} key={language.id} className='p-3 flex items-center gap-4 rounded-xl bg-[#EAEAEA]'>

                                        {language.icon}
                                        {language.title}

                                    </motion.div>
                                )
                            })}
                            {show3 && otherLanguages.map(language => {
                                return (
                                    <motion.div variants={item} key={language.id} className='p-3 flex items-center gap-4 rounded-xl bg-[#EAEAEA]'>

                                        {language.icon}
                                        {language.title}

                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </motion.div>
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

            {/* Achievements */}
            <motion.div variants={item} className='grid grid-cols-2 gap-4 w-full'>
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

        </motion.div>
    )
}


export default AboutScreen
