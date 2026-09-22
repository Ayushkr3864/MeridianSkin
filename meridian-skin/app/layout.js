import "./globals.css";

export const metadata = {
  title: "Meridian Skin Clinic — Dermatology, Considered.",
  description:
    "Meridian Skin Clinic offers personalised dermatology and skin treatment plans, guided by evidence-based care and unhurried consultations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
