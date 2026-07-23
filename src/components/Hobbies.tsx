import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { otherInterests, photos, type Photo } from "../data/hobbies";
import SpotifyCard from "./SpotifyCard";

function PhotoGrid() {
  const [selected, setSelected] = useState<Photo | null>(null);

  if (photos.length === 0) {
    return (
      <p className="photo-empty">
        A few favorite frames are on the way.
      </p>
    );
  }

  return (
    <Dialog.Root
      open={selected !== null}
      onOpenChange={(open) => !open && setSelected(null)}
    >
      <div className="photo-grid">
        {photos.map((photo) => (
          <button
            key={photo.src}
            onClick={() => setSelected(photo)}
            style={{ aspectRatio: photo.aspectRatio }}
            aria-label={`View ${photo.alt}`}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </button>
        ))}
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="lightbox-overlay" />
        <Dialog.Content className="lightbox-content" aria-describedby={undefined}>
          <Dialog.Title style={{ position: "absolute", opacity: 0 }}>
            {selected?.alt ?? "Photo"}
          </Dialog.Title>
          {selected && <img src={selected.src} alt={selected.alt} />}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default function Hobbies() {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section
      className={`section reveal${inView ? " in-view" : ""}`}
      id="hobbies"
      ref={ref}
    >
      <div className="container">
        <div className="section-kicker">Hobbies</div>
        <h2 className="section-title">Off the clock</h2>
        <div className="hobby-grid">
          <div className="hobby-card">
            <h3>Listening now</h3>
            <SpotifyCard />
          </div>
          <div className="hobby-card">
            <h3>Photography</h3>
            <PhotoGrid />
          </div>
          <div className="hobby-card">
            <h3>Also into</h3>
            <div className="interest-tags">
              {otherInterests.map((interest) => (
                <span key={interest}>{interest}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
