import React from 'react';
import "../CssFile/Search.css";
import {BsSearch} from "react-icons/bs";
import {VscBell} from "react-icons/vsc";


export default function SearchCom() {
  return (
    <div className='Search'>
      <div className='rowSearch'>
        <div>
        <b><p> <i><BsSearch/></i><input placeholder= "Search Anythig menu"/></p>
        <div className='iconst'><i><VscBell/></i></div></b>  
        </div>
      </div>
       
    </div>
  )
}