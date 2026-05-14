import { createBrowserRouter } from "react-router";
import { Root } from "./components/layout/Root";
import { LandingPage } from "./components/landing/LandingPage";
import { CreatorsPage } from "./components/marketing/CreatorsPage";
import { DistributionPage } from "./components/marketing/DistributionPage";
import { PartnersPage } from "./components/marketing/PartnersPage";
import { PricingPage } from "./components/marketing/PricingPage";
import { AboutPage } from "./components/marketing/AboutPage";
import { ContactPage } from "./components/marketing/ContactPage";
import { PortalSelection } from "./components/auth/PortalSelection";
import { ViewerAuth } from "./components/auth/ViewerAuth";
import { StudioAuth } from "./components/auth/StudioAuth";
import { ViewerHome } from "./components/viewer/ViewerHome";
import { VideoPlayer } from "./components/viewer/VideoPlayer";
import { StudioUpload } from "./components/studio/StudioUpload";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: LandingPage },
      { path: "creators", Component: CreatorsPage },
      { path: "distribution", Component: DistributionPage },
      { path: "partners", Component: PartnersPage },
      { path: "pricing", Component: PricingPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "portal", Component: PortalSelection },
      { path: "auth/viewer", Component: ViewerAuth },
      { path: "auth/studio", Component: StudioAuth },
      { path: "home", Component: ViewerHome },
      { path: "watch/:id", Component: VideoPlayer },
      { path: "studio", Component: StudioUpload },
      { path: "studio/upload", Component: StudioUpload },
    ],
  },
]);
