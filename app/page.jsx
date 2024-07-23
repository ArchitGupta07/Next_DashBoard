import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      Homepage
      <br />
      <Link href="/dashboard">Go To DashBoard</Link>
    </main>
  );
}
