import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { AddToBasket } from "../../Functions/AddToBasket";
import { item } from "../Item/Item";
import s from "./ProductCard.styles";
import { RiCloseCircleFill } from "react-icons/ri";
import { Loading } from "../Loading/Loading";
import { Error } from "../Error/Error";

interface Props {
  basketId: number;
}

const ProductCard: React.FC<Props> = ({ basketId }) => {
  const { id } = useParams();
  const [product, setProduct] = useState<item | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  let { state } = useLocation();
  const navigate = useNavigate();

  const handleAddToBasket = () => {
    if (!(id === undefined)) {
      AddToBasket(setLoading, setError, id, basketId);
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
    return <Loading></Loading>;
  }

  if (error) {
    return <Error></Error>;
  }
  return (
    <div>
      {product ? (
        <s.productCardContainer>
          <s.div_ProductCard>
            <s.div_Gallery>
              <s.img_Big src={product.imagePath} alt={product.product_name} />
            </s.div_Gallery>

            <s.div_Details1>
              <s.div_Product_Name>{product.product_name}</s.div_Product_Name>
              <s.div_Product_Description>
                {product.product_desc}
              </s.div_Product_Description>
              <s.div_Product_Description>
                £{product.product_price}
              </s.div_Product_Description>
              {basketId !== 0 ? (
                <s.button_AddToBasket onClick={handleAddToBasket}>
                  Add to basket
                </s.button_AddToBasket>
              ) : null}

              <s.div_Buttons>
                <s.button_TryAR to="/AR" state={state}>
                  Try AR
                </s.button_TryAR>
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
