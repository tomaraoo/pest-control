import React from 'react'
import logo from '../assets/logo.png'
import { Menu } from 'lucide-react'

function AppHeader() {
    return (
        <div className="sticky top-2 z-50 mx-5">
            <div className="relative grid grid-cols-2 items-center rounded-full bg-[#FCB444] px-5 py-2 lg:px-15 mt-7">
                <div className="justify-self-start">
                    <p className="text-2xl lg:block hidden uppercase">Milpestcon</p>
                </div>

                <div className="justify-self-end">
                    <p className="lg:text-2xl text-xs uppercase">Anay Pest Control</p>
                </div>

                <div className='rounded-full bg-[var(--bg)] p-1 absolute lg:left-1/2 md:left-[15%] left-[25%] top-full -translate-x-1/2 -translate-y-[55%]'>
                    <img
                        src={logo}
                        alt="Milpestcon"
                        className="w-26"
                    />
                </div>
            </div>
        </div>
    )
}

export default AppHeader