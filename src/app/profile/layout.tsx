import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Profile",
    description: "This is Profile page",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
    );
}
