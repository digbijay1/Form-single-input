//there is one input box and after click whatever in input box you have to show it in the h1 tag.

import React,{useState} from 'react'
import { data } from "./data";

function Example() {
        const [name, setName] = useState();//this will take the input what is user is wriitng
        const [fname, setFname] = useState();
       const [addvalue, setAddValue] = useState(data);


    //onChange=for every change in the input box i.e when you writer any thing on the input box the function inputEvent will be called
    //const inputEvent=()=>{
      //  console.log("clicked")
    //}
    //what you write it in the input box it shows in the console
const inputEvent=(e)=>{
    //console.log(e.target.value)
    setName(e.target.value)//set the value which is written by the user
}
//when on click the function we have to submite the name
const onSubmit=(e)=>{
  e.preventDefault();
  setFname(name)
setAddValue(prevValues=>[...prevValues,{fname:name}])
setName(" ")
}

    return (
      <div>
     
  {addvalue.map((person)=>{
    return <li>{person.fname}</li>
  })}


        {/* <h1>Fname:-{fname}</h1> */}
{/* {console.log(addvalue)} */}
      {/* after every time when user write some letters in the input box,for every tiome the statew is upddating so the when i write console.log
      (name);it every time re-rendered */}
        {/* {console.log(name)} */}
        <form onSubmit={onSubmit}>
          <label for="fname">First name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={inputEvent}
            value={name}
          />
          <br />

          <button type="" >
            Click ME
          </button>
        </form>
      </div>
    );
}

export default Example
