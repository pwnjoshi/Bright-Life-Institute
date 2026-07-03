import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.png"
        alt="Bright Life Logo"
        width={48}
        height={48}
        style={{ width: "auto", height: "48px" }}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
