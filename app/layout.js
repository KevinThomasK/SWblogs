import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "./Providers";
import { UserProvider } from "@/components/UserContext";
import { ToastContainer } from "@/components/nextToast";
import "react-toastify/dist/ReactToastify.css";
import DynamicFavicon from "@/components/DynamicFavicon"; // Import the client component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SW-blogs",
  description: "Generated by create next app",
  icons: {
    icon: [
      {
        url: "https://yt3.ggpht.com/1oQc-j55vr_tnNhIWvSTxSPeV9cPpZyC3IoTr4zl6oUvEK50z9PjtfvKfyL8qC-sNbcQQmYg=s800-c-k-c0x00ffffff-no-rj", // Default favicon URL
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://yt3.ggpht.com/1oQc-j55vr_tnNhIWvSTxSPeV9cPpZyC3IoTr4zl6oUvEK50z9PjtfvKfyL8qC-sNbcQQmYg=s800-c-k-c0x00ffffff-no-rj" // Default favicon for server-side render
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <UserProvider>
            <Navbar />
            <DynamicFavicon /> {/* Dynamically set the favicon */}
            {children}
            <ToastContainer />
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
