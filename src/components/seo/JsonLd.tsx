export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // WebSite Schema
      {
        "@type": "WebSite",
        "@id": "https://www.soonsak.co.kr/#website",
        url: "https://www.soonsak.co.kr",
        name: "순삭",
        description:
          "영화·드라마 요약 리뷰 영상을 한 곳에서 모아보는 앱. 2시간짜리 영화, 결말까지 20분만에.",
        inLanguage: "ko-KR",
      },
      // MobileApplication Schema
      {
        "@type": "MobileApplication",
        "@id": "https://www.soonsak.co.kr/#app",
        name: "순삭",
        description:
          "유튜브 영화·드라마 리뷰 영상을 OTT처럼 깔끔하게 모아보세요. 영화 요약, 드라마 요약, 결말 포함 리뷰를 한 곳에서.",
        applicationCategory: "EntertainmentApplication",
        operatingSystem: ["iOS", "Android"],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "KRW",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "1000",
          bestRating: "5",
          worstRating: "1",
        },
        featureList: [
          "영화 요약 리뷰 모아보기",
          "드라마 요약 리뷰 모아보기",
          "결말 포함 리뷰",
          "유튜브 리뷰 큐레이션",
          "OTT 스타일 UI",
        ],
      },
      // Organization Schema
      {
        "@type": "Organization",
        "@id": "https://www.soonsak.co.kr/#organization",
        name: "순삭",
        url: "https://www.soonsak.co.kr",
        logo: {
          "@type": "ImageObject",
          url: "https://www.soonsak.co.kr/logo.svg",
        },
        sameAs: [],
      },
      // FAQPage Schema for better featured snippets
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "순삭은 어떤 앱인가요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "순삭은 유튜브에 올라온 영화·드라마 요약 리뷰 영상을 한 곳에서 모아볼 수 있는 앱입니다. 2시간짜리 영화도 20분 내외의 요약 리뷰로 결말까지 빠르게 볼 수 있습니다.",
            },
          },
          {
            "@type": "Question",
            name: "순삭은 무료인가요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "네, 순삭은 무료로 사용할 수 있습니다. iOS App Store와 Google Play Store에서 다운로드할 수 있습니다.",
            },
          },
          {
            "@type": "Question",
            name: "어떤 콘텐츠를 볼 수 있나요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "넷플릭스, 왓챠, 티빙, 디즈니플러스 등 다양한 OTT 플랫폼의 영화와 드라마 요약 리뷰를 볼 수 있습니다. 결말 포함 리뷰부터 스포일러 없는 리뷰까지 다양하게 제공됩니다.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
