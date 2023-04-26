export function CardProject({ url, title, description, tags, difficulty }) {
  return (
    <div className="card w-full bg-base-100 border-zinc-700 rounded-md bg-zinc-800">
      <figure>
        <img src={url} className="rounded-t-md" alt={title} />
      </figure>
      <div className="px-3 py-6 flex flex-col gap-3 text-white">
        <p className="text-2xl font-semibold">{title}</p>
        <p className="text-base font-normal">{description}</p>
        <div className="flex items-center justify-between">
          <p className="badge badge-outline text-sm lg:text-base">{tags}</p>
          <p className="border-2 border-orange-500 rounded-3xl px-3 py-2 text-sm lg:text-base">
            {difficulty}
          </p>
        </div>
      </div>
    </div>
  )
}
