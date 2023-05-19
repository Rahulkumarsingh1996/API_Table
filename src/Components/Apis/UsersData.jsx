const UsersData = ({ data }) => {
  return (
    <>
      {
        data.map((curUser) => {
          const { Completed, ID, Title, UserId } = curUser;

          return (
            <>
            <tr>
              <td>{Completed.data.completed}</td>
              <td>{ID.data.id}</td>
              <td>{Title}</td>
              <td>{UserId}</td>
            </tr>
            </>
          )
        })
      }
    </>
  )
}

export default UsersData;