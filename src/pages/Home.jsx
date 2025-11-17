import Header from "../Components/Header";
import ProductsContainer from "../Components/ProductsContainer";
const Category = ["Main course", "Drink", "sauce"];
function Home() {
  return (
    <div className="w-full">
      <Header />
      {Category.map((title, i) => (
        <ProductsContainer title={title} key={i} />
      ))}
    </div>
  );
}

export default Home;
