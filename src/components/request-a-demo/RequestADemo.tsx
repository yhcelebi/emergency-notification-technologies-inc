import "./RequestADemo.css";

export function RequestADemo() {
  return (
    <div className="background-pattern">
      <div className="request-a-demo-hero">
        <div className="request-a-demo-hero-overlay"></div>
        <div className="request-a-demo-hero-content flex-col text-neutral-content text-center justify-center">
          <div>
            <h1 className="text-5xl text-slate-400 font-bold">
              Request a Demo
            </h1>
            <h2 className="text-3xl text-slate-400 font-bold mt-3">
              Fill out the form below to request a demo.
            </h2>
          </div>
        </div>
      </div>
      <div className="hero-container-demo container-lg mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900 label"
          >
            <span className="label-text">First name</span>
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="input input-bordered block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="last-name"
            className="label block text-sm font-medium leading-6 text-gray-900"
          >
            <span className="label-text">Last name</span>
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="input input-bordered block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="email"
            className="label block text-sm font-medium leading-6 text-gray-900"
          >
            <span className="label-text">Email address</span>
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="input input-bordered block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            <span className="label-text">Country</span>
          </label>
          <div className="mt-2">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="input input-bordered block w-full rounded-md py-1.5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
