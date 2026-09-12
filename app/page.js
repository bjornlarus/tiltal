import Image from "next/image";
import styles from "../styles/Home.module.css";

const clients = [
  "TM",
  "Fagkaup",
  "Betri samgöngur",
  "Mynstur",
  "LazyTown",
  "Heimar",
  "Gangverk",
  "Ogilvy",
  "Nettó",
  "King Eider",
  "Gunnarshólmi",
  "Feed the Viking",
  "Byko",
  "Lýsi",
  "ORA",
];

const services = [
  {
    n: "01",
    title: "Stefna",
    body: "Skýr staða, skýr skilaboð og skýr leið þangað. Áður en nokkuð er skrifað er ákveðið hvað á að segja og við hvern.",
    items: ["Vörumerkjastefna", "Skilaboðakerfi", "Herferðaskipulag"],
  },
  {
    n: "02",
    title: "Textagerð",
    body: "Fyrirsagnir, slagorð, vefir, handrit, greinar. Texti sem er skrifaður til að vera lesinn og muna eftir.",
    items: ["Auglýsingatexti", "Vefur og UX-texti", "Handrit og ræður"],
  },
  {
    n: "03",
    title: "Hugmyndastjórn",
    body: "Stóra hugmyndin og hvernig hún lifir í öllum miðlum. Stjórn á heildarmyndinni frá fyrstu skissu að lokaútgáfu.",
    items: ["Herferðahugmyndir", "Sjónræn stefna", "Samstarf við teymi"],
  },
  {
    n: "04",
    title: "Efnisframleiðsla",
    body: "Frá hugmynd í fullbúið efni: myndbönd, myndir, samfélagsmiðlar og allt sem á að fara út, á réttum tíma.",
    items: ["Myndbönd og hljóð", "Samfélagsmiðlar", "Framleiðslustjórn"],
  },
];

