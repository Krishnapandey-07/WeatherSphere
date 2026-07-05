import "../styles/SectionTitle.css";

function SectionTitle({ title, subtitle, align = "left" }) {
  return (
    <div className={`section-title ${align}`}>
      <h2>{title}</h2>

      {subtitle && (
        <p className="section-subtitle">{subtitle}</p>
      )}
    </div>
  );
}

export default SectionTitle;