import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, PlayCircle, Trophy, X } from 'lucide-react';
import { achievements } from '../data/constants';

const accentStyles = {
  gold: {
    border: 'linear-gradient(135deg, rgba(245,158,11,0.6), rgba(251,191,36,0.2), rgba(245,158,11,0.08))',
    glow: 'rgba(245,158,11,0.14)',
    badgeBorder: 'rgba(245, 158, 11, 0.28)',
    badgeBg: 'rgba(245, 158, 11, 0.08)',
    badgeText: '#fbbf24',
    line: 'linear-gradient(90deg, rgba(245,158,11,0.24), transparent)',
    footer: '#fbbf24',
  },
  violet: {
    border: 'linear-gradient(135deg, rgba(168,85,247,0.62), rgba(124,58,237,0.2), rgba(168,85,247,0.08))',
    glow: 'rgba(168,85,247,0.14)',
    badgeBorder: 'rgba(168, 85, 247, 0.3)',
    badgeBg: 'rgba(168, 85, 247, 0.08)',
    badgeText: '#a78bfa',
    line: 'linear-gradient(90deg, rgba(168,85,247,0.24), transparent)',
    footer: '#a78bfa',
  },
};

function getDriveDirectVideoUrl(url) {
  if (!url) return null;
  const match = url.match(/\/d\/([^/]+)/);
  if (!match) return url;
  return `https://drive.google.com/uc?export=download&id=${match[1]}`;
}

function getMediaItems(achievement) {
  const baseImages = achievement.galleryImages?.length ? achievement.galleryImages : [achievement.heroImage];
  const imageItems = baseImages.map(
    (image, index) => ({
      id: `${achievement.id}-image-${index}`,
      type: 'image',
      src: image,
      thumb: image,
    })
  );

  if (achievement.videoUrl) {
    return [
      {
        id: `${achievement.id}-video`,
        type: 'video',
        src: getDriveDirectVideoUrl(achievement.videoUrl),
        thumb: achievement.sideImage ?? achievement.heroImage,
      },
      ...imageItems.slice(0, 4),
    ];
  }

  return imageItems.slice(0, 5);
}

