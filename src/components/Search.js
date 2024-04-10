import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from  'react-bootstrap/Card'
import { FaShoppingCart } from 'react-icons/fa'

function Search() {
    const [searchdata,setSearchdata]=useState([])
    const location=useLocation()
        console.log(location.state.s)
        useEffect(()=>{
            dispsearch()
        },[])
        function dispsearch(){
            fetch('http://localhost:3000/fooditems').then((resp1)=>{
                resp1.json().then((resp2)=>{
                    const sprods=resp2.filter((f)=>f.name.toLowerCase().includes(location.state.s))
                    setSearchdata(sprods)
                    console.log(sprods)
                })
            })
        }
    
  return (
    <div className='container'>
      {searchdata?
         <div className='row row-cols-1 row-cols-md-3 g-3 mt-5'>
         {
          searchdata.map((fd,i)=>{
              return (
                  <div className='col' key={i}>
<Card style={{ width: '17rem' }} className='h-100 border-0 bg-dark text-white rounded-4'>
<div className='bg-light rounded '>
<Card.Img variant="top" src={fd.image} className='img-fluid d-block h-100 w-50 mx-auto'/>
</div>
<Card.Body>
<Card.Title>{fd.name}</Card.Title>
<Card.Text>
Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
</Card.Text>
<div className='d-flex justify-content-between'>
  <p>${fd.price}</p>
<Button variant="warning" className='text-white rounded-circle fs-5'><FaShoppingCart /></Button>
</div>
</Card.Body>
</Card>
                  </div>
              )
          })
      }
    </div>:<h2 className='text-danger'>No product found</h2>}
    </div>
  )
}

export default Search
