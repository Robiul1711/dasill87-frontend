import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";
import { DM_Sans } from "next/font/google";
import ToastProvider from "@/providers/ToastProvider";

// Fonts
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Metadata
export const metadata = {
  title: "Starter Next.js",
  description: "A starter template for Next.js projects with Redux",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body className="font-sans">
        <ReduxProvider>
          <ToastProvider />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
