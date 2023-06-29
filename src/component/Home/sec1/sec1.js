import "./sec1.css";
function Section1() {
  return (
    <section className="sec1">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h2 className="fw-bold mb-4 ">
              {" "}
              Good food choices are good investments.
            </h2>
            <p className="text-secondary mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum amet leo.
            </p>
            <div className="sec1-buttons d-flex gap-3">
              <div className="order">
                <button className="order-btn py-2 px-4 ">order now</button>
              </div>
              <div className="more ">
                <button className="more-btn py-2 px-4 ">learn more</button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6"></div>
        </div>
      </div>
    </section>
  );
}
export default Section1;
