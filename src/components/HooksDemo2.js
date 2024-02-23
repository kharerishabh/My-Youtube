import React, { useRef, useState } from "react";

const HooksDemo2 = () => {
  const [x, setX] = useState(0);
  let v = 0;
  const ref = useRef(0)
  const increaseV = () => (v = v + 1);
  const increaseX = () => setX(x + 1);
  const increaseRef = () => ref.current = ref.current + 1
  return (
    <div className="m-4 p-2 bg-slate-100 border border-black h-96 w-96">
      <div>
        <span className="font-bold text-xl">Let = {v}</span>
        <button className="p-2 m-2 bg-green-200 rounded-lg" onClick={increaseV}>
          Increase V
        </button>
      </div>
      <div>
        <span className="font-bold text-xl">State = {x}</span>
        <button className="p-2 m-2 bg-green-200 rounded-lg" onClick={increaseX}>
          Increase V
        </button>
      </div>
      <div>
        <span className="font-bold text-xl">Ref = {ref.current}</span>
        <button className="p-2 m-2 bg-green-200 rounded-lg" onClick={increaseRef}>
          Increase Ref
        </button>
      </div>
    </div>
  );
};

export default HooksDemo2;
