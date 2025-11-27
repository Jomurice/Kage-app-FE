
const MangaCard = () => {

    const title = "Величайший в истории младший сын маркиза";

    return (
        <article className="main-card w-44 border">
            <a href="" className="relative block">
                <div className="img">
                    <img className="rounded-xl " src="https://shiro.senkuro.net/U9j9TubKqmc9EyWbCbAsTCCnI3Yji3JOeCnqeHap4eg/rs:fit:483:690/aHR0cHM6Ly9taXJhaS5zZW5rdXJvLm5ldC9tYW5nYS8xMTI3MTg2ODIwNjQ0Mzg4MTIvY292ZXJzLzdkNTc1NjkyZGFkMzA3MThhZDI0OGVhMjFiZjE4ZWU0NWIwMTA0ZjhfMTEyNzE4Nzk5NTg4ODM2ODkyLmpwZWc.jpeg" alt="" />
                </div>
                <div className="bottom-status flex justify-around absolute bottom-4 left-2 right-2 text-white">
                    <span className="rounded-xl bg-zinc-800 px-2 py-0.5 min-w-[70px] 
                    text-center text-xs font-medium">Manga</span>
                    <span className="rounded-xl bg-zinc-800 px-2 py-0.5 min-w-[70px] 
                    text-center text-xs font-medium text-green-600 flex justify-center ">
                        <svg xmlns="
                        http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /><path d="M20 2v4" /><path d="M22 4h-4" /><circle cx="4" cy="20" r="2" /></svg>
                        9.45</span>
                </div>

            </a>
            <div >
                <p className="text-sm font-medium px-1">{(title.length > 33) ? title.substring(0, 33) + '...' : title}</p>
            </div>
        </article>
    );
}

export default MangaCard;