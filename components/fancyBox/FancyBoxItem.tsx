const FancyBoxItem = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <p>
        <a data-fancybox="gallery" href="https://lipsum.app/id/33/1024x768">
          <img alt="" src="https://lipsum.app/id/33/200x150" />
        </a>

        <a data-fancybox="gallery" href="https://lipsum.app/id/34/1024x768">
          <img alt="" src="https://lipsum.app/id/34/200x150" />
        </a>

        <a data-fancybox="gallery" href="https://lipsum.app/id/35/1024x768">
          <img alt="" src="https://lipsum.app/id/35/200x150" />
        </a>

        <a data-fancybox="gallery" href="https://lipsum.app/id/36/1024x768">
          <img alt="" src="https://lipsum.app/id/36/200x150" />
        </a>
      </p>

      <p>
        <button data-fancybox="dialog" data-src="#dialog-content">
          Launch Dialog
        </button>
      </p>
      <div id="dialog-content" style={{ display: "none", maxWidth: "500px" }}>
        <h2>Hello, world!</h2>
        <p>
          <input type="text" value="" />
        </p>
        <p>
          Try hitting the tab key and notice how the focus stays within the
          dialog itself.
        </p>
        <p>
          To close dialog hit the esc button, click on the overlay or just click
          the close button.
        </p>
        <p className="margin-bottom--none">
          Element used to launch the modal would receive focus back after
          closing.
        </p>
      </div>
    </div>
  );
};

export { FancyBoxItem };
