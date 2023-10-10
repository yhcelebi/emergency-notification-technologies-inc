import "./Hero.css";

export function Hero() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex-col lg:flex-row-reverse text-neutral-content">
          <div>
            <h1 className="text-5xl font-bold">Mass Broadcast Service</h1>
            <h2 className="text-3xl font-bold mt-3">
              A Simple Solution For Emergency and Commercial Mobile Messaging
            </h2>
            <button className="btn btn-primary mt-5">Request a Demo</button>
          </div>
        </div>
      </div>
    </>
  );
}
