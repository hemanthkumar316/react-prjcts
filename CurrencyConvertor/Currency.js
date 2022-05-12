import React,{useState,useEffect} from 'react'
import axios from'axios'
import Currencyoptions from './Currencyoptions'
const Currency = () => {
  const [currencyoptions,setCurrencyoptions] = useState([])
  const [fromcurrency,setFromcurrency]=useState('')
  const [tocurrency,setTocurrency]=useState('')
  const [fromamount,setFromamount]=useState(0)
  const [toamount,setToamount]=useState(0)
  const [currencyname,setCurrencyname]=useState({})
  useEffect(()=>{
      axios.get('https://api.frankfurter.app/currencies')
      .then((response)=>{
        let data=response.data
        setCurrencyoptions(Object.keys(data))
         setFromcurrency(Object.keys(data)[0])
         setTocurrency(Object.keys(data)[0])
         setCurrencyname(data)
      })
  },[])
  useEffect(()=>{
    if(parseInt(fromamount)===0){
        setToamount(0)
    }else if(fromamount===''){
        setToamount('')
    }else if(fromcurrency===tocurrency){
        setToamount(fromamount)
    }else{
        fetch(`https://api.frankfurter.app/latest?amount=${fromamount}&from=${fromcurrency}&to=${tocurrency}`)
        .then(res=>res.json())
        .then(data=>setToamount(Object.values(data.rates)[0]))
    }
},[fromcurrency,tocurrency,fromamount,toamount])
  return (
    <div className='container mt-5'>
    <div className='row'>
     <div className='col'>
         <div className='card'>
             <div className='card-header'>
            <h1 className='text-center'>Currency Convertor</h1> 
             </div>
            <div className='card-body'>
             <div>
                 <h1>From Currency:</h1>
                 <Currencyoptions currencyoptions={currencyoptions} updatehandler={(e)=>setFromcurrency(e.target.value)}/> <br/>
                 <p>Enter Amount in:{currencyname[`${fromcurrency}`]}</p>
                 <input type='number' value={fromamount} onChange={(e)=>setFromamount(e.target.value)}/>
             </div>
             <div>
                 <h1>To Currency:</h1>
                 <Currencyoptions currencyoptions={currencyoptions} updatehandler={(e)=>setTocurrency(e.target.value)}/><br/>
                 <p>Enter Amount in :{currencyname[`${tocurrency}`]}</p>
                 <input type='number' value={toamount} onChange={(e)=>setToamount(e.target.value)}/>
             </div>
            </div>
         </div>

     </div>
    </div>

    </div>
  )
}

export default Currency