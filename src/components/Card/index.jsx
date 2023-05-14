import Link from "next/link";

export function CardProject({
  url,
  title,
  description,
  tags,
  difficulty,
  slug,
}) {
  return (
    <div className="card w-full bg-base-100 border-zinc-700 rounded-md bg-zinc-800">
      <figure>
        <img src={url} className="rounded-t-md" alt={title} />
      </figure>
      <div className="px-3 py-6 flex flex-col gap-3 text-white">
        <h3 className="text-2xl font-semibold hover:text-primary-900">
          <Link href={`/post/${slug}`}>{title}</Link>
        </h3>
        <p className="text-base font-normal">{description}</p>
        <div className="flex items-center justify-between">
          <p className="badge badge-outline text-sm ">{tags}</p>
          <p className="border-2 py-2 px-5 rounded-full border-orange-500 text-sm">
            {difficulty}
          </p>
        </div>
      </div>
    </div>
  );
}
