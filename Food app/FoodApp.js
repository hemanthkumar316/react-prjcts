import React,{useState} from 'react'
import FoodItems from './FoodItems';
const FoodApp = () => {
  const YOUR_APP_ID = "a462cfbb";
  const YOUR_APP_KEY ="5e4686d1283fad139516cb556cdf31d9";
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);
   const searchHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`) 
    .then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    ) 
 }
  return (
    <>
      <div className='container mt-5'>
        <pre>{JSON.stringify(data)}</pre>
        <center>
        <h4>Food Recipe App</h4><br/>
        <form onSubmit={searchHandler}>
          <input type="text" className='form-control' value={search} onChange={(e) => setSearch(e.target.value)}/> <br/><br/>
          <input type="submit" className="btn btn-primary" value="Search"/>
        </form><br/>
        {data.length>=1 ? <FoodItems data={data}/>:null}
      </center>
       </div>
      
    </>
  )
}

export default FoodApp