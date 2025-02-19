import { useContext, useState } from "react";

import { AuthContext } from "./FireBaseAuth/FirebaseAuth";
import { Outlet } from "react-router";
import Navbar from "./NavBar]/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  const { hello } = useContext(AuthContext);
  console.log(hello);

  const f = async () => {
    const url = import.meta.env.VITE_URL; // Ensure this is correctly set in your .env file
    try {
      const response = await fetch(url); // Fetch data from the API
      const data = await response.json(); // Convert response to JSON
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  f();
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
