import React from "react";

const images = [
  { id: 1, src: "/bento-1.jpg", size: "col-span-2 row-span-2" }, // Large block
  { id: 2, src: "/maya-1.jpg", size: "col-span-1 row-span-1" }, // Small block
  { id: 3, src: "/bento-3.jpg", size: "col-span-1 row-span-1" },
  { id: 4, src: "/france-1.jpg", size: "col-span-2 row-span-1" }, // Wide block

];

const BentoGrid = () => {
  return (
    <div className="py-5">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className={`relative overflow-hidden bg-gray-200 rounded-lg ${image.size}`}
          >
            <img
              src={image.src}
              alt={`Image ${image.id}`}
              className="object-cover w-full h-full grayscale"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
