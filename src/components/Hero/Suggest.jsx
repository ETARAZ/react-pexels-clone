import React from 'react'
import { Link } from 'react-router-dom'

function Suggest({text,end}) {
    return (
        <Link className="text-white  opacity-80 transition-opacity leading-4 text-sm font-light hover:opacity-100 " to={`/${text}`}>{`${end ? text : text+","}`}</Link>
    )
}

export default Suggest
