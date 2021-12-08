import React from 'react'
import { NavLink } from 'react-router-dom'
function Tab({text}) {
    return (
        <NavLink to={text==="home" ? "/" : "/progress"} className="capitalize inline-flex tracking-widest relative text-17 h-full justify-center text-[#5e5e5e] hover:text-[#0064f9] transition-colors font-semibold leading-4 p-5 items-center">
            {text}
            <div className="bg-[#0064f9] show-border opacity-0 h-tab rounded-tr-sm rounded-tl-sm absolute bottom-0 w-full">
            </div>
        </NavLink>
    )
}

export default Tab
