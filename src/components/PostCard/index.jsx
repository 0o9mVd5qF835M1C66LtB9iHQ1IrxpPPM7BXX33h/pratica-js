import Link from "next/link";

export function PostCard({ post }) {
  console.log(post);

  return (
    <>
      <div className="card w-full bg-base-100 border-zinc-700 rounded-md bg-zinc-800">
        <figure>
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="rounded-t-md"
          />
        </figure>
        <div className="px-3 py-6 flex flex-col gap-3 text-white">
          <h3 className="text-2xl font-semibold hover:text-primary-900">
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </h3>
          <p className="text-base font-normal">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <p className="badge badge-outline text-sm lg:text-base">
              {post.tags.replace(/\s+/g, " • ")}
            </p>
            <p className="border-2 border-orange-500 rounded-3xl px-3 py-2 text-sm lg:text-base">
              {post.categories[0].name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
