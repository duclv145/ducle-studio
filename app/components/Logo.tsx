import Image from "next/image";
import logo from "../../public/logo.png";

export default function Logo({
  size = 28,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const w = Math.round(size * (logo.width / logo.height));
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="DucLe"
    >
      <Image
        src={logo}
        alt=""
        width={w}
        height={size}
        priority
        className="block h-auto w-auto"
        style={{ height: size, width: w }}
      />
      <span className="font-display text-[15px] font-semibold tracking-[-0.02em] leading-none">
        DucLe
      </span>
    </span>
  );
}
