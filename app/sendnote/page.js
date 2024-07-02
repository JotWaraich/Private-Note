"use client";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Combobox } from "../components/Combobox.jsx";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center p-20">
      <div className="">Your Note</div>
      <div className="min-w-[900px]">
        <Textarea />
      </div>
      <div>
        <p>When do you want to delete the note</p>
        <Combobox />
      </div>
    </div>
  );
};

export default Home;
