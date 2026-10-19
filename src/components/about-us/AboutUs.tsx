import "./AboutUs.css";

export function AboutUs() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?w=2000&t=st=1698490841~exp=1698491441~hmac=fb028eb76f78fb5336586034b06b071ebe149937a55aa063623c23f2ae7a76f0)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-7xl font-bold">About Us</h1>
          </div>
        </div>
      </div>
      <div className="hero pt-20 pb-20 base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="avatar mr-10">
            <div className="mask mask-squircle max-w-sm shadow-2xl">
              <img
                src="https://www.gtu.edu.tr/fileman/Files/UserFiles/basin_ve_halkla_iliskiler/Haberler/2020/Aralik/prestij/02.JPG"
                className=""
              />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">Prof. Dr. Hasari Çelebi</h1>
            <p className="py-6">
              Dr. Hasari Çelebi is the founder of İstlink company and he has
              more than 20 years of proven experience in North America, Qatar
              and Turkey across various high-tech areas including engineering,
              R&D, and management.
            </p>
          </div>
        </div>
      </div>
      <div className="hero pt-20 pb-20 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="avatar">
            <div className="mask mask-squircle max-w-sm shadow-2xl">
              <img
                src="https://sabita.medipol.edu.tr/wp-content/uploads/2023/02/mkozdemir_big.jpg"
                className=""
              />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">
              Prof. Dr. Mehmet Kemal Özdemir
            </h1>
            <p className="py-6">
              Dr. Kemal Özdemir has more than 20 years of experiences in North
              America and Turkey in telecom and cable TV industries. He holds
              Systems and R&D and engineering Management positions in various
              companies in North America including Philips, Triverity, Logus
              Wireless, CSI.
            </p>
          </div>
        </div>
      </div>
      <div className="hero pt-20 pb-20 base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="avatar mr-10">
            <div className="mask mask-squircle max-w-sm shadow-2xl">
              <img
                src="https://img1.wsimg.com/isteam/ip/0781d5c1-9381-48bc-953a-3f538a7b14aa/IMG_9275.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true"
                className=""
              />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold">Fazlı Şahin</h1>
            <p className="py-6">
              Fazlı Şahin has about 10 years of experience in ICT technologies
              market. Prior to joining İstlink team, he has worked in management
              positions in various industries such as Oil&Gas. Mr. Şahin holds
              BSc degree in Industrial Engineering at Işık University and MSc
              degree in Capital Markets at Marmara University, Istanbul.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
