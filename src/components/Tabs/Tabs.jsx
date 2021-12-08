import React from 'react'
import './tabs.css'
import Tab from './Tab'
import {tabs} from './data'

function Tabs() {

    return (
        <div  className="text-center overflow-x-auto whitespace-nowrap tabs bg-white shadow-tab">
          {
              tabs.map(tab=> <Tab text={tab} />)
          }
        </div>
    )
}

export default Tabs
