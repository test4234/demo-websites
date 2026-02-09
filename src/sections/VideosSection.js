import VideoEmbed from "./VideoEmbed";
import videos from "../data/videos";
import siteConfig from "../data/siteConfig";

export default function VideosSection() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold">
        Videos from {siteConfig.companyName}
      </h2>

      <div className="grid lg:grid-cols-2 gap-8 mt-10">
        {videos.slice(0, 4).map((video) => (
          <VideoEmbed
            key={video.id}
            id={video.id}
            title={video.title}
          />
        ))}
      </div>
    </section>
  );
}
