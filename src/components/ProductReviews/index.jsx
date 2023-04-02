import { StyledProductReviews } from "../../styles/components/ProductReviews.styles";

export default function ProductReviews({ rating, reviews }) {
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(
      <span key={i} className="material-symbols-rounded">
        star
      </span>
    );
  }

  const userReviews = reviews.map((review) => {
    return (
      <div key={review.id} className="reviews-container">
        <h4>{review.username}</h4>
        <span>{stars}</span>
        <p>{review.description}</p>
      </div>
    );
  });

  return (
    <StyledProductReviews>
      <div className="rating-container">
        <h3>Rating</h3>
      </div>
      <h3>Reviews</h3>
      {userReviews.length > 0 ? (
        userReviews
      ) : (
        <p className="reviews-container">This item has no reviews</p>
      )}
    </StyledProductReviews>
  );
}
