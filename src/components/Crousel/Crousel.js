import { useState, useReducer, useEffect } from "react";
import classes from "./Crousel.module.css";
import First from "./../../assets/images/homepage/crousel_1.png";
import Second from "./../../assets/images/homepage/crousel_2.png";
import Third from "./../../assets/images/homepage/crousel_3.png";
import Four from "./../../assets/images/homepage/crousel_4.png";
import PseudoFirstLeft from "./../../assets/images/homepage/crousel_left_1.png";
import PseudoFirstRight from "./../../assets/images/homepage/crousel_right_1.png";
import PseudoSecondLeft from "./../../assets/images/homepage/crousel_left_2.png"
import PseudoSecondRight from "./../../assets/images/homepage/crousel_right_2.png"
import PseudoThirdLeft from "./../../assets/images/homepage/crousel_left_3.png"
import PseudoThirdRight from "./../../assets/images/homepage/crousel_right_3.png"
import PseudoFourLeft from "./../../assets/images/homepage/crousel_left_4.png"
import PseudoFourRight from "./../../assets/images/homepage/crousel_right_4.png"

import {
  backwardAnimationHandler,
  forwardAnimationHandler,
} from "./crouselAnimationFunctions";
import {
  CrouselButtonBackward,
  CrouselButtonForward,
} from "./CrouselButton";

const initialItemClasses = {
  first: `${classes.carouselItemCenter}`,
  pseudoSecondRight: `${classes.carouselItemRight}`,
  pseudoFourLeft: `${classes.carouselItemLeft}`,
};

const actionItemClasses = (prevState, action) => {
  return {
    ...action,
  };
};

const Carousel = () => {
  const [activeItem, setActiveItem] = useState(1);

  const [itemClasses, dispatchItemClasses] = useReducer(
    actionItemClasses,
    initialItemClasses
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((curActiveItem) => {
        const nextActiveItem = curActiveItem === 4 ? 1 : curActiveItem + 1;
        forwardAnimationHandler(nextActiveItem, dispatchItemClasses, classes);
        return nextActiveItem;
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [activeItem]);

  const backBtnHandler = () => { 
    setActiveItem((curActiveItem) => {
      const nextActiveItem = curActiveItem === 1 ? 4 : curActiveItem - 1;
      backwardAnimationHandler(nextActiveItem, dispatchItemClasses, classes);
      return nextActiveItem;
    });
  };

  const forwardBtnHandler = () => {
    setActiveItem((curActiveItem) => {
      const nextActiveItem = curActiveItem === 4 ? 1 : curActiveItem + 1;
      forwardAnimationHandler(nextActiveItem, dispatchItemClasses, classes);
      return nextActiveItem;
    });
  };

  return (
    <section className={classes.carousel}>
        <img
          src={First}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.first}`}
        />
        <img
          src={Second}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.second}`}
        />
        <img
          src={Third}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.third}`}
        />
        <img
          src={Four}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.four}`}
        />

        <img
          src={PseudoFirstLeft}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.pseudoFirstLeft}`}
        />
        <img
          src={PseudoFirstRight}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.pseudoFirstRight}`}
        />
        <img
          src={PseudoSecondLeft}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.pseudoSecondLeft}`}
        />
        <img
          src={PseudoSecondRight}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.pseudoSecondRight}`}
        />
        <img
          src={PseudoThirdLeft}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.pseudoThirdLeft}`}
        />
        <img
          src={PseudoThirdRight}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.pseudoThirdRight}`}
        />
        <img
          src={PseudoFourLeft}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.pseudoFourLeft}`}
        />
        <img
          src={PseudoFourRight}
          alt=""
          className={`${classes.carouselItem}  ${itemClasses.pseudoFourRight}`}
        />

        <div className={classes.carouselBtnContainer}>
          <CrouselButtonBackward onClick={backBtnHandler} />
          <CrouselButtonForward onClick={forwardBtnHandler} />
        </div>
     
    </section>
  );
};

export default Carousel;
