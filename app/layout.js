import "./globals.css";

export const metadata = {
  title: "Anusha M — Full Stack Developer & Voice AI Engineer",
  description: "Anusha M builds multi-tenant SaaS, conversational AI agents, and enterprise data platforms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
