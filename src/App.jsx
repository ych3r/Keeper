import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Note />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
