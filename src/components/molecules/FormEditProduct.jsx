const FormEditProduct = ({
  isOpen,
  onClose,
  onSave,
  formData,
  handleChange,
  isEdit,
  loading,
}) => {
  if (!isOpen) return null;

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
              Judul Courses<span className="text-red-500">*</span>
            </label>
            <input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Nama Produk"
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 px-3 mt-1"
            />
          </div>

          <div>
            <label htmlFor="category">
              Kategori<span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 px-3 mt-1"
            >
              <option value="">Pilih Kategori</option>
              <option value="Pemasaran">Pemasaran</option>
              <option value="Bisnis">Bisnis</option>
              <option value="Design">Design</option>
              <option value="Pengembangan Diri">Pengembangan Diri</option>
            </select>
          </div>

          <div>
            <label htmlFor="teacher">
              Mentor<span className="text-red-500">*</span>
            </label>
            <input
              id="teacher"
              name="teacher"
              value={formData.teacher}
              onChange={handleChange}
              placeholder="Mentor"
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 px-3 mt-1"
            />
          </div>

          <div>
            <label htmlFor="job">
              Pekerjaan<span className="text-red-500">*</span>
            </label>
            <input
              name="job"
              value={formData.job}
              onChange={handleChange}
              placeholder="Job"
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 px-3 mt-1"
            />
          </div>

          <div>
            <label htmlFor="price">
              Harga<span className="text-red-500">*</span>
            </label>
            <input
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Harga"
              type="number"
              className="w-full border border-gray-300 rounded-md shadow-sm p-2 px-3 mt-1"
            />
          </div>

          <div>
            <label htmlFor="img">Gambar (url)</label>
            <input
              name="img"
              value={formData.img}
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
            value={formData.description}
            onChange={handleChange}
            placeholder="Deskripsi Course"
            className="w-full border border-gray-300 rounded-md shadow-sm p-2 px-3 mt-1"
          />
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
            onClick={onSave}
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
