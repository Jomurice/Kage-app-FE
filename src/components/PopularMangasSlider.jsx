import { useRef } from 'react';
import MangaCardVertical from '@/layout/MangaCardVertical';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PopularMangasSlider = () => {
    const scrollRef = useRef(null);

    
    const popularMangas = [
        {
            id: 1,
            title: "Echoes of the Reverse Planet",
            cover: "https://shiro.senkuro.net/U9j9TubKqmc9EyWbCbAsTCCnI3Yji3JOeCnqeHap4eg/rs:fit:483:690/aHR0cHM6Ly9taXJhaS5zZW5rdXJvLm5ldC9tYW5nYS8xMTI3MTg2ODIwNjQ0Mzg4MTIvY292ZXJzLzdkNTc1NjkyZGFkMzA3MThhZDI0OGVhMjFiZjE4ZWU0NWIwMTA0ZjhfMTEyNzE4Nzk5NTg4ODM2ODkyLmpwZWc.jpeg",
            type: "Manhwa",
            rating: "9.8"
        },
        {
            id: 2,
            title: "Demon Slayer",
            cover: "https://shiro.senkuro.net/demo-cover-2.jpg",
            type: "Manga",
            rating: "9.7"
        },
        {
            id: 3,
            title: "One Piece",
            cover: "https://shiro.senkuro.net/demo-cover-3.jpg",
            type: "Manga",
            rating: "9.9"
        },
        {
            id: 4,
            title: "Attack on Titan",
            cover: "https://shiro.senkuro.net/demo-cover-4.jpg",
            type: "Manga",
            rating: "9.6"
        },
        {
            id: 5,
            title: "My Hero Academia",
            cover: "https://shiro.senkuro.net/demo-cover-5.jpg",
            type: "Manga",
            rating: "9.5"
        },
        {
            id: 6,
            title: "Naruto",
            cover: "https://shiro.senkuro.net/demo-cover-6.jpg",
            type: "Manga",
            rating: "9.4"
        },
        {
            id: 7,
            title: "Величайший в истории младший сын маркиза",
            cover: "https://shiro.senkuro.net/demo-cover-7.jpg",
            type: "Manhwa",
            rating: "9.3"
        },
        {
            id: 8,
            title: "Death Note",
            cover: "https://shiro.senkuro.net/demo-cover-8.jpg",
            type: "Manga",
            rating: "9.8"
        }
    ];

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-white">Популярные манги</h2>

                <div className="relative">
                    {/* Кнопка влево */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Контейнер со скроллом */}
                    <div
                        ref={scrollRef}
                        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {popularMangas.map((manga) => (
                            <div key={manga.id} className="flex-shrink-0">
                                <MangaCardVertical manga={manga} />
                            </div>
                        ))}
                    </div>

                    {/* Кнопка вправо */}
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default PopularMangasSlider;
