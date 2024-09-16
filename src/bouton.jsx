function Bouton({text,size,link}) {
  return (
    <button>
        <a href={link} style={{fontSize: size}}>{text}</a>
    </button>
  );
}

export default Bouton;