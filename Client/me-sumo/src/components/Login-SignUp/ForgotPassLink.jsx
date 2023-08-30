export default function ForgotPassLink({ handleOpenModal }) {
  const handleClick = () => {
    handleOpenModal();
  };
  return (
    <div>
      <a
        onClick={handleClick}
        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
      >
        Olvidé mi contraseña
      </a>
    </div>
  );
}
