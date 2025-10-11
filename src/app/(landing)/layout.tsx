import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full overflow-auto bg-[#111827]">
      <div className="mx-auto h-full w-full max-w-screen-xl">{children}</div>
    </main>
  );
}
