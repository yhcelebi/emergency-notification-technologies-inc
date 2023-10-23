import "./Emergency.css";

export function Emergency() {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">
                        SmartAlert® Cell Broadcast Service
                    </h1>
                    <p className="py-6">
                        SmartAlert® allows governments and mobile operators to instantly
                        reach to millions of mobile users in seconds. This scalable
                        platform is compatible with all related international standards
                        and supports all mobile cellular networks.
                    </p>
                    <button className="btn btn-primary">Request a brochure</button>
                </div>
            </div>
        </div >
    </>
  );
}
