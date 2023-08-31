import logo from "../../assets/nuestro-logo.png";

export default function ForgotPassModal({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="z-50 w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <main id="content" role="main" className="w-full max-w-md mx-auto p-6">
          <div className="mt-7 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-7">
              <div className="flex items-center justify-center mb-7">
                <img src={logo} alt="" />
              </div>
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                  Olvidaste tu contraseña?
                </h1>
              </div>
              <div className="mt-5">
                <form>
                  <div className="grid gap-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                      >
                        Ingresa tu email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                          required
                          aria-describedby="email-error"
                        />
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="email-error"
                      >
                        Please include a valid email address so we can get back
                        to you
                      </p>
                    </div>
                    <button
                      type="submit"
                      onClick={onClose}
                      className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                      Reset password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="z-40 fixed inset-0 bg-black bg-opacity-80"></div>
    </div>
  );
}
