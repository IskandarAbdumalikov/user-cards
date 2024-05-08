import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";
import Todolist from "./components/totdolist/Todolist";
import Module from "./components/modules/Module";
import { useState } from "react";
import { USERDATA } from "./constants/userData";

function App() {
  const [bool, setShowModal] = useState(false);

  let products = USERDATA.map((el) => (
    <div className="product__card" key={el.id}>
      <img src={el.img} alt="" />
      <div className="product__card__info">
        <h2>{el.fullName}</h2>
        <h3>{el.gender}</h3>
        <h3>
          {el.address} {el.tel}
        </h3>
        <h3>{el.birthDate}</h3>
      </div>
    </div>
  ));

  return (
    <>
      <Header />
      <Todolist setShowModal={setShowModal} />
      <Footer />
      <Module bool={bool} setShowModal={setShowModal}>
        {products}
        {console.log(products)}
      </Module>
    </>
  );
}

export default App;
