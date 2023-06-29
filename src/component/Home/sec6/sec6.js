import Headthenp from "../../reusablecom/headthenp";
import Menucard from "./menucard";
import Products from "./menu";
import "./sec6.css";
function Sec6() {
  const head = " Explore Our Foods";
  const par =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.";

  return (
    <div className="sec6 text-center">
      <div className="sec6-text mb-5">
        <Headthenp head={head} p={par} />
      </div>
      <div className="menu-cards container">
        <div className="row  ">
          {Products.map((Product) => {
            return (
              <div className="m-card col-lg-4 col-sm-12">
                <Menucard
                  image={Product.image}
                  title={Product.title}
                  text={Product.text}
                  saleprice={Product.saleprice}
                  originprice={Product.originprice}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Sec6;
