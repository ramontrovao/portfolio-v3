import { TAppRoute } from "types/TAppRoute";

export const appRoutes: TAppRoute[] = [
  {
    id: 1,
    name: "projetos",
    description:
      "meus projetos mais legais e incríveis, os que eu gostei bastante de construir! :D",
    type: "portfolio",
    path: "/projects",
    icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-width="2" d="M9,15 L9,23 L1,23 L1,15 L9,15 Z M23,15 L23,23 L15,23 L15,15 L23,15 Z M9,1 L9,9 L1,9 L1,1 L9,1 Z M23,1 L23,9 L15,9 L15,1 L23,1 Z"></path></svg>`,
  },
  {
    id: 2,
    name: "repositórios",
    description:
      "quer ver todos os meus trabalhos públicos até agora? esse é o lugar certo.",
    type: "portfolio",
    path: "/repositories",
    icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 16V14H19V4H6V14.0354C6.1633 14.0121 6.33024 14 6.5 14H8V16H6.5C5.67157 16 5 16.6716 5 17.5C5 18.3284 5.67157 19 6.5 19H10V21H6.5C4.567 21 3 19.433 3 17.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V20C21 20.5523 20.5523 21 20 21H16V19H19V16H18ZM7 5H9V7H7V5ZM7 8H9V10H7V8ZM14 17V23H12V17H9L13 12L17 17H14Z"></path></svg>`,
  },
  {
    id: 3,
    name: "techs",
    description:
      "descubra quais tecnologias/linguagens eu domino e quais eu possui conhecimento aqui. :o",
    type: "portfolio",
    path: "/#techs",
    icon: `<svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"></path></svg>`,
  },
  {
    id: 4,
    name: "contato",
    description:
      "ei, você que está lendo, o que está esperando pra gente bater aquele papo? :)",
    type: "portfolio",
    path: "/#contato",
    icon: `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 18a4 4 0 0 0-8 0"></path><circle cx="12" cy="11" r="3"></circle><rect width="18" height="18" x="3" y="4" rx="2"></rect><line x1="8" x2="8" y1="2" y2="4"></line><line x1="16" x2="16" y1="2" y2="4"></line></svg>`,
  },
];
