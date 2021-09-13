import React, {useState} from 'react'


function App () {
    const [state,setState] = useState()
    const handleClick1 = ()=>{
        console.log("get data")
        fetch("http://localhost:3009")
        .then(x=> x.json())
        .then(res=> setState(res))
    }

    //GET Method
    const handleClick2 = ()=>{
        console.log("increase data")
    const url = "http://localhost:3009" //adresse for backend
    const option = {
        headers:{
            "Content-Type":"application/json"
        },
        method:"POST"
    }
    fetch(url,option)
    }

    


    return(
        <div> <button onClick={handleClick1}>get 
        data</button>

              <button onClick={handleClick2}>increase data</button>
              <h1>{state}</h1>
         </div>
    )
}

export default App