import axios from 'axios'

const blogApi = axios.create({
  baseURL:'https://jsonplaceholder.typicode.com'
})

export default blogApi