// import logo from './logo.svg';
import './App.css';
import Table from './components/table.js';
import { useState,useEffect } from 'react';

function App() {
  const [item, setItem] = useState([])

  const handleFetch = async (endpoint)=>{
    // alert("Loading Data...")
    // console.log("hello")
    const result = await fetch(`https://mipl-backend-78271.onrender.com/${endpoint}`,{
      method:"get",
      headers:{
        "Content-Type":"application/json"
      },
      mode:'cors'
    })
    alert("Loading Data...")
    const val = await result.json()

    
    setItem(val)

  }
  useEffect(()=>{
    const handleEffect = async () => {
      alert(" Just Waiting for 3 Seconds for loading the Data")
      const result = await fetch(`https://mipl-backend-78271.onrender.com/`,{
      method:"get",
      headers:{
        "Content-Type":"application/json"
      },
      mode:'cors'
    })
    const val = await result.json()
    // console.log(val)
    setItem(val)
    // console.log("hellooo")

    }
    // alert(" Just Waiting for 3 Seconds for loading the Data")
    handleEffect()
    

  },[])


  return (
    <div className="App">
      <h1>Assignment for internship position at "Mobilicis India Private Limited" </h1>
      <ul>
        <li >Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes <button onClick={()=>{handleFetch("income")}}>Click Me!</button></li>
        <li >Male Users which have phone price greater than 10,000. <button onClick={()=>{handleFetch("male")}}>Click Me!</button></li>
        <li >Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name. <button onClick={()=>{handleFetch("quote")}}>Click Me!</button> </li>
        <li >Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit. <button onClick={()=>{handleFetch("car")}}>Click Me!</button> </li>
        <li >Show the data of top 10 cities which have the highest number of users and their average income. <button onClick={()=>{handleFetch("city")}}>Click Me!</button> </li>
      </ul>
      <Table data={item} />
      
    </div>
  );
}

export default App;
