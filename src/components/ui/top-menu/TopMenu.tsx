'use client'
import { titleFont } from "@/config/fonts"
import { useUiStore } from "@/store"
import Link from "next/link"
import { IoCartOutline, IoSearchOutline } from "react-icons/io5"

export const TopMenu = () => {

    const openSideMenu = useUiStore(state => state.openSideMenu);


    return (
        <nav className="flex px-5 justify-between items-center w-full">

            {/* logo  */}
            <div>
                <Link href="/">
                    <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
                    <span> | shop</span>
                </Link>
            </div>

            {/* center menu */}
            <div className="hidden sm:block">

                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href='/category/men'>Hombres
                </Link>

                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href='/category/women'>Mujeres
                </Link>

                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href='/category/kids'>Niños
                </Link>

            </div>

            {/* search, cart, menu */}
            <div className="flex items-center">
                <Link
                    href='/search'
                    className="mx-2"
                >
                    <IoSearchOutline className="w-5 h-5" />
                </Link>

                <Link
                    href='/cart'
                    className="mx-2"
                >
                    <div className="relative">
                        <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">3</span>
                        <IoCartOutline className="w-5 h-5" />
                    </div>
                </Link>

                <button
                    onClick={() => openSideMenu()}
                    className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">Menu</button>
            </div>

        </nav>
    )
}
