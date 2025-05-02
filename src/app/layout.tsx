import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import "./globals.css";
import generatePageMetadata from "@/components/generatePageMetadata";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  return generatePageMetadata({path: "/"})
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        {children}
        <ToastContainer stacked={true} limit={3} position="bottom-right" />
      </body>
    </html>
  );
}
