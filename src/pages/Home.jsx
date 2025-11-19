import { useState } from "react";
import Header from "../Components/Header";
import ProductsContainer from "../Components/ProductsContainer";
const Category = ["MainCourse", "Drink", "sauce"];
function Home() {
  const [showData, setShowData] = useState(false);

  return (
    <div className="w-full">
      <Header show={showData} />
      {Category.map((title, i) => (
        <ProductsContainer
          title={title}
          key={i}
          show={showData}
          setShow={setShowData}
        />
      ))}
    </div>
  );
}

export default Home;
