import React,{useState} from 'react'

const EForm = ({track,setTrack}) => {
  const [totalamnt,Settotalamnt]=useState(0)
    const [input,setInput]=useState(0)
   
    //validation
    const total=parseInt(totalamnt)
    const invalue=parseInt(input)
    const date= new Date().toLocaleString()
    const addhandler=()=>{
        Settotalamnt(total+invalue)
        setInput('')
        setTrack([...track,{
            tdate:date,
            ttotal:total,
            taddamount:invalue,
            tremoveamount:'-',
            tbalanceamount:total+invalue
        }]);
    }
    const removehandler=()=>{
        Settotalamnt(total-invalue)
        setInput('')
        setTrack([...track,{
            tdate:date,
            ttotal:total,
            taddamount:'-',
            tremoveamount:invalue,
            tbalanceamount:total-invalue
        }]);
    }
  return (
    <div className='container mt-5'>
   <div className='row'>
   <div className='col col-md-6 m-md-auto'>
   <h1 className='text-center border p-2'>Expense Tracker</h1>
   <form className='border p-2 mt-5'>
<h3 className='text-center'>Balance : {totalamnt}</h3>
<div className='text-center mb-3'>
 <input type='number' placeholder='Enter Amount' className='form-control rounded-0 w-50 m-auto' value={input} onChange={(e)=>setInput(e.target.value)}/>
</div>
<div className='mb-3 text-center'>
  <button type='button' className='btn btn-success me-2' onClick={addhandler}>ADD</button>
  <button type='button' className='btn btn-danger' onClick={removehandler}>REMOVE</button>
</div>
   </form>
   </div>
   </div>
    </div>
  )
}

export default EForm