import type { NextPage } from 'next'
import Link from 'next/link';
import { useState } from 'react'
import { motion } from "framer-motion"
var _ = require('lodash');

const Footer: NextPage = () => {
    type Tabs = {
        home: Boolean;
        about: Boolean;
        portfolio: Boolean;
    }

    const initialState: Tabs = {
        home: true,
        about: false,
        portfolio: false
    }

    const [tabs, setTabs] = useState(initialState)

    const selectTab = (tabName: string) => {
        let temp!: Tabs;
        Object.keys(tabs).forEach(e => {
            if (e == tabName) {
                let obj = { [e]: true }
                temp = { ...temp, ...obj }
            } else {
                let obj = { [e]: false }
                temp = { ...temp, ...obj }
            }
        });
        // if (!_.isEqual(tabs, temp)) {
        //     setTabs(temp)
        // }
        setTabs(temp)

    }

    return (

        <div className=' fixed bottom-0 bg-light-black-prime w-full flex justify-around items-center py-2 px-4'>
            <Link href="/">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => selectTab('home')} className={tabs.home ? 'bg-yellow-prime p-3 w-12 h-12 rounded-full flex justify-center items-center' : 'bg-tabs-black-prime p-3 w-12 h-12 rounded-full flex justify-center items-center'}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={25}
                        height={25}
                        viewBox="0 0 1792 1792"
                    >
                        <path
                            d="M1472 992v480q0 26-19 45t-45 19h-384v-384H768v384H384q-26 0-45-19t-19-45V992q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69-62 74q-8 9-21 11h-3q-13 0-21-7L896 424l-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204V288q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"
                            fill="#fff"
                            className="color000 svgShape"
                        />
                    </svg>
                </motion.div>
            </Link>
            <Link href="/about">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} onClick={() => selectTab('about')} className={tabs.about ? 'bg-yellow-prime p-3 w-12 h-12 rounded-full flex justify-center items-center' : 'bg-tabs-black-prime p-3 w-12 h-12 rounded-full flex justify-center items-center'}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 512 512">
                        <circle
                            cx={256.1}
                            cy={128.6}
                            r={128.6}
                            fill="#fff"
                            transform="rotate(-45.001 256.1 128.604)"
                            className="color231f20 svgShape"
                        />
                        <path
                            fill="#fff"
                            d="M403.6 364.5c-9.9-9.9-63.1-61.1-147.5-61.1s-137.7 51.3-147.5 61.1C48.9 424.2 47.5 498.1 47.5 512h417.2c0-13.9-1.4-87.8-61.1-147.5z"
                            className="color231f20 svgShape"
                        />
                    </svg>
                </motion.div>
            </Link>

            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} onClick={() => selectTab('portfolio')} className={tabs.portfolio ? 'bg-yellow-prime p-3 w-12 h-12 rounded-full flex justify-center items-center' : 'bg-tabs-black-prime p-3 w-12 h-12 rounded-full flex justify-center items-center'}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 1792 1792"
                >
                    <path
                        fill='#fff'
                        d="M640 256h512v-128h-512v128zm1152 640v480q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-480h672v160q0 26 19 45t45 19h320q26 0 45-19t19-45v-160h672zm-768 0v128h-256v-128h256zm768-480v384h-1792v-384q0-66 47-113t113-47h352v-160q0-40 28-68t68-28h576q40 0 68 28t28 68v160h352q66 0 113 47t47 113z" />
                </svg>
            </motion.div>
        </div>

    )
}

export default Footer
