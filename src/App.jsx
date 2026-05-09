import './App.css'
import logo from './assets/roctr-logo.png'

const features = [
  {
    title: '2D Kaya Düşmesi Simülasyonu',
    text: 'Şev profili üzerinde kaya hareketini, sıçrama yüksekliği ve enerji değişimini analiz edin.',
  },
  {
    title: 'Detaylı Raporlama',
    text: 'PDF/HTML rapor çıktıları ile proje kararlarını teknik olarak belgelendirin.',
  },
  {
    title: 'Lisans Kontrollü Dağıtım',
    text: 'Machine ID tabanlı lisans yapısı ile kontrollü ve güvenli kullanıcı dağıtımı sağlayın.',
  },
]

function App() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="brand">
          <img src={logo} alt="RocTR Logo" />
          <div>
            <strong>RocTR</strong>
            <span>Professional Rockfall Analysis</span>
          </div>
        </div>
        <a className="cta" href="#contact">Demo Talep Et</a>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">Geoteknik Mühendisliği İçin</p>
          <h1>Kaya Düşmesi Analizini Hızlandırın</h1>
          <p className="lead">
            RocTR; şev geometrisi, materyal parametreleri ve bariyer performansını
            tek ekranda değerlendirmenizi sağlayan masaüstü analiz yazılımıdır.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#features">Özellikleri Gör</a>
            <a className="btn ghost" href="#contact">İletişime Geç</a>
          </div>
        </section>

        <section id="features" className="features">
          {features.map((item) => (
            <article key={item.title} className="card">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="shot">
          <div>
            <h2>RocTR ile Neler Yapabilirsiniz?</h2>
            <ul>
              <li>DXF tabanlı şev geometrisi yükleme ve düzenleme</li>
              <li>Restitüsyon, sürtünme ve pürüzlülük parametre kalibrasyonu</li>
              <li>Bariyer konumlandırma ve kapasite değerlendirmesi</li>
            </ul>
          </div>
          <img src={logo} alt="RocTR" />
        </section>

        <section id="contact" className="contact">
          <h2>Projeniz İçin İletişime Geçin</h2>
          <p>
            Demo, lisanslama ve teknik detaylar için bizimle iletişime geçebilirsiniz.
          </p>
          <a className="btn primary" href="mailto:info@roctr.app">info@roctr.app</a>
        </section>
      </main>
    </div>
  )
}

export default App
