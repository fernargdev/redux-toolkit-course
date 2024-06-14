import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

export const UsersList = () => {
  const users = useSelector((state) => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }, [dispatch])

  return (
    <>
      <h2>Lista de Usuarios</h2>
      <ul>
        <li>Usuarios</li>
      </ul>
    </>
  )
}

export default UsersList
