import Headthenp from "../../reusablecom/headthenp";
import Morebtn from "../../reusablecom/learnmorebtn";
import "./sec5.css";
function Sec5() {
  const head =
    " When a man's stomach is full it makes no difference whether he is rich or poor.";
  const par =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.";
  return (
    <div className="sec5 text-center">
      <div className="sec5-text">
        <Headthenp head={head} p={par} />
        <a
          className="video text-decoration-none fw-bold "
          target="-blank"
          href="https://www.youtube.com/watch?v=bZx8rPd-PKQ"
        >
          watch our Story
        </a>
      </div>
    </div>
  );
}
export default Sec5;
