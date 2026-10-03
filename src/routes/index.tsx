import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

const TITLE = "Advocate Rajeshkumar Yadav | Bombay High Court, Mumbai";
const DESCRIPTION =
  "Adv. Rajeshkumar L. Yadav, Advocate and Notary in Mumbai, practicing before the Bombay High Court and Mumbai courts.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LadyJusticeExperience,
});

function LadyJusticeExperience() {
  const statueRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    document.body.classList.add("justice-page-active");

    let frame = 0;
    let currentProgress = 0;
    let targetProgress = 0;

    const readScroll = () => {
      const rotationDistance = Math.max(window.innerHeight * 2, 1);
      targetProgress = Math.min(Math.max(window.scrollY / rotationDistance, 0), 1);
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const render = () => {
      currentProgress += (targetProgress - currentProgress) * 0.09;

      const statue = statueRef.current;
      if (statue) {
        const rotation = currentProgress * 360;
        const scale = 1 + currentProgress * 0.15;
        const translateY = currentProgress * -40;
        statue.style.transform = `translate3d(0, ${translateY}px, 0) rotateY(${rotation}deg) scale(${scale})`;
      }

      if (Math.abs(targetProgress - currentProgress) > 0.0001) {
        frame = window.requestAnimationFrame(render);
      } else {
        currentProgress = targetProgress;
        frame = 0;
      }
    };

    readScroll();
    window.addEventListener("scroll", readScroll, { passive: true });
    window.addEventListener("resize", readScroll);

    return () => {
      document.body.classList.remove("justice-page-active");
      window.removeEventListener("scroll", readScroll);
      window.removeEventListener("resize", readScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main className="justice-scroll" aria-label="Lady Justice">
      <div className="justice-stage" aria-hidden="true">
        <div className="justice-float">
          <img
            ref={statueRef}
            src="/images/lady-justice.png"
            alt=""
            width={1024}
            height={1536}
            loading="eager"
            decoding="async"
            className="justice-statue"
          />
        </div>
        <h1 className="justice-name">Adv. Rajeshkumar L. Yadav</h1>
      </div>
    </main>
  );
}