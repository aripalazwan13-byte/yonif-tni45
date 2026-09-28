/* script.js — Logika interaktif, LocalStorage, Kuis, Materi */

// ========== DATA MATERI (9 TOPIK SESUAI JUDUL BESAR) ==========
const materiData = {
  hakikat: {
    title: "1. Hakikat Pemasaran",
    icon: "fa-lightbulb",
    content: `
      <span class="badge">Konsep Dasar</span>
      <p><strong>Pemasaran</strong> adalah kegiatan menciptakan, mengomunikasikan, menyampaikan, dan menukar produk yang memiliki nilai bagi konsumen.</p>
      <p><strong>Tujuan utama:</strong></p>
      <ul>
        <li>Memenuhi kebutuhan konsumen</li>
        <li>Menjaga kepuasan konsumen</li>
        <li>Memperoleh keuntungan bagi perusahaan</li>
      </ul>
      <p>Dalam konteks TKJ, pemasaran perangkat keras seperti router, switch, dan access point tidak hanya menjual barang, tetapi juga menawarkan solusi jaringan yang andal.</p>
    `
  },
  aspek: {
    title: "2. Aspek-Aspek Pemasaran",
    icon: "fa-compass",
    content: `
      <span class="badge">Orientasi Pemasaran</span>
      <p>Orientasi pemasaran terdiri dari beberapa jenis:</p>
      <ul>
        <li><strong>Orientasi produk:</strong> Mengutamakan kualitas dan standar produk.</li>
        <li><strong>Orientasi penjualan:</strong> Mengutamakan penjualan melalui promosi.</li>
        <li><strong>Orientasi produksi:</strong> Memproduksi barang dalam jumlah besar karena permintaan tinggi.</li>
        <li><strong>Orientasi pemasaran:</strong> Menyediakan produk sesuai kebutuhan konsumen.</li>
        <li><strong>Orientasi konsumen:</strong> Menyesuaikan produk dengan selera dan kebutuhan konsumen.</li>
      </ul>
      <p>Untuk produk perangkat keras jaringan, orientasi pemasaran dan konsumen paling relevan karena kebutuhan teknis pelanggan sangat spesifik.</p>
    `
  },
  lingkungan: {
    title: "3. Lingkungan Pemasaran",
    icon: "fa-globe",
    content: `
      <span class="badge">Makro & Mikro</span>
      <p>Lingkungan pemasaran terdiri dari tiga macam, namun materi ini menjelaskan dua jenis berikut:</p>
      <h4><i class="fas fa-earth-asia"></i> Lingkungan Makro</h4>
      <p>Faktor berskala luas, seperti ekonomi, sosial, politik, teknologi, hukum, dan ekologi. Analisisnya dapat menggunakan metode <strong>PESTLE</strong>.</p>
      <ul>
        <li><strong>P</strong>olitik — kebijakan impor perangkat jaringan</li>
        <li><strong>E</strong>konomi — daya beli sekolah/perusahaan</li>
        <li><strong>S</strong>osial — tren kerja remote & digitalisasi</li>
        <li><strong>T</strong>eknologi — perkembangan WiFi 6, 5G</li>
        <li><strong>L</strong>egal — regulasi sertifikasi perangkat</li>
        <li><strong>E</strong>kologi — efisiensi energi perangkat</li>
      </ul>
      <h4><i class="fas fa-handshake"></i> Lingkungan Mikro</h4>
      <p>Pihak-pihak yang dekat dengan produsen, seperti konsumen, pegawai, pemasok (supplier), dan media. Lingkungan ini lebih mudah dikendalikan perusahaan.</p>
    `
  },
  bauran: {
    title: "4. Bauran Pemasaran (Marketing Mix)",
    icon: "fa-cubes",
    content: `
      <span class="badge">4P</span>
      <p>Bauran pemasaran adalah kumpulan kegiatan yang dilakukan perusahaan untuk memengaruhi keputusan konsumen. Terdiri dari <strong>4P</strong>:</p>
      <table>
        <thead>
          <tr>
            <th>Elemen</th>
            <th>Penjelasan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Product</strong> (Produk)</td>
            <td>Barang atau jasa yang memenuhi kebutuhan konsumen, termasuk fitur dan garansi.</td>
          </tr>
          <tr>
            <td><strong>Price</strong> (Harga)</td>
            <td>Nilai yang harus dibayar konsumen untuk memperoleh produk.</td>
          </tr>
          <tr>
            <td><strong>Place</strong> (Distribusi)</td>
            <td>Cara produk disalurkan hingga sampai ke konsumen.</td>
          </tr>
          <tr>
            <td><strong>Promotion</strong> (Promosi)</td>
            <td>Kegiatan memperkenalkan dan menarik minat konsumen melalui iklan, publisitas, dan penjualan pribadi.</td>
          </tr>
        </tbody>
      </table>
      <p><em>Contoh penerapan 4P pada produk switch managed:</em> fitur VLAN (Product), harga kompetitif (Price), distribusi via distributor IT (Place), demo produk ke sekolah (Promotion).</p>
    `
  },
  strategi: {
    title: "5. Strategi Pemasaran",
    icon: "fa-chess",
    content: `
      <span class="badge">Perencanaan</span>
      <p>Strategi pemasaran adalah rencana untuk mencapai tujuan perusahaan dan meningkatkan penjualan.</p>
      <p><strong>Hal-hal yang perlu diperhatikan:</strong></p>
      <ul>
        <li>Melakukan <strong>riset pasar</strong> untuk mengetahui kebutuhan konsumen.</li>
        <li>Menentukan <strong>pasar sasaran</strong>, seperti pasar individual, pasar khusus (niche market), dan segmentasi pasar.</li>
        <li>Memperhatikan <strong>persaingan</strong> melalui kualitas, kenyamanan, inovasi, kecepatan, serta pelayanan.</li>
        <li>Membangun <strong>kepuasan dan kepercayaan</strong> konsumen.</li>
      </ul>
      <p>Untuk produk TKJ, segmentasi pasar bisa diarahkan ke sekolah, kantor, ISP, atau gamer yang membutuhkan perangkat berperforma tinggi.</p>
    `
  },
  hardware: {
    title: "6. Pemasaran pada Industri Perangkat Keras",
    icon: "fa-microchip",
    content: `
      <span class="badge">Industri Hardware</span>
      <p>Industri perangkat keras memiliki <strong>persaingan tinggi</strong>, <strong>perubahan teknologi yang cepat</strong>, dan <strong>siklus hidup produk yang relatif pendek</strong>.</p>
      <p><strong>Strategi pemasaran yang dapat digunakan:</strong></p>
      <ul>
        <li><strong>Afiliasi:</strong> Menjual produk melalui pihak lain dengan memberikan komisi.</li>
        <li><strong>Dropship:</strong> Menjual produk tanpa menyimpan stok barang.</li>
        <li><strong>Kerja sama promosi:</strong> Bekerja sama dengan perusahaan lain untuk memperkenalkan produk.</li>
        <li><strong>Iklan:</strong> Memperkenalkan produk melalui berbagai media.</li>
      </ul>
      <p>Contoh: menjual router Mikrotik melalui marketplace dengan sistem dropship, atau bekerja sama dengan penyedia jasa instalasi jaringan.</p>
    `
  },
  media: {
    title: "7. Media Pemasaran",
    icon: "fa-bullhorn",
    content: `
      <span class="badge">Saluran Promosi</span>
      <p>Media pemasaran yang digunakan untuk memasarkan produk perangkat keras antara lain:</p>
      <ul>
        <li><strong>Nawala (newsletter):</strong> Mengirimkan informasi produk kepada konsumen.</li>
        <li><strong>Katalog:</strong> Menampilkan daftar produk beserta informasi yang dibutuhkan konsumen.</li>
        <li><strong>Mesin pencari:</strong> Membantu konsumen menemukan produk melalui kata kunci.</li>
        <li><strong>Media sosial dan website:</strong> Memperkenalkan produk secara online.</li>
      </ul>
      <p>Untuk produk TKJ, media seperti YouTube (review perangkat), Instagram (foto produk), dan website resmi distributor sangat efektif.</p>
    `
  },
  iklan: {
    title: "8. Iklan dalam Pemasaran",
    icon: "fa-tv",
    content: `
      <span class="badge">Komunikasi Berbayar</span>
      <p><strong>Iklan</strong> adalah bentuk komunikasi berbayar untuk memperkenalkan dan mempromosikan produk atau jasa.</p>
      <h4><i class="fas fa-bullseye"></i> Fungsi Iklan</h4>
      <ul>
        <li><strong>Menginformasikan:</strong> Memberikan informasi tentang produk.</li>
        <li><strong>Membujuk:</strong> Mendorong konsumen untuk membeli atau mencoba produk.</li>
        <li><strong>Mengingatkan:</strong> Membuat konsumen tetap mengingat produk.</li>
        <li><strong>Memberikan nilai tambah:</strong> Membangun persepsi positif terhadap produk.</li>
        <li><strong>Mendukung promosi:</strong> Membantu kegiatan pemasaran lainnya.</li>
      </ul>
      <h4><i class="fas fa-rectangle-ad"></i> Jenis Iklan</h4>
      <ul>
        <li><strong>Iklan cetak:</strong> Iklan baris, iklan kolom, dan advertorial.</li>
        <li><strong>Iklan elektronik:</strong> Iklan radio, televisi, dan internet.</li>
        <li><strong>Iklan display:</strong> Iklan dengan gambar dan tulisan berukuran besar.</li>
      </ul>
      <h4><i class="fas fa-check-circle"></i> Syarat Iklan yang Baik</h4>
      <ul>
        <li>Objektif dan jujur.</li>
        <li>Jelas dan mudah dipahami.</li>
        <li>Tidak menyinggung pihak lain.</li>
        <li>Menarik perhatian masyarakat.</li>
      </ul>
    `
  },
  kesimpulan: {
    title: "Kesimpulan",
    icon: "fa-flag-checkered",
    content: `
      <span class="badge">Rangkuman</span>
      <p>Pemasaran merupakan kegiatan untuk memenuhi kebutuhan konsumen sekaligus memperoleh keuntungan.</p>
      <p><strong>Keberhasilannya ditentukan oleh:</strong></p>
      <ul>
        <li>Pemahaman terhadap <strong>lingkungan pemasaran</strong> (makro & mikro).</li>
        <li>Pemilihan <strong>strategi yang tepat</strong> (STP, riset pasar, persaingan).</li>
        <li>Penerapan <strong>bauran pemasaran 4P</strong> (Product, Price, Place, Promotion).</li>
        <li>Penggunaan <strong>media promosi dan iklan</strong> yang sesuai.</li>
      </ul>
      <p>Bagi siswa TKJ, kemampuan memasarkan produk perangkat keras menjadi nilai tambah dalam dunia kerja, baik sebagai teknisi, wirausaha, maupun tenaga penjualan teknis.</p>
    `
  }
};

