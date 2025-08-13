const Education = ({education,college,percentage})=>
{
  return (
    <div className="break-words max-w-full">
      <ul className="list-none p-0 m-0">
        <li className="break-words whitespace-pre-wrap mb-[5px]">{education}</li>
        <li className="break-words whitespace-pre-wrap mb-[5px]">{college}</li>
        <li className="break-words whitespace-pre-wrap mb-[5px]">
          percentage : {percentage}%
        </li>
      </ul>
    </div>
  );
}
export default Education;