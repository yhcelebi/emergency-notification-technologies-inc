import "./Home.css";
import { CustomersScroller } from "../customers-scroller/CustomersScroller";
import { Footer } from "../footer/Footer";
import { Hero } from "../hero/Hero";
import { Navbar } from "../navbar/Navbar";

export function Home() {
  return (
    <>
      <Hero />
      <CustomersScroller />
    </>
  );
}
