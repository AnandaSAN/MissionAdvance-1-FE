import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${API_URL}/users`);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  console.log(users);

  return (
    <div className="bg-white rounded-xl p-5 border border-[#3A35411F] shadow-sm">
      <h2 className="font-poppins font-semibold text-xl mb-4">Daftar Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="font-dm-sans font-semibold text-gray-700 bg-gray-100">
            <tr>
              <th className="font-poppins text-center py-2 px-4">No</th>
              <th className="font-poppins text-center py-2 px-4">Name</th>
              <th className="font-poppins text-center py-2 px-4">Email</th>
              <th className="font-poppins text-center py-2 px-4">
                Phone Number
              </th>
              <th className="font-poppins text-center py-2 px-4">Password</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan="4" className="text-center py-5">
                  <div className="flex justify-center items-center gap-2">
                    <span>Loading Users </span>
                    <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                </td>
              </tr>
            ) : (
              users.map((users, index) => (
                <tr key={users.id}>
                  <td className="font-dm-sans text-center py-2 px-4">
                    {index + 1}
                  </td>
                  <td className="font-dm-sans text-center py-2 px-4">
                    {users.name}
                  </td>
                  <td className="font-dm-sans text-center py-2 px-4">
                    {users.email}
                  </td>
                  <td className="font-dm-sans text-center py-2 px-4">
                    {users.phone}
                  </td>
                  <td className="font-dm-sans text-center py-2 px-4">
                    {users.password}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
