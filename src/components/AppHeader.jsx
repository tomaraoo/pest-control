import React from 'react'
import logo from '../assets/logo.png'
import { Menu } from 'lucide-react'

function AppHeader() {
    return (
        <div className="sticky top-2 z-50 mx-5">
            <div className="flex justify-between items-center rounded-md bg-[#FCB444] px-5 py-2 lg:px-15 mt-7">
                <a href='/'>
                    <img
                        src={logo}
                        alt="Milpestcon"
                        className="w-15"
                    />
                </a>

                <div className="justify-self-end">
                    <p className="lg:text-xl text-xs uppercase"> Milpestcon Anay Pest Control</p>
                </div>

            </div>
        </div>
    )
}

export default AppHeader