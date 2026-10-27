
import { useDispatch, useSelector } from "react-redux";

const CounterSlice = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        background: "#f5f5f5",
      }}
    >
      <h2 className="mb-4">Redux Counter</h2>
      <div className="d-flex align-items-center">
        <button className="btn btn-success btn-lg me-3" onClick={() => dispatch({ type: "INCREMENT"})} > + </button>
        <h3 style={{ minWidth: "60px", textAlign: "center", margin: "0 15px", color: "#333", fontWeight: "bold", }} > {count} </h3>
        <button className="btn btn-danger btn-lg ms-3" onClick={() => dispatch({ type: "DECREMENT" })} > - </button>
      </div>
    </div>
  );
};

export default CounterSlice;
