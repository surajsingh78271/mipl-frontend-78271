import React from 'react'

const Data = (props) => {
  return (
    <tr>
          <td>{props.item.id}</td>
          <td>{props.item.first_name}</td>
          <td>{props.item.last_name}</td>
          <td>{props.item.email}</td>
          <td>{props.item.gender}</td>
          <td>{props.item.income}</td>
          <td>{props.item.city}</td>
          <td>{props.item.car}</td>
          <td>{props.item.quote}</td>
          <td>{props.item.phone_price}</td>
        </tr>
  )
}

export default Data