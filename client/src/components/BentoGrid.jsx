import React from "react";

const images = [
  { id: 1, src: "https://i.pinimg.com/736x/13/37/23/13372300dfea620d56760fdcfbde358a.jpg", size: "col-span-2 row-span-2" }, // Large block
  { id: 2, src: "https://i.pinimg.com/236x/6a/1b/db/6a1bdbb2a421b05ac51566ba0b3699ee.jpg", size: "col-span-1 row-span-1" }, // Small block
  { id: 3, src: "https://i.pinimg.com/236x/3a/90/50/3a905074d7170f91236f7765fb310c7d.jpg", size: "col-span-1 row-span-1" },
  { id: 4, src: "https://i.pinimg.com/736x/e3/95/8a/e3958a275014badc2d1f1ab55ed68fa0.jpg", size: "col-span-2 row-span-1" }, // Wide block

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
