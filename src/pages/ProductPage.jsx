// src/pages/ProductPage.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
  editProduct,
  viewProduct,
} from "../redux/productSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productSlice.products);
  const selected = useSelector((state) => state.productSlice.selectedProduct);

  

  // Form State
  const [form, setForm] = useState({
    name: "",
    price: "",
  });

  const [editId, setEditId] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or Update product
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.price) return alert("Fill all fields");

    if (editId) {
      dispatch(
        editProduct({ id: editId, updatedData: { ...form } })
      );
      setEditId(null);
    } else {
      dispatch(
        addProduct({
          id: Date.now().toString(),
          name: form.name,
          price: form.price,
        })
      );
    }

    setForm({ name: "", price: "" });
  };

  // Load product into form for editing
  const handleEdit = (product) => {
    setEditId(product.id);
    setForm({ name: product.name, price: product.price });
  };

  return (
    <div className="container py-5">

      <h1 className="text-center mb-4">Product Manager</h1>

      {/* FORM */}
      <div className="card p-4 mb-5 shadow">
        <h4>{editId ? "Edit Product" : "Add Product"}</h4>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="form-control mb-3"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Product Price"
            className="form-control mb-3"
            value={form.price}
            onChange={handleChange}
          />

          <button className="btn btn-primary w-100">
            {editId ? "Update Product" : "Add Product"}
          </button>

        </form>
      </div>

      {/* PRODUCT LIST */}
      <h3 className="mb-3">All Products</h3>

      {products.length === 0 ? (
        <p>No products yet.</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Price (₦)</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm me-2"
                    onClick={() => dispatch(viewProduct(p.id))}
                  >
                    View
                  </button>

                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(p)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => dispatch(deleteProduct(p.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* VIEW PRODUCT */}
      {selected && (
        <div className="alert alert-secondary mt-4">
          <h4>Selected Product</h4>
          <p><strong>Name:</strong> {selected.name}</p>
          <p><strong>Price:</strong> ₦{selected.price}</p>
        </div>
      )}

    </div>
  );
};

export default ProductPage;
