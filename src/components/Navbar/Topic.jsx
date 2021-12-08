import React from 'react'
import { Link } from 'react-router-dom'

function Topic({img,text}) {
    return (
       <Link className="hover:bg-[#e8e8e8] inline-flex mr-2 mb-2 leading-6 text-[#5e5e5e] bg-white shadow-lg font-bold text-base justify-center items-center p-2 pr-4 rounded-20" to="#">
            <img className="rounded-full mr-2" src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&crop=entropy&cs=tinysrgb&dpr=1&fit=crop&h=50&w=50" alt={text}  />
            <span>
                {text}
            </span>
       </Link>
    )
}

export default Topic
