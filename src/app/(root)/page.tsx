// pages/index.tsx

import Features from "@/components/feature";
import FeaturesSection from "@/components/featureBlock"
import Hero from "@/components/hero";
import ListingComponent from "@/components/listing";
import TopNav from "@/components/nav";
import Products from "@/components/product";



export default function Home() {
  return (
    <div>
      {/* Top Navigation Bar */}
      <TopNav/>
      <Hero/>
      
      <FeaturesSection/>
      <ListingComponent/>
      <Products/>
      <Features/>
  
    </div>
  );      
}
