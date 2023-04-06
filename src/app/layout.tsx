import "../styles/globals.css";

export const metadata = {
  title: "Aurora AI Chat",
  description: "A ChatGPT AI Clone",
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
