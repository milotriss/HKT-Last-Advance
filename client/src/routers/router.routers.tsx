import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home/home";
import QuestionDetail from "../components/questionDetail/questionDetail";

const Routers = (): JSX.Element => {
    const [data,setData] = useState<any>()
    const getData = (result:any) => {
        setData(result)
    }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home getData={getData}/>} />
        <Route path="/questions-detail" element={<QuestionDetail data={data}/>} />
      </Routes>
    </>
  );
};

export default Routers;
