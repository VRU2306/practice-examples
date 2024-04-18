
import { Metadata } from "next";
import "../../../styles/globals.css";
import Head from 'next/head';
export default function About({ message }: any) {
  return (
    <>
      <Head>
        <title>About Page</title>
        <link
          rel="icon"
          href="/icon.ico"
        />
      </Head>
      <div className="flex flex-col bg-back-800 text-white mx-3 w-100">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Index</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">UserId</th>
            </tr>
          </thead>
          <tbody>
            {message?.map((single: any, index: any) => (
              <tr key={index} className="bg-gray-700">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2"><a className="text-blue-300" href={`/about/${single.id}`}>{single.title}</a></td>
                <td className="border px-4 py-2">{single.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>

  );
}

export async function getServerSideProps({ }: any) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const data = await res.json();
  return {
    props: { message: data },
  };
}