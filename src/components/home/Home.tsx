import "./Home.css";
import { CustomersScroller } from "../customers-scroller/CustomersScroller";
import { Hero } from "../hero/Hero";
import { useState } from "react";
import { Email } from "../smtp/smtp";

export function Home() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsSending(true);

    Email.send({
      SecureToken: "09366e5c-4b32-4b90-aa1e-0aa64cb4f1de",
      To: ["yhcelebi@gmail.com"],
      From: "yhcelebi@gmail.com",
      Subject: `A message from Emergency Notification Technologies Inc. webpage from ${fullName} and his email: ${email}`,
      Body: message,
    }).then(
      (message: any) => {
        console.log(message);
        setIsSent(true);
        setIsSending(false);
      },
      (error: any) => console.log(error)
      );
  };

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
        <div className="crs carousel rounded-box container-md pb-20 justify-center align-items-center position-center">
          <div className="crs-item carousel-item">
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

      <div className="contact-us text-neutral-content text-center pb-10 bg-base-100 pt-10">
        <h1 className="text-5xl text-slate-600 font-bold">Contact Us</h1>
        <h2 className="text-3xl text-slate-600 font-bold mt-3">
          Fill out the form below to contact us.
        </h2>
        <p className="text-slate-600 mt-5">Let us know how we can help you.</p>

        <div className="flex flex-col items-center mt-8">
          <div className="w-96 max-w-4xl">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-600">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>

          <div className="w-96 max-w-4xl mt-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-600">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="w-96 max-w-4xl mt-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-600">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <p className={isSent ? "text-green-500 mt-4": "mt-4"}>{isSent ? "Sended successfully" : ""}</p>
          {isSending ? (
            <div className="w-46 max-w-4xl mt-5 flex justify-center items-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <div className="w-46 max-w-4xl mt-5">
              <button className="btn btn-outline" onClick={sendEmail}>
                Send it!
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