const TOTAL_TOPICS = 9;

// ========== STATE ==========
let currentTopic = 'hakikat';

const quizQuestions = [
  {
    question: "Apa yang dimaksud dengan lingkungan pemasaran mikro?",
    options: [
      "Faktor demografi, ekonomi, dan teknologi",
      "Perusahaan, pemasok, perantara, pelanggan, pesaing",
      "Kebijakan pemerintah dan budaya",
      "Harga, produk, tempat, promosi"
    ],
    correct: 1
  },
  {
    question: "Dalam bauran pemasaran, 'Place' merujuk pada ...",
    options: [
      "Strategi harga produk",
      "Saluran distribusi dan lokasi",
      "Promosi penjualan",
      "Kualitas produk"
    ],
    correct: 1
  },
  {
    question: "Contoh strategi pemasaran untuk produk perangkat keras jaringan adalah ...",
    options: [
      "Menyembunyikan spesifikasi teknis",
      "Menonjolkan keandalan dan dukungan teknis",
      "Menjual dengan harga setinggi mungkin",
      "Tidak perlu promosi"
    ],
    correct: 1
  },
  {
    question: "Segmentasi pasar berdasarkan perilaku konsumen termasuk ...",
    options: [
      "Segmentasi geografis",
      "Segmentasi psikografis",
      "Segmentasi perilaku",
      "Segmentasi demografis"
    ],
    correct: 2
  },
  {
    question: "Dalam 4P, 'Promotion' mencakup ...",
    options: [
      "Produk, harga, tempat",
      "Periklanan, penjualan pribadi, promosi penjualan",
      "Distribusi dan logistik",
      "Desain kemasan"
    ],
    correct: 1
  }
];

