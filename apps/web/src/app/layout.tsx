import "../styles/globals.css";

export const metadata = {
  title: "Aurora AI",
  description: "Auto AI",
  authors: {
    name: "Aurimar Lopes",
    url: "https://github.com/AurimarL",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
