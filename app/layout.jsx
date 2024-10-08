import "@styles/globals.css";

export const metadata = {
  title: "Calendar App",
  description: "A simple calendar app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