// ========== LOCALSTORAGE KEYS ==========
const STORAGE_MATERI = 'pemasaran_materi_done';
const STORAGE_QUIZ = 'pemasaran_quiz_score';
const STORAGE_LAST = 'pemasaran_last_active';

// ========== UTILITY ==========
function getMateriDone() {
  const data = localStorage.getItem(STORAGE_MATERI);
  return data ? JSON.parse(data) : {};
}
function setMateriDone(obj) {
  localStorage.setItem(STORAGE_MATERI, JSON.stringify(obj));
  updateAllProgressBars();
}
function getQuizScore() {
  return parseInt(localStorage.getItem(STORAGE_QUIZ)) || 0;
}
function setQuizScore(score) {
  localStorage.setItem(STORAGE_QUIZ, score);
  updateAllProgressBars();
  updateProgressDashboard();
}
function updateLastActive() {
  const now = new Date().toLocaleString('id-ID');
  localStorage.setItem(STORAGE_LAST, now);
}
function getLastActive() {
  return localStorage.getItem(STORAGE_LAST) || '-';
}

// ========== NAVIGASI ==========
function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
  document.getElementById(`page-${pageId}`).classList.add('active-page');
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === pageId) link.classList.add('active');
  });
  if (pageId === 'progres') {
    updateProgressDashboard();
  }
}

