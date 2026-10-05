/**
 * ==============================================================================
 * ROMANTIC BIRTHDAY CELEBRATION WEBSITE
 * ==============================================================================
 * 
 * 💖 USER CONFIGURATION OBJECT:
 * Everything you need to customize is located directly inside this CONFIG object!
 * You can edit names, messages, photo captions, songs, and love reasons below.
 */

const CONFIG = {
  // 1. Personal Details
  wifeName: "Nishu",
  wifeTitle: "My Beautiful Wife",
  
  // 2. Hero Section
  hero: {
    badge: "Happy Birthday To The Love Of My Life ✨",
    title: "Happy Birthday ❤️",
    subtitle: "My Beautiful Wife, Nishu",
    description: "From our very first date to our first walk after marriage, and the precious joy of raising our baby boy together — every second by your side is God’s greatest blessing.",
    ctaText: "Begin Our Journey"
  },

  // 3. Our Songs Playlist (2 Options: Custom Song & Instrumental)
  songs: [
    {
      id: "song-1",
      title: "Nishu Ki Khushiyaan",
      artist: "Created Specially for Nishu ❤️",
      badge: "Our Special Birthday Song",
      src: "assets/song2.mp3",
      cover: "assets/cover.jpg",
      quote: "“The song written from the depth of my heart, only for you.”"
    },
    {
      id: "song-2",
      title: "A Melody Written For You",
      artist: "Dedicated to Nishu With All My Heart",
      badge: "Birthday Waltz Instrumental",
      src: "assets/song.mp3",
      cover: "assets/cover.jpg",
      quote: "“Music sounds sweeter when I’m listening with you.”"
    }
  ],

  // 4. Our Memories Gallery (Your Real 6 Cherished Moments)
  galleryImages: [
    {
      src: "assets/photo1.jpg",
      title: "First Time Outside Together",
      caption: "That unforgettable first time we stepped out into the world together. Standing side by side by the aquarium, shy smiles, and the sweet beginning of our lifelong story.",
      date: "Where It All Began",
      alt: "Our first time outside together standing by the aquarium",
      position: "center 25%"
    },
    {
      src: "assets/photo2.jpg",
      title: "Our First Walk After Marriage",
      caption: "Taking our very first steps as husband and wife. Dressed in sacred wedding colors, walking hand in hand into our beautiful forever.",
      date: "Just Married",
      alt: "We are walking together first time after marriage",
      position: "center 12%"
    },
    {
      src: "assets/photo3.jpg",
      title: "Returning Home Together",
      caption: "The precious moment we returned home together after marriage. Looking at our room, hearts full of dreams, blessed to start our family journey as one.",
      date: "Home Sweet Home",
      alt: "Returned home after marriage and together we have picture",
      position: "center 22%"
    },
    {
      src: "assets/photo4.jpg",
      title: "First Time at the Temple",
      caption: "Our first visit to the sacred temple as husband and wife. Standing before God with holy tilaks on our foreheads, praying for a lifetime of love, health, and togetherness.",
      date: "Divine Blessings",
      alt: "First time gone to temple together",
      position: "center 30%"
    },
    {
      src: "assets/photo5.jpg",
      title: "My Baby Boy & My Birthday Wife",
      caption: "My entire universe in one single picture. Seeing you smile so radiantly holding our sweet baby boy fills my heart with endless gratitude and unconditional love.",
      date: "Our Greatest Blessing",
      alt: "My baby boy and my birthday wife smiling together",
      position: "center 35%"
    },
    {
      src: "assets/photo6.jpg",
      title: "First Haircut on My Suggestion",
      caption: "Your very first parlour visit and haircut after our marriage, done on my suggestion! You looked so graceful, radiant, and stunning — I fell in love with you all over again.",
      date: "A Cherished Moment",
      alt: "First haircut in parlour after marriage on my suggestion",
      position: "center 18%"
    }
  ],

  // 5. Birthday Letter
  birthdayLetter: {
    date: "October 6, 2026",
    greeting: "Dearest Nishu,",
    closing: "Forever & Always With All My Love,",
    signature: "Your Loving Husband ❤️",
    text: `From the very first moment we stepped out together to this beautiful day, every memory with you has made my life richer, warmer, and full of joy.

When we walked together for the first time after marriage, when we returned home side by side, and when we stood before God at the temple seeking blessings for our future, I knew I was the most fortunate man in the world.

And now, seeing you holding our precious baby boy with that radiant, gentle motherly smile, my love for you has grown deeper than words could ever express. You are my best friend, my rock, and the heartbeat of our family.

On this special birthday, I want to thank you for your love, your trust, and every sweet moment we share. May God always bless you with health, laughter, and every happiness your pure heart desires.

Happy Birthday, my darling wife. I love you forever and always.`
  },

  // 6. Reasons I Love You (6 Cards)
  reasonsILoveYou: [
    {
      num: "01",
      icon: "✨",
      title: "Your Radiant Smile",
      desc: "From our very first time outside together until today, your genuine smile effortlessly brightens my darkest days."
    },
    {
      num: "02",
      icon: "👶",
      title: "The Most Wonderful Mother",
      desc: "Watching the gentle love, care, and devotion you pour into our sweet baby boy makes me fall in love with you all over again every single day."
    },
    {
      num: "03",
      icon: "🏡",
      title: "You Turned a House into Home",
      desc: "From the very first day we returned home together after marriage, you filled our life with warmth, peace, and comfort."
    },
    {
      num: "04",
      icon: "💇‍♀️",
      title: "Your Trust in Me",
      desc: "Like when you went for your first haircut in the parlour just on my suggestion, your confidence and trust in me mean the world."
    },
    {
      num: "05",
      icon: "🛕",
      title: "Our Sacred Bond",
      desc: "Remembering our first temple visit together, seeking divine blessings for a lifetime of companionship, health, and mutual respect."
    },
    {
      num: "06",
      icon: "♾️",
      title: "My Lifelong Companion",
      desc: "Through every step we take together, you are my greatest strength, my closest confidante, and my eternal love."
    }
  ],

  // 7. Final Surprise
  finalSurprise: {
    firstMessage: "I Love You Forever ❤️",
    celebrationTitle: "Happy Birthday, Nishu! ✨",
    romanticQuote: "Thank you for being my wonderful wife and the best mother to our baby boy. Happy Birthday, my love!"
  },

  // 8. Footer
  footer: {
    primary: "Made with ❤️",
    secondary: "Only for Nishu",
    note: "Forever your biggest admirer, best friend & husband."
  }
};

