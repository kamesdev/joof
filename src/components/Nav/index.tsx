import { NextPage } from 'next'
import clsx from 'clsx'
import { Fragment, ReactEventHandler, useState } from 'react'
import { XMarkIcon, HomeIcon, PlusCircleIcon, ShoppingCartIcon, Squares2X2Icon, UserCircleIcon, CubeIcon, QueueListIcon, CurrencyDollarIcon, ChartBarIcon, TagIcon, Cog6ToothIcon, ArrowLeftOnRectangleIcon, ArrowRightIcon } from '@heroicons/react/24/outline/'
import { HomeIcon as HomeIconSolid, PlusCircleIcon as PlusCircleSolid  } from '@heroicons/react/24/solid/'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dialog, Transition } from '@headlessui/react'

interface Props {}

type ModalName = "cart" | "shop" | "account" | "";

const Nav: React.FC<Props> = ({}) => {
    
    const router = useRouter()

    const homePageActive = router.pathname === '/' || ''
    const createPageActive = router.pathname === '/create'

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [openedModalName, setOpenedModalName] = useState("")

    const openModal = (modalName: ModalName) => {
        setIsModalOpen(true)
        setOpenedModalName(modalName)
    }

    const closeModal = () => setIsModalOpen(false)

    const shopModalContent = (<>
        <Link href="/">
            <a className="flex items-center rounded-lg bg-white hover:bg-slate-100 hover:cursor-pointer p-2">
                <div>
                    <CubeIcon className="w-8 h-8" />
                </div>
                <p className="text-lg ml-2">Products</p>
            </a>    
        </Link>

        <Link href="">
            <a className="flex items-center rounded-lg bg-white hover:bg-slate-100 hover:cursor-pointer p-2">
                <div>
                    <QueueListIcon className="w-8 h-8" />
                </div>
                <p className="text-lg ml-2">Orders</p>
            </a>
        </Link>


        <Link href="">
            <a className="flex items-center rounded-lg bg-white hover:bg-slate-100 hover:cursor-pointer p-2">
                <div>
                    <CurrencyDollarIcon className="w-8 h-8" />
                </div>
                <p className="text-lg ml-2">Balances</p>
            </a>
        </Link>


        <Link href="">        
            <a className="flex items-center rounded-lg bg-white hover:bg-slate-100 hover:cursor-pointer p-2">
                <div>
                    <ChartBarIcon className="w-8 h-8" />
                </div>
                <p className="text-lg ml-2">Analytics</p>
            </a>
        </Link>
    </>)

    const cartModalContent = (
        <>
            <h1 className="text-2xl">Cart</h1>
        </>
    )

    const accountModalContent = (
        <>
            <Link href="">
                <a className="flex items-center  rounded-lg bg-white hover:bg-slate-100 hover:cursor-pointer p-2">
                    <div className="w-9 h-9 bg-gradient-to-br from-red-500 to-violet-400 rounded-lg">
                    </div>
                    <p className="text-lg ml-2 font-bold">kamesdev</p>
                    <div className="w-6 h-6 ml-auto">
                        <ArrowRightIcon />
                    </div>
                </a>  
            </Link>

            <Link href="">
                <a className="flex items-center rounded-lg bg-white hover:bg-slate-100 hover:cursor-pointer p-2">
                    <div>
                        <TagIcon className="w-8 h-8" />
                    </div>
                    <p className="text-lg ml-2">My Purchases</p>
                </a>
            </Link>

            <Link href="">
                <a className="flex items-center rounded-lg bg-white hover:bg-slate-100 hover:cursor-pointer p-2">
                    <div>
                        <Cog6ToothIcon className="w-8 h-8" />
                    </div>
                    <p className="text-lg ml-2">Settings</p>
                </a>
            </Link>

            <Link href="">
                <a className="flex items-center rounded-lg bg-white hover:bg-slate-100 hover:cursor-pointer p-2">
                    <div className="w-8 h-8 bg-slate-200 grid place-items-center rounded-md">
                        <p className="text-sm">OFF</p>
                    </div>
                    <p className="text-lg ml-2">Dark Mode</p>
                </a>
            </Link>

            <Link href="">
                <a className="flex items-center rounded-lg bg-white hover:bg-slate-100 hover:cursor-pointer p-2">
                    <div className="w-8 h-8">
                        <ArrowLeftOnRectangleIcon />
                    </div>
                    <p className="text-lg ml-2">Logout</p>
                </a>

            </Link>
        </>
    )

    return <div className="sm:hidden fixed bottom-0 inset-x-0 flex items-center  bg-white">

        {/* SubNav Overlay */}
        <Transition appear show={!!isModalOpen} as={Fragment}>
            
            <Dialog as="div"  onClose={closeModal}>
                {/* Backdrop Overlay */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >

                    <div className=" fixed inset-0 bg-slate-600 bg-opacity-50 backdrop-blur-sm" aria-hidden={true}></div>

                </Transition.Child>

                <div className="fixed inset-0 z-10">
                    <div className="fixed inset-0 flex items-end">
                    
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom=" translate-y-full"
                        enterTo=" translate-y-0"
                        leave="ease-in duration-200"
                        leaveFrom=" translate-y-0"
                        leaveTo=" translate-y-full"
                    >
                        <Dialog.Panel className="w-full transition-all">

                            {/* Close Button */}
                            <button className="absolute right-2 -top-12 inline-block bg-white p-1.5 rounded-full " onClick={closeModal}>
                                <XMarkIcon className="w-8 h-8" />
                            </button>

                            <div className={clsx("w-full  text-slate-600 flex flex-col transition-all")}>

                            

                                <div className="bg-white mt-2 p-2 w-full rounded-t-2xl ">

                                    
                                    <div className="space-y-1">

                                        {openedModalName === 'cart' && cartModalContent}
                                        {openedModalName === 'shop' && shopModalContent}
                                        {openedModalName === 'account' && accountModalContent}

                                    </div>
                    
                                </div>

                            </div>
                            
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
                </div>

                
            </Dialog>
        </Transition>

        {/* Bottom Nav */}
        <nav className="w-full">
            <ul className="w-full backdrop-blur-sm bg-opacity-95 flex px-4 py-2 gap-1 max-w-md m-auto">

                <li className="flex-1">
                    <Link href={"/"}>
                        <a href="/" className={clsx("w-full flex flex-col items-center p-2 rounded-lg gap-1", homePageActive ? 'bg-blue-600/10 text-blue-600' : "text-slate-600 bg-none" )}>
                            {homePageActive ? <HomeIconSolid className="w-6 h-6" /> : <HomeIcon className="w-6 h-6"/>}
                            
                            <p className="text-sm">Home</p>
                        </a>
                    </Link>
                </li>

                <li className="flex-1">
                    <Link href={"/create"}>
                        <a href="/" className={clsx("w-full flex flex-col items-center p-2 rounded-lg gap-1", createPageActive ? 'bg-blue-600/10 text-blue-600' : "text-slate-600 bg-none" )}>
                            {createPageActive ? <PlusCircleSolid className="w-6 h-6"/> : <PlusCircleIcon className="w-6 h-6"/>  }
                            
                            <p className="text-sm">Create</p>
                        </a>
                    </Link>
                </li>

                
                <li className="flex-1">

                    <button className={clsx("w-full flex flex-col items-center p-2 rounded-lg gap-1", "text-slate-600 bg-none" )} onClick={() => openModal('cart')}>
                        <ShoppingCartIcon className="w-6 h-6"/>
                        
                        <p className="text-sm">Cart</p>
                    </button>

                </li>

                <li className="flex-1">
                    <button className={clsx("w-full flex flex-col items-center p-2 rounded-lg gap-1", "text-slate-600 bg-none" )} onClick={() => openModal('shop')}>
                    <Squares2X2Icon className="w-6 h-6"/>
                        
                        <p className="text-sm">Shop</p>
                    </button>
                </li>

                <li className="flex-1">
                    <button className={clsx("w-full flex flex-col items-center p-2 rounded-lg gap-1", "text-slate-600 bg-none" )} onClick={() => openModal('account')}>
                        <UserCircleIcon className="w-6 h-6"/>
                            
                        <p className="text-sm">Account</p>
                    </button>
                </li>

            </ul>
        </nav>

    </div>

}

export default Nav