function AchievementCard({ achievement, onOpen }) {
  const accent = accentStyles[achievement.accent] ?? accentStyles.gold;
  const mediaItems = getMediaItems(achievement);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMedia = mediaItems[activeIndex] ?? mediaItems[0];
  const advanceMedia = () => {
    setActiveIndex((current) => (current === mediaItems.length - 1 ? 0 : current + 1));
  };

  const stopCardOpen = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (mediaItems.length < 2 || activeMedia?.type === 'video') {
      return undefined;
    }

    const interval = window.setInterval(() => {
      advanceMedia();
    }, 3000);

    return () => window.clearInterval(interval);
  }, [activeMedia?.type, mediaItems.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className="mx-auto w-full max-w-[780px]"
      style={{
        padding: '1px',
        borderRadius: '32px',
        background: accent.border,
        boxShadow: `0 30px 90px ${accent.glow}`,
      }}
    >
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        className="achievement-card group relative h-full cursor-pointer overflow-hidden rounded-[31px] border border-white/5 px-7 py-8"
        style={{ background: 'linear-gradient(180deg, rgba(13,18,26,0.98), rgba(10,14,22,0.96))' }}
        onClick={() => onOpen(achievement.id)}
      >
        <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(circle at top left, rgba(255,255,255,0.06), transparent 35%)' }} />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.45) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.25em]"
            style={{ borderColor: accent.badgeBorder, background: accent.badgeBg, color: accent.badgeText }}
          >
            <span className="h-2 w-2 rounded-full" style={{ background: accent.badgeText }} />
            {achievement.badge}
          </div>

          <div className="flex items-start gap-3 text-right">
            <span className="font-serif text-7xl font-black leading-none text-white/6">{achievement.rank}</span>
            <div className="pt-1">
              <Trophy className="ml-auto mb-1 text-yellow-300" size={24} />
              <div className="text-lg font-black uppercase leading-none" style={{ color: accent.badgeText }}>
                {achievement.rankLabel}
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-4">
          <h3 className="font-serif text-4xl font-black tracking-tight text-white sm:text-[3rem]">
            {achievement.title}
          </h3>
          <p className="mt-2 text-lg tracking-wide text-slate-400">{achievement.subtitle}</p>
        </div>

        <div
          className="relative z-10 mt-8 overflow-hidden rounded-[26px] border border-white/10 bg-slate-950/50"
          onClick={stopCardOpen}
          onMouseDown={stopCardOpen}
          onPointerDown={stopCardOpen}
        >
          {activeMedia?.type === 'video' ? (
            <video
              src={activeMedia.src}
              className="h-[300px] w-full bg-black object-cover sm:h-[440px]"
              autoPlay
              muted
              playsInline
              loop
              preload="metadata"
              onClick={stopCardOpen}
              onMouseDown={stopCardOpen}
              onPointerDown={stopCardOpen}
            />
          ) : (
            <img
              src={activeMedia?.src ?? achievement.heroImage}
              alt={achievement.title}
              className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-[460px]"
              loading="lazy"
              decoding="async"
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        </div>

        <p className="relative z-10 mt-5 text-center text-xl tracking-wide" style={{ color: accent.badgeText }}>
          {achievement.memoryLabel}
        </p>

        <div
          className="relative z-10 mt-4 flex items-center justify-center gap-3"
          onClick={stopCardOpen}
          onMouseDown={stopCardOpen}
          onPointerDown={stopCardOpen}
        >
          {mediaItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(index);
              }}
              aria-label={`View ${achievement.title} gallery item ${index + 1}`}
              className="overflow-hidden rounded-xl border"
              style={{
                borderColor: index === activeIndex ? accent.badgeText : 'rgba(255,255,255,0.08)',
                boxShadow: index === activeIndex ? `0 0 0 2px ${accent.badgeBg}` : 'none',
              }}
            >
              <div className="relative">
                {item.type === 'video' ? (
                  <div className="relative flex h-12 w-16 items-center justify-center bg-slate-900 sm:h-14 sm:w-20">
                    <img
                      src={item.thumb}
                      alt={`${achievement.title} gallery video`}
                      className="absolute inset-0 h-full w-full object-cover opacity-60"
                    />
                    <PlayCircle size={18} className="relative z-10 text-white/90" />
                  </div>
                ) : (
                  <img
                    src={item.thumb}
                    alt={`${achievement.title} gallery ${index + 1}`}
                    className="h-12 w-16 object-cover sm:h-14 sm:w-20"
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="relative z-10 mt-5 flex items-center justify-center gap-2">
          {mediaItems.map((_, index) => (
            <span
              key={`${achievement.id}-dot-${index}`}
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: index === activeIndex ? accent.badgeText : 'rgba(255,255,255,0.28)' }}
            />
          ))}
        </div>

        <p className="relative z-10 mt-8 text-[15px] leading-9 text-slate-300">
          {achievement.summary}
        </p>

        <div className="relative z-10 mt-8 flex items-center gap-4">
          <div className="h-px flex-1" style={{ background: accent.line }} />
          <span className="text-sm font-medium uppercase tracking-[0.28em]" style={{ color: accent.footer }}>
            {achievement.footerLabel}
          </span>
          <div className="h-px flex-1" style={{ background: accent.line }} />
        </div>
      </motion.article>
    </motion.div>
  );
}

