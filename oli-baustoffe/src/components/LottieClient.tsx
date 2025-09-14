// src/components/LottieClient.tsx
import dynamic from "next/dynamic";
import { CSSProperties } from "react";

// lottie-react wird nur im Client geladen:
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type Props = {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  style?: CSSProperties;
  className?: string;
};

export default function LottieClient({
  animationData,
  loop = true,
  autoplay = true,
  style,
  className,
}: Props) {
  return <Lottie animationData={animationData} loop={loop} autoplay={autoplay} style={style} className={className} />;
}
