import axios from 'axios'
import React, { useState } from 'react'

const Product = () => {
  const [product_name, setproductName] = useState("")
  const [product_price, setproductPrice] = useState(0)
  const [product_quantity, setproductQuantity] = useState(0)

  const submitProduct =()=>{
    let product = {product_name, product_price, product_quantity}
    let url = "http://localhost:5500/product"
    console.log(product)

    axios.post(url,product)
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div>
        <input type="text" placeholder='Product Name' onChange={(e)=>setproductName(e.target.value)} />
        <input type="text" placeholder='Product Price' onChange={(e)=>setproductPrice(e.target.value)}  />
        <input type="text" placeholder='Product Quantity' onChange={(e)=>setproductQuantity(e.target.value)}  />
        <button onClick={submitProduct}>Create Product</button>
    </div>
  )
}

export default Product