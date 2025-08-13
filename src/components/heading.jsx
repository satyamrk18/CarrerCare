const Heading = ({ title, stitle }) => {
  return (
    <div>
      <p className="text-[25px] font-semibold text-purple-900 ml-[10px] max-[900px]:text-[20px]">
        {title}
      </p>
      <p className="text-[20px] text-purple-900">{stitle}</p>
    </div>
  );
};

export default Heading;
