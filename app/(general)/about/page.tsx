import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About Page',
 description: 'About Page',
};

export default function AboutPage() {
  return (
    <>
        <h1 className="text-7xl">My About</h1>
    </>
  )
}
