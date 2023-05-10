import Card from "./components/Card";
import { Nav } from "./components/Nav";
import Footer from "./components/Footer";
import data from "./data";

function App() {
  const cardsArray = data.map((item) => {
    return <Card key={item.key} item={item} />;
  });
  return (
    <div>
      <Nav />
      {/* {cardsArray} */}
      <Footer />
    </div>
  );
}

export default App;
