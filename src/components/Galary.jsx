import React from 'react'
import Gal from "../assets/gal.png"
import Super from "../assets/super.png"
import Sudu from "../assets/sudu.png"
import Galaryreuseable from '../reuseable/Galaryreuseable'

const Galary = () => {
  return (
   <div id='galary'>
     <div className="flex flex-wrap justify-between gap-y-4">
      <Galaryreuseable gal={Gal}/>
      <Galaryreuseable gal={Super}/>
      <Galaryreuseable gal={Sudu}/>
      <Galaryreuseable gal={Gal}/>
    </div>
   </div>
  )
}

export default Galary