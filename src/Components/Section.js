import Caroussel from "./Caroussel";
const Section = (props) => {
  return (
    <div>
      <h2>{props.category}</h2>
      <div className="caroussel">
        <Caroussel className="caroussel" />
      </div>
    </div>
  );
};
export default Section;
