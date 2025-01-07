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
