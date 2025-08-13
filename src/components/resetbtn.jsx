import { RefreshCcw } from "lucide-react";
const Reset = ({ btn }) => {
    const reset = ()=>
    {
        if(confirm("do you want to reset the form")== true)
        {
            window.location.reload();
        }
    }
  return (
    <div>
      <button className="relative h-auto w-[160px] z-[1] mx-auto border-2 border-purple-600 px-4 py-3 rounded-[25px] text-[16px] font-semibold bg-white text-purple-600 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ease-in-out shadow-[0_2px_4px_rgba(0,0,0,0.1)]
  hover:bg-purple-600 hover:text-white hover:-translate-y-[2px] hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)]
  active:translate-y-0 active:shadow-[0_2px_4px_rgba(0,0,0,0.1)]
  max-[359px]:w-[140px] max-[359px]:text-[14px] max-[359px]:px-3 max-[359px]:py-[10px]
  min-[360px]:max-[479px]:w-[140px] min-[360px]:max-[479px]:text-[14px] min-[360px]:max-[479px]:px-3 min-[360px]:max-[479px]:py-[10px]
  min-[480px]:max-[767px]:w-[150px] min-[480px]:max-[767px]:text-[15px]
  min-[768px]:max-[1023px]:w-[160px] min-[768px]:max-[1023px]:text-[16px]
  min-[1024px]:w-[170px] min-[1024px]:text-[16px]" type="button" onClick={reset}>
        {btn} <RefreshCcw />
      </button>
    </div>
  );
};
export default Reset;
