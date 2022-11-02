import "./App.css";
import data from "./data.json";
import logo from "./images/logo.png";
// import Section from "./Components/Section";
// import category from "./data.json";
// import images from "./data.json";
//

function App() {
  // const tabImages = data[0].images;
  /* console.log({data[0].images.length}); >>Affiche (27) le nombre d'images dans la 1ère clé images du tableau data*/
  /* {data[0].images[0]}; >>Affiche le 1er élément du 1er tableau "images" */
  // const newTab = tabImages.map((elem, index) => {
  //   return <p>{elem.images}</p>;
  // });
  return (
    <>
      <header>
        <img src={logo} />
      </header>
      {data.map((props) => {
        return (
          <div className="section">
            <h2>{props.category}</h2>
            <div className="caroussel">
              {props.images.map((image) => {
                return <img src={image} alt="image" />;
              })}
            </div>
          </div>
        );
      })}

      {/* <div className="section">
        <p>Titre de la Catégorie</p>
        <div className="carrousel">
          <div className="moviepic"></div>
        </div>
      </div> */}
    </>
  );
}

export default App;
