import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlayersContainer = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('../../public/players.json')
            .then((res) => res.json())
            .then((data) => setPlayers(data))
            .catch((error) => toast.error("Failed to fetch players!"));
    }, []);

    return (
        <div>
            <div className="flex justify-between items-center mt-10">
                <h3 className="text-3xl font-bold">Available Players</h3>
                <div>
                    <button className="btn">Available</button>
                    <button className="btn">Selected</button>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                {players.map((player) => (
                    <div key={player.playerId} className="bg-white p-4 rounded shadow-lg">
                        <img src={player.image} alt={player.name} className="w-full h-60 object-cover object-top rounded-lg" />
                        <h2 className="text-xl font-bold mt-2">{player.name}</h2>
                        <p>{player.country}</p>
                        <p>{player.role}</p>
                        <p>{player.price} coins</p>
                        <button
                            onClick={() => handleSelectPlayer(player)}
                            className="bg-blue-500 text-white mt-4 px-3 py-1 rounded"
                        >
                            Choose Player
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayersContainer;