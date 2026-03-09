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
        alternateName: ["Soonsak", "순삭 앱"],
        description:
          "유튜브 영화 드라마 요약·리뷰 영상을 한 곳에서 모아보는 앱. 2시간짜리 영화도 결말까지 20분만에.",
        inLanguage: "ko-KR",
      },

      // MobileApplication Schema
      {
        "@type": "MobileApplication",
        "@id": "https://www.soonsak.co.kr/#app",
        name: "순삭",
        alternateName: "Soonsak",
        description:
          "유튜브 영화 드라마 요약·리뷰를 한 곳에서. 넷플릭스, 티빙, 쿠팡플레이 등 OTT 콘텐츠 결말 포함 리뷰를 모아보세요.",
        applicationCategory: "EntertainmentApplication",
        operatingSystem: ["iOS 14.0+", "Android 8.0+"],
        downloadUrl: [
          "https://apps.apple.com/kr/app/id6758769228",
          "https://play.google.com/store/apps/details?id=com.soonsak.app",
        ],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "KRW",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "1000",
          bestRating: "5",
          worstRating: "1",
        },
        featureList: [
          "영화 요약 모아보기",
          "드라마 요약 모아보기",
          "결말 포함 리뷰",
          "유튜브 리뷰 큐레이션",
          "넷플릭스 콘텐츠",
          "티빙 드라마",
          "쿠팡플레이",
          "웨이브",
          "왓챠",
        ],
        author: {
          "@type": "Organization",
          name: "순삭",
        },
      },

      // Organization Schema
      {
        "@type": "Organization",
        "@id": "https://www.soonsak.co.kr/#organization",
        name: "순삭",
        url: "https://www.soonsak.co.kr",
        logo: {
          "@type": "ImageObject",
          url: "https://www.soonsak.co.kr/icon-512.png",
          width: 512,
          height: 512,
        },
        sameAs: [],
      },

      // FAQPage Schema
      {
        "@type": "FAQPage",
        "@id": "https://www.soonsak.co.kr/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "순삭은 어떤 앱인가요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "순삭은 유튜브에 올라온 영화·드라마 요약 리뷰 영상을 한 곳에서 모아볼 수 있는 앱입니다. 2시간짜리 영화도 20분 내외로 결말까지 빠르게 볼 수 있습니다.",
            },
          },
          {
            "@type": "Question",
            name: "결말 포함 리뷰도 볼 수 있나요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "네, 결말 포함 리뷰부터 스포일러 없는 리뷰까지 다양하게 제공됩니다. 각 영상에 결말 포함 여부가 표시되어 원하는 리뷰를 선택할 수 있습니다.",
            },
          },
          {
            "@type": "Question",
            name: "어떤 OTT 콘텐츠를 볼 수 있나요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "넷플릭스, 티빙, 쿠팡플레이, 웨이브, 왓챠, 디즈니플러스 등 다양한 OTT 플랫폼의 콘텐츠 요약 리뷰를 볼 수 있습니다.",
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
            name: "어떤 유튜브 채널의 콘텐츠가 있나요?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "고몽, 지무비, 김시선 등 인기 영화·드라마 리뷰 유튜브 채널의 콘텐츠를 큐레이션하여 제공합니다.",
            },
          },
        ],
      },

      // BreadcrumbList
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.soonsak.co.kr/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "홈",
            item: "https://www.soonsak.co.kr",
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
