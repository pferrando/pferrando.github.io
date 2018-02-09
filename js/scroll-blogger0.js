if(/^\/[0-9]{4}\/[0-9]{2}\//.test(document.location.pathname)){
		ga('ec:addProduct', {
	   	'id': document.location.pathname,
	   	'name': document.location.pathname,
	   	'category': 'Apparel',
	   	'brand': 'Google',
	   	'variant': 'black',
	   	'price': '1',
	   	'quantity': 1
		});
		ga('ec:setAction', 'detail');
		ga('send', 'event', 'scroll', '0%', document.location.pathname)
	}