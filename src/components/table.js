import React from 'react'
import Data from './data'
import './table.css'

const Table = (props) => {
  return (
    <div>
      <table className='table'>
        <thead  >
        <tr className='thead'  >
          <th >id</th>
          <th>First_Name</th>
          <th>Last_Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Income</th>
          <th>City</th>
          <th>Car</th>
          <th>Quote</th>
          <th>Phone_Price</th>
        </tr>
        {/* {
          props.data.map((item)=>{
            return <Data item={item} key={item.id} />
          })
        } */}

        </thead>
        <tbody>
        {
          props.data.map((item)=>{
            return <Data item={item} key={item.id} />
          })
        }


        </tbody>
        {/* <tfoot>copyright</tfoot> */}
        
        


        


      </table>




    </div>
  )
}

export default Table