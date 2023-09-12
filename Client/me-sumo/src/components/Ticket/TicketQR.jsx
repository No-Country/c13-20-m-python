import QRCode from "react-qr-code";

export default function TicketQR() {
  const value = "hola";
  return (
    <div className="flex flex-col items-center">
      <p>Presenta este QR en la entrada del evento</p>
      <QRCode size={320} value={value} />
    </div>
  );
}
