import Image from "next/image";

import logo from "assets/logo.svg";

export const Footer = () => {
  return (
    <footer>
      <div>
        <p>feito com muito &hearts; por ramon trovão</p>
        <span>
          &copy; Todos os direitos reservados - Ramon Pinheiro Trovão da Silva
        </span>
      </div>

      <Image
        src={logo}
        alt=""
        width={400}
        height={400}
      />
    </footer>
  );
};
