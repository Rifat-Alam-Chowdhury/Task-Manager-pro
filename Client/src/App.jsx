import { useContext, useState } from "react";

import { AuthContext } from "./FireBaseAuth/FirebaseAuth";
import { Outlet } from "react-router";
import Navbar from "./NavBar]/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  const { hello } = useContext(AuthContext);

  return (
    <>
      <section>
        <nav>
          <Navbar />
        </nav>
      </section>
      <section className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </section>
      <section>
        <footer>
          <Footer />
        </footer>
      </section>
    </>
  );
}

export default App;
