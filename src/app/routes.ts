import { createBrowserRouter } from "react-router";
import { Welcome } from "@/app/components/Welcome";
import { SolarSystem } from "@/app/components/SolarSystem";
import { PlanetDetail } from "@/app/components/PlanetDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Welcome,
  },
  {
    path: "/universe",
    Component: SolarSystem,
  },
  {
    path: "/planet/:planetId",
    Component: PlanetDetail,
  },
]);