/**
 * ==============================================================================
 * APPLICATION LOGIC & INTERACTIVITY
 * ==============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize dynamic data from CONFIG
  initPageContent();

  // Initialize UI features
  initNavbar();
  initAmbientCanvas();
  initAudioPlayer();
  initGalleryAndLightbox();
  initBirthdayLetter();
  initReasonsGrid();
  initGiftSurprise();
  initScrollAnimations();
});

/**
 * 1. Populate Dynamic Page Content from CONFIG
 */
function initPageContent() {
  // Document Title
  document.title = `Happy Birthday, ${CONFIG.wifeName} ❤️ | Forever Yours`;

  // Hero Section
  safeSetText("nav-logo-text", `For ${CONFIG.wifeName}`);
  safeSetText("hero-badge-text", CONFIG.hero.badge);
  safeSetText("hero-title", CONFIG.hero.title);
  safeSetText("hero-subtitle", CONFIG.hero.subtitle);
  safeSetText("hero-description", CONFIG.hero.description);
  
  const ctaBtn = document.getElementById("hero-cta-btn");
  if (ctaBtn) {
    const textSpan = ctaBtn.querySelector("span");
    if (textSpan) textSpan.textContent = CONFIG.hero.ctaText;
  }

  // Songs Playlist Meta
  if (CONFIG.songs && CONFIG.songs.length > 0) {
    const firstSong = CONFIG.songs[0];
    safeSetText("song-title", firstSong.title);
    safeSetText("song-artist", firstSong.artist);
    safeSetText("song-badge", firstSong.badge || "Personalized Birthday Melody");

    CONFIG.songs.forEach((s, idx) => {
      safeSetText(`tab-title-${idx}`, s.title);
    });
  }

  // Letter Meta
  safeSetText("letter-date", CONFIG.birthdayLetter.date);
  safeSetText("letter-greeting", CONFIG.birthdayLetter.greeting);
  safeSetText("letter-closing", CONFIG.birthdayLetter.closing);
  safeSetText("letter-signature", CONFIG.birthdayLetter.signature);

  // Final Surprise Meta
  safeSetText("reveal-first-message", CONFIG.finalSurprise.firstMessage);
  safeSetText("reveal-birthday-title", CONFIG.finalSurprise.celebrationTitle);
  safeSetText("reveal-romantic-quote", CONFIG.finalSurprise.romanticQuote);

  // Footer
  safeSetText("footer-primary", CONFIG.footer.primary);
  safeSetText("footer-secondary", CONFIG.footer.secondary);
  safeSetText("footer-note", CONFIG.footer.note);
}

