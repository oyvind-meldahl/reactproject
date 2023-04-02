import React, { useState, useEffect } from "react";
import { StyledPage } from "../../styles/pages/generalPageStyles";
import ProductCard from "../../components/ProductCard";
import ProductReviews from "../../components/ProductReviews";
import { useParams } from "react-router-dom";
import { url } from "../../utils/constants";
import Feedback from "../../components/Feedback";
import Loader from "../../components/Loader";

export default function Product() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url + id);
        const data = await response.json();

        //set document title including product name
        document.title = `Another Heaven Boutique | ${data.title}`;

        setData(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (isLoading || !data) {
    return <Loader />;
  }

  if (isError) {
    return <Feedback title={"An error occurred"} />;
  }

  return (
    <StyledPage>
      <h1>{data.title}</h1>
      <ProductCard
        imageUrl={data.imageUrl}
        title={data.title}
        price={data.price}
        discountedPrice={data.discountedPrice}
        description={data.description}
      />
      <ProductReviews rating={data.rating} reviews={data.reviews} />
    </StyledPage>
  );
}
