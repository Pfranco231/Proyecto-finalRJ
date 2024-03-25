import { useState } from "react";

export const ItemCount = ({initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

//   const { count, increment, decrement } = useCount();


  const increment = () => {
    setCount(count + 1);
    };

  const decrement = () => {
    if(count > 1) {
        setCount(count - 1);

    }else {
        //
    }
    };



  return (
    <div className=" d-flex justify-content-center my-3">
        <button className="btn btn-danger" onClick={decrement}>-</button>
        <span className="ms-2 me-2">{count}</span>
        <button className="btn btn-success" onClick={increment}>+</button>
        <button className="ms-4 btn btn-success" onClick={() => onAdd(count)}>Agregar</button>
    </div>
  );
};