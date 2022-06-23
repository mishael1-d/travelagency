import React from "react";
import AppBanner from "../components/AppBanner/AppBanner";
import Flights from "../components/FlightDisplay/Flights";
import Hero from "../components/HeroSection/Hero";
import Hotels from "../components/HotelDisplay/Hotels";
import Why from "../components/Why/Why";


function Home() {
  return (
    <>
      <Hero/>
      <Why />
      <Flights/>
      <Hotels/>
      <AppBanner/>
    </>
  );
}

export default Home;
