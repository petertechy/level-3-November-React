import React from 'react'

const Button = ({title, style}) => {
    console.log(style)
  return (
    <>
    <div className='col-7 mx-auto border'>
        <div className='d-flex justify-content-center'>
            <h1>{title} Button</h1>
        <button className={style}>{title}</button>
        </div>
    </div>
    </>
  )
}

export default Button