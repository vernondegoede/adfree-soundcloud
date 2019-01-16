/**
 * Every time you select a track (or automatically load the next track),
 * Soundcloud will request whether it should load an ad by making a request to
 * https://api-v2.soundcloud.com/audio-ad.
 * 
 * By intercepting these requests it will never load an ad.
 */
chrome.webRequest.onBeforeRequest.addListener(
  ({ url }) => {
    const isAdvertisementRequest = url.includes(
      "https://api-v2.soundcloud.com/audio-ad",
    );
    return isAdvertisementRequest ? { cancel: true } : {};
  },
  { urls: ["*://api-v2.soundcloud.com/*"] },
  ["blocking"],
);
