import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const linkStyle =
    "flex items-center gap-3 rounded-lg text-primary-text hover:text-accent-light transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light";

  const iconStyle =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-iconBg text-xl text-accent-light";

  return (
    <footer
      id="kontakt"
      className="grid grid-cols-1 items-center gap-8 rounded-card border border-card-border bg-card p-6 text-left md:grid-cols-2 md:gap-12 md:p-10"
    >
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-light">
          Kontakt
        </p>

        <h2 className="text-3xl font-bold leading-tight text-heading md:text-4xl">
          La oss bygge noe sammen
        </h2>

        <p className="mt-4 max-w-md text-base leading-relaxed text-secondary-text md:text-lg">
          Har du et prosjekt i tankene? Ta gjerne kontakt.
        </p>
      </div>

      <div className="flex min-w-0 flex-col items-start gap-4">
        <a
          href="mailto:Gorgos2002@icloud.com"
          className={`${linkStyle} max-w-full`}
        >
          <span className={iconStyle}>
            <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
          </span>
          <span className="min-w-0 break-words">Gorgos2002@icloud.com</span>
        </a>

        <a href="tel:+4746725849" className={linkStyle}>
          <span className={iconStyle}>
            <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
          </span>
          <span>+47 467 25 849</span>
        </a>

        <a
          href="https://www.linkedin.com/in/gorgos-tammo-8b2286230/"
          className={linkStyle}
        >
          <span className={iconStyle}>
            <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
          </span>
          <span>La oss holde kontakten på LinkedIn</span>
        </a>
      </div>
    </footer>
  );
}
