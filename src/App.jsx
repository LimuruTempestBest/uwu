import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Data from "./data";
import {
  BrowserRouter as Router, Routes, Route, Link, useNavigate, NavLink
} from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center h-screen bg-neutral-900 text-rose-900">
      <div className="flex flex-col items-center gap-2">
        <div className="text-7xl font-bold">HELLO WORLD</div>
        <div className="text-2xl">in 1080 languages</div>
      </div>
      <div className="flex flex-row gap-6 mt-10 ">
        <Link to="browse">
          <div className=" w-48 py-4 bg-neutral-100 hover:cursor-pointer text-rose-400 text-center text-2xl rounded hover:bg-rose-400 duration-300 hover:text-neutral-100 duration-300">
            Browse
          </div>
        </Link>
        <Link to="languageList">
          <div className=" w-48 py-4 bg-neutral-100 hover:cursor-pointer text-rose-400 text-center text-2xl rounded hover:bg-rose-400 duration-300 hover:text-neutral-100 duration-300">
            Language List
          </div>
        </Link>
      </div>
    </div>
  );
};

const Browse = () => {
  const [query, setquery] = useState("");

  return (
    <div className="flex bg-neutral-900 w-full h-screen">
      <div className="p-24 w-full h-screen overflow-y-auto space-y-3">
        <Link to="/">
          <Icon
            icon="material-symbols:arrow-circle-left-rounded"
            className="absolute hover:cursor-pointer top-4 left-4 text-5xl text-neutral-100"
          /></Link>

        <div className="flex flex-row items-center gap-2 border-2 border-neutral-100">
          <input className="w-full p-4 text-rose-700 placeholder-rose-700 bg-neutral-900 focus:outline-none" placeholder="Enter Language" onChange={(e) => setquery(e.target.value)} value={query}
          />
          <Icon
            icon="ic:round-search"
            className="text-5xl p-2 text-neutral-100"
          />
        </div>
        <>
          {Data.filter((e) => e.title.toLowerCase().includes(query.toLowerCase()))
            .map((e) => (
              <div className="overflow-x-hidden" key={e.id}>
                <div className="text-rose-700 mt-6 w-40 text-center p-2 bg-neutral-300">
                  {e.title}
                </div>
                <div
                  className={`${e.description
                    ? "text-rose-700 bg-neutral-900 p-4 border border-neutral-100 "
                    : ""
                    }`}
                >
                  {e.description}
                </div>
                <div className="w-full p-4 bg-neutral-900 border border-neutral-100 text-rose-700">
                  <div>
                    <div>{e.code}</div>
                  </div>
                </div>
              </div>
            ))}
        </>
      </div>
    </div>
  );
};

const LanguageList = () => {
  return (
    <div className="flex bg-neutral-900 w-full h-screen">
      <Link to="/">
        <Icon
          icon="material-symbols:arrow-circle-left-rounded"
          className="absolute hover:cursor-pointer top-4 left-4 text-5xl text-neutral-100"
        /></Link>
      <div className="p-28 overflow-y-auto w-full text-rose-700">
        {Array.from("#abcdefghijklmnopqrstuvwxyz").map((e) => (
          <>
            <div className="flex items-center flex-row gap-5 mt-5">
              <div className="text-5xl">{`${e.toLocaleUpperCase()}`}</div>
              <div className="bg-neutral-100 h-0.5 w-full"></div>
            </div>
            <div className="grid grid-cols-3 mt-3">
            {Data.filter((f) =>(e === "#" && f.title.toLowerCase()[0].match(/[^a-z]/)) || f.title.toLocaleLowerCase().startsWith(e))
                .map((f) => (
                  <Link to="browse">
                  <button className="p-2">
                    {f.title}
                  </button>
                  </Link>
                ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/languageList" element={<LanguageList />}></Route>
      </Routes>
    </Router>
  );
};

export default App;