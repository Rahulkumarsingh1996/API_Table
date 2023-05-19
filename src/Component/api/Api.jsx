import React from 'react'

const Api = () => {
    
  return (
   <>
   <div className="App">
    <h1>get API Call</h1>
    <table border="1">
        <tr>
            <td></td>
            <td>Name</td>
            <td>Email</td>
            <td>Position</td>
        </tr>

        {data.map((item)=>
                <tr>
            <td>{item.userId}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.position}</td>
        </tr>
        )
     }
    </table>
   </div>
   </>
  )
}

export default Api