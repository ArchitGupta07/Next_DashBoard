"use client";

import React, { useState, useEffect } from "react";
import Square from "@/components/squares/square";
import "@/components/squares/squares.css";
import Timer from "@/components/squares/timer";
import examData from "@/components/mockData/mockTests";
import QuesDisplay from "@/components/squares/quesDisplay/quesDisplay";

const Squares = () => {
  const [current, setCurrent] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const people = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eve" },
    { id: 6, name: "Frank" },
    { id: 7, name: "Grace" },
    { id: 8, name: "Hank" },
  ];

  useEffect(() => {
    const savedCurrent = localStorage.getItem("current");
    if (savedCurrent) {
      setCurrent(JSON.parse(savedCurrent));
    } else {
      setCurrent(examData.exam.questions[0]);
      console.log(current);
    }
    setIsLoaded(true);
  }, []);

  const toggle = (id) => {
    const newCurrent = examData.exam.questions.find((ques) => ques.id === id);
    setCurrent(newCurrent);
    localStorage.setItem("current", JSON.stringify(newCurrent));
  };

  if (!isLoaded) {
    return null; // I have to use it later to avoid errors
  }

  return (
    <div className="squares-container">
      {examData.exam.questions.map((ques) => (
        <Square key={ques.id} toggle={toggle} id={ques.id} />
      ))}

      <div className="name">
        <QuesDisplay ques={current} />
        <button>Submit and next</button>
      </div>
      <Timer initialSeconds={0} />
    </div>
  );
};

export default Squares;
