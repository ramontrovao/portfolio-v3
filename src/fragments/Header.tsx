import Image from "next/image";
import logo from "assets/logo.svg";

export const Header = () => {
  return (
    <header>
      <Image
        src={logo}
        alt=""
        width={350}
        height={350}
      />
    </header>
  );
};
