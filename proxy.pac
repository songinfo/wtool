function FindProxyForURL(url, host) {
	if (isPlainHostName(host)) {
		return "DIRECT";
	}
	else if (shExpMatch(host, "twitter.com")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "vimeo.com")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "ow.ly")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "twimg.com")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "t.co")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "medium.com")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "udn.com")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "goo.gl")) {
		return "PROXY 10.81.254.21:3128";
	}
    else if (shExpMatch(host, "bit.ly")) {
        return "PROXY 10.81.254.21:3128";
    }
	else if (shExpMatch(host, "hk.on.cc")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "on.cc")) {
		return "PROXY 10.81.254.21:3128";
	}
    else if (shExpMatch(host, "facebookblueprint.com")) {
        return "PROXY 10.81.254.21:3128";
    }
    else if (shExpMatch(host, "exceedlms.com")) {
        return "PROXY 10.81.254.21:3128";
    }
	else if (shExpMatch(host, "instagram.com")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "time.com")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "angelist.com")) {
		return "PROXY 10.81.254.21:3128";
	}
    else if (shExpMatch(host, "gist.github.com")) {
        return "PROXY 10.81.254.21:3128";
    }
	else if (shExpMatch(host, "dwnews.com")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "eiga.com")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "golang.org")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "amazon.de")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "ssl-images-amazon.com")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "imgur.com")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "boxun.com")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "dwnews.net")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "co.uk")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "bild.de")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "nginx.org")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "clipro.tv")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "nba.com")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "gettyimages.ca")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "gettyimages.co.uk")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "box.com")) {
        return "PROXY 10.81.254.21:3128";
    }
	else if (shExpMatch(host, "espn.go.com")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "basketball-reference.com")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "downinst.com")) {
		return "PROXY 10.81.254.21:3128";
	}
	else if (shExpMatch(host, "savevideo.me")) {
		return "PROXY 10.81.254.21:3128";
	}

	url = url.toLowerCase();
	if (shExpMatch(url, "*.google*.com*")||
	  shExpMatch(url, "*.newsnow.co.uk*")||
	  shExpMatch(url, "*.bahamut.com.tw*")||
	  shExpMatch(url, "*.rfi.fr*")||
	  shExpMatch(url, "*.chrome.com*")||
	  shExpMatch(url, "*.chromium.org*")||
	  shExpMatch(url, "*.intergi.com*")||
	  shExpMatch(url, "*.rubiconproject.com*")||
	  shExpMatch(url, "*.adtechus.com*")||
	  shExpMatch(url, "*.contextweb.com*")||
	  shExpMatch(url, "*.adnxs.com*")||
	  shExpMatch(url, "*.zergnet.com*")||
	  shExpMatch(url, "*.metacritic.com*")||
	  shExpMatch(url, "*.dualshockers.com*")||
	  shExpMatch(url, "*.gamer.com.tw*")||
	  shExpMatch(url, "*.pcucgame.com*")||
	  shExpMatch(url, "*.puppetlabs.com*")||
	  shExpMatch(url, "*.puppet.com*")||
	  shExpMatch(url, "*.haproxy.org*")||
	  shExpMatch(url, "*.sascdn.com*")||
	  shExpMatch(url, "*.manageengine.com*")||
	  shExpMatch(url, "*.zaobao.com.sg*")||
	  shExpMatch(url, "*.zabbix.com*")||
	  shExpMatch(url, "*.kotaku.com*")||
	  shExpMatch(url, "*.9gag.com*")||
	  shExpMatch(url, "*.imgur.com*")||
	  shExpMatch(url, "*.rfa.org*")||
	  shExpMatch(url, "*.angelist.com*")||
	  shExpMatch(url, "*.vimeo.com*")||
	  shExpMatch(url, "*.newsnow.net*")||
	  shExpMatch(url, "*.mongodb.org*")||
	  shExpMatch(url, "*.bechance.net*")||
	  shExpMatch(url, "*.fifa.com*")||
	  shExpMatch(url, "*.vimeocdn.com*")||
	  shExpMatch(url, "*.egotastic.com*")||
	  shExpMatch(url, "*.the-afc.com*")||
	  shExpMatch(url, "*.mashery.com*")||
	  shExpMatch(url, "*.sinchew.com.my*")||
	  shExpMatch(url, "*.sinchew.com*")||
	  shExpMatch(url, "*.fb.com*")||
	  shExpMatch(url, "*.softether.org*")||
	  shExpMatch(url, "*.sportradar.us*")||
	  shExpMatch(url, "*.wenweipo.com*")||
	  shExpMatch(url, "*.chinapress.com.my*")||
	  shExpMatch(url, "*.1titan.com*")||
	  shExpMatch(url, "*.ittf.com*")||
	  shExpMatch(url, "*.vmware.com*")||
	  shExpMatch(url, "*.sinchew-i.com*")||
	  shExpMatch(url, "*.nbcolympics.com*")||
	  shExpMatch(url, "*.cna.com.tw*")||
	  shExpMatch(url, "*.japantoday.com*")||
	  shExpMatch(url, "*.thestar.com.my*")||
	  shExpMatch(url, "*.skysports.com*")||
	  shExpMatch(url, "*.go.com*")||
	  shExpMatch(url, "*.gazzetta.it*")||
	  shExpMatch(url, "*.bildstatic.de*")||
	  shExpMatch(url, "*.gazzettaobjects.it*")||
	  shExpMatch(url, "*.corrieredellosport.it*")||
	  shExpMatch(url, "*.mediaset.it*")||
	  shExpMatch(url, "*.tuttosport.com*")||
	  shExpMatch(url, "*.marca.com*")||
	  shExpMatch(url, "*.as.com*")||
	  shExpMatch(url, "*.sport.es*")||
	  shExpMatch(url, "*.mundodeportivo.com*")||
	  shExpMatch(url, "*.dwnews.com*")||
	  shExpMatch(url, "*.dwnews.net*")||
	  shExpMatch(url, "*.eiga.com*")||
	  shExpMatch(url, "*.k-img.com*")||
	  shExpMatch(url, "*.ettoday.net*")||
	  shExpMatch(url, "*.boxun.com*")||
	  shExpMatch(url, "*.box.com*")||
	  shExpMatch(url, "*.golang.org*")||
	  shExpMatch(url, "*.isu.org*")||
	  shExpMatch(url, "*.amazon.de*")||
	  shExpMatch(url, "*.ssl-images-amazon.com*")||
	  shExpMatch(url, "*.amazon-adsystem.com*")||
	  shExpMatch(url, "*.cloudfront.net*")||
	  shExpMatch(url, "*.pinterest.com*")||
	  shExpMatch(url, "*.pinimg.com*")||
	  shExpMatch(url, "*.twitter.com*")||
	  shExpMatch(url, "*.twimg.com*")||
	  shExpMatch(url, "*.tensorflow.org*")||
	  shExpMatch(url, "*.gstatic.com*")||
	  shExpMatch(url, "*.amazon.com*")||
	  shExpMatch(url, "*.wochit.com*")||
	  shExpMatch(url, "*.faked.org*")||
	  shExpMatch(url, "*.fina.org*")||
	  shExpMatch(url, "*.fie.ch*")||
	  shExpMatch(url, "*.issf-sports.org*")||
	  shExpMatch(url, "*.bwfbadminton.org*")||
	  shExpMatch(url, "*.nextmedia.com*")||
	  shExpMatch(url, "*.edgefonts.net*")||
	  shExpMatch(url, "*.cloudfront.net*")||
	  shExpMatch(url, "*.epa.eu*")||
	  shExpMatch(url, "*.autosport.com*")||
	  shExpMatch(url, "*.php.net*")||
	  shExpMatch(url, "*.redis.io*")||
	  shExpMatch(url, "*.mongodb.com*")||
	  shExpMatch(url, "*.chinatimes.com*")||
	  shExpMatch(url, "*.edgesuite.net*")||
	  shExpMatch(url, "*.cdninstagram.com*")||
	  shExpMatch(url, "*.appledaily.com*")||
	  shExpMatch(url, "*.orisun.com*")||
	  shExpMatch(url, "*.imdb.com*")||
	  shExpMatch(url, "*.udn.com*")||
	  shExpMatch(url, "*.fcbarcelona.com*")||
	  shExpMatch(url, "*.bestfwdservice.com*")||
	  shExpMatch(url, "*.uefa.com*")||
	  shExpMatch(url, "*.searchingmagnified.com*")||
	  shExpMatch(url, "*.on.cc*")||
	  shExpMatch(url, "*.1-apple.com.tw*")||
	  shExpMatch(url, "*.buzzfeed.com*")||
	  shExpMatch(url, "*.zaobao.com*")||
	  shExpMatch(url, "*.medium.com*")||
	  shExpMatch(url, "*.twitch.tv*")||
	  shExpMatch(url, "*.slideshare.net*")||
	  shExpMatch(url, "*.cnsphoto.com*")||
	  shExpMatch(url, "*.googletagmanager.com*")||
	  shExpMatch(url, "*.bloomberglp.com*")||
	  shExpMatch(url, "*.github.io*")||
	  shExpMatch(url, "*.clipconverter.cc*")||
	  shExpMatch(url, "*.wordpress.com*")||
	  shExpMatch(url, "*.blogspot.com*")||
	  shExpMatch(url, "*.blogspot.hk*")||
	  shExpMatch(url, "*.blogger.com*")||
	  shExpMatch(url, "*.blogblog.com*")||
	  shExpMatch(url, "*.addthis.com*")||
	  shExpMatch(url, "*.microsoft.com*")||
	  shExpMatch(url, "*.googlesyndication.com*")||
	  shExpMatch(url, "*.googleusercontent.com*")||
	  shExpMatch(url, "*.softether-download.com*")||
	  shExpMatch(url, "*.softether.org*")||
	  shExpMatch(url, "*.tumblr.com*")||
	  shExpMatch(url, "*.maven.org*")||
	  shExpMatch(url, "*.bintray.com*")||
	  shExpMatch(url, "*.openvpn.net*")||
	  shExpMatch(url, "*.openx.net*")||
	  shExpMatch(url, "*.arcpublishing.com*")||
	  shExpMatch(url, "*.washingtonpost.com*")||
	  shExpMatch(url, "*.scorecardresearch.com*")||
	  shExpMatch(url, "*.dowjoneson.com*")||
	  shExpMatch(url, "*.typekit.net*")||
	  shExpMatch(url, "*.tipcdn.com*")||
	  shExpMatch(url, "*.youtu.be*")||
	  shExpMatch(url, "*.dropbox.com*")||
	  shExpMatch(url, "*.dropboxstatic.com*")||
	  shExpMatch(url, "*.ap.org*")||
	  shExpMatch(url, "*.ggpht.com*")||
	  shExpMatch(url, "*.t.co*")||
	  shExpMatch(url, "*.akamaihd.net*")||
	  shExpMatch(url, "*.instagram.com*")||
	  shExpMatch(url, "*.tiqcdn.net*")||
	  shExpMatch(url, "*.outbrain.com*")||
	  shExpMatch(url, "*.bbc.co.uk*")||
	  shExpMatch(url, "*.thesun.co.uk*")||
	  shExpMatch(url, "*.bild.de*")||
	  shExpMatch(url, "*.apne.ws*")||
	  shExpMatch(url, "*.bbc.com*")||
	  shExpMatch(url, "*.static-economist.com*")||
	  shExpMatch(url, "*.nytimes.com*")||
	  shExpMatch(url, "*.truste.com*")||
	  shExpMatch(url, "*.wikipedia.org*")||
	  shExpMatch(url, "*.wikimedia.org*")||
	  shExpMatch(url, "*.igodigital.com*")||
	  shExpMatch(url, "*.vidora.com*")||
	  shExpMatch(url, "*.chartbeat.com*")||
	  shExpMatch(url, "*.reutersmedia.net*")||
	  shExpMatch(url, "*.zqtk.net*")||
	  shExpMatch(url, "*.cnn.com*")||
	  shExpMatch(url, "*.revsci.net*")||
	  shExpMatch(url, "*.google.co.jp*")||
	  shExpMatch(url, "*.google.co*")||
	  shExpMatch(url, "*.bloomberg.com*")||
	  shExpMatch(url, "*.fbcdn.net*")||
	  shExpMatch(url, "*.reuters.com*")||
	  shExpMatch(url, "*.wsj.com*")||
	  shExpMatch(url, "*.economist.com*")||
	  shExpMatch(url, "*.time.com*")||
	  shExpMatch(url, "*.timeinc.net*")||
	  shExpMatch(url, "*.googlevideo.com*")||
	  shExpMatch(url, "*.ytimg.com*")||
	  shExpMatch(url, "*.googleapis.com*")||
	  shExpMatch(url, "*.live.com*")||
	  shExpMatch(url, "*.wp.com*")||
	  shExpMatch(url, "*.gmail.com*")||
	  shExpMatch(url, "*.youtube.com*")||
	  shExpMatch(url, "*.facebook.com*")||
	  shExpMatch(url, "*.facebookblueprint.com*")||
	  shExpMatch(url, "*.facebook.net*")||
	  shExpMatch(url, "*.exceedlms.com*")||
	  shExpMatch(url, "*.googlecode.com*")||
	  shExpMatch(url, "*.sourceforge.net*")||
	  shExpMatch(url, "*.uberconference.com*")||
	  shExpMatch(url, "*.yahoo.com*")||
	  shExpMatch(url, "*.neofonie.de*")||
	  shExpMatch(url, "*.yahoo.co*")||
	  shExpMatch(url, "*.doubleclick.net*")||
	  shExpMatch(url, "*.yimg.com*")||
	  shExpMatch(url, "*.hk.yahoo.com*")||
	  shExpMatch(url, "*.cloudfront.net*")||
	  shExpMatch(url, "*.gstatic.com*")||
	  shExpMatch(url, "*.syndication.com*")||
	  shExpMatch(url, "*.spotxchange.com*")||
	  shExpMatch(url, "*.mathtag.com*")||
	  shExpMatch(url, "*.cloudflare.com*")||
	  shExpMatch(url, "*.android.com*")||
	  shExpMatch(url, "*.clipro.tv*")||
	  shExpMatch(url, "*.nba.com*")||
	  shExpMatch(url, "*.gettyimages.ca*")||
	  shExpMatch(url, "*.gettyimages.co.uk*")||
	  shExpMatch(url, "*.espn.go.com*")||
	  shExpMatch(url, "*.basketball-reference.com*")||
	  shExpMatch(url, "*.downinst.com*")||
	  shExpMatch(url, "*.savevideo.me*")||
	  shExpMatch(url, "*.bit.ly*")||
	  shExpMatch(url, "*.bitly.com*")||
	  shExpMatch(url, "*.dailymail.co*")||
	  shExpMatch(url, "*.okex.com*")||
	  shExpMatch(url, "*.90min.com*")||
	  shExpMatch(url, "*.nginx.org*") )
	{
		return "PROXY 10.81.254.21:3128";
	} else {
		return "DIRECT";
	}
}
