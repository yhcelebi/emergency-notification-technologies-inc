import "./Home.css";
import { CustomersScroller } from "../customers-scroller/CustomersScroller";
import { Hero } from "../hero/Hero";

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
      <div className="container-md align bg-base-200">
        <h1 className="text-4xl text-slate-600 font-bold mt-40 mb-20 text-center">
          Emergency Notification Technologies products are compliant with all of
          the major international standards.
        </h1>
      </div>

      <div className="contact-us text-neutral-content text-center pb-10 bg-base-100">
        <h1 className="text-5xl text-slate-600 font-bold">Contact Us</h1>
        <h2 className="text-3xl text-slate-600 font-bold mt-3">
          Fill out the form below to contact us.
        </h2>
        <p className="text-slate-600 mt-5">Let us know how we can help you.</p>

        <div className="flex flex-col items-center mt-8">
          <div className="w-96 max-w-4xl">
            {" "}
            {/* Increase the width as needed */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-600">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="w-96 max-w-4xl mt-5">
            {" "}
            {/* Increase the width as needed */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-600">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="w-96 max-w-4xl mt-5">
            {" "}
            {/* Increase the width as needed */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-600">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
