import { ArrowLeftIcon, ArrowLeftOnRectangleIcon, ArrowRightIcon, BellIcon, ChartBarIcon, ChatBubbleLeftEllipsisIcon, Cog6ToothIcon, CubeIcon, CurrencyDollarIcon, MagnifyingGlassIcon, MoonIcon, QueueListIcon, ShoppingCartIcon, TagIcon, UserCircleIcon, UserIcon, XCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NextPage } from 'next'
import Image from 'next/image'
import { useState, Fragment } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import Link from 'next/link'
import { FC } from 'react'

interface Props {}

const Header: FC<Props> = ({}) => {

    const [isSearchPopoverOpen, setIsSearchPopoverOpen] = useState(false)
    const [isNavOpen, setIsNavOpen] = useState(false)

    const openNav = () => {
        setIsNavOpen(true)
    }

    const closeNav = () => {
        setIsNavOpen(false)
    }

    const openSearchPopover = () => {
        setIsSearchPopoverOpen(true)
    }

    const closeSearchPopover = () => setIsSearchPopoverOpen(false)

    return <div className="fixed p-2 gap-2 inset-x-0 top-0 bg-white sm:p-3">

    {/* Desktop Nav */}
    <Transition appear show={isNavOpen} as={Fragment}>

        <Dialog as="div" onClose={closeNav}>

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

                <div className="fixed inset-0 bg-slate-600 bg-opacity-50 backdrop-blur-sm" aria-hidden={true}></div>

            </Transition.Child>

            <div className="fixed inset-0 z-10 hidden sm:block overflow-hidden">

                <div className="fixed inset-0 flex justify-end ">

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom=" translate-x-full"
                        enterTo=" translate-x-0"
                        leave="ease-in duration-200"
                        leaveFrom=" translate-x-0"
                        leaveTo=" translate-x-full"
                    >

                        <Dialog.Panel className="flex flex-col m-2  w-full max-w-xs">       
                            
                            {/* Close Button */}
                            

                            <div className="bg-white text-lg rounded-2xl  flex flex-col p-4 h-full text-slate-600">
                                <button className="absolute right-4 top-4 hover:bg-white p-1.5 rounded-full " onClick={closeNav}>
                                    <XMarkIcon className="w-8 h-8" />
                                </button>

                                <div className="flex flex-col gap-1 overflow-auto">

                                        <Link href="">
                                            <a className="flex items-center  rounded-lg bg-white hover:bg-slate-100 hover:cursor-pointer p-2">
                                                <div className="w-9 h-9 bg-gradient-to-br from-red-500 to-violet-400 rounded-lg">
                                                </div>
                                                <p className="text-lg ml-2 font-bold">kamesdev</p>

                                            </a>  
                                        </Link>

                                    <div className="mt-4">

                                        <Link href="">
                                            <a className="flex items-center rounded-lg bg-white hover:bg-slate-100 hover:cursor-pointer p-2">
                                                <div>
                                                    <UserCircleIcon className="w-8 h-8" />
                                                </div>
                                                <p className="text-lg ml-2">My Profile</p>
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


                                    </div>

                                    <div className="mt-4">
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
                                    </div>

                                    <div className="mt-4">
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
                                                <div className="w-8 h-8">
                                                    <MoonIcon  />
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
                                    </div>
                                </div>  

                                <button
                                    className="border font-semibold border-blue-600/50 p-2 mt-auto rounded-lg text-blue-600"
                                >Create Product</button>

                            </div>

                        </Dialog.Panel>

                    </Transition.Child>



                </div>

            </div>

        </Dialog>

    </Transition>

    {/* Search Mobile */}
    <Dialog as="div" onClose={closeSearchPopover} open={isSearchPopoverOpen}>
        <div className="fixed inset-0 z-20 backdrop-blur-md bg-white">
            <div className="flex w-full h-full flex-col">

                <div className="items-center flex p-2 px-4 gap-2 w-full top-0 ">

                    <button className="w-6 h-6" onClick={closeSearchPopover}>
                        <ArrowLeftIcon />
                    </button>
                    
                    <div className="relative w-full h-full text-blue-900">

                        <div className="absolute flex h-full w-6 right-3 grou">
                            <MagnifyingGlassIcon stroke="currentColor" />
                        </div>

                        <input placeholder="Search products" type="search" autoFocus={true} className="bg-slate-100 p-3 pr-12 w-full rounded-lg focus:outline-blue-600 focus:bg-white" />

                    </div>

                </div>

                <div className="p-4">
                    <h2>Recent Searches</h2>

                    <div className="flex items-center py-3 text-slate-600">
                        <div className="w-6 h-6">
                            <MagnifyingGlassIcon />
                        </div>
                        <p className="font-semibold ml-2">
                            ebook
                        </p>

                        <div className="ml-auto w-6 h-6">
                            <XMarkIcon />
                        </div>
                    </div>

                    <div className="flex items-center py-3 text-slate-600">
                        <div className="w-6 h-6">
                            <MagnifyingGlassIcon />
                        </div>
                        <p className="font-semibold ml-2">
                            ebook
                        </p>

                        <div className="ml-auto w-6 h-6">
                            <XMarkIcon />
                        </div>
                    </div>

                    <div className="flex items-center py-3 text-slate-600">
                        <div className="w-6 h-6">
                            <MagnifyingGlassIcon />
                        </div>
                        <p className="font-semibold ml-2">
                            ebook
                        </p>

                        <div className="ml-auto w-6 h-6">
                            <XMarkIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Dialog>

    {/* Menu */}
    <div className="w- flex max-w-screen-xl m-auto text-slate-600 items-center">

        <Link href="/">
            <a className="block flex-shrink-0">
                <img 
                    alt='Logo'
                    src='/logo-dark.svg'
                    className="w-auto h-12"
                />
            </a>
        </Link>

        <div className="hidden md:flex mx-8 w-full max-w-screen-sm h-fit">

            <div className="relative w-full h-full text-blue-900">

            <div className="absolute flex h-full w-6 right-3">
                <MagnifyingGlassIcon stroke="currentColor"/>
            </div>

            <input placeholder="Search products" type="search" autoFocus={true} className="bg-slate-100 p-3 pr-12 w-full rounded-lg focus:outline-blue-600 focus:bg-white" />

            </div>

        </div>

        <button 
            onClick={openSearchPopover}
            className="md:hidden ml-auto relative px-3 flex items-center justify-items-center rounded-lg transition-all hover:bg-slate-100 cursor-pointer">
            <div className="w-6 h-6">
                <MagnifyingGlassIcon />
            </div>
        </button>

        <button className="hidden mr-2 lg:block md:ml-auto px-4 py-2 self-center bg-blue-600/5 text-blue-600 rounded-lg font-semibold">
            Create
        </button>

        <button className="hidden sm:flex md:ml-0 relative p-3 items-center justify-items-center hover:bg-slate-100 rounded-lg">
            <div className="w-6 h-6">
                <ShoppingCartIcon />
            </div>
            <div className="absolute text-[10px] top-1 right-1 bg-red-500 w-4 h-4 leading-4 text-white text-center rounded-md">
                2
            </div>
        </button>

        <button className=" relative p-3 flex items-center justify-items-center  hover:bg-slate-100 rounded-lg">
            <div className="w-6 h-6">
                <BellIcon />
            </div>
            <div className="absolute text-[10px] top-1 right-1 bg-red-500 w-4 h-4 leading-4 text-white text-center rounded-md">
                2
            </div>
        </button>

        <button className="relative p-3 flex items-center justify-items-center hover:bg-slate-100 rounded-lg">
            <div className="w-6 h-6">
                <ChatBubbleLeftEllipsisIcon />
            </div>
            <div className="absolute top-1 right-1 text-[10px] bg-red-500 w-4 h-4 leading-4 text-white text-center rounded-md">
                1
            </div>
        </button>

        <button 
            onClick={openNav}
            className="hidden sm:flex  items-center p-3 hover:bg-slate-100 rounded-lg">
            <div className="bg-gradient-to-br from-green-400 to-blue-500 l rounded-lg w-8 h-8 ">
            </div>
        </button>
    </div>

    

  </div>
}

export default Header