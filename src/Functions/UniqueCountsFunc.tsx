import { item } from "../Components/Item/Item";

export const UniqueCountsFunc = (basketItems: item[]) => {
  return basketItems.reduce(
    (
      uniqueCounts: { [productId: string]: { number: number; itemG: item } },
      item: item
    ) => {
      uniqueCounts[item.product_id] = {
        number: (uniqueCounts[item.product_id]?.number || 0) + 1,
        itemG: uniqueCounts[item.product_id]?.itemG || item,
      };
      return uniqueCounts;
    },
    {}
  );
};
