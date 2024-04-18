import Link from "next/link";
import { cookies } from 'next/headers'
export default async function Home() {
    const cookieStore = cookies()
    const token: any = cookieStore.get("token")
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Hello world This is a Home page
            {!token && !token?.value ? (
                <>
                    <Link href="/login">Visit login page</Link>

                    <Link href="/signup">Visit Signup page</Link>
                </>

            ) : (<div>
                <p>Welcome! You are logged in.</p>
                <Link href="/profile">Profile Page Access</Link>

            </div>)}
        </main>
    );
}
