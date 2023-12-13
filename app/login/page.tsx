import React from "react";

const LoginPage: React.FC = () => {

  
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          src="../../image/basecamp_logo_icon.png"
          alt=""
          className="mx-auto h-28 w-auto"
        />
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-lg bg-white p-8 shadow-lg rounded-lg">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <h1 className="text-xl font-bold text-center">
              Log in to Basecamp
            </h1>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-white text-black px-3 my-2 py-3 text-lg border border-black-100 font-semibold leading-6 shadow-sm"
            >
              <i>
                <img
                  src="https://launchpad-asset2.37signals.com/assets/icons/google-g-c2ca287890a85fbdf16f8d9bb2e7f7cc7f1d3cbf252102c1d92d49b7dd3f2664.svg"
                  alt=""
                  className="mx-auto h-6 w-auto"
                />
              </i>
              Sign in with Google
            </button>
            <div className="flex items-center justify-center space-x-2 my-5">
              <div className="w-1/4 h-0.5 bg-gray-300"></div>
              <div className="text-gray-500">Or, use my email address.</div>
              <div className="w-1/4 h-0.5 bg-gray-300"></div>
            </div>
            <label
              htmlFor="email"
              className="block text-lg font-bold leading-6 text-gray-900"
            >
              Email or username
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="basecampclone@nuvecore.com"
                required
                className="block w-full rounded-md border-0 p-2 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md text-black px-3 py-2 text-md font-semibold leading-10 shadow-sm border border-black-100 bg-white"
            >
              Next
            </button>
          </div>
        </form>
      </div>
          <a href="#" className="text-sm text-blue-500 text-center mt-4">
            Forgot your password?
          </a>
    </div>
  );
};
export default LoginPage;
