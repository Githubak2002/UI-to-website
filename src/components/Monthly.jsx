// import React from 'react'
import {pricingCardArr as pcArr} from '../constants'
import Card from './card'


const Monthly = () => {
  return (

    <section className='flexCenter flex-wrap'>
    {
      pcArr.map((val) => {
        return(
          <Card 
          key = {val.id}
          id = {val.id}
          main_heading = {val.main_heading}
          main_heading2 = {val.main_heading2}
          price = {val.price}
          interval = {val.interval} 
          sub_h1 = {val.sub_h1}
          sh1_item1 = {val.sh1_item1}
          sh1_item2 = {val.sh1_item2}
          sh1_item3 = {val.sh1_item3}
          sub_h2 = {val.sub_h2}
          sh2_item1 = {val.sh2_item1}
          />
        )})
    } 

  </section>
  )
}

export default Monthly