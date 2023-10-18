import "./Home.css";
import { CustomersScroller } from "../customers-scroller/CustomersScroller";
import { Hero } from "../hero/Hero";
import { MainPageCard } from "../cards/MainPageCard";

export function Home() {
  return (
    <>
      <Hero />
      <CustomersScroller />
      <div className="flex container-lg">
        <MainPageCard />
        <MainPageCard />
        <MainPageCard />
      </div>
      <div className="flex container-lg">
        <MainPageCard />
        <MainPageCard />
        <MainPageCard />
      </div>
      <div className="container-lg align">
        <h1 className="text-4xl text-slate-600 font-bold mt-40 mb-20 align-items-center text-center">
          Emergency Notification Technologies products are compliant with all of
          the major international standards.
        </h1>
      </div>
      <div className="flex container-lg justify-center ml-40 mr-40 mb-40">
        <div className="w-82">
          <img
            src="https://img1.wsimg.com/isteam/ip/0781d5c1-9381-48bc-953a-3f538a7b14aa/IMG_9266.webp/:/rs=w:370,cg:true,m"
            alt="atis"
          />
        </div>
        <div className="w-82">
          <img
            src="https://img1.wsimg.com/isteam/ip/0781d5c1-9381-48bc-953a-3f538a7b14aa/IMG_9265.webp/:/rs=w:740,cg:true,m"
            alt="TIA"
          />
        </div>
        <div className="w-82">
          <img
            src="https://img1.wsimg.com/isteam/ip/0781d5c1-9381-48bc-953a-3f538a7b14aa/IMG_9264.png/:/rs=w:370,cg:true,m"
            alt="3GPP"
          />
        </div>
        <div className="w-82">
          <img
            src="https://img1.wsimg.com/isteam/ip/0781d5c1-9381-48bc-953a-3f538a7b14aa/IMG_9263.jpeg/:/rs=w:740,cg:true,m"
            alt="ETSI"
          />
        </div>
      </div>
      <div className="contact-us text-neutral-content text-center justify-center mb-10">
        <h1 className="text-5xl text-slate-600 font-bold">Contact Us</h1>
        <h2 className="text-3xl text-slate-600 font-bold mt-3">
          Fill out the form below to contact us.
        </h2>
        <p className="text-slate-600 mt-5">Let us know how we can help you.</p>
        <div className="grid justify-items-center container-lg place-content-center mt-8">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-slate-600">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-slate-600">Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-slate-600">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered justify-center w-full max-w-xs"
              placeholder="Bio"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
