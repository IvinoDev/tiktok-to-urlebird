chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        const url = new URL(details.url);

        if (url.hostname === 'www.tiktok.com') {
            if (url.pathname.startsWith('/@')) {
                const username = url.pathname.substring(2);
                const redirectUrl = `https://urlebird.com/user/${username}/`;
                return { redirectUrl };
            } else if (url.pathname.startsWith('/@') && url.pathname.includes('/video/')) {
                const videoId = url.pathname.split('/video/')[1].split('/')[0];
                const redirectUrl = `https://urlebird.com/video/${videoId}/`;
                return { redirectUrl };
            }
        }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
);
