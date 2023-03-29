import React from "react";
import s from "./SortBy.styles";

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
    <s.sortByContainer>
      <s.selectSortBy onChange={handelChange} defaultValue={sortValue}>
        <s.optionSortBy value="DEFAULT">Sort By</s.optionSortBy>
        <s.optionSortBy value="PRICEASC">Price Low-High</s.optionSortBy>
        <s.optionSortBy value="PRICEDESC">Price High-Low</s.optionSortBy>
      </s.selectSortBy>
    </s.sortByContainer>
  );
};
