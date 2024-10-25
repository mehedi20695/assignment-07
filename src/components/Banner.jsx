import PropTypes from 'prop-types'; 
const Banner = ({ handleAddCoins }) => {
    return (
        <div className="bg-cover bg-black text-center space-y-5 rounded-lg" style={{ backgroundImage: `url("../../assets/bg-shadow.png")` }}>
            <div className="flex justify-center items-center">
                <img className="mt-10" src="../../assets/banner-main.png" alt="" />
            </div>
            <h2 className="text-4xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <p className="text-2xl font-medium text-[#FFFFFFB3]">Beyond Boundaries Beyond Limits</p>
            <div className="pb-10">
                <button onClick={handleAddCoins} className="btn font-bold bg-[#E7FE29]">Claim Free Credit</button>
            </div>
        </div>
    );
};
Banner.propTypes = {
    handleAddCoins: PropTypes.func.isRequired,  // 'func' type, and it's required
};
export default Banner;