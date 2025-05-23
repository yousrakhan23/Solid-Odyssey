import React from "react";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Image from "next/image";
import { Prosto_One } from "next/font/google";
import { Exo_2 } from "next/font/google";

const fontProsto = Prosto_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rega-quay",
  style: "normal",
  display: "swap",
});

const fontExo = Exo_2({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-exo",
  style: "normal",
  display: "swap",
});

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <div className="bg-zinc-900 min-h-screen">
      <Header />
      <article className="max-w-3xl mx-auto px-4 py-16">
        <header className="mb-12">
          <span className="text-gray-100 text-sm">{post.date}</span>
          <h1
            className={`${fontProsto.className} text-xl md:text-xl text-yellow-600/40 mt-2 mb-4`}
          >
            {post.title}
          </h1>
          <div className="h-96 bg-zinc-900 rounded-lg overflow-hidden">
            <Image
              width={1000}
              height={1000}
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <div
          className={`${fontExo.className} prose prose-gray max-w-none text-gray-300`}
        >
          {post.content}
        </div>

        <section className="mt-16 border-t border-yellow-600/40 pt-8">
          <h2
            className={`${fontProsto.className} text-xl text-gray-400 font-semibold mb-4`}
          >
            More from our blog
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {post.relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group"
              >
                <div className="h-40 rounded-lg overflow-hidden mb-2">
                  <Image
                    width={1000}
                    height={1000}
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3
                  className={`${fontProsto.className} text-lg text-yellow-600/40 transition-colors`}
                >
                  {related.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
