import BlogPost from "../../../components/Blog/BlogPost";
import { getAllPosts, getPostBySlug } from "../../../data/blog";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  const title = `${post.en.title} | ${post.ar.title}`;
  const description = `${post.en.excerpt} ${post.ar.excerpt}`;

  return {
    title: post.en.title,
    description,
    keywords: [...post.tags.en, ...post.tags.ar, post.category.en, post.category.ar],
    openGraph: {
      title,
      description: post.en.excerpt,
      images: [{ url: post.image }],
      type: "article",
      publishedTime: post.date,
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  return <BlogPost slug={slug} />;
}
