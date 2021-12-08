import React from 'react'
import { MdOutlineArrowDropDown } from './icons'
import Item from './Item'
import { Link } from 'react-router-dom'
function Dropdown({ text, path, data,type }) {

   
    return (
        <div className="relative block group">
            <Link to={path} className="block relative h-full text-17 leading-none font-normal mt-0 mb-0 text-white decora p-0  transition-opacity whitespace-nowrap hover:opacity-75">
                {text}
            </Link>
            <div className="absolute left-auto hidden transi z-30 min-w-172 group-hover:block right-0 top-4   w-full">
                <div className="relative mt-2 rounded-sm shadow-sm bg-white h-full w-full">
                    <div className="absolute rounded-sm shadow-sm bg-white -z-1 rotate-45  right-5 -top-1 h-arrow-height w-arrow-width"></div>

                    <ul class="py-2 z-10">
                        {
                            data.map(e => <Item text={e.text} path={e.path} type={type} />)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dropdown
