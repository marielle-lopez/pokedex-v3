import "./App.scss";
import Header from "./components/Header/Header.jsx";
import CardContainer from "./containers/CardContainer/CardContainer.jsx";
import PageNumberContainer from "./containers/PageNumberContainer/PageNumberContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <CardContainer />
      <PageNumberContainer />
      <Footer />
    </>
  );
}

export default App;
