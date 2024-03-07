import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = ({ name, num }) => {
  // console.log(i.name);
  // console.log(i.num);
  // const obj = { name2: "Amir", num2: 12 };

  // const { name, num } = i;

  console.log(name, num);

  // console.log(name2);
  // console.log(num2);
  // console.log(name);
  // console.log(num);
  return (
    <div className="h-full">
      <div className="flex gap-5 h-[5vh] items-center bg-black text-white ">
        <button className="hover:bg-white hover:text-black p-2">Logo</button>
        <button className="hover:bg-white hover:text-black p-2">Logo</button>
        <button className="hover:bg-white hover:text-black p-2">Logo</button>
        <button className="hover:bg-white hover:text-black p-2">Logo</button>
        <button className="hover:bg-white hover:text-black p-2">Logo</button>
        <button className="hover:bg-white hover:text-black p-2">Logo</button>
        <button className="hover:bg-white hover:text-black p-2">Logo</button>
        {/* <p>{i.name}</p> */}
      </div>
      <div className="flex h-[95vh]">
        <div className="w-[10%] flex flex-col h-full bg-gray-200">
          <p className="p-3">Menu</p>
          <Link className="hover:bg-black p-2 w-full hover:text-white">
            Link 1
          </Link>
          <Link className="hover:bg-black p-2 w-full hover:text-white">
            Link 1
          </Link>
          <Link className="hover:bg-black p-2 w-full hover:text-white">
            Link 1
          </Link>
          <Link className="hover:bg-black p-2 w-full hover:text-white">
            Link 1
          </Link>
          <Link className="hover:bg-black p-2 w-full hover:text-white">
            Link 1
          </Link>
        </div>
        <div className="w-[90%] h-full overflow-y-auto">
          {[1, 2, 3, 4, 5, 6, 65, 4, 5, 4].map(() => (
            <div className="flex ">
              <div className="w-[60%] p-5">
                <p className="text-xl font-bold">Heading</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="flex p-5 w-[40%] gap-5 flex-col">
                <div className="h-24 flex justify-center items-center border-2">
                  AD
                </div>
                <div className="h-40 flex justify-center items-center border-2">
                  AD
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