function safeSetText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

/**
 * 2. Navbar Scrolling Behavior & Smooth Anchors
 */
function initNavbar() {
  const nav = document.getElementById("main-nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }, { passive: true });
}

/**
 * 3. Ambient Canvas for Floating Hearts & Sparkles
 */
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Particle models
  const particles = [];
  const particleCount = Math.min(45, Math.floor(width / 25));

  for (let i = 0; i < particleCount; i++) {
    particles.push(createParticle(true));
  }

  function createParticle(randomY = false) {
    const isHeart = Math.random() < 0.28; // ~28% floating hearts, 72% glowing sparkles
    return {
      x: Math.random() * width,
      y: randomY ? Math.random() * height : height + 20,
      size: isHeart ? Math.random() * 8 + 8 : Math.random() * 3 + 1.5,
      speedY: -(Math.random() * 0.6 + 0.3),
      speedX: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
      fadeSpeed: (Math.random() * 0.005 + 0.002),
      fadeIn: true,
      color: isHeart
        ? (Math.random() < 0.5 ? "rgba(244, 114, 182, " : "rgba(229, 164, 162, ")
        : (Math.random() < 0.5 ? "rgba(246, 210, 109, " : "rgba(255, 255, 255, "),
      isHeart: isHeart,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02
    };
  }

  function drawHeart(ctx, x, y, size, opacity, colorStr, rotation) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.fillStyle = colorStr + opacity + ")";
    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(0, topCurveHeight);
    // Left curve
    ctx.bezierCurveTo(-size / 2, -topCurveHeight, -size, topCurveHeight / 3, 0, size);
    // Right curve
    ctx.bezierCurveTo(size, topCurveHeight / 3, size / 2, -topCurveHeight, 0, topCurveHeight);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotationSpeed;

      // Pulse opacity
      if (p.fadeIn) {
        p.opacity += p.fadeSpeed;
        if (p.opacity >= 0.7) p.fadeIn = false;
      } else {
        p.opacity -= p.fadeSpeed;
        if (p.opacity <= 0.1) p.fadeIn = true;
      }

      if (p.isHeart) {
        drawHeart(ctx, p.x, p.y, p.size, p.opacity, p.color, p.rotation);
      } else {
        // Glowing star / sparkle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.opacity + ")";
        ctx.shadowColor = p.color + "0.8)";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Reset when floating out of view
      if (p.y < -30 || p.x < -30 || p.x > width + 30) {
        particles[i] = createParticle(false);
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/**
 * 4. Audio Player Centerpiece (Loaded from assets/song.mp3)
 */
function initAudioPlayer() {
  const audio = document.getElementById("audio-player");
  const btnPlayPause = document.getElementById("btn-play-pause");
  const iconPlay = document.getElementById("icon-play");
  const iconPause = document.getElementById("icon-pause");
  const vinylDisc = document.getElementById("vinyl-disc");
  const turntableArm = document.getElementById("turntable-arm");
  const soundwave = document.getElementById("soundwave-container");
  const timeCurrent = document.getElementById("time-current");
  const timeDuration = document.getElementById("time-duration");
  const progressContainer = document.getElementById("progress-container");
  const progressFill = document.getElementById("progress-fill");
  const progressBuffered = document.getElementById("progress-buffered");
  const progressThumb = document.getElementById("progress-thumb");
  const btnReplay = document.getElementById("btn-replay");
  const btnMute = document.getElementById("btn-mute");
  const iconVolume = document.getElementById("icon-volume");
  const iconMuted = document.getElementById("icon-muted");
  const volumeSlider = document.getElementById("volume-slider");
  const navMusicToggle = document.getElementById("nav-music-toggle");
  const navMusicStatus = document.getElementById("nav-music-status");

  if (!audio) return;

  // Format seconds to mm:ss
  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  // Update UI play state
  function updatePlayState(isPlaying) {
    if (isPlaying) {
      iconPlay.style.display = "none";
      iconPause.style.display = "block";
      vinylDisc.classList.add("spinning");
      turntableArm.classList.add("active");
      soundwave.classList.add("playing");
      if (navMusicToggle) {
        navMusicToggle.classList.add("playing");
        if (navMusicStatus) navMusicStatus.textContent = "Playing...";
      }
    } else {
      iconPlay.style.display = "block";
      iconPause.style.display = "none";
      vinylDisc.classList.remove("spinning");
      turntableArm.classList.remove("active");
      soundwave.classList.remove("playing");
      if (navMusicToggle) {
        navMusicToggle.classList.remove("playing");
        if (navMusicStatus) navMusicStatus.textContent = "Play Song";
      }
    }
  }

  // Toggle Play / Pause
  function togglePlay() {
    if (audio.paused) {
      audio.play().then(() => {
        updatePlayState(true);
      }).catch(err => {
        console.warn("Audio playback issue:", err);
      });
    } else {
      audio.pause();
      updatePlayState(false);
    }
  }

  if (btnPlayPause) btnPlayPause.addEventListener("click", togglePlay);
  if (navMusicToggle) navMusicToggle.addEventListener("click", togglePlay);

  // Time update event
  audio.addEventListener("timeupdate", () => {
    if (!isNaN(audio.duration) && audio.duration > 0) {
      const pct = (audio.currentTime / audio.duration) * 100;
      progressFill.style.width = `${pct}%`;
      progressThumb.style.left = `${pct}%`;
      timeCurrent.textContent = formatTime(audio.currentTime);
      progressContainer.setAttribute("aria-valuenow", Math.round(pct));
    }
  });

  // Loaded metadata event
  audio.addEventListener("loadedmetadata", () => {
    timeDuration.textContent = formatTime(audio.duration);
  });

  // Buffered progress
  audio.addEventListener("progress", () => {
    if (audio.buffered.length > 0 && audio.duration > 0) {
      const bufferedEnd = audio.buffered.end(audio.buffered.length - 1);
      const bufferedPct = (bufferedEnd / audio.duration) * 100;
      progressBuffered.style.width = `${bufferedPct}%`;
    }
  });

  const songTitleEl = document.getElementById("song-title");
  const songArtistEl = document.getElementById("song-artist");
  const songBadgeEl = document.getElementById("song-badge");
  const playerQuoteEl = document.querySelector(".player-quote");
  const btnPrevSong = document.getElementById("btn-prev-song");
  const btnNextSong = document.getElementById("btn-next-song");
  const playlistTabs = document.querySelectorAll(".playlist-tab");

  let currentSongIndex = 0;
  const songs = (CONFIG.songs && CONFIG.songs.length > 0) ? CONFIG.songs : [
    {
      title: "Nishu Ki Khushiyaan",
      artist: "Created Specially for Nishu ❤️",
      badge: "Our Special Birthday Song",
      src: "assets/song2.mp3",
      cover: "assets/cover.jpg",
      quote: "“The song written from the depth of my heart, only for you.”"
    },
    {
      title: "A Melody Written For You",
      artist: "Dedicated to Nishu With All My Heart",
      badge: "Birthday Waltz Instrumental",
      src: "assets/song.mp3",
      cover: "assets/cover.jpg",
      quote: "“Music sounds sweeter when I’m listening with you.”"
    }
  ];

  // Function to load and play selected song
  function loadSong(index, shouldPlay = false) {
    currentSongIndex = (index + songs.length) % songs.length;
    const song = songs[currentSongIndex];
    if (!song) return;

    if (songTitleEl) songTitleEl.textContent = song.title;
    if (songArtistEl) songArtistEl.textContent = song.artist;
    if (songBadgeEl) songBadgeEl.textContent = song.badge;
    if (playerQuoteEl && song.quote) playerQuoteEl.textContent = song.quote;

    playlistTabs.forEach((tab, idx) => {
      if (idx === currentSongIndex) {
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");
      } else {
        tab.classList.remove("active");
        tab.setAttribute("aria-selected", "false");
      }
    });

    const wasPlaying = !audio.paused;
    audio.src = song.src;
    audio.load();

    progressFill.style.width = "0%";
    progressThumb.style.left = "0%";
    timeCurrent.textContent = "0:00";

    if (shouldPlay || wasPlaying) {
      audio.play().then(() => {
        updatePlayState(true);
      }).catch(err => {
        console.warn("Autoplay after switch notice:", err);
      });
    } else {
      updatePlayState(false);
    }
  }

  // Playlist Tab click listeners
  playlistTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const idx = parseInt(tab.getAttribute("data-song-index") || "0", 10);
      if (idx !== currentSongIndex) {
        loadSong(idx, true);
      } else {
        togglePlay();
      }
    });
  });

  // Previous Track
  if (btnPrevSong) {
    btnPrevSong.addEventListener("click", () => {
      loadSong(currentSongIndex - 1, true);
    });
  }

  // Next Track
  if (btnNextSong) {
    btnNextSong.addEventListener("click", () => {
      loadSong(currentSongIndex + 1, true);
    });
  }

  // Song ended: cycle to next song
  audio.addEventListener("ended", () => {
    loadSong(currentSongIndex + 1, true);
  });

  // Seek bar click & drag with mobile touch support
  function seek(e) {
    const rect = progressContainer.getBoundingClientRect();
    const clientX = (e.touches && e.touches.length > 0) ? e.touches[0].clientX : e.clientX;
    const clickX = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const seekPct = clickX / rect.width;
    if (!isNaN(audio.duration) && audio.duration > 0) {
      audio.currentTime = seekPct * audio.duration;
    }
  }

  let isSeeking = false;
  if (progressContainer) {
    progressContainer.addEventListener("mousedown", (e) => {
      isSeeking = true;
      seek(e);
    });
    progressContainer.addEventListener("touchstart", (e) => {
      isSeeking = true;
      seek(e);
    }, { passive: true });
  }

  window.addEventListener("mousemove", (e) => {
    if (isSeeking) seek(e);
  });
  window.addEventListener("touchmove", (e) => {
    if (isSeeking) seek(e);
  }, { passive: true });

  window.addEventListener("mouseup", () => {
    isSeeking = false;
  });
  window.addEventListener("touchend", () => {
    isSeeking = false;
  });

  // Replay from start
  if (btnReplay) {
    btnReplay.addEventListener("click", () => {
      audio.currentTime = 0;
      audio.play().then(() => updatePlayState(true));
    });
  }

  // Volume & Mute
  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      audio.volume = parseFloat(e.target.value);
      if (audio.volume === 0) {
        audio.muted = true;
        iconVolume.style.display = "none";
        iconMuted.style.display = "block";
      } else {
        audio.muted = false;
        iconVolume.style.display = "block";
        iconMuted.style.display = "none";
      }
    });
  }

  if (btnMute) {
    btnMute.addEventListener("click", () => {
      audio.muted = !audio.muted;
      if (audio.muted) {
        iconVolume.style.display = "none";
        iconMuted.style.display = "block";
      } else {
        iconVolume.style.display = "block";
        iconMuted.style.display = "none";
      }
    });
  }
}

