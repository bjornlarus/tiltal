import { Outfit } from "next/font/google";
import "../styles/globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "tiltal · Markaðssamskipti",
  description:
    "tiltal er lítil stofa með mikla reynslu. Stefnumótun, hugmynda- og textagerð, sköpunarstjórn og efnisframleiðsla.",
  icons: { icon: "/favicon.ico" },
};

export const viewport = {
  themeColor: "#E85D26",
};

export default function RootLayout({ children }) {
  return (
    <html lang="is" className={outfit.variable}>
      <body>{children}</body>
    </html>
  );
}
