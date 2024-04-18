import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello world This is a sample page 
      <Link href="/login">Visit login page</Link>

      <Link href="/signup">Visit Signup page</Link>
    </main>
  );
}
