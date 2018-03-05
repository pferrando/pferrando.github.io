if(/^\/[0-9]{4}\/[0-9]{2}\//.test(document.location.pathname)){
		var labels = document.getElementsByClassName('byline post-labels')[0].getElementsByTagName('a')[0].innerHTML
		for (var i = 1; i < document.getElementsByClassName('byline post-labels')[0].getElementsByTagName('a').length; i++) {
    			labels = labels + '_' + document.getElementsByClassName('byline post-labels')[0].getElementsByTagName('a')[i].innerHTML
		};
		ga('ec:addProduct', {
	   	'id': document.location.pathname,
	   	'name': document.location.pathname,
	   	'category': labels,
	   	//'brand': 'brand',
	   	//'variant': 'variant',
	   	'price': '1',
	   	'quantity': 1
		});
		ga('ec:setAction', 'detail');
		ga('send', 'event', 'scroll', '0%', document.location.pathname)
	}
