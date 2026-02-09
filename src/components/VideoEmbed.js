/**
 * VideoEmbed
 * Medical/Hospital YouTube embed using modern medical design
 * ✅ Fixed: siteConfig import added (prevents prerender crash)
 */

import siteConfig from "../data/siteConfig";

export default function VideoEmbed({ id, title, description }) {
  const src = `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&iv_load_policy=3&color=white`;

  return (
    <div className="group relative w-full">
      {/* Medical Decorative Elements */}
      <div
        className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-sky-300/50 rounded-tl-lg"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-teal-300/50 rounded-br-lg"
        aria-hidden="true"
      />

      {/* Video Container */}
      <div
        className="
          relative pb-[56.25%] h-0 overflow-hidden rounded-2xl
          bg-gradient-to-br from-sky-50 to-teal-50
          shadow-xl
          border border-gray-100
          transition-all duration-500 ease-out
          group-hover:shadow-2xl group-hover:border-sky-200
        "
      >
        {/* YouTube Iframe */}
        <iframe
          title={title || "Hospital Video"}
          src={src}
          loading="lazy"
          className="absolute inset-0 w-full h-full z-10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          tabIndex={0}
        />

        {/* Overlay Play Icon */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div className="relative">
            {/* Pulse Animation */}
            <div className="absolute inset-0 animate-ping rounded-full bg-sky-400/30 w-20 h-20"></div>

            {/* Play Button */}
            <div
              className="
                relative w-16 h-16 rounded-full
                bg-gradient-to-r from-sky-600 to-teal-600
                flex items-center justify-center
                shadow-2xl
                transition-all duration-500
                group-hover:scale-110
                group-hover:from-sky-700
                group-hover:to-teal-700
              "
            >
              <svg
                className="w-7 h-7 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Loading Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-teal-100 flex items-center justify-center z-0">
          <div className="text-center p-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sky-200 to-teal-200 animate-pulse mx-auto mb-4"></div>
            <div className="text-sky-600 font-medium">
              Loading Hospital Video...
            </div>
          </div>
        </div>
      </div>

      {/* Video Information */}
      {(title || description) && (
        <div className="mt-6 p-6 bg-gradient-to-r from-sky-50 to-cyan-50 rounded-xl border border-sky-100">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-100 to-teal-100 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-6 h-6 text-sky-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>

            {/* Text */}
            <div className="flex-1">
              {title && (
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {title}
                </h4>
              )}

              {description && (
                <p className="text-gray-600 leading-relaxed">{description}</p>
              )}

              {/* Tags */}
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3"
                    />
                  </svg>
                  Medical Information
                </span>

                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  Trusted Content
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Medical Disclaimer */}
      <div className="mt-4">
        <div className="flex items-start gap-3 text-sm text-gray-500">
          <svg
            className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.771-.833-2.542 0L4.346 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>

          <p>
            <strong>Medical Disclaimer:</strong> Video content is for
            informational purposes only. Consult our doctors for personalized
            medical advice. In case of emergency, call{" "}
            <span className="font-semibold text-gray-700">
              {siteConfig.phone}
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
