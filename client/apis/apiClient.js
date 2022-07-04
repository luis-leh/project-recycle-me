const request = require('superagent')
const recyclablesUrl = '/api/v1/recyclables'
const organicsUrl = '/api/v1/organics'
const generalUrl = '/api/v1/general'

export function getAllRecyclables() {
  return request
    .get(recyclablesUrl)
    .then((response) => {
      // console.log(response)
      const recyclables = response.body
      return recyclables
    })
    .catch((err) => {
      console.error(err.message)
    })
}

export function getAllOrganics() {
  return request
    .get(organicsUrl)
    .then((response) => {
      const organics = response.body
      return organics
    })
    .catch((err) => {
      console.error(err.message)
    })
}

export function getAllGeneral() {
  return request
    .get(generalUrl)
    .then((response) => {
      const general = response.body
      return general
    })
    .catch((err) => {
      console.error(err.message)
    })
}
