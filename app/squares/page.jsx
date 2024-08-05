"use client";

import React, { useState, useEffect } from "react";
import Square from "@/components/squares/square";
import "@/components/squares/squares.css";
import Timer from "@/components/squares/timer";

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
      setCurrent({ id: 1, name: "Alice" });
    }
    setIsLoaded(true);
  }, []);

  const toggle = (id, name) => {
    const newCurrent = { id, name };
    setCurrent(newCurrent);
    localStorage.setItem("current", JSON.stringify(newCurrent));
  };

  if (!isLoaded) {
    return null; // I have to use it later to avoid errors
  }

  return (
    <div className="squares-container">
      {people.map((item) => (
        <Square key={item.id} toggle={toggle} id={item.id} name={item.name} />
      ))}

      <div className="name">{current.name}</div>
      <Timer initialSeconds={0} />
    </div>
  );
};

export default Squares;
