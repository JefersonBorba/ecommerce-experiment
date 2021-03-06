import Header from "./components/Header"
import Footer from "./components/Footer"
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <h1>
            Welcome to the Shop
          </h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
