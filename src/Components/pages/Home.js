import React from "react";
import { useContext } from "react";
import {AppContext} from "../RouterDom"

export const Home = () => {
  const {username} = useContext(AppContext)
  return <h1>Hello, This is The Home Page for: {username}</h1>;
};

