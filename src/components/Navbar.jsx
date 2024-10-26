import PropTypes from 'prop-types'; 
const Navbar = ({coins}) => {
    return (
        <div className="mb-5 sticky top-0 z-50 backdrop-blur-2xl">
            <div className="md:navbar">
                <div className="flex-1">
                    <img src="/assets/logo.png" alt="logo" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 color-[#131313B3]">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                    </ul>
                    <button className="border-2 p-2 rounded-lg text-xl font-semibold">{coins} Coins <i className="fa-solid fa-coins text-[#E88102]"></i></button>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    coins: PropTypes.number.isRequired,  // 'func' type, and it's required
};
export default Navbar;