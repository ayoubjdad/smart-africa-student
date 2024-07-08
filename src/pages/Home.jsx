import React from "react";
import Header from "../layouts/header/Header";
import MainSlide from "../layouts/main-slide/MainSlide";
import Chat from "../layouts/chat/Chat";
import Footer from "../layouts/footer/Footer";
import MetiersAlaUne from "../layouts/metiers-a-la-une/MetiersAlaUne";
import Notification from "../layouts/notification/Notification";
import SmartNews from "../layouts/smart-news/SmartNews";
import LeaderBoard from "../layouts/ads/LeaderBoard";
import SasTools from "../layouts/sas-tools/SasTools";
import MaDestination from "../layouts/ma-destination/MaDestination";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <MainSlide />
      <Notification />
      <LeaderBoard />
      <MetiersAlaUne />
      <SmartNews />
      <SasTools />
      <MaDestination />
      <Chat />
      <Footer />
    </div>
  );
}
