import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import Button from "../../components/Button";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type homeProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: homeProps) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image and Main Header */}
      <motion.div
        className="md:flex items-center mx-auto w-5/6 justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Main Header */}
        <div className="z-10 mt-24 md:basis-3/5">
          {/* Headings */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="flex items-center before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="Evolve-Text" src={HomePageText} />
              </div>
            </div>
            <p className="text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          {/* Button Area */}
          <motion.div
            className="flex items-center mt-8 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Link to={"sign-up/"}>
              <Button>Join Now</Button>
            </Link>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* Image Area */}
        <div className="flex justify-center basis-3/5 md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="Home-Page-Graphics" src={HomePageGraphic} />
        </div>
      </motion.div>

      {/* Sponsers Section */}
      {isAboveMediumScreen && (
        <div className="w-full bg-primary-100 pt-5 pb-5 mt-3">
          <div className="w-5/6 mx-auto">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="redbull" src={SponsorRedBull} />
              <img alt="forbes" src={SponsorForbes} />
              <img alt="fortune" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
