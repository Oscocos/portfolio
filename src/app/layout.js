import "./globals.css";

export const metadata = {
  title: "Ollantay Scocos",
  description: "Ollantay Scocos Portfolio Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
