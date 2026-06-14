"use client";

import { useEffect, useRef, useState } from "react";
import { mediaConfig } from "@/data/media";
import { useI18n } from "@/i18n/useI18n";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) return "00:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

const nativeVideoControllerScript = `
(() => {
  const init = () => {
    const section = document.getElementById("about");
    if (!section || section.dataset.videoNativeInit === "true") return;
    const video = section.querySelector("video");
    if (!video) return;

    section.dataset.videoNativeInit = "true";

    const overlays = () => Array.from(section.querySelectorAll("[data-video-overlay]"));
    const hide = () => {
      section.setAttribute("data-video-started", "true");
      overlays().forEach((element) => {
        element.style.display = "none";
        element.style.opacity = "0";
        element.style.visibility = "hidden";
      });
    };
    const show = () => {
      section.setAttribute("data-video-started", "false");
      overlays().forEach((element) => {
        element.style.display = "";
        element.style.opacity = "";
        element.style.visibility = "";
      });
    };
    const play = async (event) => {
      if (event) event.preventDefault();
      hide();
      try {
        await video.play();
      } catch {
        try {
          video.muted = true;
          await video.play();
        } catch {
          hide();
        }
      }
    };

    section.addEventListener("click", (event) => {
      const target = event.target;
      if (target && target.closest && target.closest("[data-video-play-layer]")) {
        void play(event);
      }
    });

    ["play", "playing", "timeupdate", "seeking", "seeked"].forEach((eventName) => {
      video.addEventListener(eventName, () => {
        if (!video.ended && (!video.paused || video.currentTime > 0)) hide();
      });
    });
    video.addEventListener("pause", () => {
      if (video.currentTime > 0 && !video.ended) hide();
    });
    video.addEventListener("ended", show);

    if (!video.paused || video.currentTime > 0) hide();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
`;

export function VideoShowcase() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayDismissedRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const progress = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  const hideOverlay = () => {
    overlayDismissedRef.current = true;
    sectionRef.current?.setAttribute("data-video-started", "true");
    setHasStarted(true);
    setShowPlayButton(false);
    sectionRef.current?.querySelectorAll<HTMLElement>("[data-video-overlay]").forEach((element) => {
      element.style.display = "none";
    });
  };

  const showOverlay = () => {
    overlayDismissedRef.current = false;
    sectionRef.current?.setAttribute("data-video-started", "false");
    setHasStarted(false);
    setShowPlayButton(true);
    sectionRef.current?.querySelectorAll<HTMLElement>("[data-video-overlay]").forEach((element) => {
      element.style.display = "";
    });
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncPlaybackState = () => {
      const isPlaying = !video.paused && !video.ended;
      const hasPlaybackStarted = video.currentTime > 0 && !video.ended;
      const shouldHideOverlay = overlayDismissedRef.current || isPlaying || hasPlaybackStarted;
      sectionRef.current?.setAttribute("data-video-started", shouldHideOverlay ? "true" : "false");
      setPlaying(isPlaying);
      setHasStarted(shouldHideOverlay);
      setShowPlayButton(!shouldHideOverlay);
      if (shouldHideOverlay) {
        hideOverlay();
      }
    };

    const syncTimer = window.setInterval(syncPlaybackState, 250);
    video.addEventListener("play", syncPlaybackState);
    video.addEventListener("playing", syncPlaybackState);
    video.addEventListener("timeupdate", syncPlaybackState);
    video.addEventListener("pause", syncPlaybackState);
    video.addEventListener("ended", syncPlaybackState);

    return () => {
      window.clearInterval(syncTimer);
      video.removeEventListener("play", syncPlaybackState);
      video.removeEventListener("playing", syncPlaybackState);
      video.removeEventListener("timeupdate", syncPlaybackState);
      video.removeEventListener("pause", syncPlaybackState);
      video.removeEventListener("ended", syncPlaybackState);
    };
  }, []);

  const startVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    hideOverlay();
    try {
      await video.play();
    } catch {
      try {
        video.muted = true;
        await video.play();
      } catch {
        // Keep the overlay hidden; the native controls remain available.
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-line relative min-h-screen overflow-hidden bg-ink text-white"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        controls
        playsInline
        preload="auto"
        poster={mediaConfig.introVideo.poster}
        onClick={(event) => {
          const video = event.currentTarget;
          hideOverlay();
          if (video.paused) {
            void video.play();
          }
        }}
        onPlay={() => {
          hideOverlay();
          setPlaying(true);
        }}
        onPause={(event) => {
          const video = event.currentTarget;
          setPlaying(false);
          if (video.currentTime > 0 && !video.ended) {
            hideOverlay();
          } else {
            setHasStarted(false);
            setShowPlayButton(true);
          }
        }}
        onEnded={() => {
          setPlaying(false);
          showOverlay();
        }}
        onTimeUpdate={(event) => {
          const video = event.currentTarget;
          setCurrentTime(video.currentTime);
          if (video.currentTime > 0 && !video.ended) {
            hideOverlay();
          }
        }}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
      >
        {mediaConfig.introVideo.src ? <source src={mediaConfig.introVideo.src} type="video/mp4" /> : null}
      </video>

      <div data-video-overlay className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.54)_0%,rgba(10,10,10,0.08)_44%,rgba(10,10,10,0.36)_100%)]" />
      <div data-video-overlay className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/62 to-transparent" />

      {!hasStarted ? (
        <button
          data-video-overlay
          data-video-play-layer
          type="button"
          aria-label="Play Xiangxi Fu video"
          className="absolute inset-x-0 top-0 z-20 h-[calc(100%-72px)] cursor-pointer bg-transparent"
          onClick={() => void startVideo()}
        />
      ) : null}

      {showPlayButton && !playing && !hasStarted ? (
        <div
          data-video-overlay
          className="pointer-events-none absolute left-1/2 top-1/2 z-30 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/15 backdrop-blur-md md:h-32 md:w-32"
          aria-hidden="true"
        >
          <span className="ml-1 block h-0 w-0 border-y-[17px] border-l-[28px] border-y-transparent border-l-current md:border-y-[22px] md:border-l-[36px]" />
        </div>
      ) : null}

      <div className="pointer-events-none relative z-10 flex min-h-screen flex-col justify-between p-6 md:p-10 lg:p-12">
        {!hasStarted ? (
          <div data-video-overlay className="max-w-4xl">
            <p className="text-xs font-black uppercase text-cinnabar">{t("about.eyebrow")}</p>
            <h2 className="museum-title mt-5 text-5xl font-black leading-none md:text-7xl lg:text-8xl">{t("about.title")}</h2>
            <p className="mt-7 max-w-3xl text-base font-bold leading-8 text-white/86 md:text-lg">{t("about.copy")}</p>
          </div>
        ) : (
          <div />
        )}

        {!hasStarted ? (
          <div data-video-overlay className="grid gap-5 md:grid-cols-[1fr_440px] md:items-end">
            <p className="max-w-3xl text-sm font-bold leading-7 text-white/82">{t("about.caption")}</p>
            <div className="border-t border-white/55 pt-4">
              <div className="mb-3 flex items-center justify-between text-[11px] font-black uppercase text-white/74">
                <span>Xiangxi Fu Film</span>
                <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
              </div>
              <div className="h-1 bg-white/24">
                <div className="h-full bg-cinnabar" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
      <script dangerouslySetInnerHTML={{ __html: nativeVideoControllerScript }} />
    </section>
  );
}
