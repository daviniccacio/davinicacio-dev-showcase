import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";

export type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  media: MediaItem[];
}

export function MediaModal({ isOpen, onClose, title, media }: MediaModalProps) {
  const [index, setIndex] = useState(0);

  const hasMedia = media.length > 0;
  const current = hasMedia ? media[index] : null;

  const goPrev = () => setIndex((i) => (i === 0 ? media.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === media.length - 1 ? 0 : i + 1));

  // Sempre volta pro primeiro item quando um novo projeto é aberto
  useEffect(() => {
    if (isOpen) setIndex(0);
  }, [isOpen]);

  // Fecha com Esc, navega com as setas do teclado
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, index, media.length]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-border bg-surface"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho */}
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h3 className="font-display text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-border/60 hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Área de mídia */}
        <div className="relative flex aspect-16/10 items-center justify-center bg-black/20">
          {hasMedia && current ? (
            current.type === "image" ? (
              <img
                src={current.src}
                alt={current.alt ?? `Mídia ${index + 1} de ${title}`}
                className="h-full w-full object-contain"
              />
            ) : (
              <video
                key={current.src}
                src={current.src}
                controls
                className="h-full w-full object-contain"
              />
            )
          ) : (
            <div className="flex flex-col items-center gap-3 px-6 text-center text-muted-foreground">
              <ImageOff className="size-10" />
              <p className="text-sm">
                Nenhuma mídia disponível para este projeto ainda.
              </p>
            </div>
          )}

          {/* Setas — só aparecem com mais de 1 item */}
          {hasMedia && media.length > 1 && (
            <>
              <button
                onClick={goPrev}
                aria-label="Mídia anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-opacity hover:opacity-80"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={goNext}
                aria-label="Próxima mídia"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-opacity hover:opacity-80"
              >
                <ChevronRight className="size-5" />
              </button>
            </>
          )}
        </div>

        {/* Indicadores (bolinhas) — navegação manual, sem autoplay */}
        {hasMedia && media.length > 1 && (
          <div className="flex items-center justify-center gap-2 py-4">
            {media.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir para mídia ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-5 bg-accent" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}