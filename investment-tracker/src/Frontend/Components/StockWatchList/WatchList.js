import React, { useEffect, useState } from 'react'
import './WatchList.css'


import WatchHead from './WatchHead'
import WatchCategory from './WatchCategory'
import WatchStocks from './WatchStocks'


//  Particular Category Stocks 
//  Add Stocks in particular Catory
// Delete Stocks or category 

const WatchList = () => {
  // const[categories, setCategories] = useState([]); 
  const [displayForm, setDisplayForm] = useState(false)


//  useEffect(()=>{
//   const getCategory = async()=>{
//   const BEdata = await getCategories(); 
//   setCategories(BEdata); 
//   }
//   getCategory(); 
//  })


//  const getCategories = async()=>{
//    const response = await fetch('http://localhost:9000/categories')
//    const categories = await response.json(); 
//    return categories; 
//   }


 
// const addCategory = async(category) =>{
//   const res = await fetch('http://localhost:9000/categories', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(category), 
//     mode: 'cors'
//   })
//   const data = await res.json()
//   setCategories([...categories, data])
// }



  return (
    <div className='watchList'>
             <WatchHead/>
             <WatchCategory />
            
             <hr/>
             <WatchStocks />

    </div>
  )
}

export default WatchList