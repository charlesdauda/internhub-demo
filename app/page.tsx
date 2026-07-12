import AnnouncementBar from "./components/AnnouncementBar";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";

export default function Home() {
  return (
    <main>
      <Header />
      <AnnouncementBar />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}
