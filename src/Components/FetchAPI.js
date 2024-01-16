import Axios from'axios';
import { useState } from 'react';
const FetchAPI = () => {
    const [name, setName] = useState("");
    const [predictedAge, setPredictedAge] = useState(null); // Null so it can fetch more than just age ie one data

    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((response)=>{
            setPredictedAge(response.data);
        })
    };

  return (
    <div>
        <input placeholder='Ex. Kashui...' onChange={(event)=>{setName(event.target.value)}}/>
        <button onClick={fetchData}>Predict Info</button>
        {/* "?" only tries to access the keys if the object is not null */}
        <h1>Name: {predictedAge?.name}</h1> 
        <h1>Predicted Age: {predictedAge?.age}</h1>
        <h1>Count: {predictedAge?.count}</h1> 
    </div>
  )
}

export default FetchAPI