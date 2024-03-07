import logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="md:flex justify-between gap-16 w-5/6 mx-auto">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={logo} className="w-36 h-auto" />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="basis-1/4 mt-16 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="basis-1/4 mt-16 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">+971 56 891-4066</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
