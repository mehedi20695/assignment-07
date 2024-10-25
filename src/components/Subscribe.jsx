const Subscribe = () => {
    return (
        <div className="border-2 p-3 rounded-lg relative -bottom-48">
            <div className="bg-cover text-center bg-white space-y-5 rounded-xl py-24" style={{ backgroundImage: `url("../../assets/bg-shadow.png")` }}>
                <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
                <h3 className="text-xl font-medium text-[#131313B3]">Get the latest updates and news right in your inbox!</h3>
                <div>
                    <input className="mb-2 md:px-10 md:mr-5 py-3 border-2 rounded-lg" type="email" name="" id="" placeholder="Enter your email" />
                    <button className="btn py-3 bg-[#e8a758f7] font-bold">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;