import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/Layouts/LandingPage/Home";
import Benifits from "@/Layouts/LandingPage/Benifits";
import OurClasses from "@/Layouts/LandingPage/OurClasses";
import ContactUs from "@/Layouts/LandingPage/ContactUs";
import Footer from "@/Layouts/LandingPage/Footer";
import Chatbot from "./components/ChatBot";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isMenuToggle={isMenuToggle}
        setIsMenuToggle={setIsMenuToggle}
      />
      <div
        className={isMenuToggle ? "bg-gray-100 opacity-50" : ""}
        onClick={() => (isMenuToggle ? setIsMenuToggle(!isMenuToggle) : "")}
      >
        <Home setSelectedPage={setSelectedPage} />
        <Benifits setSelectedPage={setSelectedPage} />
        <OurClasses setSelectedPage={setSelectedPage} />
        <ContactUs setSelectedPage={setSelectedPage} />
        <Chatbot />
      </div>
      <Footer />
    </div>
  );
}

export default App;
