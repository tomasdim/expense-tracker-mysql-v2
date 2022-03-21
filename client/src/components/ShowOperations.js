import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const CompShowOperations = () =>{
    const [operations, setOperations] = useState([])
    useEffect(()=>{
        getOperations()
    },[])

    const getOperations = async () =>{
       const res = await axios.get("/operations")
       setOperations(res.data)
    }

    const deleteOperation = async (id) =>{
        await axios.delete(`/operations/${id}`)
        getOperations()
    }

    return(
        <div>
            <table class="tg">
<thead>
  <tr>
    <th class="tg-baqh">name</th>
    <th class="tg-baqh">type</th>
    <th class="tg-baqh">amount</th>
    <th class="tg-baqh">date</th>
    <th class="tg-baqh">delete</th>
  </tr>
</thead>
<tbody>
    {operations.map((operation)=>(
    <tr key={operation.id}>
    <td class="tg-baqh">{operation.name}</td>
    <td class="tg-baqh">{operation.type}</td>
    <td class="tg-baqh">{operation.amount}</td>
    <td class="tg-baqh">{new Date(operation.createdAt).toDateString()}</td>
    <td class="tg-baqh"><button onClick={()=>deleteOperation(operation.id)}>{operation.id}</button></td>
  </tr>
    ))}
  
</tbody>
</table>
        </div>
    )
}

export default CompShowOperations