import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-block m-5">
      <Image src="/logo_square.jpg" alt="CodeClash Logo" width={75} height={50} />
    </Link>
  );
}