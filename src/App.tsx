import * as Tooltip from "@radix-ui/react-tooltip";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Process from "./components/Process";
import TrackRecord from "./components/TrackRecord";
import Building from "./components/Building";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Process />
        <TrackRecord />
        <Building />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
      <ThemeToggle />
    </Tooltip.Provider>
  );
}
