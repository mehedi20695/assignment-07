import PropTypes from 'prop-types';
const SelectedPlayers = ({ players, handleRemovePlayer, setShowAvailable}) => {
    return (
        <div>
            <h1 className='text-3xl font-bold mb-5'>Selected Players ({players.length}/6)</h1>

            {/* selected player card */}
            <div className=''>
                {players.map(player => (
                    <div key={player.playerId} className="border rounded-lg p-3 mb-5 flex justify-between">
                        <div className='flex justify-center items-center gap-10'>
                            <div>
                                <img className='rounded-xl h-32 w-32' src={player.image} alt={player.name} />
                            </div>
                            <div className='space-y-5'>
                                <h3 className='font-semibold text-xl'>{player.name}</h3>
                                <p className='text-[#949393]'>{player.role}</p>
                                <p className='font-semibold'>Price: {player.price}</p>
                            </div>
                        </div>
                        <button onClick={() => handleRemovePlayer(player.playerId)}><i className="fa-regular fa-trash-can text-red-500 text-xl"></i></button>
                    </div>
                ))}
            </div>

            {/* add more player button to go back on available players section */}
            <span className='py-5 px-2 border border-black rounded-xl'>
                <button onClick={() => setShowAvailable(true)} className='btn bg-[#E7FE29] font-bold'>Add More Player</button>
            </span>
        </div>
    );
};
SelectedPlayers.propTypes = {
    players: PropTypes.array.isRequired,
    handleRemovePlayer: PropTypes.func.isRequired,
    setShowAvailable: PropTypes.func.isRequired,
};
export default SelectedPlayers;