import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { item } from "../Item/Item";
import { Item } from "./Item";

const mockItem: item = {
  product_id: 0,
  product_name: "name",
  product_desc: "description",
  product_type_id: 0,
  product_price: "price",
  imagePath: "./table.jpg",
  threeDModelPath: "",
  basketId: 0,
};

test("It renders the product details", () => {
  render(
    <MemoryRouter initialEntries={[`/`]}>
      <Item
        product_desc={mockItem.product_desc}
        product_id={mockItem.product_id}
        product_name={mockItem.product_name}
        product_type_id={mockItem.product_type_id}
        product_price={mockItem.product_price}
        imagePath={mockItem.imagePath}
        threeDModelPath={mockItem.threeDModelPath}
        basketId={2}
      />
    </MemoryRouter>
  );

  const productName = screen.getByText("name");
  const productPrice = screen.getByText("£ price");
  expect(productName).toBeInTheDocument();
  expect(productPrice).toBeInTheDocument();
});
