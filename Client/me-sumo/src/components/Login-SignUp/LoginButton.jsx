//eslint-disable-next-line
export default function LoginButton({ text }) {
  return (
    <div>
      <button
        type="submit"
        className="w-44 mr-4 -ml-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        {text}
      </button>
    </div>
  );
}
