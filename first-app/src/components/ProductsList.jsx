import { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { readProduct } from '../redux/productsSlice'

const ProductsList = () => {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get('http://localhost:3001/products')
      .then((res) => {
        console.log(res)
        dispatch(readProduct(res.data))
      })
      .catch((err) => console.log(err))
  }, [dispatch])

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
        <input type="text" />
        <button>Agregar Producto</button>
      </aside>
    </>
  )
}

export default ProductsList
