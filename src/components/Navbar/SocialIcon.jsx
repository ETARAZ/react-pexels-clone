import React from 'react'
import { Link } from 'react-router-dom'
function SocialIcon({ mobile,icon}) {
    return (
        <Link className={`  ${mobile ? 'text-white text-2xl' : 'text-[#232a34] hover:bg-[#232a34] hover:text-white group py-3 px-6'} flex  items-center justify-center `} to="#">
            {icon}
        </Link>
    )
}

export default SocialIcon
