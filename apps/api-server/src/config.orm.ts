import { NODE_ENV, DB_URL, DB_DATABASE } from '@environments'

const orm = {
	development: {
		url: DB_URL!
	},
	production: {
		url: DB_URL!
	}
}

export default orm[NODE_ENV!]