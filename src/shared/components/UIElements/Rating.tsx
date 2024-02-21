import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Rating.css";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
const Rating: FC<{ rateCount: number }> = ({ rateCount }) => {
  console.log(rateCount);
  return (
    <div className="stars">
      {rateCount === 0 ? (
        <>
          <FontAwesomeIcon className={`star`} icon={faStar} />
          <FontAwesomeIcon className={`star`} icon={faStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={faStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={faStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={faStar} />{" "}
        </>
      ) : rateCount === 1 ? (
        <>
          <FontAwesomeIcon className={`star filled`} icon={faStar} />
          <FontAwesomeIcon className={`star`} icon={faStar} />
          <FontAwesomeIcon className={`star`} icon={faStar} />
          <FontAwesomeIcon className={`star`} icon={faStar} />
          <FontAwesomeIcon className={`star`} icon={faStar} />
        </>
      ) : rateCount === 2 ? (
        <>
          <FontAwesomeIcon className={`star filled`} icon={faStar} />{" "}
          <FontAwesomeIcon className={`star filled`} icon={faStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={faStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={faStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={faStar} />{" "}
        </>
      ) : rateCount === 3 ? (
        <>
          <FontAwesomeIcon className={`star filled`} icon={faStar} />{" "}
          <FontAwesomeIcon className={`star filled`} icon={faStar} />{" "}
          <FontAwesomeIcon className={`star filled`} icon={faStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={faStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={faStar} />{" "}
        </>
      ) : rateCount === 4 ? (
        <>
          <FontAwesomeIcon className={`star filled`} icon={faStar} />{" "}
          <FontAwesomeIcon className={`star filled`} icon={faStar} />{" "}
          <FontAwesomeIcon className={`star filled`} icon={faStar} />{" "}
          <FontAwesomeIcon className={`star filled`} icon={faStar} />{" "}
          <FontAwesomeIcon className={`star`} icon={faStar} />{" "}
        </>
      ) : rateCount === 5 ? (
        <>
          <FontAwesomeIcon className={`star filled`} icon={faStar} />
          <FontAwesomeIcon className={`star filled`} icon={faStar} />
          <FontAwesomeIcon className={`star filled`} icon={faStar} />
          <FontAwesomeIcon className={`star filled`} icon={faStar} />
          <FontAwesomeIcon className={`star filled`} icon={faStar} />
        </>
      ) : (
        <FontAwesomeIcon className={`star`} icon={faStar} />
      )}
      {/* <FontAwesomeIcon className={`star ${isFilled && 'filled'} ${isHalfFilled && 'half-filled'}`} icon={isHalfFilled ? faStarHalf : faStar} /> */}
    </div>
  );
};

export default Rating;
