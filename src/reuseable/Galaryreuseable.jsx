import React from 'react'

const Galaryreuseable = ({gal}) => {
  return (
    <div className="lg:w-[24%] sm:w-[49%] w-full">
    <picture>
        <img src={gal} alt="gal" />
    </picture>
    
</div>
  )
}

export default Galaryreuseable