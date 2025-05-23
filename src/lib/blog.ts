interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: React.ReactNode;
  relatedPosts: {
    slug: string;
    title: string;
    image: string;
  }[];
}

export async function getAllPosts(): Promise<BlogPost[]> {
  return [
    {
      slug: "budget-furniture-hacks",
      title: "5 Budget-Friendly Furniture Hacks That Look Expensive",
      date: "May 15, 2025",
      excerpt:
        "Transform affordable pieces into stylish showstoppers with these easy tricks.",
      image: "/images/hacks.jpg",
      content:
        "At Solid Odyssey, we believe great style shouldn't break the bank. That's why we've curated these five simple yet transformative hacks to elevate your affordable furniture. Start with removable wallpaper - a game-changer for plain dressers. Our customers love pairing our basic PKR 8,990 dresser with geometric-patterned wallpaper (PKR 1,200/roll) for a custom look. For tables, try adding hairpin legs (available at our store for PKR 2,500/set) to instantly create mid-century charm. Layer rugs (we recommend our reversible jute options at PKR 6,999) to add texture and define spaces. Mixing dining chairs creates eclectic charm - pair two of our PKR 4,499 armchairs with three PKR 3,299 side chairs for a designer look. Finally, our laminate paint kits (PKR 1,899) let you refresh tired surfaces without replacement. Remember: good design isn't about the price tag, but how creatively you use what you have!",
      relatedPosts: [
        {
          slug: "small-space-solutions",
          title: "Small Space Solutions",
          image: "/images/small-space.jpg",
        },
      ],
    },
    {
      slug: "small-space-solutions",
      title: "Small Space Solutions: Furniture That Does Double Duty",
      date: "April 28, 2025",
      excerpt:
        "Maximize your compact living space with these multifunctional furniture pieces.",
      image: "/images/small-space.jpg",
      content:
        "Another budget-friendly secret? Textiles are your best friend! Swap out dull cushions with our vibrant, machine-washable covers (starting at just PKR 1,999) for an instant refresh. Drape one of our soft, oversized throws (PKR 3,499) over a sofa to hide wear-and-tear while adding cozy texture. For dining chairs, consider reupholstering seats with our stain-resistant fabric (PKR 899/meter) – no sewing skills needed! Simply staple the new fabric over the existing padding. Pro tip: Visit our store’s ‘Last Chance’ corner for discounted fabric remnants perfect for small projects. These tiny changes make a huge visual impact, proving luxury isn’t about spending more—it’s about styling smart.",
      relatedPosts: [
        {
          slug: "budget-furniture-hacks",
          title: "Budget Furniture Hacks",
          image: "/images/hacks.jpg",
        },
      ],
    },
  ];
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}
