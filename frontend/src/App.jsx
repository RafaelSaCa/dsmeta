import { useState } from "react";
import NotificationButton from "./assets/components/NotificationButton";
import Header from "./assets/components/Header";
import SalesCard from "./assets/components/SalesCard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer/>
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
