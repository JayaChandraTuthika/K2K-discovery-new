import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import AppSession from "@/components/AppSession";

const poppins = Poppins({
  subsets: ["latin"], // Customize as needed
  weight: ["400", "700"], // Specify font weights
  style: ["normal", "italic"], // Specify styles
  display: "swap", // Controls font-display behavior
});

export const metadata = {
  title: "K2K Discovery",
  description: "An Infosec K2K app",
  icons: {
    icon: "/img/infosec-logo-1.svg",
    // shortcut: "/favicon.ico",
    // apple: "/apple-touch-icon.png",
    // other: [
    //   {
    //     rel: "icon",
    //     url: "/favicon-32x32.png",
    //     sizes: "32x32",
    //     type: "image/png",
    //   },
    // ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <AppSession>{children}</AppSession>
        <Toaster />
      </body>
    </html>
  );
}
