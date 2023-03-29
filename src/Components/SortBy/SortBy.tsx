import React, { useState } from "react";

interface Props {
  setSortValue: React.Dispatch<React.SetStateAction<string>>;
}
export const SortBy: React.FC<Props> = ({ setSortValue }) => {
  const handelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortValue(e.target.value);
  };

  return (
    <div>
      <select onChange={handelChange}>
        <option value="DEFAULT">Default</option>
        <option value="PRICEASC">Price Low-High</option>
        <option value="PRICEDESC">Price High-Low</option>
      </select>
    </div>
  );
};
