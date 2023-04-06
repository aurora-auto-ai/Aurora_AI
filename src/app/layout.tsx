import "../styles/globals.css";

import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import Login from "@/components/Login";
import ClientProvider from "@/components/ClientProvider";
import { SideBar } from "@/components/SideBar";

export const metadata = {
  title: "Aurora AI Chat",
  description: "A ChatGPT AI Clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <SessionProvider Session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="bg-[#202123]">
              <div className="drawer drawer-mobile">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  <div className="m-2">
                    <label
                      htmlFor="my-drawer"
                      className="btn btn-info drawer-button md:hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                        />
                      </svg>
                    </label>
                  </div>
                  <ClientProvider />
                  <div>{children}</div>
                </div>
                <div className="drawer-side ">
                  <label htmlFor="my-drawer" className="drawer-overlay"></label>
                  <SideBar />
                </div>
              </div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
