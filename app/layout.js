import "./globals.css";

export const metadata = {
  title: "Kaur Portfolio",
  description:
    "AI, Machine Learning and Data Science Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}