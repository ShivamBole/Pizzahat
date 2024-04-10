import React, { useState,useEffect,useReducer } from 'react'
import { Form } from 'react-bootstrap';
import { FaTrash } from "react-icons/fa";

function Cart() {  
  const [cart,setCart]=useState([])  
  const [qty,dispatch]=useReducer(reducer,0)
  function reducer(qty,action)
  {
    switch(action.type)
    {
      case 'changecartqty':
        return (cart.filter((c)=>{
          return (
              c.id===action.payload.id?(c.qty=action.payload.qty):c.qty
          )
      }))
        default:
          return qty
    }
  }
  function gettotal(){
    let total=0
    cart.map((ct)=>{total=total+(ct.price)})
    return total
  }
  useEffect(()=>{
displaycartitems()
gettotal()
  },[])
  function displaycartitems(){
    fetch("http://localhost:3000/cart").then((resp1)=>{
      resp1.json().then((resp2)=>{
        console.log(resp2)
        setCart(resp2)
        
      })
    })  
  }
  function removecartitem(id){
    fetch(`http://localhost:3000/cart/${id}`,{
          method:"delete"          
      }).then((resp1)=>{
        resp1.json().then((resp2)=>{
          console.log(resp2)
        })
      })
      window.location.reload()
  }
  function changeqty(id,qty){
    console.log(id,qty)
    return cart.filter((c)=>{
      return(c.id===id?(c.qty=qty):c.qty)
    })
  }
  return (
    <div>
      <table className='table mt-4'>
          <thead><tr><th>ID</th><th>PRODUCT</th><th>QUANTITY</th><th>PRICE</th></tr><th>Delete</th></thead>
        <tbody>
          {
            cart.map((c,i)=>{
                return(
                <tr key={i}>
                    <td>{i+1}</td>
                    <td><img src={c.image} height={80} width={80} alt=''/>
                    <h6>{c.name}</h6></td>
                  <td>
                  <Form.Select aria-label="Default select example" value={c.qty}
                    onChange={(e)=>{
                      dispatch({
                        type:"changecartqty",
                        payload:{
                          id:c.id,
                          qty:e.target.value
                        }
                      })
                    }} as="select">
                        {
                          [...Array(c.stock).keys()].map((q)=>{
                            return (
                              <option key={q+1}>{q+1}</option>
                            )
                          })
                        }
                    </Form.Select>
                    </td>
                  <td>${c.qty*c.price}</td>
                  <td><FaTrash className='fs-2 text-danger' onClick={()=>removecartitem(c.id)}/></td>
                </tr>
              )
            })
          }
        </tbody>
        <tfoot>
            <tr><td colSpan={2}>{cart.length} items:</td>
            <td colSpan={2}>Total cost: ${gettotal()}</td></tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Cart