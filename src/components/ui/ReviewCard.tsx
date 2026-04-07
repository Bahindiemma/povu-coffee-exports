import { ReviewData } from '@/types';

interface ReviewCardProps {
  review: ReviewData;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="flex flex-col bg-card p-7">
      <div className="mb-4 flex gap-1">
        {Array.from({ length: review.rating }).map((_, i) => (
          <span key={i} className="inline-block h-2 w-2 bg-gold" />
        ))}
      </div>
      <blockquote className="mb-6 flex-1 font-display text-[17px] italic leading-[1.55] text-cream/70">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <div>
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
          {review.name}
        </p>
        <p className="mt-0.5 font-sans text-[11px] text-cream/40">
          {review.role} &middot; {review.city}
        </p>
      </div>
    </div>
  );
}
