import { CategoryNav } from "../components/CategoryNav";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Topbar } from "../components/Topbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen  w-full  justify-between items-center ">
      <div className="w-full flex flex-col gap-5  ">
        <CategoryNav />
      </div>
      {children}
    </div>
  );
}
