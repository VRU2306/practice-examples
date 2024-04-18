"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
export default function NotFound() {
    const router = useRouter()
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div>
                <h2 className='text-2xl'>Not Found</h2>
                <p className='mb-3'>Could not find requested resource</p>
                <button className="bg-blue-500 p-2 text-center rounded-xl flex justify-center "  onClick={() => router.push('/home')}>Return Home</button>
            </div>
        </div>

    )
}