const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <img src="../../assets/logo.png" alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 color-[#131313B3]">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                    </ul>
                    <button className="border-2 p-2 rounded-lg text-xl font-semibold">0 Coin <i className="fa-solid fa-coins text-[#E88102]"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Header;