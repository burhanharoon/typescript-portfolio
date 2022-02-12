import type { NextPage } from 'next'

const Button: NextPage = ({ width, title }) => {


    return (


        <div className={`about-button relative w-72 h-14 px-9 pr-16 flex justify-center items-center gap-4 text-white border border-yellow-prime rounded-full`}>
            <div className='uppercase font-bold'>More About me</div>
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
    )
}

export default Button
