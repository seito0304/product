import { useState, useEffect } from 'react';

function ProductForm({ selectedProduct, onSave, onCancel }) {
  const [product, setProduct] = useState({
    pid: '',
    pname: '',
    category: '',
    price: '',
    stock: '',
  });

  useEffect(() => {
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [selectedProduct]);

  const handleChange = e => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(product);
    setProduct({ pid: '', pname: '', category: '', price: '', stock: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{selectedProduct ? '編集' : '新規登録'}</h3>
      <input name="pid" value={product.pid} onChange={handleChange} placeholder="商品ID" required />
      <input name="pname" value={product.pname} onChange={handleChange} placeholder="商品名" required />
      <input name="category" value={product.category} onChange={handleChange} placeholder="カテゴリ" />
      <input name="price" type="number" value={product.price} onChange={handleChange} placeholder="価格" />
      <input name="stock" type="number" value={product.stock} onChange={handleChange} placeholder="在庫" />
      <button type="submit">保存</button>
      {selectedProduct && <button onClick={onCancel}>キャンセル</button>}
    </form>
  );
}

export default ProductForm;