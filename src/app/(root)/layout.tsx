import MaxWidthWrapper from "@/components/max-width-wrapper";
import Navbar from "@/components/navbar";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <Navbar />
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </main>
  );
};

export default RootLayout;
