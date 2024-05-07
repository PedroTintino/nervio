import Card from "../components/Card";
import data from '../api/pilots_data.json';
import { Link } from "react-router-dom";

function Pilots(){
    return(
        <div className="bg-slate-950 h-full font-custom">
            <h1 className="text-3xl text-slate-50 text-center p-6 font-semibold">Pilots</h1>
        <div className="grid grid-cols-2 w-full gap-2 p-4"> 
           {data.map((item) => (
            <Link key={item.id} to={`/pilot/${item.id}`}>
            <Card
            title={item.title}
            race={item.race}
            affiliation={item.affiliation}
            imageUrl={item.imageUrl}
            />
            </Link>
           ))}
        </div>
        </div>
    )
}
export default Pilots;