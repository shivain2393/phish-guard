import { Loader2 } from "lucide-react";
import { useState } from "react";

const Homepage = () => {
  const [urlInput, setUrlInput] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);
  const [message, setMessage] = useState("");
  const urlPattern = /^(https?:\/\/)?((([a-zA-Z0-9\-_\.]+)\.)+[a-zA-Z]{2,6})(:[0-9]{1,5})?(\/[^\s]*)?(\?[^\s]*)?(#[^\s]*)?$/;

  const handleChange = (e) => {
    setMessage("");
    const input = e.target.value;
    if(input.trim() !== ""){
        setDisableBtn(false);
    } else{
        setDisableBtn(true);
    }

    setUrlInput(input);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsChecking(true);
    setDisableBtn(true);

    try {

      if(!urlPattern.test(urlInput)){
        setMessage("Please enter a valid URL");
        setIsChecking(false);
        setDisableBtn(false);
        return;
      }
        
    } catch (error) {
        setIsChecking(false);
        setDisableBtn(false);
    }
  };

  return (
    <div>
      <section className="bg-blue-500 text-white text-center py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-6xl">
            Welcome to PhishGuard
          </h1>
          <p className="mt-4 text-lg">
            Protect yourself from phishing attacks with our easy-to-use URL
            checker.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex justify-center gap-4"
          >
            <input
              onChange={handleChange}
              type="text"
              className="text-black rounded-md text-sm sm:text-lg font-semibold w-48 sm:w-64 focus:outline-none px-3 disabled:bg-white disabled:opacity-80"
              disabled={isChecking}
            />
            <button
              type="submit"
              className="flex items-center bg-white text-blue-500 px-3 py-2 rounded-md text-sm sm:text-lg font-semibold cursor-pointer hover:bg-gray-100 disabled:opacity-80 disabled:cursor-not-allowed"
              disabled={disableBtn}
            >
              {isChecking ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin text-blue-500" />
                  <span className="text-xs sm:text-lg">Checking URL</span>
                </>
              ) : (
                <span>Check URL</span>
              )}
            </button>
          </form>
          <p className="mt-4 text-sm sm:text-lg font-semibold">{message}</p>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">How It Works</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold">Enter a URL</h3>
              <p className="mt-2">
                Paste the URL you want to check into our tool.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold">Analyze</h3>
              <p className="mt-2">
                Our system analyzes the URL for potential phishing threats.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold">Get Results</h3>
              <p className="mt-2">
                Receive a clear result on whether the URL is safe or dangerous.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">Key Features</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Real-Time Analysis</h3>
              <p className="mt-2">
                Get immediate results with our real-time URL analysis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Comprehensive Database</h3>
              <p className="mt-2">
                Access our extensive database of known phishing URLs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">User-Friendly Interface</h3>
              <p className="mt-2">
                Enjoy an intuitive and easy-to-use interface for checking URLs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
