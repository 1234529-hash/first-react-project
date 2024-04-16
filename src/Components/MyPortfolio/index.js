import React from "react";
import Header from "./Header";
import { Avatar, ListItemButton } from "@mui/material";
import {
  Cake,
  Close,
  Edit,
  Event,
  Groups,
  Home,
  Image,
} from "@mui/icons-material";

const MyPortfolio = () => {
  return (
    <>
      <Header />
      <div className="flex lg:flex-row flex-col p-5 bg-gray-200 gap-5">
        <div className="lg:w-[30%] flex flex-col gap-5">
          <div className="flex flex-col bg-white rounded-lg shadow gap-3 p-5">
            <div className="flex flex-col gap-3 items-center justify-center">
              <p>My Profile</p>
              <Avatar
                src="https://www.w3schools.com/w3images/avatar3.png"
                className="!h-16 !w-16"
              />
            </div>

            <span className="flex gap-2">
              <Edit /> <span>Designer, UI</span>
            </span>
            <span className="flex gap-2">
              <Home /> <span>London, UK</span>
            </span>
            <span className="flex gap-2">
              <Cake /> <span>April 1, 1988</span>
            </span>
          </div>
          <div className="flex flex-col bg-[#4d636f] !text-white shadow gap-3">
            <ListItemButton className="flex gap-2">
              <Groups /> <span>My Groups</span>
            </ListItemButton>
            <ListItemButton className="flex gap-2">
              <Event /> <span>My Events</span>
            </ListItemButton>
            <ListItemButton className="flex gap-2">
              <Image /> <span>My Photos</span>
            </ListItemButton>
          </div>
          <div className="flex flex-col bg-white rounded-lg shadow gap-3 p-5">
            <p>Interests</p>

            <div className="flex gap-2 flex-wrap">
              <p className="bg-gray-900 text-white px-1 py-0.5 text-xs">News</p>
              <p className="bg-gray-800 text-white px-1 py-0.5 text-xs">
                W3Schools
              </p>
              <p className="bg-gray-700 text-white px-1 py-0.5 text-xs">
                Labels
              </p>
              <p className="bg-gray-600 text-white px-1 py-0.5 text-xs">
                Games
              </p>
              <p className="bg-gray-500 text-white px-1 py-0.5 text-xs">
                Games
              </p>
              <p className="bg-gray-400 text-white px-1 py-0.5 text-xs">
                Friends
              </p>
              <p className="bg-gray-900 text-white px-1 py-0.5 text-xs">Food</p>
              <p className="bg-gray-900 text-white px-1 py-0.5 text-xs">Art</p>
              <p className="bg-gray-900 text-white px-1 py-0.5 text-xs">
                Photos
              </p>
              <p className="bg-gray-900 text-white px-1 py-0.5 text-xs">
                Design
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-gray-100 rounded-lg shadow relative gap-3 p-5">
            <div className="flex absolute size-10 top-0 right-0 justify-center bg-gray-300 items-center">
              <Close />
            </div>
            <p>Hey!</p>
            <p>People are looking at your profile. Find out who.</p>
          </div>
        </div>
        <div className="lg:w-1/2 bg-white min-h-screen"></div>
        <div className="lg:w-[20%] bg-white min-h-screen"></div>
      </div>
    </>
  );
};

export default MyPortfolio;
