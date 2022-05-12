import React from 'react'

const Todolist = ({todos,views,deletehandler,edithandler}) => {
  return (
    <>
    <div className='container'>
     <div className='row '>
      <div className='col col-md-8 '>
        {(views)==true?<>{Object.keys(todos).length>0? <table className='table table-hover'>
        <thead> 
         <tr>
          <th>S.NO</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile Number</th>
          <th>Project_name</th>
          <th>Task_description</th>
          <th>start_date</th>
          <th>end_date</th>
          <th>status</th>
         </tr>
        </thead>
        <tbody>
         {
          todos.map((todo,index)=>{
           return(
            <tr key={index}>
             <td>{index+1}</td>
             <td>{todo.name}</td>
             <td>{todo.email}</td>
             <td>{todo.number}</td>
             <td>{todo.project_name}</td>
             <td>{todo.task_description}</td>
             <td>{todo.start_date}</td>
             <td>{todo.end_date}</td>
             <td>{todo.status}</td>
             <td>
             <input type='submit' value='delete' name='add' onClick={()=>deletehandler(index)}/> 
                   <input type='submit' value='edit' name='edit' onClick={()=>edithandler(index)}/> 
              {/* <i className='fa fa-edit text-success'onClick={()=>deletehandler(index)}></i>
              <i className='fa fa-trash text-danger'onClick={()=>edithandler(index)}></i> */}
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
    </>
  )
}

export default Todolist