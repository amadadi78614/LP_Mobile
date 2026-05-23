import './Logo.css';

const LOGO_SRC = '/logo.png';

export function LogoMark({ className = '' }) {
  return (
    <img
      src={LOGO_SRC}
      alt="Lowveld Padel"
      className={`logo-mark-img ${className}`.trim()}
    />
  );
}

export function LogoFull({ className = '' }) {
  return (
    <img
      src={LOGO_SRC}
      alt="Lowveld Padel"
      className={`logo-full-img ${className}`.trim()}
    />
  );
}
