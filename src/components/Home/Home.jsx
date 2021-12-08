import React from 'react'
import Hero from '../Hero/Hero'
import Show from '../Show/Show'
import Tabs from '../Tabs/Tabs'
function Home() {
    return (
        <div className="bg-white  h-3000">
            <Hero/>
            <Tabs/>
            <Show/>
        </div>
    )
}

export default Home
