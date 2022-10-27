import { NextPage } from 'next'
import clsx from 'clsx'
import { useState } from 'react'
import { XMarkIcon, HomeIcon, PlusCircleIcon, ShoppingCartIcon, Squares2X2Icon, UserCircleIcon, CubeIcon, QueueListIcon, CurrencyDollarIcon, ChartBarIcon } from '@heroicons/react/24/outline/'
import { HomeIcon as HomeIconSolid, PlusCircleIcon as PlusCircleSolid  } from '@heroicons/react/24/solid/'


interface Props {}

{ /* Products */ }
<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
<path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
</svg>

{/* Orders */}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
</svg>


{/* Balances */}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

{/* Analytics */}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
</svg>

{/* My Purchases */}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
</svg>

{/* Settings */}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

{/* Close */}
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>



const Nav: React.FC<Props> = ({}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [isActive, setIsActive] = useState(true) 

    const openModal = () => setIsModalOpen(true)

    const closeModal = () => setIsModalOpen(false)


    return <div className="fixed w-screen h-screen">

        <div>
            
            {/* Overlay */}
            <div className={clsx("fixed w-screen h-screen bg-slate-400 bg-opacity-80 backdrop-blur-sm transition-opacity", isModalOpen ? 'translate-x-0 opacity-100' :'translate-x-full opacity-0')}>
                
            </div>

            <div className={clsx("fixed w-full bottom-0 z-10 text-slate-600 flex flex-col transition", isModalOpen ? 'translate-y-0' : 'translate-y-full')}>

                {/* X Icon */}
                <div className="ml-auto mr-2 bg-white p-1.5 rounded-full " onClick={closeModal}>
                    <XMarkIcon className="w-8 h-8" />
                </div>

                <div className="bg-white mt-2 p-2 border w-full rounded-t-2xl space-y-1">
                    <div className="flex items-center rounded-lg bg-white hover:bg-slate-100 hover:cursor-pointer p-2">
                        <div>
                            <CubeIcon className="w-8 h-8" />
                        </div>
                        <p className="text-lg ml-2">Products</p>
                    </div>


                    <div className="flex items-center rounded-lg bg-white hover:bg-slate-100 hover:cursor-pointer p-2">
                        <div>
                            <QueueListIcon className="w-8 h-8" />
                        </div>
                        <p className="text-lg ml-2">Orders</p>
                    </div>

                    <div className="flex items-center rounded-lg bg-white hover:bg-slate-100 hover:cursor-pointer p-2">
                        <div>
                            <CurrencyDollarIcon className="w-8 h-8" />
                        </div>
                        <p className="text-lg ml-2">Balances</p>
                    </div>

                    <div className="flex items-center rounded-lg bg-white hover:bg-slate-100 hover:cursor-pointer p-2">
                        <div>
                            <ChartBarIcon className="w-8 h-8" />
                        </div>
                        <p className="text-lg ml-2">Analytics</p>
                    </div>
                </div>

            </div>

            {/* Bottom Nav */}
            <div className="fixed bottom-0 w-full bg-white backdrop-blur-sm bg-opacity-95 flex px-4 py-2 gap-1">

                <div className={clsx("w-full flex flex-col items-center p-2 rounded-lg gap-1", isActive ? 'bg-blue-600/10 text-blue-600' : "text-slate-600 bg-none" )}>
                    {isActive ? <HomeIconSolid className="w-6 h-6" /> : <HomeIcon className="w-6 h-6"/>}
                    
                    <p className="text-sm">Home</p>
                </div>
                
                <div className={clsx("w-full flex flex-col items-center p-2 text-slate-600 rounded-lg gap-1", )}>
                    <PlusCircleIcon className="w-6 h-6"/>
                    <p className="text-sm">Create</p>
                </div>

                <div className={clsx("w-full flex flex-col items-center p-2 text-slate-600 rounded-lg gap-1")}>
                    <ShoppingCartIcon className="w-6 h-6"/>
                    <p className="text-sm">Cart</p>
                </div>

                <div onClick={openModal} className={clsx("w-full flex flex-col items-center p-2 text-slate-600 rounded-lg gap-1")}>
                    <Squares2X2Icon className="w-6 h-6"/>
                    <p className="text-sm">Shop</p>
                </div>

                <div className={clsx("w-full flex flex-col items-center p-2 text-slate-600 rounded-lg gap-1",)}>
                    <UserCircleIcon className="w-6 h-6"/>
                    <p className="text-sm">Account</p>
                </div>

            </div>
        </div>

    </div>

}

export default Nav