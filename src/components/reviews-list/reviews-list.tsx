import {ReviewData} from '../../types/offer.ts';
import {Review} from './review/review.tsx';

type ReviewsListProps = {
  reviews: ReviewData[];
}

export function ReviewsList({reviews}: ReviewsListProps):JSX.Element {
  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review key={review.id} review={review}/>
        ))}
      </ul>
    </>
  );
}
