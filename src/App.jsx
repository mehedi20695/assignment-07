import './App.css'
import Banner from "./components/Banner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import PlayersContainer from "./components/PlayersContainer";
import Subscribe from "./components/Subscribe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  const [coins, setCoins] = useState(0);

  const handleAddCoins = () => {
    setCoins(coins + 5000000);
    toast.success('Your free credits are added successfully!');
  };
  return (
    <div className="sora-font">
      <main className="w-11/12 mx-auto">
        {/* header */}
        <Navbar coins={coins}></Navbar>
        {/* banner */}
        <Banner handleAddCoins={handleAddCoins}></Banner>
        {/* playres container */}
        <PlayersContainer></PlayersContainer>

        {/* available players */}

        {/* selected players */}

        {/* subscribe */}
        <Subscribe></Subscribe>
        {/* toast container */}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          closeButton={true}
        />
      </main>
      {/* footer */}
      <Footer>
        
      </Footer>
    </div>
  );
};

export default App;