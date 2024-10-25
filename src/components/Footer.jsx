const Footer = () => {
    return (
        <div className="bg-black">
            <div>
                <div className="flex justify-center items-center pt-60">
                    <img src="../../assets/logo-footer.png" alt="" />
                </div>
                <div className="md:flex md:justify-around w-11/12 mx-auto gap-16 pb-10 border-b-2 border-b-slate-300 mt-20">
                    <div>
                        <h3 className="font-semibold text-lg text-white mb-5">About Us</h3>
                        <p className="text-[#FFFFFF99]">We are a passionate team dedicated <br /> to providing the best services <br /> to our customers.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-white mb-5">Quick Links</h3>
                        <ul className="text-[#FFFFFF99]">
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-white mb-5">Subscribe</h3>
                        <p className="text-[#FFFFFF99] mb-3">Subscribe to our newsletter for the latest updates.</p>
                        <div>
                            <input className="px-10 py-2 border-2 rounded-lg" type="email" name="" id="" placeholder="Enter your email" />
                            <button className="btn py-1 bg-[#e8a758f7] font-bold">Subscribe</button>
                        </div>
                    </div>
                </div>
                <p className="text-[#FFFFFF99] text-center mt-5 pb-5">@2024 Your Company All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;