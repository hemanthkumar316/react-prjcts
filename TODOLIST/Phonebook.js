import React,{useState,useEffect} from 'react'

const Phonebook = () => {
 const [form,setForm] = useState({First:'',Last:'',number:''})
 const [formerrors,setFormerrors]=useState({})
 const [issubmit,setIssubmit]=useState(false)
 const [store,setStore]=useState([])
 const[view,setView]=useState(false)
 const changehandler=(e)=>{
  setForm({...form,[e.target.name]:e.target.value})
 }
 const submithandler=(e)=>{
  e.preventDefault()
  setFormerrors(validate(form))
  setIssubmit(true)
 }
 const deletehandler=(indexvalue)=>{
   const filteredstore=store.filter((elem,index)=>index!==indexvalue)
   setStore(filteredstore)
 }
 const edithandler=(editindexvalue)=>{
   const filteredstore=store.filter((elem,index)=>index!==editindexvalue)
   setStore(filteredstore)
   const editselector=store.find((elem,index)=>index===editindexvalue)
   setForm({
     First:editselector.First,
     Last:editselector.Last,
     number:editselector.number
   })
 }
 useEffect(()=>{
   if(Object.keys(formerrors).length===0 && issubmit){
     const newstore=[...store,form]
     setStore(newstore)
   }
 },[formerrors])
 const validate=(values)=>{
   const errors={}
   const onlystrings=/^[a-zA-Z]*$/
 if(!values.First){
   errors.First='Plese enter the first name'
 }
 else if(!values.First.match(onlystrings)){
   errors.First='Please enter only alphabets'
 }
 if(!values.Last){
  errors.Last='Plese enter the Last name'
}
else if(!values.Last.match(onlystrings)){
  errors.Last='Please enter only alphabets'
}
if(!values.number){
  errors.number='Plese enter the mobile number'
}
else if(values.number.length<10){
  errors.number='Mobile number must be 10 numbers'
}
else if(values.number.length>10){
  errors.number='Mobile number has maximum 10 numbers only'
}
return errors
 }
  return (
    <div className='container mt-5'>
   <div className='row m-md-auto'>
    <div className='col col-md-8 m-md-auto'>
      <div className='card'>
        <div className='card-header  bg-secondary'>
        <h1 className='text-center mb-3'>Phone Book</h1>
        </div>
        <div className='card-body'>
        <form onSubmit={submithandler}>
     <div className='mb-3 d-md-flex'>
      <div className='w-50 me-2'>
      <input type='text' className='form-control rounded-0 py-2 fs-5'name='First' value={form.First} placeholder='Enter Your First Name' onChange={changehandler}/>
      <p className='text-danger'>{formerrors.First}</p>
       </div>
       <div className='w-50 me-2'>
      <input type='text'  className='form-control rounded-0 py-2 fs-5' name='Last' value={form.Last} placeholder='Enter Your Last Name' onChange={changehandler}/>
      <p className='text-danger'>{formerrors.Last}</p>
       </div>
       <div className='w-50 ms-2'>
    <input type='number' className='form-control rounded-0 py-2 fs-5' name='number' value={form.number} placeholder='Enter Your Mobile Number' onChange={changehandler}/>
    <p className='text-danger'>{formerrors.number}</p>
       </div>
       </div>
     <div className='d-md-flex align-items-center justify-content-between mt-4'>
       <button className='btn btn-primary'>Add Contacts</button>
      <button className='btn btn-success' type='button' onClick={()=>setView(!view)}>View</button>   
       </div>    
    </form>
    
        </div>

      </div>
   
    

    </div>

   </div><br/><br/>

   <div className='row m-md-auto'>
<div className='col col-md-8 m-md-auto'>
  {view ? <> {Object.keys(store).length>0?<table className='table table-hover'>
    <thead className='bg-dark text-warning'>
      <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Mobile Number</th>
      <th>Edit/Delete</th>
      </tr>
    </thead>
    <tbody>
      {
    store.map((person,index)=>{
      return(
        <tr key={index}>
          <td>{person.First}</td>
          <td>{person.Last}</td>
          <td>{person.number}</td>
          <td>
            {/* <input type='submit' name='edit' value='edit' onClick={()=>edithandler(index)}/>
            <input type='submit' name='delete' value='delete' onClick={()=>deletehandler(index)}/> */}
            <i className='fas fa-edit' onClick={()=>edithandler(index)}></i>
            <i className='fas fa-trash' onClick={()=>deletehandler(index)}></i>
          </td>
        </tr>
      )
    })
      }
    </tbody>
  </table>:null}</>:null}
  

</div>
   </div>
    </div>
  )
}

export default Phonebook