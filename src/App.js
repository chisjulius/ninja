import React, { useState } from 'react';
import Ninjas from './ninjas'
import AddNinja from './addNinja'

function App (){
  const [ninjas, setNinjas ] = useState([
    {name: "Ryu", age: "25 yrs", belt: "black-belt", id: 1},
    {name: "yoshi", age: "30 yrs", belt: "green-belt", id: 2},
    {name: "crystal", age: "40 yrs", belt: "yellow-belt", id: 3},
  ])
  const addNinja = (ninja) => {
    ninja.id = Math.random();
    const newNinjas = [...ninjas,ninja];
    setNinjas(newNinjas)
  }
  const deleteNinja = (id) => {
       const newNinjas = ninjas.filter( ninja =>{
         return ninja.id !== id
       })
       setNinjas(newNinjas)
  }

  return (
        <div className=" container App white">
                <h4 className="center">My first react app!</h4>
                <p className="center">Welcome:)</p>
                <Ninjas deleteNinja = {deleteNinja} ninjas ={ninjas}/>
                <AddNinja addNinja = {addNinja}/>
            </div>

  );
}

export default App;
