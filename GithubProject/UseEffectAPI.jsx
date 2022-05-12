import React,{useState,useEffect} from 'react'
import Axios from'axios'
import Loading from './github/Loading'
import Githubusers from './github/Githubusers'
const UseEffect = () => {
  const[users,setUsers]=useState([])
  const[loading,setLoading]=useState(true)
  useEffect(()=>{
    Axios.get('https://api.github.com/users')
    .then((response)=>{
      console.log(response.data);
      setUsers(response.data)
      setLoading(false)
    })
    .catch(()=>{})
  },[])
  if (loading) {
    return <Loading />
}
  return (
    <>
     <Githubusers users={users}/>
    </>
  )
}

export default UseEffect