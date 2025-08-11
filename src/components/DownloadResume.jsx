const downloadImage = async () => {
  const node = targetRef.current;

  const scale = 3;
  const width = node.offsetWidth * scale;
  const height = node.offsetHeight * scale;

  domtoimage
    .toPng(node, {
      width,
      height,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        width: `${node.offsetWidth}px`,
        height: `${node.offsetHeight}px`,
      },
      backgroundColor: "#ffffff",
    })
    .then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "resume.jpg";
      link.href = dataUrl;
      link.click();
    })
    .catch((err) => {
      console.error("Failed to download image", err);
    });
};
