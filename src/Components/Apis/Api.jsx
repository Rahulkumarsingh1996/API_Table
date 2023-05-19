import { useEffect, useState } from "react";
import "./Api.css";
import User from "./User";
// const API ="https://jsonplaceholder.typicode.com/posts%22";


const Api = () => {
    // const API = "https://jsonplaceholder.typicode.com/todos/1";
    const [data, setUsers] = useState([]);
    const fetchUsers = async () => {
        // try {
        //     const res = await fetch(API);
        //     const data = await res.json();
        //     if (data.length > 0) {
        //         setUsers(data);
        //     }
        //     console.log(data);
        // } catch (e) {
        //     console.error(e);
        // }
        await fetch('https://jsonplaceholder.typicode.com/todos/1')

      .then((res) => res.json())

      .then((data) => setUsers(data))
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <h1>Welcome to table Data</h1>

            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Completed</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>UserId</th>
                        </tr>
                    </thead>

                    <tbody>
                        { 
                        data.map((data) => (
                        // const { Completed, ID, Title, UserId } = curUser;
                                // <tr>
                                //     <td>{item.completed}</td>
                                //     <td>{item.ID}</td>
                                //     <td>{item.Title}</td>
                                //     <td>{item.UserId}</td>
                                // </tr>
                                
                                <User userId={data.userId} id={data.id}/>
                                
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Api;
