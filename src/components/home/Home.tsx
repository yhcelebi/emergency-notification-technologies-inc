import "./Home.css";
import { CustomersScroller } from "../customers-scroller/CustomersScroller";
import { Hero } from "../hero/Hero";
import { ContactUs } from "../contact-us/ContactUs";

export function Home() {

  return (
    <>
      <Hero />
      <CustomersScroller />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img1.wsimg.com/isteam/stock/4264/:/rs=w:300,h:600,cg:true,m/cr=w:300,h:600"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Cell Broadcast Alert Platform
            </h1>
            <p className="py-6">
              SmartAlert® allows governments and mobile operators to instantly
              reach to millions of mobile users in seconds. This scalable
              platform is compatible with all related international standards
              and supports all mobile cellular networks.
            </p>
            <div className="justify-center">
              <button className="btn btn-primary ">
                Learn More about SmartAlert®
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-100 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img1.wsimg.com/isteam/stock/8018/:/rs=w:300,h:600,cg:true,m/cr=w:300,h:600"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Mobile Engagement Platform</h1>
            <p className="py-6">
              SmartNotify® is a commercial user-engagement platform that
              delivers a managed service to connect you with your customers and
              increase location based user engagement. Drive revenue and connect
              with customers, any time, any place with SmartNotify®.
            </p>
            <button className="btn btn-primary">
              Learn more about SmartNotify®
            </button>
          </div>
        </div>
      </div>
      <div className="cnt container-md bg-base-200 pt-2 justify-center align-items-center position-self-center place-self-center">
        <h1 className="text-4xl text-slate-600 font-bold mt-20 mb-20 text-center">
          Emergency Notification Technologies products are compliant with all of
          the major international standards.
        </h1>
        <div className="carousel max-w-md rounded-box pb-20 justify-center">
          <div className="carousel-item">
            <img
              src="https://img1.wsimg.com/isteam/ip/0781d5c1-9381-48bc-953a-3f538a7b14aa/IMG_9266.webp/:/rs=w:270,cg:true,m"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img1.wsimg.com/isteam/ip/0781d5c1-9381-48bc-953a-3f538a7b14aa/IMG_9265.webp/:/rs=w:270,cg:true,m"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img1.wsimg.com/isteam/ip/0781d5c1-9381-48bc-953a-3f538a7b14aa/IMG_9264.png/:/rs=w:270,cg:true,m"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img1.wsimg.com/isteam/ip/0781d5c1-9381-48bc-953a-3f538a7b14aa/IMG_9263.jpeg/:/rs=w:270,cg:true,m"
              alt="Burger"
            />
          </div>
        </div>
      </div>
      <ContactUs />
    </>
  );
}
