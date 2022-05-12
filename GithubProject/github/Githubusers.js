import React from 'react'

import {FaGithub } from "react-icons/fa";
const Githubusers = ({users}) => {
  return (
    <>
     <h1 align='center'className='h1 mt-5'>LIST OF GITHUB USERS</h1>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {
            users.map((hemanth)=>{
              const { avatar_url, id, login, type } =hemanth;
              return(
                <div className="col-10 col-md-4 mt-5" key={id}>
                  <div className="card p-2">
                    <div className='d-flex align-items-center'>
                     <div className='image'>
                     <img src={ avatar_url } className="rounded" width="155"  alt=''/> 
                       </div>

                       <div className='ml-5 w-100'>
                       <h4 className="mb-0 mt-0 textLeft">{login}<FaGithub/></h4>
                       <span className="text-left">{type }</span>

                       <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                       <div className="d-flex flex-column">
                             <span className='articles'>Articles</span>
                             <span className='number1'>38</span>
                           </div>
                           <div className='d-flex flex-column'>
                             <span className='followers'>Followers</span>
                             <span className='number2'>980</span>
                           </div>
                           <div className='d-flex flex-column'>
                             <span className='ratings'>Ratings</span>
                             <span className='number3'>8.9</span>
                           </div>

                         </div>
                         </div>
                    </div>
                    </div>
                    </div>
              )
            })
          }
          </div>
          </div>
    </>
  )
}

export default Githubusers