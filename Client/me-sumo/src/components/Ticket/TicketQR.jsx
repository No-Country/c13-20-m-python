import QRCode from "react-qr-code";

export default function TicketQR() {
  const value = "hola";
  return (
    <div>
      <p>ESCANEA EL QR</p>
      <QRCode size={320} value={value} />
    </div>
  );
}
