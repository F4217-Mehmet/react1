import React from 'react'
import "./Main.css"
import Card from "./Card"
import {data} from "../../assests/data"

const Main = () => {
  return (
    <div className='card-container'>
{data.map((item) => <Card {...item}/>)}
    </div>
  )
}

export default Main