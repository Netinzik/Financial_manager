import Footer from "./footer";
import Header from "./header";
import DrawerProvider from "@/context/ContextInApplication";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  author: "Sebastião Gonçalves Ferreira Neto"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body> 
        <DrawerProvider>
          <Header />
          {children}
          <Footer />
        </DrawerProvider>
      </body>
    </html>
  );
}