/**
 * 5. Memories Gallery & Lightbox
 */
function initGalleryAndLightbox() {
  const gallery = document.getElementById("memories-gallery");
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const modalTitle = document.getElementById("lightbox-title");
  const modalDesc = document.getElementById("lightbox-desc");
  const modalDate = document.getElementById("lightbox-date");
  const modalCounter = document.getElementById("lightbox-counter");
  const btnClose = document.getElementById("lightbox-close");
  const backdrop = document.getElementById("lightbox-backdrop");
  const btnPrev = document.getElementById("lightbox-prev");
  const btnNext = document.getElementById("lightbox-next");

  if (!gallery || !CONFIG.galleryImages) return;

  let currentIndex = 0;

  // Render gallery cards dynamically
  gallery.innerHTML = "";
  CONFIG.galleryImages.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "gallery-card reveal";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `View memory: ${item.title}`);

    card.innerHTML = `
      <img src="${item.src}" alt="${item.alt || item.title}" class="gallery-card-img" style="object-position: ${item.position || 'center'};" loading="lazy">
      <div class="gallery-card-overlay">
        <span class="gallery-tag">${item.date}</span>
        <h3 class="gallery-card-title">${item.title}</h3>
        <p class="gallery-card-desc">${item.caption}</p>
      </div>
      <div class="gallery-expand-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
          <polyline points="15 3 21 3 21 9"></polyline>
          <polyline points="9 21 3 21 3 15"></polyline>
          <line x1="21" y1="3" x2="14" y2="10"></line>
          <line x1="3" y1="21" x2="10" y2="14"></line>
        </svg>
      </div>
    `;

    card.addEventListener("click", () => openLightbox(index));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(index);
      }
    });

    gallery.appendChild(card);
  });

  function updateLightbox(index) {
    currentIndex = index;
    const item = CONFIG.galleryImages[currentIndex];
    if (!item) return;

    modalImg.src = item.src;
    modalImg.alt = item.alt || item.title;
    modalTitle.textContent = item.title;
    modalDesc.textContent = item.caption;
    modalDate.textContent = item.date;
    modalCounter.textContent = `${currentIndex + 1} / ${CONFIG.galleryImages.length}`;
  }

  function openLightbox(index) {
    updateLightbox(index);
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Prevent background scroll
  }

  function closeLightbox() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function prevPhoto() {
    const nextIdx = (currentIndex - 1 + CONFIG.galleryImages.length) % CONFIG.galleryImages.length;
    updateLightbox(nextIdx);
  }

  function nextPhoto() {
    const nextIdx = (currentIndex + 1) % CONFIG.galleryImages.length;
    updateLightbox(nextIdx);
  }

  if (btnClose) btnClose.addEventListener("click", closeLightbox);
  if (backdrop) backdrop.addEventListener("click", closeLightbox);
  if (btnPrev) btnPrev.addEventListener("click", prevPhoto);
  if (btnNext) btnNext.addEventListener("click", nextPhoto);

  // Keyboard controls
  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prevPhoto();
    if (e.key === "ArrowRight") nextPhoto();
  });

  // Mobile Touch Swipe support (swipe left for next, swipe right for prev, swipe down to close)
  let touchStartX = 0;
  let touchStartY = 0;
  modal.addEventListener("touchstart", (e) => {
    if (e.touches && e.touches.length > 0) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  modal.addEventListener("touchend", (e) => {
    if (e.changedTouches && e.changedTouches.length > 0) {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          nextPhoto();
        } else {
          prevPhoto();
        }
      } else if (diffY > 80 && Math.abs(diffY) > Math.abs(diffX)) {
        closeLightbox();
      }
    }
  }, { passive: true });
}

