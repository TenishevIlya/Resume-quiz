const extract = require('./extract');
describe("extract", function() {
	let json = '[{"user_name":"jdeanesy0","first_name":"Joyan","last_name":"De Anesy","birth_date":"1999-06-27T08:49:07Z"},{"user_name":"lmincini1","first_name":"Lowe","last_name":"Mincini","birth_date":"1999-02-04T00:49:27Z"},{"user_name":"ahoult2","first_name":"Aggie","last_name":"Hoult","birth_date":"1999-05-10T04:12:57Z"},{"user_name":"uaxe3","first_name":"Upton","last_name":"Axe","birth_date":"1998-04-12T04:21:39Z"},{"user_name":"bmahaddie4","first_name":"Basilio","last_name":"Mahaddie","birth_date":"1997-02-11T08:23:53Z"},{"user_name":"mvalentetti5","first_name":"Maximo","last_name":"Valentetti","birth_date":"1997-02-10T19:23:16Z"}]';
	let result = {"1997": [{name: "Basilio Mahaddie", 'birthday': new Date('Tue Feb 11 1997 11:23:53 GMT+0300 (Москва, стандартное время)')}, {name: "Maximo Valentetti", 'birthday': new Date('Mon Feb 10 1997 22:23:16 GMT+0300 (Москва, стандартное время)')}], "1998" :[{name: "Upton Axe", 'birthday': new Date('Sun Apr 12 1998 08:21:39 GMT+0400 (Москва, летнее время)')}], "1999" : [{name: "Joyan De Anesy", 'birthday': new Date('Sun Jun 27 1999 12:49:07 GMT+0400 (Москва, летнее время)')},{name: "Lowe Mincini", 'birthday': new Date('Thu Feb 04 1999 03:49:27 GMT+0300 (Москва, стандартное время)')},{name: "Aggie Hoult", 'birthday': new Date('Mon May 10 1999 08:12:57 GMT+0400 (Москва, летнее время)')}]}; 
	let data = JSON.parse(json);
	it("should return sorted by year object", function() {
		expect(extract(data)).toEqual(result);    
	});
});