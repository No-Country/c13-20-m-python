import { Typography } from "@material-tailwind/react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const LINKS = [
  {
    title: "Explorar",
    items: ["Eventos Populares", "Categorías", "Organizadores"],
  },
  {
    title: "Eventos",
    items: ["Sobre Nosotros", "Soporte", "Contacto"],
  },
  {
    title: "Legales",
    items: ["Soporte", "Términos y condiciones", "Políticas de privacidad"],
  },
];

const currentYear = new Date().getFullYear();

export function FooterWithSocialLinks() {
  const latoFontStyle = { fontFamily: "Lato, sans-serif" };

  return (
    <footer className="bg-[#FDE5CC] w-full">
      <div className="container w-fulL mx-auto p-8 gap-[40px] pt-[64px] pb-[40px] px-[80px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-between pt-0 pb-[40px] px-0 border-b [border-bottom-style:solid] border-[#003049] relative flex-[0_0_auto]">
          <div className="md:col-span-1">
            <Typography variant="h5" className="mb-6 ml-2 text-left">
              <span className="text-[#003049] font-extrabold text-4xl">
                Me
              </span>
              <span className="text-[#f77f00] font-extrabold text-4xl">
                Sumo
              </span>
            </Typography>
            <div className="mb-4 flex justify-center ml-5 md:justify-start">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#003049] text-2xl mx-2"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#003049] text-2xl mx-2"
              >
                <BsInstagram />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#003049] text-2xl mx-2"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="grid grid-cols-3 gap-4">
              {LINKS.map(({ title, items }) => (
                <div key={title}>
                  <Typography
                    variant="small"
                    className="mb-3 text-[#003049] font-bold "
                    style={{ ...latoFontStyle, display: "inline-block", marginLeft: "1rem" }}

                  >
                    {title}
                  </Typography>
                  <ul>
                    {items.map((link) => (
                      <li key={link}>
                        <Typography
                          as="a"
                          href="#"
                          color="gray"
                          className="py-1.5 font-normal transition-colors hover:text-[#003049]"
                        >
                          {link}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-between text-center md:text-left">
          <div className="text-gray opacity-80">
            © {currentYear} Todos los derechos reservados | MeSumo
          </div>
          <div className="text-gray opacity-80">
            Desarrollado por <span className="font-bold">No Country</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


