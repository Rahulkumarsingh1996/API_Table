import React from 'react';
import './Crud';
import CustomerArray from './Data';

const Crud = () => {
  return (
    <>
    <div className="container-fluid">
        <h1 className="h1_crud">CRUD Operation Using JSON</h1>
        <table>
            <thead>
            <tr>
                <th>CustomerId</th>
                <th>CustomerName</th>
                <th>CustomerEmail</th>
                <th>Address</th>
            </tr>
            </thead>

            <tbody id='tblbody'>

            </tbody>
        </table>
    </div>
    
    </>
  )
}

export default Crud