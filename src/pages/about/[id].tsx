import { useRouter } from "next/router";
import "../../../styles/globals.css";
import Head from "next/head";
export default function About({ message }: any) {
    const router = useRouter()
    return <>
        <Head>
            <title>About {message.title}</title>
            <link
                rel="icon"
                href="/icon.ico"
            />
        </Head>
        <div className="mt-1 overflow-y-hidden">
            <button className="bg-blue-800 p-2  rounded-sm" onClick={() => { router.push("/about") }}>Back</button>
            <div className="flex flex-col bg-back-800 text-white mx-3 w-100 justify-center min-h-100 items-center">
                {message.firstName + " " + message.lastName}
            </div>
        </div>

    </>
}

export async function getServerSideProps({ params }: any) {
    const res = await fetch(`https://dummyjson.com/users/${params.id}`)
    const data = await res.json();
    return {
        props: { message: data },
    };
}