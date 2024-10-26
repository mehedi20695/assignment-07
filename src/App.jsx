import './App.css'
import Banner from "./components/Banner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import Subscribe from "./components/Subscribe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SelectedPlayers from "./components/SelectedPlayers";
import AvailablePlayers from "./components/AvailablePlayers";
const App = () => {

  // set states
  const [coins, setCoins] = useState(0);
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [showAvailable, setShowAvailable] = useState(true);

  // fetching fake data
  useEffect(() => {
    fetch('./players.json')
      .then(response => response.json())
      .then(data => setPlayers(data))
      .catch(err => console.error('Error loading players:', err));
  }, []);

  // handle add coins
  const handleAddCoins = () => {
    setCoins(coins + 5000000);
    toast.success('Your free credits are added successfully!');
  };

  // handle selected players on selected section
  const handleSelectPlayer = (player) => {
    if (coins < player.price) {
      toast.error('Not enough coins!');
      return;
    }
    if (selectedPlayers.find(p => p.playerId === player.playerId)) {
      toast.error('Player already selected!');
      return;
    }
    if (selectedPlayers.length >= 6) {
      toast.warning('You can only select 6 players!');
      return;
    }
    setSelectedPlayers([...selectedPlayers, player]);
    setCoins(coins - player.price);
    toast.success(`${player.name} selected!`);
  };

  // handle remove player from selected section
  const handleRemovePlayer = (playerId) => {
    const playerToRemove = selectedPlayers.find(p => p.playerId === playerId);
    setSelectedPlayers(selectedPlayers.filter(p => p.playerId !== playerId));
    setCoins(coins + playerToRemove.price);
    toast.info(`${playerToRemove.name} removed from selection`);
  };

  return (
    <div className="sora-font">
      <main className="w-11/12 mx-auto">
        {/* header */}
        <Navbar coins={coins}></Navbar>

        {/* banner */}
        <Banner handleAddCoins={handleAddCoins}></Banner>

        <div className='md:flex md:justify-between md:items-center mt-10'>
          <h1></h1>
          <div>
            {/* Available button */}
            <button onClick={() => setShowAvailable(true)} className={showAvailable? 'active border rounded-l-2xl px-10 py-3':
            'border rounded-l-2xl px-10 py-3 text-[#13131399]'}>Available</button>

            {/* Selected button */}
            <button onClick={() => setShowAvailable(false)} className={!showAvailable? 'active border rounded-r-2xl px-10 py-3':
            'border rounded-r-2xl px-10 py-3 text-[#13131399]'}>Selected ( {selectedPlayers.length} )</button>
          </div>
        </div>
        {/* showing available and selected sections */}
        {showAvailable? 
        (<AvailablePlayers players={players}
          handleSelectPlayer={handleSelectPlayer}></AvailablePlayers>) :
         (<SelectedPlayers players={selectedPlayers}
          handleRemovePlayer={handleRemovePlayer} 
         setShowAvailable={setShowAvailable}></SelectedPlayers>)}

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
      <Footer></Footer>
    </div>
  );
};

export default App;