import React, { useState } from "react";
import Header from "../components/Header";
import Filters from "../components/Filters";
import CardList from "../components/CardList";

const PropertyListPage = () => {
  const [active, setActive] = useState("New York");
  

  return (
    <div className="bg-[#bdd4f087] min-h-screen">
      <div className="px-12 pt-4 flex flex-col min-h-screen pb-2">
        <div>
          <Header />
          <Filters setActive={setActive} active={active}/>
        </div>
        <CardList active={active}/>

      </div>
    </div>
  );
};

export default PropertyListPage;
