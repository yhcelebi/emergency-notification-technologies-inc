import "./ContactUs.css";
import { useState } from "react";
import { Email } from "../smtp/smtp.ts";

export const ContactUs = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsSending(true);

    Email.send({
      nocache: Math.floor(1e6 * Math.random() + 1),
      Action: "Send",
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
          <p className={isSent ? "text-green-500 mt-4" : "mt-4"}>
            {isSent ? "Sended successfully" : ""}
          </p>
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
};
