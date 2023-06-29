import Numcomponent from "./numcomponent";
import "./sec2.css";
function Sec2() {
  return (
    <div className="sec2">
      <div className="container ">
        <div className="row">
          <div className="numco col-sm-12 col-md-6 col-lg-3">
            <Numcomponent num="1287+" title="savings" />
          </div>
          <div className="numco col-sm-12 col-md-6 col-lg-3">
            <Numcomponent num="5786+" title="Photos" />
          </div>

          <div className="numco col-sm-12 col-md-6 col-lg-3">
            <Numcomponent num="1440+" title="rocket" />
          </div>

          <div className="numco col-sm-12 col-md-6 col-lg-3">
            <Numcomponent num="7110+" title="globes" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sec2;
