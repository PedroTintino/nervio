function Card({ imageUrl, title, race, affiliation, link }){
    return(
        <div className="bg-slate-200 h-32 w-full flex rounded font-custom cursor-pointer text-gray-950 transition-all ease-in hover:bg-slate-300">
            <div className="image h-32 w-32 mr-4">
                <img src={imageUrl} width={'100%'} height={'100%'}/>
            </div>
            <div className="text flex flex-col gap-2 font-semibold">
            <h4 className="text-3xl">Name: {title}</h4>
            <p>Race: {race}</p>
            <p>Affiliation: {affiliation}</p>
            </div>
        </div>
    )
}
export default Card;