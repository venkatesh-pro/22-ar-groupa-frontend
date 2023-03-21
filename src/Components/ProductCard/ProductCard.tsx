import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { AddToBasket } from "../../Functions/AddToBasket";
import { Header } from "../Header/Header";
import { item } from "../Item/Item";
import { Message } from "../Message/Message";
import s from "./ProductCard.styles";
import { RiCloseCircleFill } from "react-icons/ri";

const ProductCard: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<item | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  let { state } = useLocation();
  const navigate = useNavigate();

  const handleAddToBasket = () => {
    if (id) {
      const product_id = parseInt(id);
      AddToBasket(setLoading, setLoading, product_id);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch(`/api/products/${id}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setProduct(response);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [id]);

  if (loading) {
    return <Message text="Loading" />;
  }

  if (error) {
    return <Message text="Error" />;
  }
  return (
    <div>
      {product ? (
        <s.productCardContainer>
          <Header />
          <s.div_ProductCard>
            <s.div_Gallery>
              <s.img_Big src={product.imagePath} alt={product.product_name} />
              {/* <s.div_Thumbnails>
                <s.img_Small
                  src={product.imagePath}
                  alt={product.product_name}
                />
                <s.img_Small
                  src={product.imagePath}
                  alt={product.product_name}
                />
                <s.img_Small
                  src={product.imagePath}
                  alt={product.product_name}
                />
              </s.div_Thumbnails> */}
            </s.div_Gallery>

            <s.div_Details1>
              <s.div_Product_Name>{product.product_name}</s.div_Product_Name>
              <s.div_Product_Description>
                {product.product_desc}
              </s.div_Product_Description>
              <s.div_Product_Description>
                £{product.product_price}
              </s.div_Product_Description>
              <s.button_AddToBasket onClick={handleAddToBasket}>
                Add to basket
              </s.button_AddToBasket>

              <s.div_Buttons>
                <s.button_TryAR to="/AR" state={state}>
                  Try AR
                </s.button_TryAR>

                <s.button_AddToBasket
                  onClick={() => {
                    console.log("You clicked Add to basket");
                  }}
                >
                  Add to basket
                </s.button_AddToBasket>
              </s.div_Buttons>
            </s.div_Details1>
            <s.div_Details2>
              <s.button_GoBack onClick={() => navigate(-1)}>
                <RiCloseCircleFill size={25} />
              </s.button_GoBack>
            </s.div_Details2>
          </s.div_ProductCard>
        </s.productCardContainer>
      ) : (
        <s.productCardContainer>
          <p>Product not found</p>
        </s.productCardContainer>
      )}
    </div>
  );
};

export default ProductCard;
