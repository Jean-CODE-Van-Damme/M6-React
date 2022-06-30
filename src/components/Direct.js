const Direct = ({ isDirect }) => {
  //   console.log(isDirect);
  return (
    <span className="direct">
      {isDirect === true && <span className="red">Direct</span>}
    </span>
  );
};

export default Direct;
