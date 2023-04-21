export function CardProject() {
  return (
    <div className="card w-full bg-base-100 border-zinc-700 rounded-md bg-zinc-900">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-t-md"
        />
      </figure>
      <div className="px-3 py-6 flex flex-col gap-3 text-white">
        <p className="text-3xl font-semibold">Nome do projeto</p>
        <p className="text-base font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown.
        </p>
        <div className="flex items-center justify-between">
          <p className="badge badge-outline text-sm lg:text-base">
            HTML • CSS • JavaScript
          </p>
          <p className="border-2 border-orange-500 rounded-3xl px-3 py-2 text-sm lg:text-base">
            Intermediário
          </p>
        </div>
      </div>
    </div>
  )
}
