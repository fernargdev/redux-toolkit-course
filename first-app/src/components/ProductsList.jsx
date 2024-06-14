import { useEffect, useState } from 'react'

import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux'
import {
  createProduct,
  readProduct,
  updateProduct,
} from '../redux/productsSlice'

const ProductsList = () => {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  const [newProductName, setnewProductName] = useState('')
  const [editedProduct, setEditedProduct] = useState(null)

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
      const newProduct = { id: Date.now().toString(), name: newProductName }
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

  const handleUpdateProduct = () => {
    if (editedProduct) {
      dispatch(
        updateProduct({
          id: editedProduct.id,
          name: editedProduct.name,
        })
      )

      console.log(editedProduct.name)

      axios
        .put(`http://localhost:3001/products/${editedProduct.id}`, {
          name: editedProduct.name,
        })
        .then(() => {
          setEditedProduct(null)
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
          <li key={product.id}>
            {editedProduct && editedProduct.id === product.id ? (
              <div>
                <input
                  type="text"
                  value={editedProduct.name}
                  onChange={(e) =>
                    setEditedProduct({
                      ...editedProduct,
                      name: e.target.value,
                    })
                  }
                />
                <button onClick={handleUpdateProduct}>Actualizar</button>
              </div>
            ) : (
              <div>
                <span>{product.name}</span>
                <button onClick={() => setEditedProduct(product)}>
                  Editar
                </button>
                <button>Eliminar</button>
              </div>
            )}
          </li>
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
