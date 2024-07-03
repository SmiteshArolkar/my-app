import Card from '@/components/Card';
import Image from 'next/image';
import React, { useState } from 'react';

const Index = () => {

  const [ name , setName ] = useState("John")
  const data = [
    {
      icon : "icon",
      text : "bookings"
    },
    {
      icon : "icon2",
      text : "bookings"
    },
    {
      icon : "icon3",
      text : "bookings"
    },
    {
      icon : "icon4",
      text : "bookings"
    },
    {
      icon : "icon5",
      text : "bookings"
    },
    {
      icon : "icon5",
      text : "bookings"
    },
  ]

  return (
    <div className='grid grid-cols-2 w-2/4'>
{/* {
  data.map((item) => {
    return <Card icon={item.icon} text={item.text} ></Card>
  })
} */}

<div>
  <div className='flex  gap-4
  '>
    <input
    className='text-black'
    onChange={(e) => {

      setName(e.target.value)
    }} ></input>
    <button className='border p-2 '>submit </button>

    {
      name
    }
  </div>
</div>
    </div>
  );
}

export default Index;