// ========== RENDER MATERI ==========
function renderMateri(topicKey) {
  const container = document.getElementById('materiContainer');
  const data = materiData[topicKey];
  if (!data) return;
  const done = getMateriDone();
  const isDone = !!done[topicKey];
  container.innerHTML = `
    <div class="materi-content">
      <h3><i class="fas ${data.icon}"></i> ${data.title}</h3>
      ${data.content}
      <button class="mark-done-btn ${isDone ? 'done' : ''}" id="markDoneBtn" data-topic="${topicKey}">
        <i class="fas ${isDone ? 'fa-circle-check' : 'fa-circle'}"></i>
        ${isDone ? 'Selesai dipelajari' : 'Tandai selesai'}
      </button>
    </div>
  `;
  document.getElementById('markDoneBtn').addEventListener('click', (e) => {
    const topic = e.currentTarget.dataset.topic;
    const doneObj = getMateriDone();
    if (doneObj[topic]) {
      delete doneObj[topic];
    } else {
      doneObj[topic] = true;
      updateLastActive();
    }
    setMateriDone(doneObj);
    renderMateri(topic);
  });
}

// ========== UPDATE SEMUA PROGRESS ==========
function updateAllProgressBars() {
  const done = getMateriDone();
  const count = Object.keys(done).length;
  const percent = Math.round((count / TOTAL_TOPICS) * 100);

  // Badge navbar
  document.getElementById('progressText').textContent = percent + '%';

  // Halaman materi
  const label = document.getElementById('materiProgressLabel');
  if (label) label.textContent = `${count} dari ${TOTAL_TOPICS} topik selesai`;
  const fill = document.getElementById('materiProgressFill');
  if (fill) fill.style.width = percent + '%';

  // Dashboard
  const statMateri = document.getElementById('statMateri');
  if (statMateri) statMateri.textContent = `${count}/${TOTAL_TOPICS}`;
  const statBar = document.getElementById('statMateriBar');
  if (statBar) statBar.style.width = percent + '%';
}

// ========== UPDATE PROGRESS DASHBOARD ==========
function updateProgressDashboard() {
  const score = getQuizScore();
  const statQuiz = document.getElementById('statQuizScore');
  if (statQuiz) statQuiz.textContent = score;
  const statLast = document.getElementById('statLastActive');
  if (statLast) statLast.textContent = getLastActive();
  updateAllProgressBars();
}

// ========== RESET MATERI ==========
function resetMateri() {
  if (!confirm('Reset semua progres materi?')) return;
  localStorage.removeItem(STORAGE_MATERI);
  updateAllProgressBars();
  renderMateri(currentTopic);
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.topic === currentTopic);
  });
}