/**
 * 6. Birthday Letter with Realistic Typewriter Animation
 */
function initBirthdayLetter() {
  const typedTextEl = document.getElementById("letter-typed-text");
  const cursor = document.getElementById("typewriter-cursor");
  const btnReplay = document.getElementById("btn-replay-letter");
  const btnSkip = document.getElementById("btn-skip-letter");
  const letterSection = document.getElementById("letter-section");

  if (!typedTextEl || !CONFIG.birthdayLetter) return;

  const fullText = CONFIG.birthdayLetter.text;
  let charIndex = 0;
  let typingTimer = null;
  let hasTyped = false;

  function typeNextCharacter() {
    if (charIndex < fullText.length) {
      typedTextEl.textContent += fullText.charAt(charIndex);
      charIndex++;

      // Natural cadence variation
      let delay = 28;
      const currentChar = fullText.charAt(charIndex - 1);
      if (currentChar === "." || currentChar === "!" || currentChar === "?") {
        delay = 320;
      } else if (currentChar === ",") {
        delay = 140;
      } else if (currentChar === "\n") {
        delay = 240;
      }

      typingTimer = setTimeout(typeNextCharacter, delay);
    } else {
      if (cursor) cursor.style.display = "none";
    }
  }

  function startTyping() {
    clearTimeout(typingTimer);
    typedTextEl.textContent = "";
    charIndex = 0;
    if (cursor) cursor.style.display = "inline-block";
    typeNextCharacter();
    hasTyped = true;
  }

  function skipTyping() {
    clearTimeout(typingTimer);
    typedTextEl.textContent = fullText;
    if (cursor) cursor.style.display = "none";
    hasTyped = true;
  }

  if (btnReplay) btnReplay.addEventListener("click", startTyping);
  if (btnSkip) btnSkip.addEventListener("click", skipTyping);

  // Trigger automatically when letter section enters viewport
  if ("IntersectionObserver" in window && letterSection) {
    const letterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasTyped) {
          startTyping();
        }
      });
    }, { threshold: 0.25 });
    letterObserver.observe(letterSection);
  } else {
    startTyping();
  }
}

