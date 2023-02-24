
import { Link } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar"
import { AllRoutes } from "./Routes/AllRoutes";
function App() {
  return (
  <>
  <Link to="/MenShirt">MenShirt</Link>
  <Link to="/MenShoes">MenShoes</Link>
  <Link to="/MenPants">MenPants</Link>
<AllRoutes />
  </>
  );
}

export default App;
