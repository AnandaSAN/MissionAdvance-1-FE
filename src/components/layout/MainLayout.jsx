import Navbar from "../organism/Navbar";
import Footer from "../organism/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
