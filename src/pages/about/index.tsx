
import { useRouter } from "next/router";
import "../../../styles/globals.css";
import Head from 'next/head';
export default function About({ message }: any) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>About Page</title>
        <link
          rel="icon"
          href="/icon.ico"
        />
      </Head>
      <button className="bg-blue-800 p-2 mt-1  rounded-sm" onClick={() => { router.push("/profile") }}>Back to Profile</button>
      <div className="flex flex-col bg-back-800 text-white mx-3 w-100">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Index</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Mobile</th>
            </tr>
          </thead>
          <tbody>
            {message.users?.map((single: any, index: any) => (
              <tr key={index} className="bg-gray-700">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2"><a className="text-blue-300" href={`/about/${single.id}`}>{single.firstName+" "+single.lastName}</a></td>
                <td className="border px-4 py-2">{single.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>

  );
}

export async function getServerSideProps({ }: any) {
  const res = await fetch(`https://dummyjson.com/users`)
  const data = await res.json();
  return {
    props: { message: data },
  };
}