if(/^\/[0-9]{4}\/[0-9]{2}\//.test(document.location.pathname)){
		var labels = document.getElementsByClassName('label-name')[0].innerHTML
		for (var i = 1; i < document.getElementsByClassName('label-name').length; i++) {
    			labels = labels + '-' + document.getElementsByClassName('label-name')[i].innerHTML
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
