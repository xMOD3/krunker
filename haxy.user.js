// ==UserScript==
// @name         Krunker haxy
// @version      1.0
// @author       gpy-dev
// @include      /^(https?:\/\/)?(www\.)?(.+)krunker\.io(|\/|\/\?(game|server|party)=.+)$/
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @namespace garlicpy
// ==/UserScript==

window.stop();
document.innerHTML = "";

GM_xmlhttpRequest({
	method: "GET",
	url: document.location.origin,
	onload: res => {
		let html = res.responseText;
		html = html.replace(/game\.[^\.]+\.js/, '___.js');
	    html += '<script src="https://raw.githack.com/gpy-dev/krunker/master/bypass.js"></script>';
	    html += '<script src="https://raw.githack.com/gpy-dev/krunker/master/haxy.js"></script>';
	    html += '<script src="https://raw.githack.com/gpy-dev/krunker/master/game.js"></script>'
		document.open();
		document.write(html);
		document.close();
	}
})