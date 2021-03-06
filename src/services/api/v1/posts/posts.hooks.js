const {authenticate} = require('@feathersjs/authentication').hooks;
const require_role = require('../../../../hooks/require-role');
const {ROLE_ADMIN} = require('../../../../constants');
const {ERROR_NO_RIGHTS} = require('../../../../dictionary');

module.exports = {
	before: {
		all: [],
		find: [],
		get: [
			require_role({roles: [ROLE_ADMIN]}),
		],
		create: [
		
		],
		update: [
			authenticate('jwt')
		],
		patch: [
			authenticate('jwt')
		],
		remove: [
			authenticate('jwt')
		]
	},
	
	after: {
		all: [],
		find: [],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: []
	},
	
	error: {
		all: [],
		find: [],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: []
	}
};
