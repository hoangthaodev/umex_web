import "./globals.css";
import { generateMetadata } from "@/app/hooks/metadata";
import { ComponentProvider } from "@/app/ComponentContext";
import { checkStatus } from "@/actions/checkstatus";
import { Bounce, ToastContainer } from "react-toastify";
import { ThemeProvider } from "@/app/ThemeContext";

// export const metadata = generateMetadata({})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const status = await checkStatus()
  if (!status) {
    return (
      <html lang="en">
        <body>
          <h1 className="text-center mt-10">Server is upgrading...!</h1>
        </body>
      </html>
    )
  }

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ComponentProvider>
            {children}
            <ToastContainer
              position="bottom-left"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition={Bounce}
            />
          </ComponentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
