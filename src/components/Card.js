import React, { useState } from "react";
import { LiaBathSolid } from "react-icons/lia";
import { TiArrowMove } from "react-icons/ti";
import { BiBed } from "react-icons/bi";
import { RiHotelLine } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
const Card = ({ property }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-[420px] border px-2 py-1 pb-3 relative shadow-md rounded-xl bg-[#ffffff89]">
      <div className="absolute flex justify-between m-2 w-full pr-10">
        <div className="text-blue-700 bg-white rounded-2xl px-2 flex justify-center items-center">
          {property?.for}
        </div>
        <div
          onClick={() => setLiked(!liked)}
          className="rounded-full z-50 cursor-pointer bg-white w-7 h-7 flex justify-center items-center "
        >
          {liked ? (
            <AiFillHeart className="text-red-500" />
          ) : (
            <AiOutlineHeart />
          )}{" "}
        </div>
      </div>
      <div className="w-88 h-80">
        <img src={property?.img} className="w-full h-full rounded-2xl" />
      </div>
      <div className="flex gap-2 text-sm mt-4 items-center">
        <MdOutlineLocationOn />
        <p>{property?.location}</p>
      </div>
      <div className="pr-5 text-lg font-semibold mt-2">{property?.name}</div>
      <div className="flex justify-between text-sm px-3 mt-4">
        <div>
          <RiHotelLine />
          <p>{property?.Room} Room</p>
        </div>
        <div>
          <BiBed />
          <p>{property?.Bed} Bed</p>
        </div>
        <div>
          <LiaBathSolid />
          <p>{property?.Bath} Bath</p>
        </div>
        <div>
          <TiArrowMove />
          <p>{property?.dire} sft</p>
        </div>
      </div>
      <div className="h-[0.5px] w-full bg-[#7a78783a] my-4"></div>
      <div className="flex justify-between px-2">
        <div>
          <span className="text-xl text-blue-700 font-bold">
            ${property?.price}
          </span>{" "}
          /month
        </div>
        <Link className="border-2 rounded-3xl border-blue-700 text-sm text-blue-700 p-2 px-3">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
