import Headthenp from "../../reusablecom/headthenp";
import Morebtn from "../../reusablecom/learnmorebtn";
import "./sec8.css";
import { questions } from "./questions";
function Sec8() {
  const [q1, q2, q3, q4] = questions;
  return (
    <div className="sec8 text-center">
      <h2 className="fw-bold mb-5">Frequently Asked Questions</h2>
      <div className="questions container">
        <div className="row text-start">
          <div className="col-lg-6 col-sm-12">
            <Headthenp head={q1.q} p={q1.Ans} />
          </div>
          <div className="col-lg-6 col-sm-12">
            <Headthenp head={q2.q} p={q2.Ans} />
          </div>
          <div className="col-lg-6 col-sm-12">
            <Headthenp head={q3.q} p={q3.Ans} />
          </div>
          <div className="col-lg-6 col-sm-12">
            <Headthenp head={q4.q} p={q4.Ans} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sec8;
