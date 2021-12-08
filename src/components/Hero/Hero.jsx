import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Navbar/Search'
import { suggestions } from './data'
import Suggest from './Suggest'
function Hero() {
    return (
        <header className="bg-black relative px-4 flex justify-center items-center h-full w-full max-h-500 min-h-380">

          <div className="absolute bg-black z-10 bg-opacity-40 overflow-hidden right-0 left-0 bottom-0 top-0">
            </div>
           
            <div className="absolute overflow-hidden right-0 left-0 bottom-0 top-0">
                <img className="object-cover w-full h-full" src="https://images.pexels.com/photos/8775535/pexels-photo-8775535.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.5&h=500&sharp=10&w=1500" alt="hero" />
            </div>

            <section className="z-10 w-full max-w-2xl">
                <h1 className="text-4xl w-full mb-5 font-bold text-white leading-48">
                    The best free stock photos, royalty free images & videos shared by creators.
                </h1>
                <Search text="Search for free photos and videos" hero />
                <div className="flex py-3 overflow-x-auto overflow-hidden space-x-2 w-full text-white leading-4 items-center">
                    <span className="font-normal hidden lg:block mr-1">Suggested:</span>
                    {
                        suggestions.map((text) => <Suggest text={text}/>  )
                    }
                    <Suggest text={"more"} end/>
                </div>
            </section>
            <div className="absolute flex justify-end items-center z-10 bg-opacity-40 overflow-hidden right-0 left-0 bottom-0 pb-5 p-3">
                    <Link to="#" className="font-light opacity-80 hover:opacity-100 transition-opacity text-sm text-white leading-4">
                        Photo by Photographer
                    </Link>
            </div>
        </header>
    )
}

export default Hero
