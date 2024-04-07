import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import Button from "./Button";
import { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import { Link } from "react-router-dom";
import { getSessionStorage } from "@/utils";
import UserLoginButton from "./UserLoginButton";

type navBarProps = {
  selectedPage: SelectedPage;
  isTopOfPage: boolean;
  setSelectedPage: (value: SelectedPage) => void;
  setIsMenuToggle: (value: boolean) => void;
  isMenuToggle: boolean;
};

const Navbar = ({
  selectedPage,
  isTopOfPage,
  setSelectedPage,
  setIsMenuToggle,
  isMenuToggle,
}: navBarProps) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const navBackgroundStyles = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  const [name, setName] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedName = getSessionStorage("c_user");
    setName(storedName !== null ? storedName : "");
    const storedToken = getSessionStorage("c_s");
    setToken(storedToken !== null ? storedToken : "");
  }, []);

  useEffect(() => {
    if (isAboveMediumScreen) setIsMenuToggle(false);
  }, [isAboveMediumScreen]);

  return (
    <nav>
      <div
        className={`${navBackgroundStyles} ${flexBetween} fixed top-0 z-30 w-full py-4`}
      >
        <div className={`${flexBetween} mx-auto w-full px-6`}>
          <div className={`${flexBetween} mx-auto w-full gap-16`}>
            <img className="w-36 h-auto" alt="Logo" src={Logo} />
            {isAboveMediumScreen ? (
              <div className={`${flexBetween} w-full`}>
                <NavbarItem
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  isMenuToggle={isMenuToggle}
                />
                {!name ? (
                  <div className={`${flexBetween} gap-8`}>
                    <p>
                      <Link to={"login/"}>Sign In</Link>
                    </p>
                    <Link to={"sign-up/"}>
                      <Button>Become a Member</Button>
                    </Link>
                  </div>
                ) : (
                  <UserLoginButton name={name} token={token} />
                )}
              </div>
            ) : (
              <div>
                <button
                  className="rounded-full bg-secondary-500 p-2"
                  onClick={() => setIsMenuToggle(!isMenuToggle)}
                >
                  <Bars3Icon className="w-6 h-6 text-white" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Mobile Screen Off Canvas  */}
      {isMenuToggle && !isAboveMediumScreen && (
        <div>
          <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
            {/* Mobile Cross Button */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
                <XMarkIcon className="h-6 w-6> text-gray-400" />
              </button>
            </div>
            <NavbarItem
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isMenuToggle={isMenuToggle}
            />
            <div className={`${flexBetween} gap-8 p-4 mt-8`}>
              <p>
                <Link to={"login/"}>Sign In</Link>
              </p>
              <p>
                <Link to={"sign-up/"}>Register</Link>
              </p>
            </div>
          </div>
        </div>
      )}
      {/* End Mobile Screen Off Canvas  */}
    </nav>
  );
};

export default Navbar;
