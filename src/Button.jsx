function Button({ texto, onClick, type = 'button' }) {
  return (
    <button type={type} onClick={onClick} className="btn">
      {texto}
    </button>
  );
}

export default Button;