import Link from "./Link";
import { SelectedPage } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isMenuToggle: boolean;
};

function NavbarItem({ selectedPage, setSelectedPage, isMenuToggle }: Props) {
  return (
    <div
      className={`flex ${!isMenuToggle ? "items-center justify-between gap-8" : "ml-[33%] flex-col gap-10 text-2xl"}`}
    >
      <Link
        page="Home"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="Benefits"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="Our Classes"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="Contact Us"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
}

export default NavbarItem;
