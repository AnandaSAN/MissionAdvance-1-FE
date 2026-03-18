import Navbar from "../components/organism/Navbar";
import AuthLayout from "../components/layout/AuthLayout";
import FormRegister from "../components/molecules/FormRegister";

const Register = () => {
  return (
    <>
      <Navbar />
      <AuthLayout
        title="Pendaftaran Akun"
        subtitle="Yuk, daftarkan akunmu sekarang juga!"
      >
        <FormRegister />
      </AuthLayout>
    </>
  );
};

export default Register;
