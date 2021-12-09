import React, { useState } from 'react'
import { SearchIcon } from "./icons"
import Topic from './Topic'
function Search({ text,hero }) {
    const [focus, setFocus] = useState(false)
    const handleFocus = () => {
        setFocus(true)
    }
    const handleBlur = () => {
        setFocus(false)
    }
    return (
        <div className="max-w-750 group  w-full mr-4">
            <form className="relative z-10">
                <div className={`z-10 relative flex ${focus ? 'bg-white rounded-br-none rounded-bl-none  drop-shadow-lg' : "bg-back"}  transition-colors   rounded-md`}>
                    <input onBlur={handleBlur} onFocus={handleFocus} type="search" placeholder={text} className={` flex-initial bg-transparent  text-[#1a1a1a] p-3 sm:px-5 ${hero ? "py-5" : "sm:py-3"} not-italic border-0 outline-none placeholder-size placeholder-[#5e5e5e]     text-17 leading-22 w-full font-semibold sm:font-normal `} />

                    <button type="submit" className="flex flex-1 justify-center px-3 items-center z-10 border-0">
                        <SearchIcon className="w-6 h-6 text-[#5e5e5e]" />
                    </button>
                </div>
                <div className={`${focus ? 'block' : 'hidden'} absolute z-20 max-h-96 w-full overflow-y-auto bg-white p-4 pr-0  drop-shadow-md  rounded-br-md rounded-bl-md`}>
                    <div className="font-normal mb-2 leading-4 text-sm">
                        <span>Trending Topics</span>
                    </div>
                    <div>
                        <div>
                            {
                                [...Array(30).keys()].map(a => <Topic text="Security" />)
                            }
                        </div>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default Search
