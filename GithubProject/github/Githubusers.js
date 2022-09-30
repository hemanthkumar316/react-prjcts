import React,{useState} from 'react'

import {FaGithub } from "react-icons/fa";
const Githubusers = ({users}) => {
  const [search,setSearch]=useState("")

  return (
    <>
     <h1 align='center'className='h1 mt-5'>LIST OF GITHUB USERS</h1>
      <div className="container-fluid mt-5">
      <form className='input'>
          <input type='text'value={search} className='form-control-lg'  onChange={e=>setSearch(e.target.value)} placeholder="Search here ......."/>
        </form>
        <div className="row text-center">
          {
            users.filter(user=>user.login.toLowerCase().includes(search.toLowerCase())).map((hemanth)=>{
              const { avatar_url, id, login, type } =hemanth;
              return(
                <div className="col-12 col-md-4 mt-5" key={id}>
                  <div className="card p-2">
                    <div className='d-flex align-items-center'>
                     <div className='image'>
                     <img src={ avatar_url } className="rounded" width="155"  alt='github user'/> 
                       </div>

                       <div className='ml-5 w-100'>
                       <h4 className="mb-0 mt-0 textLeft">{login}<FaGithub/></h4>
                       <span className="text-left">{type }</span>

                       <div className="p-2 mt-2 bg-primary d-md-flex justify-content-between rounded text-white">
                       <div className="d-flex flex-column">
                             <span>Articles</span>
                             <span>38</span>
                           </div>
                           <div className='d-flex flex-column'>
                             <span>Followers</span>
                             <span>980</span>
                           </div>
                           <div className='d-flex flex-column'>
                             <span>Ratings</span>
                             <span>8.9</span>
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