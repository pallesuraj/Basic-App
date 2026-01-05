import PlaneSelection from "@/components/SECTIONS/PlaneSelection";
import ContactPage from "../Contact/page";
import MainHero from "../Design/MainHero";
import SecondSection from "./SecondSection";
import HeroFaith from "@/components/SECTIONS/HeroFaith";
import FaithFeatures from "@/components/SECTIONS/FaithFeatures";
import ChurchWorkflow from "@/components/SECTIONS/ChurchWorkflow";
import LivingCommunity from "@/components/SECTIONS/LivingCommunity";
import TrustSection from "@/components/SECTIONS/TrustSection";
import WiderFaithCommunity from "@/components/SECTIONS/WiderFaithCommunity";
import FinalCTA from "@/components/SECTIONS/FinalCTA";
import FaithAnnouncements from "@/components/SECTIONS/FaithAnnouncements";
import InAppAnnouncementPreview from "@/components/SECTIONS/InAppAnnouncementPreview";


function Main() {
  return (
    <>
      <HeroFaith/>
      <FaithFeatures/>
      <ChurchWorkflow/>
      <LivingCommunity/>
      <TrustSection/>
      <WiderFaithCommunity/>
      <FinalCTA/>
     <FaithAnnouncements/>
     <InAppAnnouncementPreview/>
      {/*<MainHero />
      <SecondSection />
      <PlaneSelection />
    
      
      {/* <ContactPage /> */}
    </>
  );
}

export default Main;
