import * as Tooltip from "@radix-ui/react-tooltip";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </Tooltip.Provider>
  );
}
