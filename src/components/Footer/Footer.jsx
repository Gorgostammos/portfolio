import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer
      id="kontakt"
      className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-8 lg:mx-12 bg-card border border-card-border rounded-card p-6 gap-3 mt-10">
      <div>
        <h2 className="text-3xl md:text-6xl text-heading font-bold">
          La oss bygge noe sammen
        </h2>
        <p className="text-lg md:text-xl text-secondary-text mt-2">
          ta gjerne kontakt
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <a
          href="mailto:Gorgos2002@icloud.com"
          className="flex items-center gap-3 hover:text-accent-light transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          Gorgos2002@icloud.com
        </a>

        <a
          href="tel:+4746725849"
          className="flex items-center gap-3 hover:text-accent-light transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faPhone} />
          +47-46725849
        </a>

        <a
          href="https://www.linkedin.com/in/gorgos-tammo-8b2286230/"
          className="flex items-center gap-3 hover:text-accent-light transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          la oss holde kontakten
        </a>
      </div>
    </footer>
  );
}
