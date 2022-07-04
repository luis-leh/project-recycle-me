import React, { useEffect, useState } from 'react'

import {getAllGeneral } from '../apis/apiClient'

function General () {
  const [generalState, setGeneralState] = useState([
    {
      general_id:'',
      general_item:'',
      general_item_image:'',
    }
  ])

  useEffect(() => {
    getAllGeneral()
    .then((results) => {
      console.log(results)
      setGeneralState(results)
    })
    .catch((err) => {
      console.error(err.message)
    })
  },[])
  return 'GENERAL'
}

export default General