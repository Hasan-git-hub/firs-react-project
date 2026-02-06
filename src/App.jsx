import "./App.css";

import Header from "./components/Header";
import Intro from "./components/Intro";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import Choose from "./components/Choose";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Collection />
      <Choose />
      <Wrapper />
      <Footer />
    </div>
  );
}

export default App;