/**
 * 7. Reasons I Love You Cards
 */
function initReasonsGrid() {
  const grid = document.getElementById("reasons-grid");
  if (!grid || !CONFIG.reasonsILoveYou) return;

  grid.innerHTML = "";
  CONFIG.reasonsILoveYou.forEach(reason => {
    const card = document.createElement("div");
    card.className = "reason-card reveal";
    card.innerHTML = `
      <div class="reason-card-header">
        <span class="reason-icon">${reason.icon || "❤️"}</span>
        <span class="reason-number">${reason.num}</span>
      </div>
      <h3 class="reason-title">${reason.title}</h3>
      <p class="reason-desc">${reason.desc}</p>
    `;
    grid.appendChild(card);
  });
}

/**
 * 8. Final Surprise (Interactive 3D Gift Box & Confetti Cannon)
 */
function initGiftSurprise() {
  const giftBox = document.getElementById("gift-box");
  const giftWrapper = document.getElementById("gift-box-wrapper");
  const revealCard = document.getElementById("surprise-reveal-card");
  const delayedContainer = document.getElementById("reveal-delayed-container");
  const btnReplay = document.getElementById("btn-replay-surprise");

  if (!giftBox) return;

  function openGift() {
    if (giftBox.classList.contains("opened")) return;
    giftBox.classList.add("opened");

    // Launch celebratory confetti burst
    launchCelebrationConfetti();

    // Short delay before showing reveal card
    setTimeout(() => {
      giftWrapper.style.display = "none";
      revealCard.style.display = "block";

      // Secondary delayed celebration message
      setTimeout(() => {
        if (delayedContainer) delayedContainer.classList.add("show");
        // Second wave of gentle gold confetti
        launchGentleGoldConfetti();
      }, 1200);
    }, 600);
  }

  function resetGift() {
    giftBox.classList.remove("opened");
    revealCard.style.display = "none";
    if (delayedContainer) delayedContainer.classList.remove("show");
    giftWrapper.style.display = "flex";
  }

  giftBox.addEventListener("click", openGift);
  giftBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openGift();
    }
  });

  if (btnReplay) btnReplay.addEventListener("click", resetGift);
}

