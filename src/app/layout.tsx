import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const SITE_NAME = "순삭";
const SITE_URL = "https://www.soonsak.co.kr";
const SITE_DESCRIPTION =
  "2시간짜리 영화, 결말까지 20분만에. 유튜브 영화·드라마 리뷰 영상을 한 곳에서 모아보세요. 영화 요약, 드라마 요약, 결말 포함 리뷰를 OTT처럼 깔끔하게.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "순삭 - 영화 요약, 드라마 요약 리뷰 모아보기 앱",
    template: "%s | 순삭",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "영화 요약",
    "드라마 요약",
    "영화 결말",
    "드라마 결말",
    "영화 리뷰",
    "드라마 리뷰",
    "영화 줄거리",
    "드라마 줄거리",
    "유튜브 영화 리뷰",
    "유튜브 드라마 리뷰",
    "넷플릭스 요약",
    "왓챠 요약",
    "티빙 요약",
    "OTT 콘텐츠 요약",
    "결말 포함 리뷰",
    "영화 결말 포함",
    "드라마 결말 포함",
    "순삭",
    "영화 앱",
    "드라마 앱",
  ],
  authors: [{ name: "순삭" }],
  creator: "순삭",
  publisher: "순삭",
  applicationName: SITE_NAME,
  category: "entertainment",
  classification: "Entertainment, Movies, TV Shows, Reviews",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "순삭 - 영화 요약, 드라마 요약 리뷰 모아보기",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "순삭 - 영화, 드라마 요약 콘텐츠 앱",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "순삭 - 영화 요약, 드라마 요약 리뷰 모아보기",
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // App Links
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: SITE_NAME,
  },

  // Verification (placeholder - update with actual IDs)
  // verification: {
  //   google: "google-site-verification-id",
  //   other: {
  //     "naver-site-verification": "naver-verification-id",
  //   },
  // },

  // Alternates
  alternates: {
    canonical: SITE_URL,
  },

  // Manifest for PWA
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <JsonLd />
      </head>
      <body className="font-pretendard antialiased">
        {children}
      </body>
    </html>
  );
}
