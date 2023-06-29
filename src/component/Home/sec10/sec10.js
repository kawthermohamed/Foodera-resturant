import Headthenp from "../../reusablecom/headthenp";
import Subform from "./form";
import Morebtn from "../../reusablecom/learnmorebtn";
import "./sec10.css";
function Sec10() {
  const Head = "Hurry up! Subscribe our newsletter and get 25% Off";
  const p = "Limited time offer for this month. No credit card required.  ";
  return (
    <div className="sec10 ">
      <div className="container ">
        <div className="sub m-auto ">
          <Headthenp head={Head} p={p} />
          <Subform />
        </div>
      </div>
      ;
    </div>
  );
}
export default Sec10;
