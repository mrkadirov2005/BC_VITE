import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BC_Control_manager",
  description: "Created by mr_kadirov",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className="main_container_body">
      <div   id="spinning_back"  className="w-24 h-24 border-4 border-gray-200 border-t-4 border-blue-500 absolute top-2/4 left-2/4 animate-spin shadow-red-800">
</div>


        {children}
      </body>
    </html>
  );
}
