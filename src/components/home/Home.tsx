import "./Home.css";
import { CustomersScroller } from "../customers-scroller/CustomersScroller";
import { Hero } from "../hero/Hero";

export function Home() {
  return (
    <>
      <Hero />
      <CustomersScroller />
    </>
  );
}
