import React from 'react'

const User = (userId, id) => {
  return (
    <tr>
        <td>
        {userId}</td>
        <td>{id}</td>
    </tr>
  )
}

export default User