

// export const metadata: Metadata = {
//   title: "Kinam Na",
//   description: "Get all your necessities in one place",
//   icons: {
//     icon: "/icon.svg"
//   }
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <div className="">
      {children}
    </div>
  );
}
