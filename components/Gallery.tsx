"use client";

import { useState } from "react";
import { site } from "../data/site";

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  return <><div className="gallery">{site.gallery.map((item, index) => <button key={item.src} className={`gallery-item item-${index + 1}`} onClick={() => setSelected(index)}><img src={item.src} alt={item.alt} loading="lazy" /><span>{item.caption} <b>↗</b></span></button>)}</div>{selected !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Expanded gallery image" onClick={() => setSelected(null)}><button className="lightbox-close" aria-label="Close image" onClick={() => setSelected(null)}>×</button><img src={site.gallery[selected].src} alt={site.gallery[selected].alt} onClick={(event) => event.stopPropagation()} /><p>{site.gallery[selected].caption}</p></div>}</>;
}
