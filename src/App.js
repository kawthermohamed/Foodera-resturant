import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home/Home.js";
import Headernav from "./component/Navs/navs";
export default function App() {
  return (
    <div className="App">
      <Headernav />
      <Home />
    </div>
  );
}
