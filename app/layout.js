import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["800"], // 800 = Extra Bold
  display: "swap",
});

export const metadata = {
  title: "Obadh Portfolio",
  description: "A preef describtion about me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusJakarta.className}>
        {children}
      </body>
    </html>
  );
}
