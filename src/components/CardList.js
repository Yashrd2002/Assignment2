import React, { useEffect, useState } from "react";
import Card from "./Card";
import { BsHourglassTop } from "react-icons/bs";
import properties from "../data/properties.json";
import { Link } from "react-router-dom";
const CardList = ({ active }) => {
  const [displayCount, setDisplayCount] = useState(6);
  const [cityProperties, setCityProperties] = useState();

  useEffect(() => {
    setDisplayCount(6);
  }, [active]);
  useEffect(() => {
    setCityProperties(
      properties
        .filter((property) => property.City === active)
        .slice(0, displayCount)
    );
  }, [active, displayCount]);


  return (
    <div className="mt-4 flex flex-col justify-between min-h-[550px]">
      <div className="flex flex-wrap gap-12 w-full">
        {cityProperties?.map((property) => (
          <Link
            to={`/property/${property?.id}`}
            key={property?.id}
            className="mb-4"
          >
            <Card property={property} />
          </Link>
        ))}
      </div>
      {cityProperties?.length >= displayCount && (
        <div className="mt-3 flex justify-center">
          <button
            className="p-2 px-3 bg-blue-700 text-white flex gap-3 items-center rounded-2xl"
            onClick={() => setDisplayCount(displayCount + 3)}
          >
            <BsHourglassTop />
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default CardList;
