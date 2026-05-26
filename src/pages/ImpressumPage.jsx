import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function ImpressumPage() {
  return (
    <div style={{ backgroundColor: '#f5f6f8', minHeight: '100vh', paddingTop: '100px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '40px 24px 100px' }}>

        <motion.div {...fade(0)} style={{ marginBottom: '8px' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontSize: '0.78rem', color: '#9aa5b4', textDecoration: 'none',
              fontWeight: 500, transition: 'color 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#0065BD'}
            onMouseLeave={e => e.currentTarget.style.color = '#9aa5b4'}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Zurück zur Startseite
          </Link>
        </motion.div>

        <motion.h1
          {...fade(0.05)}
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 900, color: '#0d1117',
            letterSpacing: '-0.03em', marginBottom: '48px', lineHeight: 1.1,
          }}
        >
          Impressum &amp; Datenschutz
        </motion.h1>

        {/* ── IMPRESSUM ── */}
        <motion.section {...fade(0.08)} style={{ marginBottom: '56px' }}>
          <h2 style={h2Style}>Impressum</h2>
          <p style={pStyle}>Angaben gemäß § 5 TMG</p>

          <h3 style={h3Style}>Verantwortlich</h3>
          <p style={pStyle}>
            AirTUM – Student Community<br />
            c/o TUM Campus Heilbronn<br />
            Bildungscampus 9<br />
            74076 Heilbronn<br />
            Deutschland
          </p>

          <h3 style={h3Style}>Kontakt</h3>
          <p style={pStyle}>
            E-Mail: <a href="mailto:contact@airtum.de" style={linkStyle}>contact@airtum.de</a>
          </p>

          <h3 style={h3Style}>Haftungsausschluss</h3>
          <p style={pStyle}>
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach
            den allgemeinen Gesetzen verantwortlich.
          </p>

          <h3 style={h3Style}>Haftung für Links</h3>
          <p style={pStyle}>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h3 style={h3Style}>Urheberrecht</h3>
          <p style={pStyle}>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
            deutschen Urheberrecht. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
            werden die Urheberrechte Dritter beachtet. Beiträge Dritter sind als solche gekennzeichnet.
            Der Quellcode dieser Website ist unter der MIT-Lizenz auf GitHub veröffentlicht.
          </p>
        </motion.section>

        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(0,101,189,0.15), transparent)', marginBottom: '56px' }} />

        {/* ── DATENSCHUTZ ── */}
        <motion.section {...fade(0.1)} id="datenschutz">
          <h2 style={h2Style}>Datenschutzerklärung</h2>

          <h3 style={h3Style}>1. Datenschutz auf einen Blick</h3>
          <p style={pStyle}>
            Diese Website wird als statische Seite über GitHub Pages gehostet. Wir erheben keine
            personenbezogenen Daten über eigene Formulare oder Tracking-Systeme.
          </p>

          <h3 style={h3Style}>2. Verantwortliche Stelle</h3>
          <p style={pStyle}>
            AirTUM – Student Community<br />
            c/o TUM Campus Heilbronn, Bildungscampus 9, 74076 Heilbronn<br />
            E-Mail: <a href="mailto:contact@airtum.de" style={linkStyle}>contact@airtum.de</a>
          </p>

          <h3 style={h3Style}>3. Hosting – GitHub Pages</h3>
          <p style={pStyle}>
            Diese Website wird auf Servern von GitHub Inc. (88 Colin P Kelly Jr St, San Francisco, CA 94107, USA)
            gehostet. GitHub kann beim Aufruf der Website technische Daten (z. B. IP-Adresse, Browsertyp,
            Betriebssystem, Referrer-URL, Datum und Uhrzeit des Zugriffs) in Server-Logfiles speichern.
            Dies erfolgt auf Basis von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren
            und stabilen Betrieb). Weitere Informationen finden Sie in der{' '}
            <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
              target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Datenschutzerklärung von GitHub
            </a>.
          </p>

          <h3 style={h3Style}>4. Keine Cookies, kein Tracking</h3>
          <p style={pStyle}>
            Diese Website setzt keine eigenen Cookies und verwendet kein Tracking (keine Google Analytics,
            keine Facebook Pixel, keine sonstigen Analyse-Dienste). Es werden keine Nutzungsprofile erstellt.
          </p>

          <h3 style={h3Style}>5. Kontaktaufnahme per E-Mail</h3>
          <p style={pStyle}>
            Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben (E-Mail-Adresse, Inhalt der Nachricht)
            zum Zweck der Bearbeitung Ihrer Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre
            Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung /
            berechtigtes Interesse). Sie können der Speicherung jederzeit widersprechen, sofern keine
            gesetzliche Aufbewahrungspflicht besteht.
          </p>

          <h3 style={h3Style}>6. Externe Links</h3>
          <p style={pStyle}>
            Diese Website enthält Links zu GitHub-Repositories und zur NXTSpace-Website. Beim Anklicken
            dieser Links verlassen Sie unsere Website. Für die Datenschutzpraktiken dieser externen Seiten
            sind wir nicht verantwortlich.
          </p>

          <h3 style={h3Style}>7. Ihre Rechte</h3>
          <p style={pStyle}>
            Sie haben gemäß DSGVO das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung
            (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie
            Widerspruch (Art. 21). Zur Ausübung Ihrer Rechte wenden Sie sich an:{' '}
            <a href="mailto:contact@airtum.de" style={linkStyle}>contact@airtum.de</a>.
          </p>
          <p style={pStyle}>
            Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
            Die zuständige Behörde für Baden-Württemberg ist der{' '}
            <a href="https://www.baden-wuerttemberg.datenschutz.de"
              target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Landesbeauftragte für Datenschutz und Informationsfreiheit Baden-Württemberg
            </a>.
          </p>

          <h3 style={h3Style}>8. Aktualität dieser Erklärung</h3>
          <p style={pStyle}>
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2026.
            Durch die Weiterentwicklung unserer Website kann eine Anpassung notwendig werden.
          </p>
        </motion.section>

      </div>
    </div>
  )
}

const h2Style = {
  fontSize: '1.3rem',
  fontWeight: 800,
  color: '#0d1117',
  letterSpacing: '-0.02em',
  marginBottom: '20px',
  marginTop: '0',
  paddingBottom: '10px',
  borderBottom: '2px solid rgba(0,101,189,0.12)',
}

const h3Style = {
  fontSize: '0.92rem',
  fontWeight: 700,
  color: '#0d1117',
  letterSpacing: '-0.01em',
  marginBottom: '8px',
  marginTop: '24px',
}

const pStyle = {
  fontSize: '0.88rem',
  color: '#4a5568',
  lineHeight: 1.8,
  marginBottom: '0',
}

const linkStyle = {
  color: '#0065BD',
  textDecoration: 'none',
  fontWeight: 500,
  borderBottom: '1px solid rgba(0,101,189,0.25)',
  transition: 'border-color 0.15s',
}
