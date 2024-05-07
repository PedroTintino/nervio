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
    <div className="max-h-screen min-h-screen bg-slate-100 text-slate-800 font-custom">
      <h1 className="text-center underline p-2 text-4xl font-semibold ">
        {pilot.title}
      </h1>
      <div className="backgroundImg absolute bottom-0 left-0">
        <img src={pilot.backgroundImage} alt="" height={350} width={350} />
      </div>
      <div className="textContent w-[60%] float-right p-2 flex flex-col items-center justify-around h-full">
        <div className="container flex justify-between">
          <div className="text bg-slate-50 p-2 w-[350px] overflow-auto h-[250px] rounded">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            minus ad libero tenetur suscipit. Illum tenetur quaerat eaque
            consequatur Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos minus ad libero tenetur suscipit. Illum tenetur quaerat
            eaque consequatur Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dignissimos minus ad libero tenetur suscipit. Illum tenetur
            quaerat eaque consequaturLorem ipsum dolor sit amet consectetur
            adipisicing elit. Dignissimos minus ad libero tenetur suscipit.
            Illum tenetur quaerat eaque consequaturLorem ipsum dolor sit amet
            consectetur adipisicing elit. Dignissimos minus ad libero tenetur
            suscipit. Illum tenetur quaerat eaque consequaturLorem ipsum dolor
            sit amet consectetur adipisicing elit. Dignissimos minus ad libero
            tenetur suscipit. Illum tenetur quaerat eaque consequaturLorem ipsum
            dolor sit amet consectetur adipisicing elit. Dignissimos minus ad
            libero tenetur suscipit. Illum tenetur quaerat eaque consequatur
            magnam ipsa a velit esse. Possimus veniam inventore aut.
            Dignissimos, a.
          </div>
          <div className="gallery relative w-[420px] h-[220px]">
            <ImageSlider images={images} interval={4000} />
          </div>
        </div>
        <div className="table border-t-red-50 rounded bottom-2 bg-white p-4 w-[300px]">
          <p className="font-semibold">Name: </p>
          <p className="">{pilot.title}</p>
          <p className="font-semibold">Race: </p>
          <p className="">{pilot.race}</p>
          <p className="font-semibold">Affiliation: </p>
          <p className="">{pilot.affiliation}</p>
        </div>
      </div>
    </div>
  );
}

export default Pilot;
