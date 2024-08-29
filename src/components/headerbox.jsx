import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'


function HeaderBox() {
    return (
        <div className="flex flex-1 flex-col lg:flex-row justify-between">
            <div className="flex gap-5 flex-shrink flex-row items-center justify-center">
                <div className="lg:w-20 lg:h-20 p-5 rounded-full border border-[#D0D0D0] flex justify-center items-center text-2xl font-semibold">
                    2+
                </div>
                <div className="items-center">
                    <div className='text-md mb-0 font-semibold'>years,</div>
                    <div className='text-md mt-0 font-semibold'>experience</div>
                </div>
                <div className="border-r border-r-[#D0D0D0] h-10 justify-self-center self-center mx-3"></div>
                <a href="https://drive.google.com/file/d/1TO4qzkUKhjV5YByTJDdjrLcXdANZlB_h/view?usp=sharing" target='_blank' className="hidden gap-3 md:flex lg:flex text-sm justify-center items-center px-5 py-4 bg-[#E16349] font-semibold rounded-full text-[#fcfcfc] cursor-pointer">
                    Download Resume  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </a>
                <div className="flex gap-3 md:hidden lg:hidden text-sm justify-center items-center px-5 py-4 bg-[#E16349] font-semibold rounded-full text-[#fcfcfc] cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </div>
                {/* <a id="cv" className="w-12 h-12 rounded-full border border-[#D0D0D0] flex justify-center items-center text-2xl font-semibold cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                </a>
                <Tooltip anchorSelect="#cv" place="top">
                    Download CV
                </Tooltip> */}
            </div>
            <div className="flex gap-24 items-center justify-center">
                <div className="items-center font-medium text-4xl">
                    <div className='mb-0 font-medium'>Hey, Good to see you👋</div>
                    <div className='mt-0 text-[#D0D0D0] flex'>
                        <div className="border-r border-r-[black] h-7 justify-self-center self-center mx-0"></div>
                        Let's dive in then!</div>
                </div>
                <a id="aboutme" className="w-24 h-24 bg-[#ffffff] rounded-full flex justify-center items-center text-sm flex-col cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>

                    B'lore, IN
                </a>
                <Tooltip anchorSelect="#aboutme" place="top">
                    Location
                </Tooltip>
            </div>
        </div>
    );
}

export default HeaderBox;