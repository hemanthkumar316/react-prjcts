import React,{useState,useEffect} from 'react'
import Todolist from './Todolist'

const Todoform = () => {
 const data={
   name:'',
 email:'',
 number:'',
 project_name:'',
 task_description:'',
 start_date:'',
 end_date:'',
 status:''
}
 const [form, setForm] = useState(data)
 const [formerrors,setFormerrors]=useState({})
 const [isSubmit,setISsubmit]=useState(false)
 const [todo,setTodo]=useState([])
 const[views,setViews]=useState(false)
 const changehandler=(e)=>{
     setForm({...form,[e.target.name]:e.target.value})
 }
 const submithandler=(e)=>{
  e.preventDefault()
 setFormerrors(validate(form))
 setISsubmit(true)
  

 }
const deletehandler=(indexvalue)=>{
  const filteredtodo=todo.filter((elem,index)=>index!== indexvalue)
  setTodo(filteredtodo)
} 
const edithandler=(editindexvalue)=>{
  const filteredtodo=todo.filter((elem,index)=>index !== editindexvalue)
  setTodo(filteredtodo)
  const editselector=todo.find((elem,index)=>index === editindexvalue)
  setForm({
    name:editselector.name,
    email:editselector.email,
    number:editselector.number,
    project_name:editselector.project_name,
    task_description:editselector.task_description,
    start_date:editselector.start_date,
    end_date:editselector.end_date,
    status:editselector.status
  })
}
 useEffect(()=>{
  if(Object.keys(formerrors).length===0 && isSubmit){
    const newtodos=[...todo,form]
    setTodo(newtodos)
  }

 },[formerrors])
 const validate=(values)=>{
  const errors={}
  const OnlyNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const OnlyStrings = /^[a-zA-Z ]*$/;
  const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  
  if(!values.name){
   errors.name='username is required'
  }
  else if(!values.name.match(OnlyStrings)){
   errors.name='Please enter alphabets only'
  }
  if(!values.email){
    errors.email='Email is required'
  }
  else if(!values.email.match(isEmail)){
    errors.email='This is not valid email format'
  }
  if(!values.number){
    errors.number='Mobile nuber is required'
  }
 /*  else if(values.number.match(OnlyNum)){
    errors.number='Please enter numbers only'
  } */
  else if(values.number.length<10){
    errors.number='Mobile number Should contain atleast 10 charcters '
  }
  else if(values.number.length>10){
    errors.number='Mobile number max 10 digit only '
  }
  if(!values.project_name){
    errors.project_name='THis is filed is required'
  }
  else if(values.project_name.length<4){
    errors.project_name='Project name should conatins altlest 4 charcters'
  }
  else if(values.project_name.length>30){
    errors.project_name='Project name should not contain more than 30 charcters'
  }
  if(!values.task_description){
    errors.task_description='THis is filed is required'
  }
  else if(values.task_description.length<4){
    errors.task_description='Project name should conatins altlest 4 charcters'
  }
  else if(values.task_description.length>30){
    errors.task_description='Project name should not contain more than 30 charcters'
  }
  if(!values.start_date){
    errors.start_date='Please slectb start date'
  }
  if(!values.end_date){
    errors.end_date='Please slectb end date'
  }
  if(!values.status){
    errors.status='please select any one of status'
  }
  return errors
 }
  return (
    <div className='container '>
     <div className='row m-md-auto'>
      <div className='col col-md-8 m-md-auto'>
       <div className='gutter-gap'>
        <h1 className='text-center mb-3'>TO DO LIST</h1>
        <form onSubmit={submithandler}>
         <div className='mb-3 '>
    <input type='text' className='form-control rounded-0 py-2 fs-5' name='name' value={form.name} placeholder='Enter Your name' onChange={changehandler}/>
    <p className='text-danger m-0'>{formerrors.name}</p>
         </div>
         <div className='mb-3 d-md-flex'>
          <div className='w-50 me-2'>
          <input type='text' className='form-control rounded-0 py-2 fs-5' name='email' value={form.email} placeholder='Enter a valid email address' onChange={changehandler}/>
          <p className='text-danger m-0'>{formerrors.email}</p>
           </div>
           <div className='w-50 ms-1'>
           <input type='number' className='form-control rounded-0 py-2 fs-5' name='number' value={form.number} placeholder='Enter your mobile number ' onChange={changehandler}/>
           <p className='text-danger m-0'>{formerrors.number}</p>
           </div>
           
           </div>
           <div className='mb-3'>
           <input type='text' className='form-control rounded-0 py-2 fs-5' name='project_name' value={form.project_name} placeholder='Enter your Project name ' onChange={changehandler}/>
           <p className='text-danger m-0'>{formerrors.project_name}</p>
           </div>
           <div className='mb-3'>
           <input type='text' className='form-control rounded-0 py-2 fs-5' name='task_description' value={form.task_description} placeholder='Enter Task Description ' onChange={changehandler}/>
           <p className='text-danger m-0'>{formerrors.task_description}</p>
           </div>
           <div className='mb-3 d-md-flex'>
          <div className=' w-50 me-1'>
           <p>Start Date</p>
           <input type='date' className='form-control rounded-0 py-2 fs-5' name='start_date' value={form.start_date} onChange={changehandler}/>
           <p className='text-danger m-0'>{formerrors.start_date}</p>
          </div>
          <div className='  w-50 ms-1'>
           <p>End Date</p>
           <input type='date' className='form-control rounded-0 py-2 fs-5' name='end_date' value={form.end_date} onChange={changehandler}/>
          
           <p className='text-danger m-0'>{formerrors.end_date}</p></div>
           </div>
           <div className='mb-3'>
            <div className='d-md-flex align-items-center radio-status'>
             <p className='m-0'>Task status:</p>
             <div>
             <input type='radio' name='status' value='Planned' className='form-check-input' onChange={changehandler}/>Planned
             </div>
             <div>
             <input type='radio' name='status' value='In-Progress' className='form-check-input' onChange={changehandler}/>In-Progress
             </div>
               <div>
             <input type='radio' name='status' value='Done' className='form-check-input' onChange={changehandler}/>Done
             </div>
            </div>
            <p className='text-danger m-0'>{formerrors.status}</p>
            </div>
            <div className='mb-3 d-md-flex align-items-center justify-content-between mt-3'>
            <input type='submit' value='Save' className='btn btn-primary'/>
            <button className='btn btn-success ' type='button' onClick={()=>setViews(true)}>View</button>

            </div>
        </form>

       </div>

      </div>

     </div>
      
      <div className='row mt-4'>
        <div className='col col-md-8'>
          <div className='gutter-gap'>
            <Todolist views={views}todos={todo} deletehandler={deletehandler} edithandler={edithandler} />

          </div>

        </div>

      </div>

    </div>
  )
}

export default Todoform