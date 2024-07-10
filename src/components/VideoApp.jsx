import YouTubePlayer from "react-player/youtube";
import FooterApp from "./FooterApp";

export default function VideoApp() {
  return (
    <>
      <div style={{ background: "#BEC526" }}>
        <div className="container d-flex justify-content-center">
          <div className="row mt-4 mb-4 d-flex justify-content-center align-content-center">
            <YouTubePlayer
              url={"https://www.youtube.com/watch?v=ALTmbR22LrU"}
              controls
              loop
              width={800}
              height={451}
            />
          </div>
        </div>
      </div>
      <FooterApp/>
    </>
  );
}
