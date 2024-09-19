"use client";
import React from "react";
import Masonry from "react-masonry-css";
import "@/components/movieStills/movieStills.css";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1709884735017-114f4a31f944?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1712652056542-58ca6baac1d3?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709884735017-114f4a31f944?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1712652056542-58ca6baac1d3?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1712652056542-58ca6baac1d3?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709884735017-114f4a31f944?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1712652056542-58ca6baac1d3?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1712652056542-58ca6baac1d3?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // ... add more images
];

const MovieStills = () => {
  return (
    <div>
      <h1>Pinterest-like Photo Gallery</h1>
      <Masonry
        breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="image-container"
            style={{ marginBottom: "16px" }}
          >
            <Image
              src={image}
              alt={`Random ${index}`}
              layout="responsive"
              width={500} // You can set this to the width you expect most images to have
              height={750} // This is just an example aspect ratio (2:3). Adjust as needed.
            />
            <a
              href={image}
              download={`image-${index}`}
              className="download-button"
            >
              Download
            </a>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default MovieStills;
