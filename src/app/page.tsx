import Image from "next/image";
import Navbar from "./navbar/page";
import LandingPage from "./landingPage/page";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <LandingPage />
    </div>
  );
}
