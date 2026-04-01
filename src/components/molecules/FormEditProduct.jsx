import { useState, useEffect } from "react";

const FormEditProduct = ({
  isOpen,
  onClose,
  formData,
  isEdit,
  loading,
  onSubmit,
}) => {
  if (!isOpen) return null;

  const [alerts, setAlerts] = useState({});
  const [dataProduct, setDataProduct] = useState(formData);

  useEffect(() => {
    setDataProduct(formData);
  }, [formData]);

  const handleChange = (e) => {
    setDataProduct({
      ...dataProduct,
      [e.target.name]: e.target.value,
    });
    setAlerts({ ...alerts, [e.target.name]: "" });
  };

  const handleSubmit = async () => {
    let newAlerts = {};

    if (!dataProduct.title?.trim()) newAlerts.title = "Mohon isi judul produk";
    if (!dataProduct.category)
      newAlerts.category = "Mohon pilih kategori produk";
    if (!dataProduct.teacher) newAlerts.teacher = "Mohon isi nama mentor";
    if (!dataProduct.job) newAlerts.job = "Mohon isi pekerjaan terlebih dahulu";
    if (!dataProduct.price) newAlerts.price = "Mohon isi harga produk";
    if (!dataProduct.description)
      newAlerts.description = "Mohon isi deskripsi produk";

    if(!dataProduct.price < 0) newAlerts.price = "Mohon isi harga produk di atas 0";

    if (Object.keys(newAlerts).length > 0) {
      setAlerts(newAlerts);
      return;
    }

    await onSubmit(dataProduct, isEdit);
    setAlerts({});
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-lg w-full max-w-2xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {isEdit ? "Edit Produk" : "Tambah Produk"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-200 transition duration-200"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <label htmlFor="title">
              Judul Produk<span className="text-red-500">*</span>
            </label>
            <input
              id="title"
              name="title"
              value={dataProduct.title}
              onChange={handleChange}
              placeholder="Nama Produk"
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 px-3 mt-1"
            />
            {alerts.title && (
              <p className="text-red-500 text-sm ml-1">* {alerts.title}</p>
            )}
          </div>

          <div>
            <label htmlFor="category">
              Kategori<span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              id="category"
              value={dataProduct.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 px-3 mt-1"
            >
              <option value="">Pilih Kategori</option>
              <option value="Pemasaran">Pemasaran</option>
              <option value="Bisnis">Bisnis</option>
              <option value="Design">Design</option>
              <option value="Pengembangan Diri">Pengembangan Diri</option>
            </select>
            {alerts.category && (
              <p className="text-red-500 text-sm ml-1">* {alerts.category}</p>
            )}
          </div>

          <div>
            <label htmlFor="teacher">
              Mentor<span className="text-red-500">*</span>
            </label>
            <input
              id="teacher"
              name="teacher"
              value={dataProduct.teacher}
              onChange={handleChange}
              placeholder="Mentor"
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 px-3 mt-1"
            />
            {alerts.teacher && (
              <p className="text-red-500 text-sm ml-1">* {alerts.teacher}</p>
            )}
          </div>

          <div>
            <label htmlFor="job">
              Pekerjaan<span className="text-red-500">*</span>
            </label>
            <input
              name="job"
              value={dataProduct.job}
              onChange={handleChange}
              placeholder="Job"
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 px-3 mt-1"
            />
            {alerts.job && (
              <p className="text-red-500 text-sm ml-1">* {alerts.job}</p>
            )}
          </div>

          <div>
            <label htmlFor="price">
              Harga<span className="text-red-500">*</span>
            </label>
            <input
              name="price"
              value={dataProduct.price}
              onChange={handleChange}
              placeholder="Harga"
              type="number"
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 px-3 mt-1"
            />
            {alerts.price && (
              <p className="text-red-500 text-sm ml-1">* {alerts.price}</p>
            )}
          </div>

          <div>
            <label htmlFor="img">Gambar (url)</label>
            <input
              name="img"
              value={dataProduct.img}
              onChange={handleChange}
              type="url"
              placeholder="Gambar (URL)"
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 px-3 mt-1"
            />
          </div>
        </div>

        <div className="mt-2">
          <label htmlFor="description">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            id="description"
            value={dataProduct.description}
            onChange={handleChange}
            placeholder="Deskripsi Course"
            className="w-full border border-gray-300 rounded-md shadow-sm p-2 px-3 mt-1"
          />
          {alerts.description && (
            <p className="text-red-500 text-sm ml-1">* {alerts.description}</p>
          )}
        </div>

        <div className="flex justify-end gap-2 mt-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
          >
            {loading ? "Processing...." : isEdit ? "Update" : "Simpan"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormEditProduct;
