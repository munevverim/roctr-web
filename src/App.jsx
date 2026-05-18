import './index.css'
import './App.css'
import logo from './assets/roctr-logo.png'
import heroBg from './assets/hero-bg.png'
import preview from './assets/software-preview.png'

const features = [
  {
    title: '2D Kaya Düşmesi Simülasyonu',
    text: 'Gelişmiş algoritmalar ile şev profili üzerinde kaya hareketini, sıçrama yüksekliği ve enerji değişimini milimetrik hassasiyetle analiz edin.',
    icon: '🏔️'
  },
  {
    title: 'Detaylı Raporlama Sistemi',
    text: 'Mühendislik standartlarına uygun PDF/HTML rapor çıktıları ile tüm analiz sonuçlarını teknik olarak belgelendirin ve paylaşın.',
    icon: '📊'
  },
  {
    title: 'Güvenli Lisans Yönetimi',
    text: 'Machine ID tabanlı RSA-2048 şifreleme altyapısı ile yazılımınızı yetkisiz erişimlere karşı koruma altına alın.',
    icon: '🔒'
  },
]

function App() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="brand">
          <img src={logo} alt="RocTR Logo" />
          <div className="brand-text">
            <strong>RocTR</strong>
            <span>Rockfall Analysis</span>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#features">Özellikler</a>
          <a href="#analysis">Analiz Araçları</a>
          <a href="#about">Hakkımızda</a>
          <a href="mailto:info@roctr.app" className="cta-header">İletişime Geç</a>
        </nav>
      </header>

      <main>
        <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="hero-content">
            <span className="eyebrow">Geoteknik Mühendisliğinin Geleceği</span>
            <h1>Kaya Düşmesi Analizinde Yeni Standart: RocTR</h1>
            <p className="lead">
              RocTR; şev geometrisi, materyal parametreleri ve bariyer performansını 
              tek bir güçlü platformda birleştiren profesyonel analiz yazılımıdır.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#features">Ücretsiz Demo Başlat</a>
              <a className="btn ghost" href="#analysis">Teknik Detayları Gör</a>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          {features.map((item) => (
            <article key={item.title} className="card">
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>{item.icon}</div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section id="analysis" className="shot">
          <div className="shot-content">
            <span className="eyebrow" style={{ color: 'var(--primary)' }}>Kapsamlı Analiz Araçları</span>
            <h2>Karmaşık Projeleri Basitleştirin</h2>
            <ul>
              <li><strong>DXF Entegrasyonu:</strong> Mevcut şev geometrilerinizi saniyeler içinde içe aktarın.</li>
              <li><strong>Parametre Kalibrasyonu:</strong> Restitüsyon ve sürtünme katsayılarını hassas şekilde ayarlayın.</li>
              <li><strong>Bariyer Tasarımı:</strong> Koruyucu yapıların konumunu ve kapasitesini optimize edin.</li>
              <li><strong>Olasılıksal Analiz:</strong> Değişken parametreler ile risk senaryolarını simüle edin.</li>
            </ul>
            <a href="mailto:info@roctr.app" className="btn primary">Teknik Döküman İste</a>
          </div>
          <div className="shot-visual">
            <img src={preview} alt="Software Preview" className="shot-img" />
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Mühendislik Çözümlerinizi Güçlendirin</h2>
          <p>
            RocTR'ın projelerinize nasıl değer katabileceğini keşfetmek için hemen demo talebinde bulunun.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <a className="btn primary" href="mailto:info@roctr.app">info@roctr.app</a>
            <a className="btn ghost" href="tel:+900000000000" style={{ borderColor: 'white' }}>Bizi Arayın</a>
          </div>
        </section>
      </main>

      <footer style={{ padding: '40px 5%', background: '#111', color: '#777', textAlign: 'center', fontSize: '14px' }}>
        <p>&copy; 2024 RocTR Software. Tüm Hakları Saklıdır.</p>
        <div style={{ marginTop: '10px' }}>
          <a href="#" style={{ color: '#777', margin: '0 10px' }}>Gizlilik Politikası</a>
          <a href="#" style={{ color: '#777', margin: '0 10px' }}>Kullanım Şartları</a>
        </div>
      </footer>
    </div>
  )
}

export default App
