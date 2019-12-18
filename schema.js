'use strict';
const fetch = require('node-fetch');
const util = require('util');
const parseXML = util.promisify(require('xml2js').parseString);

fetch('https://www.goodreads.com/author/show.xml?id=4432&key=resKm8wwXsIcyEiTktvA')
	.then(response => response.text())
	.then(parseXML);

const Authortype = new GraphQLObjectType({
	name: 'Author',
	description: '...',
	fields: () => ({
	})
});

module.exports = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		description: '...',
		fields: () => ({
			author: {
				type: AuthorType,
				args: {
					id: {type: GraphQlInt}
				}
			}
		})
	})
});
