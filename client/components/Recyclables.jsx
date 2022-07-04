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

  return 'RECYCLABLES'
}

export default Recyclables