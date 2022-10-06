import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from "../../config/config";
import "./Carousel.css";


const handleDragStart = (e) => e.preventDefault();


const Carousel = ({ id, media_type }) => {
  const [credits, setCredits] = useState([]);


  const items = credits.map(item => (
    <div className="carouselItem">
      <img
        src={item.profile_path ? `${img_300}/${item.profile_path}` : noPicture}
        alt={item?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <b className="carouselItem__txt">{item?.name}</b>
    </div>
  ));


  const responsive = {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    550: {
      items: 3,
    },
    1100: {
      items: 4,
    },
    1500: {
      items: 5,
    },
  };


  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    // console.log({ data })
    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits();
    // eslint-disable-next-line
  }, []);


  return (
    <AliceCarousel
      mouseTracking
      infinite
      // disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
      autoPlayInterval={2000}
    />
 
  )
}

export default Carousel