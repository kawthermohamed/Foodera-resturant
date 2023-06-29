import "./headthenp.css";
function Headthenp({ head, p }) {
  return (
    <div className="headthenp">
      <h3 className="fw-bold mb-4">{head}</h3>
      <p className="text-secondary lh-lg mb-4">{p}</p>
    </div>
  );
}
export default Headthenp;
