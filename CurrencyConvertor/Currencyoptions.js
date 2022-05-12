import React from 'react'

const Currencyoptions = ({currencyoptions,updatehandler}) => {
 const options=currencyoptions.map((data,index)=>{
  return <option value={data} key={index}>{data}</option>
 })
  return (
    <div>
     { options.length===0?<p> Loading...</p>:<select onChange={updatehandler}>{options}</select> 
     }
    </div>
  )
}

export default Currencyoptions