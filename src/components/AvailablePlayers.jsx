import PropTypes from 'prop-types';
const AvailablePlayers = ({ players, onSelectPlayer }) => {
    return (
        <div>
            <h1 className='text-3xl font-bold w-1/2 relative -top-20'>Available Players</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {players.map(player => (
                    <div className="border-2 rounded-lg p-3" key={player.playerId}>
                        <div className='space-y-3'>
                            <img className='object-cover w-full object-top rounded-lg h-64' src={player.image} alt={player.name} />
                            <h3 className='font-semibold text-xl'><i className="fa-solid fa-user"></i> {player.name}</h3>
                            <div className='text-[#949393] flex justify-between items-center'>
                                <p><i className="fa-solid fa-flag"></i> {player.country}</p>
                                <p className='border p-2 rounded-xl bg-[#f8f6f6]'>{player.role}</p>
                            </div>
                            <div className='flex justify-between items-center gap-10'>
                                <p className='font-semibold'>Batting: {player.battingType}</p>
                                <p className='text-[#949393]'>Bowling: {player.bowlingType}</p>
                            </div>
                            <div className='flex justify-between items-center gap-10'>
                                <p className='font-semibold'>Price: {player.price}</p>
                                <button onClick={() => onSelectPlayer(player)}
                                    className='btn btn-success'>Choose Player</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
AvailablePlayers.propTypes = {
    players: PropTypes.array.isRequired,
    onSelectPlayer: PropTypes.func.isRequired,
};
export default AvailablePlayers;