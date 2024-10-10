import React from 'react'
import Push from "../assets/push.png"
import Push2 from "../assets/push2.png"

const Logopart = () => {
  return (
    <div id='logopart' className="max-w-container mx-auto py-[117px] bg-[white]">
    <div className="flex justify-between py-[]">
        <picture>
            <img src={Push} alt="" />
        </picture>
        <picture>
            <img src={Push2} alt="" />
        </picture>
        <picture>
            <img src={Push} alt="" />
        </picture>
        <picture>
            <img src={Push2} alt="" />
        </picture>
    </div>
</div>
  )
}

export default Logopart