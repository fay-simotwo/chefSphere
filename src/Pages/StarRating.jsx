import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function StarRating({ rating }) {
  const stars = [];
  const roundedRating = Math.round(rating * 2) / 2;

  for (let i = 1; i <= 5; i++) {
    if (roundedRating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (roundedRating + 0.5 === i) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaStar key={i} className="text-gray-300" />);
    }
  }

  return <div className="flex">{stars}</div>;
}

export default StarRating;