// ========== RESET SEMUA ==========
function resetAllProgress() {
  if (!confirm('Hapus semua progres (materi + nilai kuis)?')) return;
  localStorage.removeItem(STORAGE_MATERI);
  localStorage.removeItem(STORAGE_QUIZ);
  localStorage.removeItem(STORAGE_LAST);
  updateAllProgressBars();
  updateProgressDashboard();
  renderMateri(currentTopic);
  document.getElementById('quizResult').style.display = 'none';
  document.getElementById('quizWrapper').style.display = 'block';
  initQuiz();
}

// ========== KUIS ==========
let quizState = {
  current: 0,
  answers: [],
  answered: false
};

function initQuiz() {
  quizState = { current: 0, answers: new Array(quizQuestions.length).fill(null), answered: false };
  document.getElementById('quizResult').style.display = 'none';
  document.getElementById('quizWrapper').style.display = 'block';
  renderQuiz();
}

function renderQuiz() {
  const wrapper = document.getElementById('quizWrapper');
  const q = quizQuestions[quizState.current];
  const selected = quizState.answers[quizState.current];

  wrapper.innerHTML = `
    <div class="quiz-question">${quizState.current + 1}. ${q.question}</div>
    <div class="quiz-options">
      ${q.options.map((opt, i) => `
        <div class="quiz-option ${selected === i ? 'selected' : ''}" data-index="${i}">
          <strong>${String.fromCharCode(65 + i)}.</strong> ${opt}
        </div>
      `).join('')}
    </div>
    <div class="quiz-nav">
      <button class="btn btn-outline btn-small" id="prevBtn" ${quizState.current === 0 ? 'disabled style="opacity:0.4;pointer-events:none;"' : ''}>
        <i class="fas fa-arrow-left"></i> Sebelumnya
      </button>
      <span class="quiz-progress-indicator">Soal ${quizState.current + 1} / ${quizQuestions.length}</span>
      <button class="btn btn-primary btn-small" id="nextBtn">
        ${quizState.current === quizQuestions.length - 1 ? '<i class="fas fa-check"></i> Selesai' : 'Selanjutnya <i class="fas fa-arrow-right"></i>'}
      </button>
    </div>
  `;

  wrapper.querySelectorAll('.quiz-option').forEach(opt => {
    opt.addEventListener('click', () => {
      quizState.answers[quizState.current] = parseInt(opt.dataset.index);
      renderQuiz();
    });
  });

  const prevBtn = document.getElementById('prevBtn');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (quizState.current > 0) {
        quizState.current--;
        renderQuiz();
      }
    });
  }

  document.getElementById('nextBtn').addEventListener('click', () => {
    if (quizState.current < quizQuestions.length - 1) {
      quizState.current++;
      renderQuiz();
    } else {
      finishQuiz();
    }
  });
}

function finishQuiz() {
  let correct = 0;
  quizQuestions.forEach((q, i) => {
    if (quizState.answers[i] === q.correct) correct++;
  });
  const score = Math.round((correct / quizQuestions.length) * 100);

  // Simpan hanya jika lebih tinggi dari nilai sebelumnya
  if (score > getQuizScore()) {
    setQuizScore(score);
  }

  document.getElementById('quizWrapper').style.display = 'none';
  const result = document.getElementById('quizResult');
  result.style.display = 'block';
  document.getElementById('quizScoreDisplay').textContent = score;

  updateProgressDashboard();
}

// ========== EVENT BINDING ==========
document.addEventListener('DOMContentLoaded', () => {
  // Navigasi
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(link.dataset.page);
    });
  });

  // Tab materi (task bar)
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTopic = btn.dataset.topic;
      renderMateri(currentTopic);
    });
  });

  // Tombol hero
  document.getElementById('startLearningBtn').addEventListener('click', () => {
    navigateTo('materi');
    currentTopic = 'hakikat';
    renderMateri('hakikat');
    document.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.topic === 'hakikat');
    });
  });

  document.getElementById('quickQuizBtn').addEventListener('click', () => {
    navigateTo('kuis');
    initQuiz();
  });

  // Reset
  document.getElementById('resetMateriBtn').addEventListener('click', resetMateri);
  document.getElementById('resetAllProgressBtn').addEventListener('click', resetAllProgress);
  document.getElementById('retryQuizBtn').addEventListener('click', initQuiz);

  // Inisialisasi awal
  renderMateri('hakikat');
  updateAllProgressBars();
  updateProgressDashboard();
  initQuiz();
  updateLastActive();
});