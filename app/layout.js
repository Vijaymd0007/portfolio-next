export const metadata = {
  title: "portfolio",
  description: "portfolio of vijay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
