import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 px-4 m-4">
      <div className="flex justify-center">
        <div>
         Email: <a
            className="hover:underline hover:decoration-dotted underline-offset-8 mr-4"
            href="mailto:hello@vendortrust.com"
          >
            hello@mymedtracker.com
          </a>
          Address: <Link
            className="hover:underline hover:decoration-dotted underline-offset-8"
            href="/address"
          >
            Bera estate, Chevron
          </Link>
        </div>
      </div>
    </footer>
  );
}