/**
 * High-Performance Vanilla Canvas Confetti System
 */
let confettiAnimationId = null;

function launchCelebrationConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiPieces = [];
  const count = 180;
  const colors = [
    "#b76e79", "#e5a4a2", "#f7cac9", // Rose Gold
    "#d4af37", "#f59e0b", "#fef08a", // Warm Gold
    "#f472b6", "#fbcfe8", "#ffffff"  // Soft Pink & White
  ];

  const originX = window.innerWidth / 2;
  const originY = window.innerHeight * 0.65;

  for (let i = 0; i < count; i++) {
    const angle = (Math.random() * Math.PI) + Math.PI; // Upward burst
    const speed = Math.random() * 18 + 10;
    confettiPieces.push({
      x: originX,
      y: originY,
      size: Math.random() * 9 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: Math.cos(angle) * speed * (Math.random() * 1.5 + 0.5),
      vy: Math.sin(angle) * speed,
      gravity: 0.38,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 12,
      opacity: 1,
      isCircle: Math.random() < 0.25
    });
  }

  if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);

  function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let activePieces = 0;

    for (let i = 0; i < confettiPieces.length; i++) {
      const p = confettiPieces[i];
      if (p.opacity <= 0.01) continue;

      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.985;
      p.rotation += p.rotationSpeed;
      p.opacity -= 0.007;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.fillStyle = p.color;

      if (p.isCircle) {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      }
      ctx.restore();
      activePieces++;
    }

    if (activePieces > 0) {
      confettiAnimationId = requestAnimationFrame(animateConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animateConfetti();
}

function launchGentleGoldConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const confettiPieces = [];
  const count = 75;
  const colors = ["#d4af37", "#fef08a", "#f7cac9", "#ffffff"];

  for (let i = 0; i < count; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: -20,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 2,
      vy: Math.random() * 3 + 2,
      gravity: 0.05,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 8,
      opacity: 1,
      isCircle: Math.random() < 0.3
    });
  }

  function animateGentle() {
    let activePieces = 0;
    for (let i = 0; i < confettiPieces.length; i++) {
      const p = confettiPieces[i];
      if (p.opacity <= 0.01) continue;

      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotationSpeed;
      p.opacity -= 0.005;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.fillStyle = p.color;

      if (p.isCircle) {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      }
      ctx.restore();
      activePieces++;
    }

    if (activePieces > 0) {
      requestAnimationFrame(animateGentle);
    }
  }

  animateGentle();
}

/**
 * 9. Scroll Observer for Fade-In Reveals
 */
function initScrollAnimations() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px"
  });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}