function AchievementModalItem({ achievement }) {
  const accent = accentStyles[achievement.accent] ?? accentStyles.gold;
  const mediaItems = getMediaItems(achievement);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMedia = mediaItems[activeIndex] ?? mediaItems[0];
  const advanceMedia = () => {
    setActiveIndex((current) => (current === mediaItems.length - 1 ? 0 : current + 1));
  };

  return (
    <div
      className="relative w-full shrink-0 overflow-hidden rounded-[20px] border border-white/5 bg-[#0a101e] p-3 sm:p-4"
      style={{ backdropFilter: 'blur(24px)' }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="grid gap-3.5 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="relative overflow-hidden rounded-[14px] border border-white/10">
            {activeMedia?.type === 'video' ? (
              <video
                src={activeMedia.src}
                className="h-[180px] w-full bg-black object-cover sm:h-[240px]"
                autoPlay
                muted
                playsInline
                loop
                preload="metadata"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <img
                src={activeMedia?.src ?? achievement.heroImage}
                alt={achievement.title}
                className="h-[220px] w-full object-cover sm:h-[300px]"
              />
            )}
          </div>

          <div className="mt-2 flex gap-1 overflow-x-auto pb-1 no-scrollbar">
            {mediaItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(index);
                }}
                aria-label={`View ${achievement.title} memory item ${index + 1}`}
                className="shrink-0 overflow-hidden rounded-md border"
                style={{ 
                  borderColor: index === activeIndex ? accent.badgeText : 'rgba(255,255,255,0.08)',
                  transform: 'none',
                  boxShadow: index === activeIndex ? `0 0 0 2px ${accent.badgeBg}` : 'none'
                }}
              >
                <div className="relative">
                  {item.type === 'video' ? (
                    <div className="relative flex h-7 w-10 items-center justify-center bg-slate-900 sm:h-8 sm:w-12">
                      <img
                        src={item.thumb}
                        alt={`${achievement.title} memory video`}
                        className="absolute inset-0 h-full w-full object-cover opacity-60"
                      />
                      <PlayCircle size={12} className="relative z-10 text-white/90" />
                    </div>
                  ) : (
                    <img
                      src={item.thumb}
                      alt={`${achievement.title} memory ${index + 1}`}
                      className="h-7 w-10 object-cover sm:h-8 sm:w-12"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-start justify-between gap-2">
            <div
              className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[8px] font-medium uppercase tracking-[0.1em]"
              style={{ borderColor: accent.badgeBorder, background: accent.badgeBg, color: accent.badgeText }}
            >
              <span className="h-0.5 w-0.5 rounded-full" style={{ background: accent.badgeText }} />
              {achievement.badge}
            </div>
            <div className="text-right">
              <Trophy className="ml-auto mb-0 text-yellow-300" size={14} />
              <div className="text-[10px] font-black uppercase" style={{ color: accent.badgeText }}>
                {achievement.rankLabel}
              </div>
            </div>
          </div>

          <h3 className="mt-1 font-serif text-xl font-black tracking-tight text-white sm:text-2xl">
            {achievement.title}
          </h3>
          <p className="mt-0 text-[12px] text-slate-400">{achievement.subtitle}</p>

          <div className="mt-2.5 grid grid-cols-2 gap-1.5">
            <div className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1.5">
              <p className="text-[7px] uppercase tracking-[0.1em] text-slate-500">Project</p>
              <p className="mt-0 text-[10px] font-semibold text-white">{achievement.project}</p>
            </div>
            <div className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1.5">
              <p className="text-[7px] uppercase tracking-[0.1em] text-slate-500">Duration</p>
              <p className="mt-0 text-[10px] font-semibold text-white">{achievement.duration}</p>
            </div>
          </div>

          <p className="mt-2.5 text-[11px] leading-5 text-slate-300 sm:leading-6">{achievement.detail}</p>

          <div className="mt-2.5 flex flex-wrap gap-1">
            {achievement.detailTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-700/60 px-1.5 py-0.5 text-[8px] font-semibold text-slate-300"
                style={{ background: 'rgba(148,163,184,0.08)' }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {achievement.videoUrl && (
              <a
                href={achievement.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 rounded-md px-3 py-1.5 text-[9px] font-bold text-[#050810]"
                style={{ background: `linear-gradient(135deg, ${accent.badgeText}, #f8fafc)`, transform: 'none' }}
              >
                Watch Video <PlayCircle size={10} />
              </a>
            )}

            <a
              href={achievement.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[9px] font-bold text-white"
              style={{ transform: 'none' }}
            >
              Open Media <ExternalLink size={8} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function AchievementModal({ activeId, onClose }) {
  const loopAchievements = useMemo(
    () =>
      ['su-hackathon-2026', 'ganpat-hackathon-2025']
        .map((id) => achievements.find((achievement) => achievement.id === id))
        .filter(Boolean),
    []
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const currentId = loopAchievements[activeIndex]?.id ?? activeId;

  useEffect(() => {
    setActiveIndex(0);
    return undefined;
  }, [activeId]);

  useEffect(() => {
    if (loopAchievements.length < 2) {
      return undefined;
    }

    const interval = setInterval(() => {
      setActiveIndex((current) => (current === 0 ? 1 : 0));
    }, 1500);

    return () => clearInterval(interval);
  }, [loopAchievements]);

  return (
    <div
      className="fixed inset-0 z-[9000] flex items-center justify-center p-4"
      style={{ background: 'rgba(3,5,12,0.88)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close achievement details"
        className="absolute right-4 top-4 z-[9001] flex h-8 w-8 items-center justify-center rounded-full border border-slate-700/50 text-slate-300"
        style={{ background: 'rgba(8,12,24,0.75)', backdropFilter: 'blur(10px)', transform: 'none' }}
      >
        <X size={14} />
      </button>

      <div className="w-full max-w-[760px] overflow-hidden py-2">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {loopAchievements.map((achievement) => (
            <div
              key={achievement.id}
              data-id={achievement.id}
              className="w-full shrink-0 px-1"
            >
              <div
                className="relative overflow-hidden"
                style={{
                  padding: '1px',
                  borderRadius: '21px',
                  background: accentStyles[achievement.accent]?.border ?? accentStyles.gold.border,
                  boxShadow: `0 15px 45px ${accentStyles[achievement.accent]?.glow ?? accentStyles.gold.glow}`,
                  transform: 'none'
                }}
              >
                <AchievementModalItem achievement={achievement} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-1">
        {loopAchievements.map((achievement, index) => (
          <button
            key={`dot-${achievement.id}`}
            aria-label={`Go to achievement ${index + 1}`}
            onClick={(e) => {
              e.stopPropagation();
              const nextIndex = loopAchievements.findIndex((item) => item.id === achievement.id);
              if (nextIndex !== -1) {
                setActiveIndex(nextIndex);
              }
            }}
            className={`h-0.5 rounded-full ${
              achievement.id === currentId ? 'w-4 bg-yellow-400' : 'w-2 bg-white/10'
            }`}
            style={{ transform: 'none' }}
          />
        ))}
      </div>
    </div>
  );
}


const Achievements = () => {
  const [activeAchievement, setActiveAchievement] = useState(null);
  const hasAutoOpened = useRef(false);

  const featuredAchievement = useMemo(
    () => achievements.find((item) => item.featured) ?? achievements[0] ?? null,
    []
  );

  useEffect(() => {
    if (!activeAchievement) {
      document.body.style.overflow = '';
      return undefined;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [activeAchievement]);

  return (
    <>
      <section id="achievements" className="relative overflow-hidden bg-[#050810] py-16 md:py-24">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,200,50,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,200,50,0.03) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div
          className="absolute left-1/2 top-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(234,175,36,0.08) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-[20%] h-[400px] w-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />
              <span className="rounded-full border border-yellow-400/20 bg-yellow-400/[0.06] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-yellow-400">
                Highlights
              </span>
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />
            </div>

            <h2 className="mb-4 font-serif text-5xl font-black leading-none tracking-tight sm:text-6xl md:text-7xl section-heading">
              <span className="heading-primary">
                Achieve
              </span>
              <span className="heading-secondary">
                ments
              </span>
            </h2>

            <p className="mx-auto max-w-xl text-base font-light leading-relaxed text-description sm:text-lg">
              Proud milestones, real-world wins, and standout moments from the journey.
            </p>
          </motion.div>

          <div className="grid gap-8 xl:grid-cols-2">
            {achievements.map((achievement) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                onOpen={setActiveAchievement}
              />
            ))}
          </div>
        </div>
      </section>

      {activeAchievement && (
        <AchievementModal
          activeId={activeAchievement}
          onClose={() => setActiveAchievement(null)}
        />
      )}
    </>
  );
};

export default Achievements;
