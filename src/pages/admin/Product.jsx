import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../services/hooks/useProduct";

import PopupEdit from "../../components/molecules/FormEditProduct";

const Product = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const {
    products,
    loading,
    actionLoading,
    addProduct,
    editProduct,
    removeProduct,
  } = useProduct();

  const initialData = {
    id: null,
    title: "",
    description: "",
    teacher: "",
    job: "",
    category: "",
    img: "",
    price: "",
  };
  const [formData, setFormData] = useState(initialData);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1);
    }
  }, [products, totalPages]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      navigate("/login");
    }
  }, [navigate]);

  const handleAdd = () => {
    setIsEdit(false);
    setFormData(initialData);
    setIsPopupOpen(true);
  };

  const handleEdit = (product) => {
    setIsEdit(true);
    setFormData(product);
    setIsPopupOpen(true);
  };

  const handleSubmit = async (data, isEdit) => {
    try {
      if (isEdit) {
        await editProduct(data.id, data);
        alert("Berhasil Update Produk!");
      } else {
        await addProduct({
          ...data,
          price: Number(data.price),
        });
        alert("Berhasil Menambah Produk!");
      }
      setIsPopupOpen(false);
      setFormData(initialData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Apakah Anda yakin ingin menghapus?");
    if (!confirm) return;
    try {
      await removeProduct(id);
      alert("Product Berhasil dihapus!");
    } catch (error) {
      alert(error.response?.data?.message || "Terjadi kesalahan");
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl p-5 border border-[#3A35411F] shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h2 className="font-poppins font-semibold text-xl ">
            Daftar Produk {loading ? "(-)" : `(${products.length})`}
          </h2>
          <button
            onClick={handleAdd}
            className="w-fit bg-green-500 text-white px-4 py-2 text-sm rounded hover:bg-green-600 mt-2"
          >
            Tambah Produk
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="font-dm-sans font-semibold text-gray-700 bg-gray-100">
              <tr>
                <th className="text-left py-2 px-4">NO</th>
                <th className="text-left py-2 px-4">Nama Produk</th>
                <th className="text-left py-2 px-4">mentor</th>
                <th className="text-left py-2 px-4">Kategori</th>
                <th className="text-left py-2 px-4">Harga</th>
                <th className="text-left py-2 px-4">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan="6" className="text-center py-5">
                    <div className="flex justify-center items-center gap-2">
                      <span>Loading products </span>
                      <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </td>
                </tr>
              ) : currentProducts.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-5">
                    Tidak ada Course yang tersedia
                  </td>
                </tr>
              ) : (
                currentProducts.map((product, index) => (
                  <tr key={product.id}>
                    <td className="py-2 px-4">
                      {indexOfFirstItem + index + 1}
                    </td>
                    <td className="py-2 px-4 text-lg text-gray-800">
                      <p className="font-bold">{product.title}</p>
                      <p className="text-sm text-gray-600">
                        {product.description}
                      </p>
                    </td>
                    <td className="py-2 px-4 whitespace-nowrap text-sm text-gray-600">
                      <p className="font-bold">{product.teacher}</p>
                      <p>{product.job}</p>
                    </td>
                    <td className="py-2 px-4 font-medium text-sm text-gray-600">
                      {product.category}
                    </td>
                    <td className="py-2 px-4 whitespace-nowrap text-sm font-semibold text-green-600">
                      Rp {new Intl.NumberFormat("id-ID").format(product.price)}
                    </td>
                    <td className="py-2 px-4 gap-2 whitespace-nowrap text-sm font-medium text-center">
                      <button
                        onClick={() => handleEdit(product)}
                        className="bg-blue-200 text-blue-600 px-3 py-1 rounded hover:bg-blue-400 hover:text-blue-900 cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="bg-red-200 text-red-600 px-3 py-1 rounded ml-2 hover:bg-red-400 hover:text-red-900 cursor-pointer"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div className="flex justify-center items-center gap-2 mt-5">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
            >
              prev
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
            >
              next
            </button>
          </div>
        </div>
      </div>

      <PopupEdit
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        formData={formData}
        isEdit={isEdit}
        loading={actionLoading}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default Product;
