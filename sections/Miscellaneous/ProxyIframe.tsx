interface Props {
  something?: string;
}

const runOnMount = () => {
  window.onload = () => {
    alert('onload');

    const iFrame = document.getElementById(
      "checkout-loader",
    ) as HTMLIFrameElement;

    if (!iFrame) {
      return console.error("Couldn't find iframe");
    }

    console.log({
      x: iFrame.contentWindow?.document.body.scrollWidth,
      y: iFrame.contentWindow?.document.body.scrollHeight,
    });

    iFrame.height = `${iFrame.contentWindow?.document.body.scrollHeight}`;
  };
};

export default function ProxyIframe({ something }: Props) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: `(${runOnMount})();` }}>
      </script>
      <iframe
        id="checkout-loader"
        style="width:100%;border:none;overflow:hidden;"
        src="http://localhost:8000/checkout"
        // onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));'
      >
      </iframe>
    </>
  );
}
