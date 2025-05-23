import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import Header from '@/components/Header';
import Image from 'next/image';
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

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div><Header />
    <div className="bg-zinc-900 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className={`${fontProsto.className} text-3xl font-bold text-yellow-600/40 mb-2`}>Solid Odyssey Blog</h1>
        <p className={`${fontExo.className} text-gray-400 mb-8`}>Affordable furniture tips and inspiration</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className={`${fontExo.className} bg-black rounded-lg shadow-2xl overflow-hidden hover:shadow-2xl transition-transform hover:-translate-y-2`}>
              <Link href={`/blog/${post.slug}`}>
                <div className="h-48 relative">
                  <Image
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="p-6">
                  <span className={`${fontExo.className} text-sm text-gray-100`}>{post.date}</span>
                  <h2 className="text-xl text-yellow-600/40 mt-1 mb-2">{post.title}</h2>
                  <p className="text-gray-100 mb-4 text-sm">{post.excerpt}</p>
                  <span className="text-gray-400 text-center bg-yellow-600/40 py-2 px-4">Read more →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}