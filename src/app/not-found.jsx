import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-svh text-white flex items-center justify-center p-3">
      <div className="flex items-center justify-center gap-4 sm:gap-6 text-center sm:text-left">
        {/* Left 404 Code */}
        <span className="font-mono font-bold text-xl sm:text-4xl text-coffee-tan">
          404
        </span>

        {/* Divider */}
        <div className="block h-10 w-px bg-white/20" />

        {/* Right Info + Direct Links */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-mono text-coffee-cream">
          <span>This page could not be found.</span>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-white hover:text-coffee-tan transition-colors underline underline-offset-4"
            >
              Home
            </Link>
            <span>•</span>
            <Link
              href="/contact"
              className="text-white hover:text-coffee-tan transition-colors underline underline-offset-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}