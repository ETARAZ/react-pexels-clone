import React from 'react'
import { NavLink } from 'react-router-dom'

function Item({ text, path, type, flag,click }) {
    return (
        <>

            {
                type === "dropdown1" ? (
                    <li>
                        <NavLink to={path} className="flex items-center text-17 leading-none font-semibold w-full h-full mt-0 mb-0  py-3 px-5 transition-colors whitespace-nowrap text-[#5e5e5e] hover:bg-[#e8e8e8] hover:text-[#1a1a1a]">
                            <span>{text}</span>
                            {
                                flag ? (<img width="36" height="26"
                                    alt="US" className="ml-1" src="https://www.pexels.com/assets/flags/en-US-9ac49f52fbe3cc86ef500da8d7dfac4468c0e98419808425a9cdc1af7714cee1.png" />) : null
                            }

                        </NavLink>
                    </li>
                ) : type === "mobile" ? (<li>
                    <NavLink onClick={click} to={path} className="flex group items-center text-xl leading-none text-left w-full h-full mt-0 mb-0  py-3  transition-opacity whitespace-nowrap  hover:opacity-100 text-white opacity-70">
                        <div className="bg-white invisible group-hover:visible w-2 transition-all h-7 rounded-tr-md rounded-br-md mr-2">
                        </div>
                        <span>{text}</span>
                            {
                                flag ? (<img width="36" height="26"
                                    alt="US" className="ml-1" src="https://www.pexels.com/assets/flags/en-US-9ac49f52fbe3cc86ef500da8d7dfac4468c0e98419808425a9cdc1af7714cee1.png" />) : null
                            }
                    </NavLink>
                </li>) : (
                    <li>
                        <NavLink to={path} className="text-17 leading-none flex items-center font-semibold w-full h-full mt-0 mb-0  py-3 px-5 transition-colors whitespace-nowrap text-[#5e5e5e] hover:bg-[#e8e8e8] hover:text-[#1a1a1a]">
                            <span>{text}</span>
                            {
                                flag ? (<img width="36" height="26"
                                    alt="US" className="ml-1" src="https://www.pexels.com/assets/flags/en-US-9ac49f52fbe3cc86ef500da8d7dfac4468c0e98419808425a9cdc1af7714cee1.png" />) : null
                            }
                        </NavLink>
                    </li>
                )
            }

        </>
    )
}

export default Item
