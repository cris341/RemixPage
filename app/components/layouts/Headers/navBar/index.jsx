import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { FaFacebookF, FaTwitter, FaSearch } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';

// import {
//     ArrowPathIcon,
//     Bars3Icon,
//     BookmarkSquareIcon,
//     CalendarIcon,
//     ChartBarIcon,
//     CursorArrowRaysIcon,
//     LifebuoyIcon,
//     PhoneIcon,
//     PlayIcon,
//     ShieldCheckIcon,
//     Squares2X2Icon,
//     XMarkIcon,
// } from '@heroicons/react/24/outline'
import logo from './Spice-Logo-3.jpg'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from '@remix-run/react'
const Links = [
    {
        name: "Home",
        href: "#"
    },
    {
        name: "Events",
        href: "#"
    },
    {
        name: "Holidays",
        href: "#"
    },
    {
        name: "Groups",
        href: "#"
    },
    {
        name: "Join Spice",
        href: "#"
    },
    {
        name: "News",
        href: "#"
    },
    {
        name: "Contact",
        href: "#"
    },
]


export default function NavBar() {

    return (
        <>
            <div className={'relative bg-white'}>
                <div className="h-auto mx-auto max-w-7xl px-10 sm:px-30 pt-8 pb-5">
                    <div className="md:grid grid-cols-4 grid-flow-col gap-1 hidden ">
                        <div class=" row-span-3 col-span-1 w-3/4 justify-self-center">
                            <Link to={'#'} className="w-3/4">
                                <img src={logo} className={'h-20 '} />
                            </Link>
                        </div>
                        <div class="row-span-1 col-span-3 grid grid-cols-9 gap-1 border-b border-gray-300 ">
                            <div className='flex items-center content-center justify-self-center'>
                                <a href='#' className='bg-gray-200 red rounded-full p-2 m-2 hover:bg-blue-200'>
                                    <FaFacebookF />
                                </a>
                                <a href='#' className='bg-gray-200 red rounded-full p-2 m-2 hover:bg-blue-200'>
                                    <FaTwitter />
                                </a>

                            </div>
                            <div className=' flex items-center col-span-2 text-xs ' >
                                <a href='#'>
                                    <strong>
                                        ? Help Center
                                    </strong>
                                </a>
                            </div>
                            <div className=' flex items-center col-span-2 hover:text-yellow-400'>
                                <a href='#'>
                                    Request an Info Pack
                                </a>
                            </div>

                            <div className='col-span-2 flex items-center'>
                                <button class="bg-transparent font-semibold hover:text-yellow-400  px-10 border   rounded-full">
                                    Log in
                                </button>
                            </div>
                            <div className='col-span-2 flex items-center'>
                                <button class="bg-transparent  font-semibold hover:text-yellow-400  px-10 bg-red-700 text-white rounded-full">
                                    Join now
                                </button>
                            </div>
                        </div>
                        <div className="row-span-2 col-span-3 grid grid-cols-9 text-center  ">
                            {Links && Links.map((L, index) => (
                                <div key={index}>
                                    <Link to={L.href} className="hover:text-red-500">
                                        <strong>
                                            {L.name}
                                        </strong>
                                    </Link>
                                </div>
                            ))}

                            <div className='flex col-span-2'>
                                <input class="shadow appearance-none border rounded w-full   text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Event and Holidays" />
                                <button className='ml-2 bg-red-400 p-2  hover:bg-red-600 rounded-full'>
                                    <FaSearch color='white' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='md:hidden flex flex-row'>
                        <div>
                            <Link to={'#'} className="w-3/4">
                                <AiOutlineMenu />
                            </Link>

                        </div>
                        <div className='flex justify-center w-full'>
                            <Link to={'#'}>
                                <img src={logo} className={'h-16 '} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}