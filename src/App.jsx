import "./App.scss";
import Header from "./components/Header/Header.jsx";
import CardContainer from "./containers/CardContainer/CardContainer.jsx";
import PageNumberContainer from "./containers/PageNumberContainer/PageNumberContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);

  function handlePage(number) {
    setPage(number);
  }

  return (
    <>
      <Header />
      <CardContainer pageNumber={page} />
      <PageNumberContainer handlePage={handlePage} />
      <Footer />
    </>
  );
}

export default App;
