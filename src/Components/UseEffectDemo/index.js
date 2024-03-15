import React, { useEffect, useState } from "react";

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);

  //"Use effect with random background image"
  //   useEffect(() => {
  //     // alert("Welcome");
  //     setTimeout(() => {
  //       setCount(count + 1);
  //     }, 5000);
  //     // setCount(count + 1);
  //   },[]);

  const images = [
    { id: 1, image: "https://source.unsplash.com/random/900x700/?lucknow/1" },
    { id: 2, image: "https://source.unsplash.com/random/900x700/?lucknow/2" },
    { id: 3, image: "https://source.unsplash.com/random/900x700/?lucknow/3" },
    { id: 4, image: "https://source.unsplash.com/random/900x700/?lucknow/4" },
    { id: 5, image: "https://source.unsplash.com/random/900x700/?lucknow/5" },
    { id: 6, image: "https://source.unsplash.com/random/900x700/?lucknow/6" },
    { id: 7, image: "https://source.unsplash.com/random/900x700/?lucknow/7" },
    { id: 8, image: "https://source.unsplash.com/random/900x700/?lucknow/8" },
    { id: 9, image: "https://source.unsplash.com/random/900x700/?lucknow/9" },
  ];

  useEffect(() => {
    setTimeout(() => {
      count !== 8 && setCount(count + 1);
    }, 2000);
  });
  console.log(count);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {/* for random image */}
      {/* <img
        src={`https://source.unsplash.com/random/900x700/?lucknow/${count}`}
        alt=""
      /> */}
      {/* <p>{`https://source.unsplash.com/random/900x700/?lucknow/${count}`}</p> */}
      {/* <p className="text-4xl">{count}</p> */}
      {/* For Array Images */}
      <div className="flex gap-2 items-center">
        <button
          className="bg-blue-500 p-2 rounded-xl"
          onClick={() => count !== 0 && setCount(count - 1)}
        >
          Prev
        </button>
        <img src={images[count].image} alt="" />
        <button
          className="bg-blue-500 p-2 rounded-xl"
          onClick={() => count !== 8 && setCount(count + 1)}
        >
          Next
        </button>
      </div>

      <p>{images[count].image}</p>
    </div>
  );
};

export default UseEffectDemo;
