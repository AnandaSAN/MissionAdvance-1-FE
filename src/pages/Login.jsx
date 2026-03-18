import Navbar from "../components/organism/Navbar";
import FormLogin from "../components/molecules/FormLogin";
import AuthLayout from "../components/layout/AuthLayout";


const Login = () => {

  return (
    <>
      <Navbar />
      <AuthLayout
        title="Masuk ke Akun"
        subtitle="Yuk, lanjutin belajarmu di videobelajar."
      >
        <FormLogin />
      </AuthLayout>
    </>
  );
};

export default Login;
