import React, { useEffect, useState } from 'react'

import { getAllRecyclables } from '../apis/apiClient'

function Recyclables () {
  const [recycleState, setRecycleState] = useState([
    {
      recyclable_id:'',
      recyclable_item:'',
      recyclable_item_image:'',
    }
  ])

  useEffect(() => {
  getAllRecyclables()
  .then((results) => {
    console.log(results)
    setRecycleState(results)
  })
  .catch((err) => {
  console.error(err.message)
  })
},[])

  return (
    <ul>
      {recycleState.map((item) => (
        <li key={item.recyclable_id}>
          {item.recyclable_item}
        </li>
      ))}
    </ul>
  )
}

export default Recyclables