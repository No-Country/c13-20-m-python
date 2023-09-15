//eslint-disable-next-line
export default function LoginButton({ text }) {
  return (
    <div>
      <button
        type="submit"
        className="w-44 mr-4 -ml-2  text-white  font-medium rounded-sm text-sm px-5 py-2.5 text-center bg-[#f77f00] hover:bg-orange-900 active:bg-orange-300"
      >
        {text}
      </button>
    </div>
  );
}
