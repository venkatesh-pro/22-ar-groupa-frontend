import React from "react";

interface Props {
  setSortValue: React.Dispatch<React.SetStateAction<string>>;
  sortValue: string;
}
export const SortBy: React.FC<Props> = ({ setSortValue, sortValue }) => {
  const handelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortValue(e.target.value);
    console.log(e.target);
  };
  return (
    <div>
      <select onChange={handelChange}>
        <option disabled selected>
          {sortValue}{" "}
        </option>
        <option value="DEFAULT">Default</option>
        <option value="PRICEASC">Price: Low-High</option>
        <option value="PRICEDESC">Price: High-Low</option>
      </select>
    </div>
  );
};
