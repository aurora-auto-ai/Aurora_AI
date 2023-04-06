"use client";
import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";

export default function SessionProvider({
  children,
  Session,
}: {
  children: React.ReactNode;
  Session: Session | null;
}) {
  return <Provider>{children}</Provider>;
}
