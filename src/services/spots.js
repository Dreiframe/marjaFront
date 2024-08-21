import axios from 'axios'
//const baseUrl = 'http://localhost:3001/api/spots'
//const baseUrl = 'https://marjaback.onrender.com/api/spots'
const baseUrl = '/api/spots'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const deleteId = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

/*
const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}
*/

export default { 
  getAll: getAll, 
  create: create, 
  deleteId : deleteId
  //update: update 
}