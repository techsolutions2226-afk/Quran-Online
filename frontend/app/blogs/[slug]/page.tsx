import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { blogsData } from "@/lib/data/blogs";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogsData.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogsData.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Blog | Quran Online" };
  }

  return {
    title: `${post.title} | Quran Online`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogsData.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <PageHero
        label={post.category}
        title={post.title}
        description={post.excerpt}
      />

      <section className="pb-16 md:pb-24">
        <Container className="max-w-3xl">
          <div className="card-surface p-7 md:p-10">
            <div className="flex flex-wrap items-center gap-3 text-xs text-text-soft">
              <span>{post.date}</span>
              <span aria-hidden>•</span>
              <span>{post.readTime}</span>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-text-muted md:text-base">
              <p>
                Quran learning becomes more consistent when families choose a
                calm routine, the right course level, and supportive one-on-one
                guidance. This article shares practical ideas you can apply at
                home right away.
              </p>
              <p>
                Start with a clear goal for the next few weeks — finishing a
                Qaida lesson set, improving a Tajweed rule, or completing a
                small memorization target. Small goals build confidence faster
                than broad pressure.
              </p>
              <p>
                If you are unsure where to begin, book a free trial class. A
                short session helps us understand your level and recommend the
                most suitable path for your journey.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/book-trial">Book Free Trial</Button>
              <Button href="/blogs" variant="secondary">
                Back to Blogs
              </Button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-text-muted">
            Looking for another topic?{" "}
            <Link href="/blogs" className="font-semibold text-navy hover:text-teal">
              Browse all articles
            </Link>
          </p>
        </Container>
      </section>
    </main>
  );
}
