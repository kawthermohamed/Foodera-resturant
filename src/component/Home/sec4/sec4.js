import Headthenp from "../../reusablecom/headthenp";
import Morebtn from "../../reusablecom/learnmorebtn";
import "./sec4.css";
function Sec4() {
  const head = "We make everything by hand with the best possible ingredients.";
  const par =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.";
  return (
    <div className="sec4">
      <div className="container">
        <div className="row align-items-center ">
          <div className="sec4-text col-lg-5 col-sm-12">
            <Headthenp head={head} p={par} />
            <ul className="sec4-ul ms-3 list-unstyled mb-4">
              <li className="mb-2"> Etiam sed dolor ac diam volutpat.</li>
              <li className="mb-2">Erat volutpat aliquet imperdiet.</li>
              <li>purus a odio finibus bibendum.</li>
            </ul>
            <Morebtn />
          </div>
          <div className="col-lg-7 col-sm-12">
            <img
              className="img-fluid"
              src="https://qlevents.storage.googleapis.com/media/images/Qatari_dishes__QL_Events.format-jpeg.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec4;
