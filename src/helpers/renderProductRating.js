import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const renderProductRating = rating => {
  if (rating < 1) {
    return <FaStarHalf />;
  } else if (rating < 1.5) {
    return <FaStar />;
  } else if (rating < 2) {
    return (
      <>
        <FaStar /> <FaStarHalf />
      </>
    );
  } else if (rating < 2.5) {
    return (
      <>
        <FaStar /> <FaStar />
      </>
    );
  } else if (rating < 3) {
    return (
      <>
        <FaStar /> <FaStar /> <FaStar /> <FaStarHalf />
      </>
    );
  } else if (rating < 3.5) {
    return (
      <>
        <FaStar /> <FaStar /> <FaStar />
      </>
    );
  } else if (rating < 4) {
    return (
      <>
        <FaStar /> <FaStar /> <FaStar /> <FaStarHalf />
      </>
    );
  } else if (rating < 4.5) {
    return (
      <>
        <FaStar /> <FaStar /> <FaStar /> <FaStar />
      </>
    );
  } else if (rating < 5) {
    return (
      <>
        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf />
      </>
    );
  } else {
    return (
      <>
        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
      </>
    );
  }
};

export default renderProductRating;
