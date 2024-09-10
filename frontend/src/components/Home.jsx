import React from "react";
import Feed from "./feed";
import { Outlet } from "react-router-dom";
import RightSidebar from "./RightSidebar";
import useGetAllPost from "@/hooks/useGetAllPost";
import useGetSuggestedUsers from "@/hooks/useGetSuggestedUsers";
import Stories from "./Stories"
const Home = () => {
  useGetAllPost();
  useGetSuggestedUsers();
  return (
    <>
      <Stories className="ml-60"/>
      <br/>
      <div className="flex">
        <div className="flex-grow">
          <Feed />
          <Outlet />
        </div>
        <RightSidebar />
      </div>
    </>
  );
};

export default Home;
