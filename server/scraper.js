'use strict';

const cheerio = require('cheerio');
const request = require('request');
const mcache = require('memory-cache');

const beaches = {
	'/venice': 'http://www.surfline.com/surf-report/venice-beach-southern-california_4211/',
	'/trestles': 'http://www.surfline.com/surf-report/lower-trestles-southern-california_4740/',
	'/ventura': 'http://www.surfline.com/surf-report/c-st-overview-southern-california_4200/'
};

const scrapeController = {
  getData: function (req, res, next) {
  	if(mcache.get(req.url)) {
  		console.log('out of cache');
  		res.send(mcache.get(req.url));
  		return;
	  }
	  request(beaches[req.url], (error, response, html) => {
			let $ = cheerio.load(html);
			let surf = surfToObject($);
			mcache.put(req.url, surf);
			console.log('inside req');
			res.send(surf);
		});
  },

	getAllData: function (req, res, next) {
  	if(mcache.get('all')){
  	  res.send(mcache.get('all'));
  	  return;
	  };
		const allBeachData = [oneBeach(beaches['/venice']), oneBeach(beaches['/trestles']), oneBeach(beaches['/ventura']) ];
		(() => {Promise.all(allBeachData).then((fulfilled) => {
			mcache.put('all', fulfilled);
			res.send(fulfilled);
		})
		})();
	}

	//end of scrape controller
};

function surfToObject($) {
  let todaysDate = new Date();
  let dateString = todaysDate.toDateString();
	return {
		tide: "Tide: " + $('.sl-reading').text().split("FT")[0] + " FT.",
		swells: $('.sl-spot-forecast-summary__stat-swells').text().split('Swells')[1],
		day: dateString,
		conditionDetails: cleanString($('.sl-spot-report__report-text p').text()).split('ShortTerm')[0],
		waveHeight: $('.quiver-surf-height').text().split('FT')[0],
		forecast: cleanString($('.sl-spot-report__report-text p').text()).split('ShortTerm')[1],
	};
}


function oneBeach(url) {
	return new Promise ((resolve, reject) => {
		request(url, (error, response, html) => {
			let $ = cheerio.load(html);
			let surf = {
				conditionOverview: $('#observed-spot-conditions').text(),
				day: cleanString($('div .module span strong').text()).split('at ')[0],
				conditionDetails: cleanString($('#observed-spot-conditions-summary p').text()),
				waveHeight: $('#observed-wave-range').text(),
				waveDescription: cleanString($('#observed-wave-description').text()),
			};
			 resolve(surf);
		});
	});
}

function cleanString(fucked) {
	return fucked.replace(/\r?\n|\r|-/g, '').trim();
}

module.exports = scrapeController;
