type CardRatingProps = {
  width: number;
}

export function CardRating({width}: CardRatingProps): JSX.Element {
  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: width}}/>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
