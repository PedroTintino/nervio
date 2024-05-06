import { Button } from "@mui/material";
import ImageSlider from "../components/Slider";

function Intro() {
    const images = [
        "https://i.pinimg.com/originals/68/b5/ce/68b5cecc823ee8386fad0f4c2d1e66ce.png",
        "https://images5.alphacoders.com/135/1353199.png",
        "https://i.pinimg.com/originals/d8/cf/d4/d8cfd44dab71e5b9c1f438c5c6c7dd2c.jpg"
    ]
  return (
    <div className="bg-slate-950 text-slate-50 p-4 flex gap-6 items-center justify-center w-full h-screen">
      <div className="textIntro max-w-[450px]">
        <h2 className="text-5xl text-left font-semibold mb-2">Nerv<span className="text-gray-600">.io</span></h2>
        <p className="text-xl font-medium text-center">
          Welcome to the ultimate guide to Neon Genesis Evangelion! Dive into
          the captivating world of this iconic anime series that has captured
          the hearts and minds of viewers worldwide. Explore the complex
          characters, thought-provoking themes, and intense mecha battles that
          define Evangelion's unique narrative.
        </p>
        <div className="flex justify-center mt-3">
            <Button color="secondary" variant="contained">Draw Info</Button>
        </div>
      </div>
      <div className="carouselElement w-[600px] ">
        <ImageSlider images={images} interval={4000} />
      </div>
    </div>
  );
}

export default Intro;
