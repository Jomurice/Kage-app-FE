const MangaCardHorizontal = ({ manga }) => {
    return (
        <article className="border flex max-w-md rounded-xl bg-gray-900 border-gray-700">
            <a className="w-28 sm:w-32 md:w-36 lg:w-40 p-0.5 block relative" href="">
                <img
                    src={manga?.cover || "https://shiro.senkuro.net/default-cover.jpg"}
                    alt={manga?.title || ""}
                    className="rounded-xl w-full h-full object-cover "
                />
                <span className="absolute bottom-3 left-1 px-2 rounded-xl bg-zinc-800 text-white text-xs font-medium ">
                    {manga?.type || "Manga"}
                </span>
            </a>

            <div className="flex flex-col pl-3 flex-1 px-4 text-white">
                <a href="" className="text-sm pt-2 hover:text-blue-400 transition-colors line-clamp-2">
                    {manga?.title || "Название манги"}
                </a>

                <div className="mt-auto text-sm ">
                    <div>chapter {manga?.chapter || "N/A"}</div>
                    <div className="text-gray-500 pt-0.5">{manga?.timeAgo || "Недавно"}</div>
                </div>
            </div>
        </article>
    );
};

export default MangaCardHorizontal;
