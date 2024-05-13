import {ReviewData} from '../../../types/offer.ts';

type ReviewProps = {
  review: ReviewData;
}

export function Review({review}: ReviewProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar" src={review.author.avatar} width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {review.author.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: 80}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.reviewText}
        </p>
        <time className="reviews__time" dateTime={review.reviewDate.toISOString()}>
          {review.reviewDate.toLocaleString('en', {month: 'long', year: 'numeric'})}
        </time>
      </div>
    </li>
  );
}
