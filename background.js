chrome.action.onClicked.addListener((tab) => {
  chrome.system.display.getInfo((displayInfo) => {
    const primaryDisplay = displayInfo[0];
    const screenWidth = primaryDisplay.workArea.width;
    const popupWidth = 390;
    const popupHeight = 700;

    // Calculate the left position to open the popup on the right side of the screen.
    const leftPosition = screenWidth - popupWidth;

    chrome.windows.create(
      {
        url: "popup.html",
        type: "popup",
        width: popupWidth,
        height: popupHeight,
        left: leftPosition,
        top: 160,
      },
      (window) => {
        console.log("Popup window created:", window);
      }
    );
  });
});
