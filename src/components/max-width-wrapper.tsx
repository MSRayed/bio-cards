const MaxWidthWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="p-10 h-screen">{children}</main>;
};

export default MaxWidthWrapper;
