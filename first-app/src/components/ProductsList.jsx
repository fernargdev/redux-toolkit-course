import { useEffect, useState } from 'react'

import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux'
import { createProduct, readProduct } from '../redux/productsSlice'

const ProductsList = () => {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  const [newProductName, setnewProductName] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/products')
      .then((res) => {
        console.log(res)
        dispatch(readProduct(res.data))
      })
      .catch((err) => console.log(err))
  }, [dispatch])

  const handleCreateProduct = () => {
    if (newProductName) {
      const newProduct = { id: Date.now(), name: newProductName }
      dispatch(createProduct(newProduct))

      console.log(newProduct)

      axios
        .post('http://localhost:3001/products', newProduct)
        .then(() => {
          setnewProductName('')
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <>
      <h2>Crud de Productos</h2>
      <h3>Lista de Productos</h3>
      <ul>
        {products.data.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <aside>
        <input
          type="text"
          value={newProductName}
          onChange={(e) => setnewProductName(e.target.value)}
        />
        <button onClick={handleCreateProduct}>Agregar Producto</button>
      </aside>
    </>
  )
}

export default ProductsList