const facts = [
  { v: "20+", l: "ára reynsla á stofum og hjá fyrirtækjum" },
  { v: "1", l: "tengiliður frá fyrsta fundi til lokaskila" },
  { v: "4", l: "sérsvið sem vinna sem eitt" },
  { v: "∞", l: "kaffibollar á leiðinni" },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a href="#top" className={styles.brand}>
          <Image
            src="/assets/wordmark-white.png"
            alt="tiltal"
            width={700}
            height={233}
            priority
            className={styles.wordmark}
          />
        </a>
        <nav className={styles.nav}>
          <a href="#thjonusta" className={styles.navLink}>
            Þjónusta
          </a>
          <a href="#vidskiptavinir" className={styles.navLink}>
            Viðskiptavinir
          </a>
          <a href="#um" className={styles.navLink}>
            Um tiltal
          </a>
          <a href="mailto:toti@tiltal.is" className={styles.navCta}>
            Hafa samband
          </a>
        </nav>
      </header>

      <main>
        <section id="top" className={styles.hero}>
          <Image
            src="/assets/nodes-orange.png"
            alt=""
            width={1800}
            height={1800}
            sizes="(max-width: 1285px) 70vw, 900px"
            className={`${styles.decor} ${styles.heroNodes}`}
          />
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>Markaðssamskipti</p>
            <h1 className={styles.heroTitle}>Orð sem hreyfa við fólki.</h1>
            <p className={styles.heroLead}>
              tiltal er lítil stofa með mikla reynslu. Stefnumótun, hugmynda-
              og textagerð, sköpunarstjórn og efnisframleiðsla. Allt á einum
              stað.
            </p>
            <div className={styles.heroActions}>
              <a href="mailto:toti@tiltal.is" className={styles.btnPrimary}>
                Byrjum samtalið
              </a>
              <a href="#thjonusta" className={styles.btnGhost}>
                Sjá þjónustu
              </a>
            </div>
          </div>
        </section>

        <section id="vidskiptavinir" className={styles.clients}>
          <div className={styles.clientsGrid}>
            <div>
              <p className={styles.eyebrow}>Viðskiptavinir</p>
              <h2 className={styles.clientsTitle}>
                Fyrirtæki og vörumerki sem hafa treyst tiltal
              </h2>
            </div>
            <ul className={styles.clientList}>
              {clients.map((c) => (
                <li key={c} className={styles.clientPill}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="thjonusta" className={styles.services}>
          <div className={styles.servicesHead}>
            <p className={styles.eyebrow}>Þjónusta</p>
            <h2 className={styles.servicesTitle}>Fjögur svið. Ein rödd.</h2>
          </div>
          <div className={styles.serviceGrid}>
            {services.map((s) => (
              <div key={s.n} className={styles.serviceCard}>
                <span className={styles.serviceNum}>{s.n}</span>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceBody}>{s.body}</p>
                <ul className={styles.serviceItems}>
                  {s.items.map((it) => (
                    <li key={it} className={styles.serviceItem}>
                      <span className={styles.dot} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.statement}>
          <Image
            src="/assets/nodes-orange.png"
            alt=""
            width={1800}
            height={1800}
            sizes="(max-width: 1200px) 60vw, 720px"
            className={`${styles.decor} ${styles.statementNodes}`}
          />
          <div className={styles.statementInner}>
            <blockquote className={styles.quote}>
              „Áhrifaríkt markaðsstarf felst í réttum skilaboðum, á réttum stað
              til rétts fólks.“
            </blockquote>
            <div className={styles.facts}>
              {facts.map((f) => (
                <div key={f.v}>
                  <div className={styles.factValue}>{f.v}</div>
                  <div className={styles.factLabel}>{f.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="um" className={styles.about}>
          <div className={styles.portraitFrame}>
            <Image
              src="/assets/portrait.jpg"
              alt="Þórhallur Arnórsson"
              fill
              sizes="(max-width: 700px) 100vw, 600px"
              className={styles.portrait}
            />
          </div>
          <div>
            <p className={styles.eyebrow}>Um Tiltal</p>
            <h2 className={styles.aboutTitle}>
              Ein manneskja. Enginn misskilningur.
            </h2>
            <p className={styles.aboutText}>
              tiltal er rekið af einum reyndum markaðsmanni sem hefur unnið
              jafnt á auglýsingastofum sem inni í fyrirtækjum, fyrir stór og
              smá vörumerki, á Íslandi og utan.
            </p>
            <p className={styles.aboutText}>
              Það þýðir að sá sem hlustar á þig er sá sem vinnur verkið.
              Hugmyndin týnist ekki á leiðinni og reikningurinn inniheldur enga
              fundi sem þú sast ekki.
            </p>
            <p className={styles.aboutText}>
              Þegar verkefnið kallar á fleiri hendur, ljósmyndara, hönnuði og
              framleiðendur, er gott net í kringum tiltal sem er kallað inn
              eftir þörfum.
            </p>
          </div>
        </section>

        <section id="hafa-samband" className={styles.contact}>
          <Image
            src="/assets/nodes-white.png"
            alt=""
            width={1600}
            height={1600}
            sizes="(max-width: 1267px) 60vw, 760px"
            className={`${styles.decor} ${styles.contactNodes}`}
          />
          <div className={styles.contactInner}>
            <div>
              <p className={styles.contactEyebrow}>Hafa samband</p>
              <h2 className={styles.contactTitle}>Eigum við að tala saman?</h2>
            </div>
            <div className={styles.contactLinks}>
              <a href="mailto:toti@tiltal.is" className={styles.contactLink}>
                toti@tiltal.is
              </a>
              <a
                href="https://www.instagram.com/tiltaltiltal/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <Image
          src="/assets/logo-white.png"
          alt="tiltal"
          width={500}
          height={174}
          className={styles.footerLogo}
        />
        <span className={styles.footerNote}>
          © {year} tiltal · Markaðssamskipti · Reykjavík
        </span>
      </footer>
    </div>
  );
}
