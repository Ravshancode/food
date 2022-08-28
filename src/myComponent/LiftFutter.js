import React from 'react';
import {AiOutlineAppstore} from "react-icons/ai";
import {VscSignOut} from "react-icons/vsc";
import{IoIosHeartEmpty} from "react-icons/io";
import{IoSettingsOutline} from "react-icons/io5"
import{CgMenuBoxed} from "react-icons/cg";
import{BiMessageRoundedDetail} from "react-icons/bi"
import "../CssFile/LeftFutter.css"
import icon1 from "../ICon/Logo.jpg";
export default function LiftFutter() {
  return (
    <div className='contener1'>
   <div className='row2'>
     <h3><img src={icon1} alt='R'/> <p>I-NeetFood</p></h3>
     <div className='ulstyli'>
  <ul>
 <li>
   <i><AiOutlineAppstore/></i>
   <p><a href='https://mybezland-site.netlify.app'>Dashboard</a></p>
 </li>
    <li>
      <i><CgMenuBoxed/> </i>
  <a href='https://mybezland-site.netlify.app'>Menu</a>
    </li>
    <li>
      <i>  <IoIosHeartEmpty/></i>
<a href='https://mybezland-site.netlify.app'>Favourite</a>
    </li>
    <li>
      <i><BiMessageRoundedDetail/> </i>
  <a href='https://mybezland-site.netlify.app'>Messages</a>
    </li>
    <li>
      <i> <IoSettingsOutline/> </i>
    <a href='https://mybezland-site.netlify.app'>Settings</a>
    </li>
    <li>
      <i><VscSignOut/></i>
      <a href='https://mybezland-site.netlify.app'>Logout</a>
    </li>
  </ul>
     </div>
   </div>
    </div>
  )
}
