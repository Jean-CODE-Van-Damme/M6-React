const Inedit = ({ isInedit }) => {
  return (
    <span className="inedit">
      {isInedit === true && <span className="red">Inédit</span>}
    </span>
  );
};

export default Inedit;
