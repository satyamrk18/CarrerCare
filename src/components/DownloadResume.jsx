import domtoimage from "dom-to-image-more";
import { ImageDown } from "lucide-react";

const DownloadButton = ({ targetRef }) => {
  const downloadImage = async () => {
    const node = targetRef.current;
    const scale = 3; // sharpness scale
    const width = node.offsetWidth * scale;
    const height = node.offsetHeight * scale;

    // Store original styles
    const originalChildStyles = [];
    const childElements = node.querySelectorAll("*");

    childElements.forEach((el) => {
      originalChildStyles.push({
        el,
        border: el.style.border,
        outline: el.style.outline,
        boxShadow: el.style.boxShadow,
      });

      // Keep only the special borders
      const isRoot = el === node;
      const isMainDivider = el.classList.contains("main-divider");

      if (isRoot) {
        el.style.borderLeft = "10px solid purple"; // permanent purple border
        el.style.borderTop = "none";
        el.style.borderRight = "none";
        el.style.borderBottom = "none";
      } else if (isMainDivider) {
        el.style.borderLeft = "1px solid black"; // divider border
      } else {
        el.style.border = "none";
      }

      el.style.outline = "none";
      el.style.boxShadow = "none";
    });

    try {
      const dataUrl = await domtoimage.toPng(node, {
        width,
        height,
        backgroundColor: "#ffffff",
        style: {
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: `${node.offsetWidth}px`,
          height: `${node.offsetHeight}px`,
        },
      });

      const link = document.createElement("a");
      link.download = "resume.jpg";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to download image", err);
    }

    // Restore original styles
    originalChildStyles.forEach(({ el, border, outline, boxShadow }) => {
      el.style.border = border;
      el.style.outline = outline;
      el.style.boxShadow = boxShadow;
    });
  };

  return (
    <button className="relative h-auto w-[160px] z-[1] mx-auto border-2 border-purple-600 px-4 py-3 rounded-[25px] text-[16px] font-semibold bg-white text-purple-600 flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ease-in-out shadow-[0_2px_4px_rgba(0,0,0,0.1)]
  hover:bg-purple-600 hover:text-white hover:-translate-y-[2px] hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)]
  active:translate-y-0 active:shadow-[0_2px_4px_rgba(0,0,0,0.1)]
  max-[359px]:w-[140px] max-[359px]:text-[14px] max-[359px]:px-3 max-[359px]:py-[10px]
  min-[360px]:max-[479px]:w-[140px] min-[360px]:max-[479px]:text-[14px] min-[360px]:max-[479px]:px-3 min-[360px]:max-[479px]:py-[10px]
  min-[480px]:max-[767px]:w-[150px] min-[480px]:max-[767px]:text-[15px]
  min-[768px]:max-[1023px]:w-[160px] min-[768px]:max-[1023px]:text-[16px]
  min-[1024px]:w-[170px] min-[1024px]:text-[16px]" onClick={downloadImage}>
      Download <ImageDown />
    </button>
  );
};

export default DownloadButton;
