import QRCode from "react-qr-code";

export default function TicketQR() {
  const value = "hola";
  return (
    <div className="flex flex-col items-center">
      <p>Tu entrada al evento</p>
      <QRCode size={220} value={value} />
    </div>
  );
}
