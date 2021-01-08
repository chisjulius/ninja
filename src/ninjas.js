import React from 'react';
import './ninja.css'

      const Ninjas = ({ninjas, deleteNinja}) => {
         const ninjalist = ninjas.length ? (
            ninjas.map(ninja =>(
                <div className ="collection" key ={ninja.id}>
                      <li className="collection-item avatar">
                          <i className="material-icons circle teal">person</i>
                          <span className="title">Name: {ninja.name}</span>
                          <p className="grey-text">{ninja.age}, {ninja.belt}</p>    
                         <button onClick = {() =>{deleteNinja(ninja.id)}} className="btn-small secondary-content">x</button>
                      </li>
                     
                  </div>
                ))
         ) :(
             <div className="center">No ninjas left</div>
         )
   
        return (
              <div className = "ninjas">
                 {ninjalist}
              </div>
        )
      }
   

  export default Ninjas