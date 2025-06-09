import { useEffect, useState } from 'react';
import ProductForm from './ProductForm';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = () => {
    fetch('http://localhost:8080/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const saveProduct = product => {
    const method = editingProduct ? 'PUT' : 'POST';
    const url = editingProduct
      ? `http://localhost:8080/api/products/${product.pid}`
      : 'http://localhost:8080/api/products';

    fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    })
      .then(() => {
        fetchProducts();
        setEditingProduct(null);
      });
  };

  const deleteProduct = pid => {
    fetch(`http://localhost:8080/api/products/${pid}`, { method: 'DELETE' })
      .then(() => fetchProducts());
  };

  return (
    <div>
      <ProductForm
        selectedProduct={editingProduct}
        onSave={saveProduct}
        onCancel={() => setEditingProduct(null)}
      />
      <h2>商品一覧</h2>
      <ul>
        {products.map(p => (
          <li key={p.pid}>
            {p.pname} - ¥{p.price} - 在庫: {p.stock}
            <button onClick={() => setEditingProduct(p)}>編集</button>
            <button onClick={() => deleteProduct(p.pid)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;