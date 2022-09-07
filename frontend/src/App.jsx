import { useState } from "react";
import NotificationButton from "./assets/components/NotificationButton";
import Header from "./assets/components/Header";
import SalesCard from "./assets/components/SalesCard";




function App() {
  return (
    <>
      <Header></Header>
      <main>
        <section id="sales">
          <div className="dsmeta-container"></div>


          <SalesCard></SalesCard>
        </section>
      </main>
    </>
  );
}

export default App;
