import ImageSlider from "../components/Slider";
import { useParams } from "react-router-dom";

function Pilot({ data }) {
  const { id } = useParams();
  const pilot = data.find((item) => item.id === parseInt(id, 10));
  const images = [
    "https://i.pinimg.com/564x/1e/63/cd/1e63cd4b704c353b8d014f8660a31f65.jpg",
    "https://i.pinimg.com/originals/11/a8/c1/11a8c14bb717b86f7a0841111b1d8450.gif",
    "https://i.pinimg.com/originals/bf/4e/5e/bf4e5e73a2856f001677c3761392e245.jpg",
    "https://i.pinimg.com/originals/90/66/30/906630ecbfa6e69128d5ea98892955ee.gif",
  ];

  if (!pilot) {
    return <div>Pilot not found!</div>;
  }

  return (
    <div className="h-screen bg-slate-900 text-slate-800">
      <h1 className="text-left text-slate-100 underline p-2 ml-16 text-4xl font-semibold ">
        {pilot.title}
      </h1>
      <div className="backgroundImg absolute -bottom-10 left-10">
        <img src={pilot.backgroundImage} alt="" height={350} width={350} />
      </div>
      <div className="textContent w-[60%] float-right p-2 grid gap-1 grid-cols-2 grid-rows-2 h-[80%]">
        <div className="container flex w-full max-h-full row-span-2 justify-between">
          <div className="text bg-slate-50 p-2  overflow-auto rounded">
            <h4 className="text-center text-xl font-semibold m-2">About</h4>
            <span>{pilot.description}
            </span>
          </div>
        </div>
          <div className="gallery relative flex items-center justify-center w-full h-full">
            <ImageSlider images={images} interval={4000} />
          </div>
       
        <div className=" shadow-md rounded bottom-2 bg-white p-4 w-full flex justify-around">
          <div>
          <p className="font-semibold">Name: </p>
          <p className="">{pilot.title}</p>
          <p className="font-semibold">Race: </p>
          <p className="">{pilot.race}</p>
          <p className="font-semibold">Weight: </p>
          <p className="">{pilot.weight}</p>
          <p className="font-semibold">Blood Type: </p>
          <p className="">{pilot.blood}</p>
          </div>
          <div> 
          <p className="font-semibold">Rank: </p>
          <p className="">{pilot.rank}</p>
          <p className="font-semibold">Age: </p>
          <p className="">{pilot.age}</p>
          <p className="font-semibold">Affiliation: </p>
          <p className="">{pilot.affiliation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pilot;
