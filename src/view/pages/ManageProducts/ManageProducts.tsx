import React, { useState } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
    stock: number;
};

const initialProducts: Product[] = [
    { id: 1, name: "ASUS", price: 120000, category: "Laptop", stock: 10 },
    { id: 2, name: "MSI", price: 280000, category: "Laptop", stock: 4 },
    { id: 3, name: "ASER", price: 150000, category: "Laptop", stock: 5 },
];

export function ManageProducts() {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState<Omit<Product, "id">>({
        name: "",
        price: 0,
        category: "",
        stock: 0,
    });
    const [editingId, setEditingId] = useState<number | null>(null);

    const openAddModal = () => {
        setForm({ name: "", price: 0, category: "", stock: 0 });
        setEditingId(null);
        setShowModal(true);
    };

    const openEditModal = (product: Product) => {
        setForm({
            name: product.name,
            price: product.price,
            category: product.category,
            stock: product.stock,
        });
        setEditingId(product.id);
        setShowModal(true);
    };

    const handleDelete = (id: number) => {
        setProducts(products.filter((p) => p.id !== id));
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: name === "price" || name === "stock" ? Number(value) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingId !== null) {
            setProducts(
                products.map((p) =>
                    p.id === editingId ? { ...p, ...form } : p
                )
            );
        } else {
            const newProduct: Product = {
                id: products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1,
                ...form,
            };
            setProducts([...products, newProduct]);
        }
        setShowModal(false);
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Manage Products</h1>
            <button onClick={openAddModal} style={{ marginBottom: "1rem" }}>
                + Add Product
            </button>
            <table border={1} cellPadding={10} cellSpacing={0} style={{ width: "100%", background: "#fff" }}>
                <thead>
                <tr style={{ background: "#eee" }}>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price ($)</th>
                    <th>Category</th>
                    <th>Stock</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {products.length === 0 ? (
                    <tr>
                        <td colSpan={6} style={{ textAlign: "center" }}>
                            No products found.
                        </td>
                    </tr>
                ) : (
                    products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.stock}</td>
                            <td>
                                <button onClick={() => openEditModal(product)} style={{ marginRight: "0.5rem" }}>
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(product.id)} style={{ color: "red" }}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>

            {/* Modal */}
            {showModal && (
                <div
                    style={{
                        position: "fixed",
                        top: 0, left: 0, width: "100vw", height: "100vh",
                        background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center"
                    }}
                >
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            background: "#fff", padding: "2rem", borderRadius: 8, minWidth: 300,
                            boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
                        }}
                    >
                        <h2>{editingId ? "Edit" : "Add"} Product</h2>
                        <div style={{ marginBottom: "1rem" }}>
                            <label>Name: </label>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleFormChange}
                                required
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div style={{ marginBottom: "1rem" }}>
                            <label>Price: </label>
                            <input
                                name="price"
                                type="number"
                                value={form.price}
                                onChange={handleFormChange}
                                required
                                style={{ width: "100%" }}
                                min={0}
                            />
                        </div>
                        <div style={{ marginBottom: "1rem" }}>
                            <label>Category: </label>
                            <input
                                name="category"
                                value={form.category}
                                onChange={handleFormChange}
                                required
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div style={{ marginBottom: "1rem" }}>
                            <label>Stock: </label>
                            <input
                                name="stock"
                                type="number"
                                value={form.stock}
                                onChange={handleFormChange}
                                required
                                style={{ width: "100%" }}
                                min={0}
                            />
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <button type="button" onClick={() => setShowModal(false)} style={{ marginRight: "0.5rem" }}>
                                Cancel
                            </button>
                            <button type="submit">{editingId ? "Update" : "Add"}</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}