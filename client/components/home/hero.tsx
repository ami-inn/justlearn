import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChartDecoration } from "./chart-decoration";
import Link from "next/link";
import { SearchForm } from "../search/search-form";
import { buttonClasses } from "../ui/button";
export function Hero() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden px-6 pt-14 pb-16 text-center sm:px-12 sm:pt-16 sm:pb-20 xl:px-18 xl:pt-20 xl:pb-24">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[10%] h-72 w-72 rounded-full bg-primary-500/20 blur-[100px]" />
        <div className="absolute top-[5%] right-[8%] h-64 w-64 rounded-full bg-lesson-fg/15 blur-[110px]" />
      </div>

      {/* Faint chart silhouette anchoring the hero visually */}
      <ChartDecoration className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 opacity-60" />

      <div className="inline-flex items-center gap-2 rounded-full border border-canvas-line bg-surface px-5 py-2.5 text-[11px] leading-4 font-semibold tracking-[0.16em] text-primary-400 uppercase shadow-sm">
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-75" />
          <span className="relative inline-flex size-1.5 rounded-full bg-primary-500" />
        </span>
        Intelligent learning
      </div>

      <h1 className="mt-10 max-w-[18ch] font-display text-[40px] leading-[1.2] font-bold text-balance text-neutral-900 sm:text-[52px] lg:text-[60px] lg:leading-[74px]">
        Search your learning{" "}
        <span className="bg-linear-to-r from-primary-400 via-primary-500 to-lesson-fg bg-clip-text text-transparent">
          in plain English.
        </span>
      </h1>

      <p className="mt-7 max-w-[46ch] text-[17px] leading-8 text-balance text-neutral-500 sm:text-[18px]">
        Vertex understands what you want to learn and finds the exact lessons across all your
        courses.
      </p>

      <div className="mt-11 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
        <Link
          href="/courses"
          className={buttonClasses({ size: "xl", className: "w-full max-w-xs sm:w-auto" })}
        >
          Explore Courses
          <ArrowRight className="size-5" strokeWidth={2} aria-hidden />
        </Link>

        <Link
          href="/how-it-works"
          className="inline-flex items-center gap-2 text-[15px] font-medium text-neutral-700 underline-offset-4 hover:text-neutral-900 hover:underline"
        >
          <Sparkles className="size-4 text-primary-400" strokeWidth={2} aria-hidden />
          See how it works
        </Link>
      </div>

      <SearchForm
        id="home-search"
        size="lg"
        label="Ask anything about your learning"
        placeholder="Ask anything about your learning..."
        className="mt-11 w-full max-w-225"
      />
    </section>
  );
}