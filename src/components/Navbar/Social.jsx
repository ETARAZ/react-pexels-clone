import React from 'react'
import {social} from './icons'
import SocialIcon from './SocialIcon'

function Social({mobile}) {
    return (
        <div className="p-2   w-full">
            <div className={`${mobile ? 'grid grid-cols-5 mt-2':'flex'}   justify-center flex-initial w-full items-stretch rounded-sm overflow-hidden`}>
                {
                    social.map((e) => <SocialIcon mobile={mobile} icon={e}/>)
                }
            </div>
        </div>
    )
}

export default Social
