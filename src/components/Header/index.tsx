import { NextPage } from 'next'

interface Props {}

const Header: React.FC<Props> = ({}) => {
  return <div className="border fixed flex p-4 gap-2 inset-x-0 top-0 bg-white">

    <div className="">
        <svg className="w-10" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="42" height="42" rx="6.00469" fill="#2563EB"/>
            <path d="M24.5389 31.6323C25.4813 31.0883 25.8042 29.8832 25.2601 28.9409C24.716 27.9985 23.511 27.6756 22.5686 28.2197C21.6263 28.7638 21.3034 29.9688 21.8474 30.9112C22.3915 31.8535 23.5965 32.1764 24.5389 31.6323Z" fill="#F8FAFC"/>
            <path d="M32.827 26.8474C33.7694 26.3033 34.0923 25.0983 33.5482 24.156C33.0041 23.2136 31.7991 22.8907 30.8567 23.4348C29.9143 23.9789 29.5915 25.1839 30.1355 26.1262C30.6796 27.0686 31.8846 27.3915 32.827 26.8474Z" fill="#F8FAFC"/>
            <path d="M6.00488 16.9819L12.0814 17.3738L20.7113 26.6919L30.4617 21.0625L28.1143 11.3673L18.8515 16.7153M21.3847 21.1029L29.185 16.5994" stroke="#F8FAFC" stroke-width="3.00235" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>

    <div className="relative text-slate-500 w-full">
        <div className="absolute h-full">
            <svg className="ml-2 w-5 h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        </div>
        <input 
            type="search" 
            placeholder="Search" 
            className="rounded-lg pl-8 p-2 bg-slate-100 text-current w-full" />
    </div>

    <div className="relative px-2 flex items-center justify-items-center rounded-lg">
        <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
        </div>
        <div className="absolute text-[10px] top-0.5 right-0.5 bg-red-500 w-4 h-4 leading-4 text-white text-center rounded-md">
            2
        </div>
    </div>

    <div className="relative px-2 flex items-center justify-items-center rounded-lg">
        <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>

        </div>
        <div className="absolute top-0.5 right-0.5 text-[10px] bg-red-500 w-4 h-4 leading-4 text-white text-center rounded-md">
            1
        </div>
    </div>

  </div>
}

export default Header