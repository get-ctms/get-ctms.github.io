// Ad attribution without cookies: a landing URL like ?src=gads-tpl is kept for this tab
// (sessionStorage) and appended to the install / copy-template counter links, so
// Cloudflare shows e.g. /install.html?from=hero-gads-tpl apart from normal clicks.
(function () {
    var src = null;
    try {
        var fromUrl = new URLSearchParams(location.search).get('src');
        if (fromUrl && /^[a-z0-9-]{1,30}$/i.test(fromUrl)) {
            src = fromUrl.toLowerCase();
            sessionStorage.setItem('ctms-src', src);
        } else {
            src = sessionStorage.getItem('ctms-src');
        }
    } catch (e) { /* storage blocked: tag only when src is in this URL */ }
    if (!src) return;

    var links = document.querySelectorAll('a[href^="install.html"], a[href^="copy-template.html"], a[href^="/install.html"], a[href^="/copy-template.html"]');
    for (var i = 0; i < links.length; i++) {
        var url = new URL(links[i].getAttribute('href'), location.href);
        url.searchParams.set('from', (url.searchParams.get('from') || 'link') + '-' + src);
        links[i].setAttribute('href', url.pathname.replace(/^\//, '') + url.search + url.hash);
    }
})();
