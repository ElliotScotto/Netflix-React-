// import Caroussel from "./Caroussel";
import data from "../data.json";

const Section = (props) => {
  return (
    <>
      <h2>{props.category}</h2>
      <div className="picmovie">
        {data.map((elem, index) => {
          return (
            <div>
              {data.map((elem, index) => {
                return <p key={index}>{elem.images}</p>;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Section;
