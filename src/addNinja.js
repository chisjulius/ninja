import React, { useState } from 'react';

function AddNinja({addNinja}) {
const [name, setName ] = useState("")
const [age, setAge ] = useState("")
const [belt, setBelt ] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        addNinja({name, age, belt});
        setName("");
        setAge("");
        setBelt("")
    }
        return(
           <div  className="row">
                <div className=" col s12 l8 offset-l2" >
                    <form onSubmit = {handleSubmit} >
                        <div className="input-field">
                            <input type="text" id="name" onChange= {e => setName(e.target.value)} value={name}></input>
                            <label htmlFor="name" className="teal-text center-text">Name:</label>
                        </div>
                       <div className="input-field">
                            <input type="text" id="age" onChange= {e => setAge(e.target.value)} value={age}></input>
                            <label htmlFor="age" className="teal-text">Age:</label>
                       </div>
                        <div className="input-field">
                            <input type="text" id="belt" onChange= {e => setBelt(e.target.value)} value={belt}></input>
                            <label htmlFor= "belt" className="teal-text">Belt:</label>
                        </div>
                      <div className="input-field center-align">
                          <button className="btn-small skyBlue">Submit</button>
                      </div>
                    </form>
                </div>
            </div>

        )
    }
export default AddNinja;