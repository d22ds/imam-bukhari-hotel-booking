import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imam Bukhari Grand Hotel — бронь онлайн",
  description: "Забронируйте номер в Imam Bukhari Grand Hotel рядом с комплексом Имама Бухари в Самарканде."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="uz"><body>{children}</body></html>;
}
