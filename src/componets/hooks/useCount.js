import { useState } from "react";

const useCount = ( initial = 1 ) => {
    const [count, setCount] = useState(initial);

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

    const reset = () => {
        setCount(initial);
    }

    return {
        count,
        increment,
        decrement,
        reset,
    }
}

export default useCount
