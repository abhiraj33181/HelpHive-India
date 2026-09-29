"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-[calc(100vh-80px)] w-full flex flex-col items-center justify-center bg-gradient-to-b from-violet-50/50 via-white to-white px-4 text-center overflow-hidden">
      <div className="relative mb-8 flex items-center justify-center">
        <div className="absolute w-32 h-32 bg-violet-200 rounded-full animate-ping opacity-30"></div>

        <div className="relative bg-white p-6 rounded-full shadow-xl shadow-violet-100 border border-violet-50 animate-[bounce_3s_infinite]">
          <SearchX className="w-16 h-16 text-violet-600" />
        </div>
      </div>

      <h1 className="text-7xl md:text-9xl font-black text-slate-900 mb-2 tracking-tighter drop-shadow-sm">
        4<span className="text-violet-600">0</span>4
      </h1>

      <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">
        Oops! Page Not Found
      </h2>

      <p className="text-slate-600 max-w-md mb-10 text-lg font-medium leading-relaxed">
        We can fix a leaky pipe, but we can't fix a broken link! Looks like the
        page or service you're looking for doesn't exist.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="rounded-full w-full sm:w-auto px-8 h-14 text-base font-semibold border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Go Back
        </Button>

        <Button
          asChild
          className="rounded-full w-full sm:w-auto px-8 h-14 text-base font-semibold bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-200 transition-all"
        >
          <Link href="/">
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
