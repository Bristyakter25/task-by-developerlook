import { useMemo } from "react";

import Hero from "./Hero";

import img1 from "../../assets/bannerImages/banner1.jpg";
import img2 from "../../assets/bannerImages/banner2.jpg";
import img3 from "../../assets/bannerImages/banner3.jpg";
import img4 from "../../assets/bannerImages/banner4.jpg";
import img5 from "../../assets/bannerImages/banner5.jpg";
import img6 from "../../assets/bannerImages/banner6.jpg";
import Navbar from "../layout/Navbar";
import Header from "../layout/Header";

const Banner = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  const randomImage = useMemo(() => {
    const index = Math.floor(Math.random() * images.length);
    return images[index];
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="relative mx-2 rounded-3xl min-h-screen max-w-6xl text-white overflow-hidden">

      {/* Background */}
      <div className="absolute  inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 blur-md"
          style={{ backgroundImage: `url(${randomImage})` }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-20">
        <Navbar></Navbar>
        <Hero randomImage={randomImage} />
      </div>
    </div>
    </div>
  );
};

export default Banner;