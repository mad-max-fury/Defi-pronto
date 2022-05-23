import { AboutPage, Components, LandingPage } from "../../pages";
import { RequireAuth } from "./RequireAuth";

const authRoutes = [
  { name: "Staking", path: "/staking", element: <div>staking</div> },

  { name: "Projects", path: "/projects", element: <div>projects</div> },
  {
    name: "How It Works",
    path: "/how-it-works",
    element: <div>how it works</div>,
  },
  { name: "features", path: "/features", element: <div>features</div> },
  { name: "About", path: "/about", element: <AboutPage /> },
  { name: "components", path: "/components", element: <Components /> },
  { name: "home", path: "/", element: <LandingPage /> },
];

const dashBoardRoutes = [
  {
    name: "My Portfolio",
    path: "/my-portfolio",
    element: <div>My Portfolio</div>,
  },
];
export { authRoutes, dashBoardRoutes, RequireAuth };
