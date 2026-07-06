/* ============================================
   BATTICALOA TOURISM — SOCIAL MEDIA API
   Mock APIs for TikTok & Instagram
   ============================================ */

// ========== TikTok API ==========
const TikTokAPI = {
  baseUrl: '/api/tiktok', // In production, point to your backend

  // Mock video data
  _videos: [
    {
      id: '1',
      title: 'Sunset over Batticaloa Lagoon — pure magic 🌅',
      thumbnail: 'https://picsum.photos/seed/tt-batti-sunset/400/700',
      embedUrl: 'https://www.tiktok.com/embed/v2/7400000000000000001',
      views: '128.5K',
      likes: '12.3K',
      comments: '342',
      shares: '1.2K',
      author: '@batticaloatourism',
      authorAvatar: 'https://picsum.photos/seed/tt-avatar/100/100',
      duration: '0:45'
    },
    {
      id: '2',
      title: 'The singing fish of Batticaloa — can you hear it? 🐟🎵',
      thumbnail: 'https://picsum.photos/seed/tt-singing-fish/400/700',
      embedUrl: 'https://www.tiktok.com/embed/v2/7400000000000000002',
      views: '89.2K',
      likes: '8.7K',
      comments: '567',
      shares: '2.1K',
      author: '@batticaloatourism',
      authorAvatar: 'https://picsum.photos/seed/tt-avatar/100/100',
      duration: '1:02'
    },
    {
      id: '3',
      title: 'Pasikudah crystal clear waters — Sri Lanka\'s hidden gem 💎',
      thumbnail: 'https://picsum.photos/seed/tt-pasikudah-clear/400/700',
      embedUrl: 'https://www.tiktok.com/embed/v2/7400000000000000003',
      views: '256.8K',
      likes: '24.1K',
      comments: '891',
      shares: '4.5K',
      author: '@batticaloatourism',
      authorAvatar: 'https://picsum.photos/seed/tt-avatar/100/100',
      duration: '0:38'
    },
    {
      id: '4',
      title: 'Dutch Fort at golden hour — 400 years of history 🏛️✨',
      thumbnail: 'https://picsum.photos/seed/tt-dutch-fort-gold/400/700',
      embedUrl: 'https://www.tiktok.com/embed/v2/7400000000000000004',
      views: '67.3K',
      likes: '6.9K',
      comments: '213',
      shares: '890',
      author: '@batticaloatourism',
      authorAvatar: 'https://picsum.photos/seed/tt-avatar/100/100',
      duration: '0:52'
    }
  ],

  /**
   * Fetch all TikTok videos
   * @returns {Promise<Array>} Array of video objects
   */
  async getVideos() {
    // Simulate API delay
    await new Promise(r => setTimeout(r, 600));
    // In production: return fetch(this.baseUrl + '/videos').then(r => r.json());
    return { success: true, data: this._videos, total: this._videos.length };
  },

  /**
   * Fetch single TikTok video
   * @param {string} id - Video ID
   * @returns {Promise<Object>} Video object
   */
  async getVideo(id) {
    await new Promise(r => setTimeout(r, 300));
    const video = this._videos.find(v => v.id === id);
    if (!video) return { success: false, error: 'Video not found' };
    return { success: true, data: video };
  },

  /**
   * Get TikTok oEmbed for a URL
   * @param {string} url - TikTok video URL
   * @returns {Promise<Object>} oEmbed data
   */
  async getOEmbed(url) {
    try {
      // TikTok's public oEmbed endpoint (no API key needed)
      const res = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`);
      return await res.json();
    } catch (e) {
      return { success: false, error: 'Failed to fetch oEmbed', fallback: true };
    }
  },

  /**
   * Render TikTok videos into a container
   * @param {string} containerId - DOM element ID
   */
  async renderVideos(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Show skeletons
    container.innerHTML = Array(4).fill('<div class="tiktok-card"><div class="tiktok-video"><div class="skeleton skeleton-card"></div></div><div style="padding:1rem"><div class="skeleton" style="height:14px;width:80%;margin-bottom:.5rem"></div><div class="skeleton" style="height:12px;width:50%"></div></div></div>').join('');

    const result = await this.getVideos();
    if (!result.success) {
      container.innerHTML = '<p style="color:rgba(255,255,255,.5);text-align:center;grid-column:1/-1">Failed to load TikTok videos</p>';
      return;
    }

    container.innerHTML = result.data.map(v => `
      <div class="tiktok-card reveal">
        <div class="tiktok-video" onclick="playTikTok('${v.embedUrl}')">
          <img src="${v.thumbnail}" alt="${v.title}" loading="lazy">
          <div style="position:absolute;bottom:.5rem;right:.5rem;background:rgba(0,0,0,.7);padding:.2rem .5rem;border-radius:4px;font-size:.7rem;font-weight:600">${v.duration}</div>
          <div class="tiktok-play">
            <div class="tiktok-play-btn"><span class="iconify text-white text-2xl" data-icon="lucide:play"></span></div>
          </div>
        </div>
        <div class="tiktok-info">
          <p class="tiktok-caption">${v.title}</p>
          <div class="tiktok-stats">
            <span><span class="iconify" data-icon="lucide:eye"></span>${v.views}</span>
            <span><span class="iconify" data-icon="lucide:heart"></span>${v.likes}</span>
            <span><span class="iconify" data-icon="lucide:message-circle"></span>${v.comments}</span>
          </div>
        </div>
      </div>
    `).join('');

    // Re-observe reveal elements
    if (window._revealObs) {
      container.querySelectorAll('.reveal').forEach(el => window._revealObs.observe(el));
    }
  }
};

// TikTok modal player
function playTikTok(embedUrl) {
  const modal = document.createElement('div');
  modal.id = 'tiktokModal';
  modal.style.cssText = 'position:fixed;inset:0;z-index:200;background:rgba(4,17,29,.95);display:flex;align-items:center;justify-content:center;animation:msgIn .3s ease-out';
  modal.innerHTML = `
    <button onclick="document.getElementById('tiktokModal').remove()" style="position:absolute;top:1.5rem;right:1.5rem;width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;border:none;color:#fff;cursor:pointer;font-size:1.2rem;z-index:201">✕</button>
    <div class="tiktok-embed-container" style="max-width:400px;width:90%">
      <iframe src="${embedUrl}" allow="autoplay;encrypted-media" allowfullscreen style="width:100%;height:700px;border:none;border-radius:1rem"></iframe>
    </div>
    <p style="position:absolute;bottom:1.5rem;color:rgba(255,255,255,.3);font-size:.75rem">If video doesn't load, visit <a href="https://tiktok.com/@batticaloatourism" target="_blank" style="color:#2DD4BF">@batticaloatourism</a> on TikTok</p>`;
  document.body.appendChild(modal);
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
}


// ========== Instagram API ==========
const InstagramAPI = {
  baseUrl: '/api/instagram',

  // Mock post data
  _posts: [
    { id:'1', image:'https://picsum.photos/seed/ig-batti-lagoon-1/600/600', caption:'Morning mist over the lagoon 🌊 #Batticaloa #Lagoon #SriLanka', likes:'2,847', comments:'89', alt:'Batticaloa lagoon morning' },
    { id:'2', image:'https://picsum.photos/seed/ig-dutch-fort-2/600/600', caption:'History whispers through these walls 🏛️ #DutchFort #Heritage #Batticaloa', likes:'3,124', comments:'112', alt:'Dutch Fort Batticaloa' },
    { id:'3', image:'https://picsum.photos/seed/ig-pasikudah-3/600/600', caption:'Turquoise paradise at Pasikudah 💎 #Pasikudah #Beach #SriLankaTravel', likes:'5,621', comments:'234', alt:'Pasikudah beach' },
    { id:'4', image:'https://picsum.photos/seed/ig-crab-curry-4/600/600', caption:'Our legendary crab curry — you haven\'t tasted Sri Lanka until you\'ve tried this 🦀 #BatticaloaFood #CrabCurry', likes:'4,103', comments:'178', alt:'Crab curry Batticaloa' },
    { id:'5', image:'https://picsum.photos/seed/ig-kallady-sunset-5/600/600', caption:'Golden hour at Kallady Bridge 🌅 #Kallady #Sunset #Batticaloa', likes:'3,892', comments:'156', alt:'Kallady Bridge sunset' },
    { id:'6', image:'https://picsum.photos/seed/ig-gal-oya-6/600/600', caption:'Elephants swimming at Gal Oya — a sight you won\'t find anywhere else! 🐘🌊 #GalOya #WildlifeSafari', likes:'7,245', comments:'312', alt:'Gal Oya elephants' },
    { id:'7', image:'https://picsum.photos/seed/ig-fishing-7/600/600', caption:'Traditional lagoon fishing at dawn 🎣 #Fishing #LagoonLife #Batticaloa', likes:'2,156', comments:'67', alt:'Lagoon fishing' },
    { id:'8', image:'https://picsum.photos/seed/ig-temple-8/600/600', caption:'Ancient temples and timeless devotion 🙏 #BatticaloaTemples #Culture #SriLanka', likes:'3,567', comments:'134', alt:'Batticaloa temple' }
  ],

  /**
   * Fetch Instagram posts
   * @param {number} limit - Number of posts to return
   * @returns {Promise<Array>} Array of post objects
   */
  async getPosts(limit = 8) {
    await new Promise(r => setTimeout(r, 500));
    // In production: return fetch(this.baseUrl + `/posts?limit=${limit}`).then(r => r.json());
    return { success: true, data: this._posts.slice(0, limit), total: this._posts.length };
  },

  /**
   * Fetch single Instagram post
   * @param {string} id - Post ID
   * @returns {Promise<Object>} Post object
   */
  async getPost(id) {
    await new Promise(r => setTimeout(r, 200));
    const post = this._posts.find(p => p.id === id);
    if (!post) return { success: false, error: 'Post not found' };
    return { success: true, data: post };
  },

  /**
   * Render Instagram posts into a container
   * @param {string} containerId - DOM element ID
   * @param {number} limit - Number of posts
   * @param {boolean} showLoadMore - Show load more button
   */
  async renderPosts(containerId, limit = 8, showLoadMore = false) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Show skeletons
    container.innerHTML = Array(limit).fill('<div class="skeleton skeleton-square"></div>').join('');

    const result = await this.getPosts(limit);
    if (!result.success) {
      container.innerHTML = '<p style="color:rgba(255,255,255,.5);grid-column:1/-1;text-align:center">Failed to load Instagram posts</p>';
      return;
    }

    container.innerHTML = result.data.map(p => `
      <div class="ig-item">
        <img src="${p.image}" alt="${p.alt}" loading="lazy">
        <div class="ig-item-overlay">
          <div class="ig-stat"><span class="iconify" data-icon="lucide:heart"></span>${p.likes}</div>
          <div class="ig-stat"><span class="iconify" data-icon="lucide:message-circle"></span>${p.comments}</div>
        </div>
      </div>
    `).join('');

    if (showLoadMore) {
      const btn = document.createElement('div');
      btn.style.cssText = 'grid-column:1/-1;text-align:center;padding-top:1rem';
      btn.innerHTML = '<button class="btn btn-outline btn-sm" onclick="loadMoreIG(this)">Load More Posts</button>';
      container.appendChild(btn);
    }

    // Re-observe
    if (window._revealObs) {
      container.querySelectorAll('.reveal').forEach(el => window._revealObs.observe(el));
    }
  }
};

// Load more Instagram posts (cycles through data)
async function loadMoreIG(btn) {
  btn.textContent = 'Loading...';
  btn.disabled = true;
  await new Promise(r => setTimeout(r, 800));
  const container = btn.parentElement;
  btn.remove();
  const extras = [
    { id:'9', image:'https://picsum.photos/seed/ig-extra-1/600/600', caption:'Mangrove kayak adventure 🛶 #Mangrove #Adventure', likes:'1,823', comments:'45', alt:'Mangrove kayaking' },
    { id:'10', image:'https://picsum.photos/seed/ig-extra-2/600/600', caption:'Street food heaven in Batticaloa town 🍢 #StreetFood #BatticaloaEats', likes:'2,456', comments:'98', alt:'Street food' },
    { id:'11', image:'https://picsum.photos/seed/ig-extra-3/600/600', caption:'Night sky over the lagoon — zero light pollution ✨ #Astrophotography #Batticaloa', likes:'4,567', comments:'201', alt:'Night sky' },
    { id:'12', image:'https://picsum.photos/seed/ig-extra-4/600/600', caption:'Traditional Koothu dance performance 💃 #Koothu #TamilCulture #Batticaloa', likes:'3,234', comments:'145', alt:'Koothu dance' }
  ];
  extras.forEach(p => {
    const div = document.createElement('div');
    div.className = 'ig-item';
    div.innerHTML = `<img src="${p.image}" alt="${p.alt}" loading="lazy"><div class="ig-item-overlay"><div class="ig-stat"><span class="iconify" data-icon="lucide:heart"></span>${p.likes}</div><div class="ig-stat"><span class="iconify" data-icon="lucide:message-circle"></span>${p.comments}</div></div>`;
    container.appendChild(div);
  });
}