import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Subscribe = () => {

    // set states
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    // Check if the user email already exists in LocalStorage
    useEffect(() => {
        const storedEmail = localStorage.getItem("userEmail");
        if (storedEmail) {
            setEmail(storedEmail);
            setIsSubscribed(true);
        }
    }, []);

    // Email validation function
    const validateEmail = (email) => {
        if (email.includes("@") && email.includes(".")) {
            const atPosition = email.indexOf("@");
            const dotPosition = email.lastIndexOf(".");

            // Check that "@" comes before "." and they aren't at the start or end
            if (atPosition > 0 && dotPosition > atPosition + 1 && dotPosition < email.length - 1) {
                return true;
            }
        }
        return false;
    };


    // Handle subscription and store email in LocalStorage if valid
    const handleSubscribe = () => {
        if (validateEmail(email)) {
            localStorage.setItem("userEmail", email);
            setIsSubscribed(true);
            toast.success("Subscribed successfully!");
        } else {
            toast.error("Please provide a valid email address.");
        }
    };

    // Clear the email from LocalStorage
    const handleUnsubscribe = () => {
        localStorage.removeItem("userEmail");
        setEmail("");
        setIsSubscribed(false);
        toast.info("You have unsubscribed.");
    };

    return (
        <div className="border-2 p-3 rounded-lg relative -bottom-48">
            {isSubscribed ? (
                <div className="bg-cover text-center bg-white space-y-5 rounded-xl py-24" style={{ backgroundImage: `url("/assets/bg-shadow.png")` }}>
                    <h1 className="text-3xl font-bold">Welcome back!</h1>
                    <h3 className="text-xl font-medium text-[#131313B3]">You are subscribed with {email}.</h3>
                    <div>
                        <button onClick={handleUnsubscribe}
                            className="btn py-3 bg-[#e8a758f7] font-bold">
                            Unsubscribe</button>
                    </div>
                </div>
            ) : (
                <div className="bg-cover text-center bg-white space-y-5 rounded-xl py-24" style={{ backgroundImage: `url("/assets/bg-shadow.png")` }}>
                    <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
                    <h3 className="text-xl font-medium text-[#131313B3]">Get the latest updates and news right in your inbox!</h3>
                    <div>
                        <input className="mb-2 md:px-10 md:mr-5 py-3 border-2 rounded-lg" type="email"
                            name="" id=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email" />

                        <button onClick={handleSubscribe}
                            className="btn py-3 bg-[#e8a758f7] font-bold">Subscribe</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Subscribe;