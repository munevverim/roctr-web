import './index.css'
import './App.css'
import logo from './assets/roctr-logo.png'
import heroBg from './assets/hero-bg.png'
import preview from './assets/software-preview.png'
import roctrImg from './assets/roctr.png'
import roctr3dImg from './assets/roctr3d.png'

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

const products = [
  {
    name: 'RocTR',
    badge: '2D Analiz',
    tagline: 'Profesyonel 2D Kaya Düşmesi Analizi',
    description: 'Şev profili üzerinde kaya hareketini, enerji dağılımını ve sıçrama yüksekliğini yüksek doğrulukla modelleyin. DXF desteği, PDF raporlama ve güvenli lisans yönetimi tek pakette.',
    img: null, // will use roctrImg
    imgKey: 'roctr',
    highlights: [
      '2D yörünge simülasyonu',
      'DXF/CAD dosya desteği',
      'Otomatik PDF rapor',
      'Bariyer optimizasyonu',
    ],
    badge2: 'Stabil Sürüm',
    color: '#e84d1c',
  },
  {
    name: 'RocTR 3D',
    badge: '3D Analiz',
    tagline: 'Tam 3D Kaya Düşmesi Simülasyonu',
    description: 'Karmaşık arazi yapılarını üç boyutlu olarak modelleyin. Gerçekçi terren yüzeyleri, 3D bariyer yerleşimi ve çoklu senaryo karşılaştırması ile mühendislik kararlarınızı güçlendirin.',
    img: null,
    imgKey: 'roctr3d',
    highlights: [
      '3D yörünge simülasyonu',
      'Gerçek terren yüzeyi',
      '3D bariyer tasarımı',
      'Çoklu senaryo analizi',
    ],
    badge2: 'Yeni',
    color: '#1c7ee8',
  },
]

function App() {
  const productImages = { roctr: roctrImg, roctr3d: roctr3dImg }

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
          <a href="#products">Ürünler</a>
          <a href="#analysis">Analiz Araçları</a>
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
              <a className="btn primary" href="#products">Ürünleri Keşfet</a>
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

        {/* Products Section */}
        <section id="products" className="products-section">
          <div className="products-header">
            <span className="eyebrow" style={{ color: 'var(--primary)' }}>Yazılım Ailesi</span>
            <h2 className="products-title">İki Güçlü Araç, Tek Ekosistem</h2>
            <p className="products-subtitle">
              Projenizin boyutuna ve karmaşıklığına göre 2D veya 3D analiz modülünü seçin.
            </p>
          </div>
          <div className="products-grid">
            {products.map((p) => (
              <div key={p.name} className="product-card" style={{ '--accent': p.color }}>
                <div className="product-card-header">
                  <div className="product-badges">
                    <span className="product-badge" style={{ background: p.color }}>{p.badge}</span>
                    <span className="product-badge-new">{p.badge2}</span>
                  </div>
                  <h3 className="product-name">{p.name}</h3>
                  <p className="product-tagline">{p.tagline}</p>
                </div>
                <div className="product-img-wrap">
                  <img
                    src={productImages[p.imgKey]}
                    alt={`${p.name} ekran görüntüsü`}
                    className="product-img"
                  />
                </div>
                <div className="product-body">
                  <p className="product-desc">{p.description}</p>
                  <ul className="product-highlights">
                    {p.highlights.map((h) => (
                      <li key={h}>
                        <span className="check-icon" style={{ color: p.color }}>✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <a href="mailto:info@roctr.app" className="btn product-cta" style={{ background: p.color }}>
                    Demo Talep Et
                  </a>
                </div>
              </div>
            ))}
          </div>
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
