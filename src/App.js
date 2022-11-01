import "./App.css";
import Section from "./Components/Section";
import data from "./data.json";
// import category from "./data.json";
// import images from "./data.json";
//

function App() {
  return (
    <>
      {data.map((elem, index) => {
        return <Section category={elem.category} />;
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
