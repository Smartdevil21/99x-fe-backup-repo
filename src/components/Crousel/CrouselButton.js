import classes from "./CrouselButton.module.css";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const CrouselButtonForward = (props) => {
  return (
    <button
      className={`${classes.btnForward} ${classes.btn}`}
      onClick={props.onClick}
    >
      <MdOutlineArrowForwardIos />
    </button>
  );
};

const CrouselButtonBackward = (props) => {
  return (
    <button
      className={`${classes.btnBackward} ${classes.btn}`}
      onClick={props.onClick}
    >
      <MdOutlineArrowBackIosNew />
    </button>
  );
};

export { CrouselButtonBackward, CrouselButtonForward };
