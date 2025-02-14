import Link from "next/link";

export default function HomePage() {
  return (
    <main id="splash" className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold text-primary font-logo">LANDRUP DANS</h1>
      <Link href="/pages/activities">
          <button className="mt-6 px-6 py-3 bg-secondary text-white rounded-lg shadow-md">
            Kom i gang
          </button>
      </Link>
    </main>
  )
}