import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nafsu",
  description: "Mental health support for Maldivians",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body>
      
        <main className="main-body">
        {/* <div className="branch-img fixed"><Image alt="bg" src={branch} className="fixed" /></div> */}
          
          <div className="p-4 flex justify-between">
          <h1 className="text-2xl font-bold">Nafsu</h1>
          <div className="text-sm flex gap-10 text-center">
            <Link className="nav-link" href={"/"}>Home</Link>
            <Link className="nav-link" href={"/about"}>About Us</Link>
          </div>
        </div>
          <div className="snow">
              <div></div>
          </div>
          {children}
          
        </main>
      </body>
    </html>
  );
}
