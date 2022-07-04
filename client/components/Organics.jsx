import React, { useEffect, useState } from 'react'

import { getAllOrganics } from '../apis/apiClient'

function Organics () {
  const [organicState, setOrganicState] = useState([
    {
      organic_id:'',
      organic_item:'',
      organice_item_image:'',
    }
  ])

  useEffect(() => {
    getAllOrganics()
    .then((results) => {
      console.log(results)
      setOrganicState(results)
    })
    .catch((err) => {
      console.error(err.message)
    })
  },[])
  
  return 'ORGANICS'
}

export default Organics