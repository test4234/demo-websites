import videos from "../../data/videos";
import { buildMeta } from "../../lib/seo";
import VideoEmbed from "../../components/VideoEmbed";
import siteConfig from "../../data/siteConfig";
import Link from "next/link";

export async function generateMetadata() {
  const meta = buildMeta({
    title: `Health Videos & Hospital Updates | ${siteConfig.companyName}`,
    description: `Watch health awareness videos, doctor guidance, and service updates from ${siteConfig.companyName} in ${siteConfig.defaultCity}.`,
    path: "/videos",
  });

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
  };
}

export default function Videos() {
  const featuredVideo = videos[0];
  const galleryVideos = videos.slice(1);

  return (
    <div className="min-h-screen bg-secondary">
      {/* Page Header */}
      <header className="pt-20 pb-16 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Hospital Videos & Medical Awareness
          </h1>

          <p className="mt-6 text-text-muted">
            Explore videos from{" "}
            <span className="font-semibold">
              {siteConfig.companyName}
            </span>
            .
          </p>
        </div>
      </header>

      {/* Videos */}
      <main className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {featuredVideo && (
            <section className="mb-20">
              <VideoEmbed
                id={featuredVideo.id}
                title={featuredVideo.title}
              />
            </section>
          )}

          <section>
            <div className="grid sm:grid-cols-2 gap-10">
              {galleryVideos.map((video) => (
                <VideoEmbed
                  key={video.id}
                  id={video.id}
                  title={video.title}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* CTA */}
      <section className="border-t border-border py-20 text-center">
        <Link
          href="/contact"
          className="px-10 py-4 bg-accent rounded-xl"
        >
          Contact Hospital
        </Link>
      </section>
    </div>
  );
}
