import React,{useState,useEffect, Suspense} from 'react'
import {BrowserRouter,Route} from "react-router-dom"

import Detiles from "./detiles"

function App() {
const [cats,setCats]=useState([]) 
const [categories,setCategories]=useState([]) 
const [offset,setOffset]=useState(1)
const [limite,setLimite]=useState(10)
const [loading,setLoading]=useState(false)



  useEffect(()=>{
    setLoading(true)
    fetch("https://api.thecatapi.com/v1/categories")
    .then(res=> res.json())
    .then(data=>{setCats(data);setLoading(false)})
    
  },[])

  useEffect(()=>{
    setLoading(true)
    fetch(`https://api.thecatapi.com/v1/images/search?limit=${limite}&page=1&category_ids=${offset}`)
    .then(res=> res.json())
    .then(data=>{setCategories(data);setLoading(false)})
    
  },[offset,limite])

 if(loading){
 return <div className="loading">
       <h1>Loading...</h1>
      </div>
 }
  return (
    <BrowserRouter>
    <div className="App">
    <div className="navbar">
        <ul className="navbar-ul">
            {cats.map((cat)=>{
              return <li key={cat.id} className="navbar-li" onClick={()=>{setOffset(cat.id); setLimite(10)}}>{cat.name}</li>
            })}
            <button className="addcatsbtn" onClick={()=>{setLimite(limite + 10)}}>Add Cats</button>
        </ul>
        </div>
          <Route path="/detiles" render={()=>{return <Detiles categories={categories}/>}}/>
        </div>

    </BrowserRouter>
  );
}

export default App;
