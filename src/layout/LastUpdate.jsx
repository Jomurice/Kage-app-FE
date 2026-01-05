import MangaCardHorizontal from "./MangaCardHorizontal";


const LastUpdate = () => {
    return (
        <>
        <div><h1 className="font-bold text-2xl p-2">Last Update</h1></div>
            <div
                className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 gap-1.5
        ">
                <MangaCardHorizontal />
                <MangaCardHorizontal />
                <MangaCardHorizontal />
                <MangaCardHorizontal />
            </div></>

    );
}

export default LastUpdate;