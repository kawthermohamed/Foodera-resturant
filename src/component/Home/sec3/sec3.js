import Headthenp from "../../reusablecom/headthenp";
import Morebtn from "../../reusablecom/learnmorebtn";
import "./sec3.css";
function Sec3() {
  const head =
    "We pride ourselves on making real food from the best ingredients.";
  const par =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.";
  return (
    <div className="sec3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-sm-12">
            <img
              className="img-fluid"
              src="https://media.cnn.com/api/v1/images/stellar/prod/230310160112-05-body-best-rice-dishes.jpg?c=original"
              alt=""
            />
          </div>
          <div className=" sec3-text col-lg-5 col-sm-12">
            <Headthenp head={head} p={par} />
            <Morebtn />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sec3;
