import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { IconArrowRight } from "@/components/shared/Icons";
import { Container } from "@/components/ui/Container";
import { blogsData } from "@/lib/data/blogs";

export const metadata: Metadata = {
  title: "Blogs | Quran Online",
  description:
    "Articles and tips on Quran learning, Tajweed, Hifz, and studying online at home.",
};

export default function BlogsPage() {
  return (
    <main>
      <PageHero
        label="Blogs"
        title={
          <>
            Insights for your{" "}
            <span className="text-teal">Quran journey</span>
          </>
        }
        description="Practical articles to help families and students learn with clarity, consistency, and calm."
      />

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogsData.map((post) => (
              <article
                key={post.slug}
                className="card-surface flex h-full flex-col p-6 transition-shadow duration-200 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-aqua-soft px-3 py-1 text-xs font-semibold text-teal">
                    {post.category}
                  </span>
                  <span className="text-xs text-text-soft">{post.readTime}</span>
                </div>

                <h2 className="mt-4 font-display text-xl font-semibold text-navy">
                  {post.title}
                </h2>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-text-muted">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-border-soft pt-4">
                  <span className="text-xs text-text-soft">{post.date}</span>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-teal"
                  >
                    Read more
                    <IconArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
