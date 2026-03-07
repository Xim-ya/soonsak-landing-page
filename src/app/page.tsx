import { BackdropSlider } from "@/components/backgrounds/BackdropSlider";
import { SparklesCore } from "@/components/ui/sparkles";
import { HeroContent } from "@/components/hero/HeroContent";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* 하단 영역: Sparkles (z-0, 가장 뒤) */}
      <div className="absolute inset-x-0 bottom-0 h-[65%] z-0">
        <SparklesCore
          id="tsparticlessoonsak"
          className="absolute inset-0"
          background="transparent"
          particleColor="#10b981"
          particleDensity={100}
          minSize={0.6}
          maxSize={1.4}
          speed={1}
        />
      </div>

      {/* 상단: Backdrop 슬라이더 (z-10, 스파클 위에) */}
      <BackdropSlider className="z-10" />

      {/* 콘텐츠 (z-20, 가장 위) */}
      <div className="absolute inset-x-0 bottom-0 h-[65%] z-20 pointer-events-none">
        <HeroContent className="h-full pointer-events-auto" />
      </div>
    </div>
  );
}
