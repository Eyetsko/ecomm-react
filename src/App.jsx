import "./App.css";
import "./Product-card.jsx"
import "./navbar.jsx"
import ProductDashboard from "./product-dashboard.jsx";
import NavBar from "./navbar.jsx";
import LeftMenu from "./leftmenu.jsx";

function App() {

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <h1>Really Cool Stuff</h1>
       <ProductDashboard />
      </div>
    </>
  );
}

export default App;
