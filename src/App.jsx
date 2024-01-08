import "./App.scss";
import CardContainer from "./containers/CardContainer/CardContainer.jsx";
import Header from "./components/Header/Header.jsx";
import PageNumberContainer from "./containers/PageNumberContainer/PageNumberContainer.jsx";

function App() {
  return (
    <>
      <Header />
      <CardContainer />
      <PageNumberContainer />
    </>
  );
}

export default App;
