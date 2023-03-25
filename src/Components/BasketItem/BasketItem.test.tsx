import { render, screen } from "@testing-library/react";
import { item } from "../Item/Item";
import { BasketItem } from "./BasketItem";

const mockItem: item = {
  product_id: 0,
  product_name: "name",
  product_desc: "description",
  product_type_id: 0,
  product_price: "price",
  imagePath: "./table.jpg",
  threeDModelPath: "",
  basketId: 2,
};

test("It renders the product details", () => {
  // render();
  // <BasketItem
  //   product_desc={mockItem.product_desc}
  //   product_id={mockItem.product_id}
  //   product_name={mockItem.product_name}
  //   product_type_id={mockItem.product_type_id}
  //   product_price={mockItem.product_price}
  //   imagePath={mockItem.imagePath}
  //   threeDModelPath={mockItem.threeDModelPath}
  // />

  const productName = screen.getByText("name");
  const productPrice = screen.getByText("Price: £price");
  expect(productName).toBeInTheDocument();
  expect(productPrice).toBeInTheDocument();
});
