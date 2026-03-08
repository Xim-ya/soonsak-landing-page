import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { FirebaseAnalytics } from "@/components/analytics/FirebaseAnalytics";
import { FeedbackButton } from "@/components/feedback/FeedbackButton";
import "./globals.css";

const SITE_NAME = "순삭";
const SITE_URL = "https://www.soonsak.co.kr";
const SITE_DESCRIPTION =
  "유튜브 영화 드라마 요약·리뷰, 한 곳에서 순삭. 2시간 영화도 결말까지 20분만에.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "순삭 - 유튜브 영화 드라마 요약·리뷰, 한 곳에서 순삭",
    template: "%s | 순삭",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    // 1순위: 핵심 키워드 (타겟 검색어)
    "영화 요약",
    "드라마 요약",
    "영화 리뷰",
    "드라마 리뷰",
    "결말 포함",
    "유튜브",

    // 2순위: 핵심 키워드 조합
    "영화 결말 포함",
    "드라마 결말 포함",
    "유튜브 영화 요약",
    "유튜브 드라마 요약",
    "유튜브 영화 리뷰",
    "유튜브 드라마 리뷰",
    "영화 요약 결말",
    "드라마 요약 결말",

    // 3순위: 롱테일 키워드
    "영화 10분 요약",
    "영화 20분 요약",
    "드라마 몰아보기",
    "영화 줄거리 요약",
    "드라마 줄거리 요약",
    "영화 줄거리",
    "드라마 줄거리",
    "패스트 무비",
    "영화 빠르게 보기",
    "영화 스포일러",
    "드라마 스포일러",
    "결말포함 리뷰",
    "스포주의",

    // 4순위: OTT 플랫폼 + 핵심 키워드
    "넷플릭스 영화 요약",
    "넷플릭스 드라마 요약",
    "넷플릭스 영화 리뷰",
    "넷플릭스 드라마 리뷰",
    "넷플릭스 결말 포함",
    "티빙 영화 요약",
    "티빙 드라마 요약",
    "쿠팡플레이 영화 요약",
    "쿠팡플레이 드라마 요약",
    "웨이브 드라마 요약",
    "왓챠 영화 요약",
    "디즈니플러스 요약",

    // 5순위: 유튜브 채널 관련
    "유튜브 요약 채널",
    "영화 리뷰 유튜브",
    "드라마 리뷰 유튜브",
    "영화 리뷰어",
    "드라마 리뷰어",
    "패스트무비",

    // 브랜드
    "순삭",
    "순삭 앱",
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
    title: "순삭 - 유튜브 영화 드라마 요약·리뷰, 한 곳에서 순삭",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "순삭 - 유튜브 영화 드라마 요약·리뷰 앱",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "순삭 - 유튜브 영화 드라마 요약·리뷰",
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
        <FirebaseAnalytics />
        {children}
        <FeedbackButton />
      </body>
    </html>
  );
}
