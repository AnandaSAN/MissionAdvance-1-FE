import { useState, useEffect } from "react";
import {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/productsApi";

export const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const data = await getProduct();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (product) => {
    try {
      setActionLoading(true);
      const newProduct = await createProduct(product);
      setProducts((prev) => [...prev, newProduct]);
    } catch (error) {
      console.error("Error addProduct:", error);
    } finally {
      setActionLoading(false);
    }
  };

  const editProduct = async (id, product) => {
    try {
      setActionLoading(true);
      const updated = await updateProduct(id, product);
      setProducts((prev) =>
        prev.map((item) => (item.id === id ? updated : item)),
      );
    } catch (error) {
      console.error("Error editProduct:", error);
    } finally {
      setActionLoading(false);
    }
  };

  const removeProduct = async (id) => {
    try {
      setActionLoading(true);
      await deleteProduct(id);
      setProducts((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error removeProduct:", error);
    } finally {
      setActionLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return { products, loading, actionLoading, addProduct, editProduct, removeProduct };
};
