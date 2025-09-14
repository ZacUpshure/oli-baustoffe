import dynamic from "next/dynamic";
// Dynamisch importierte Lottie-Komponente, nur im Client
const LottieClient = dynamic(() => import("./LottieClient"), { ssr: false });
export default LottieClient;