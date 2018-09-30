import firebase from 'firebase'
import 'firebase/database'
const BASE_URL = 'https://hacker-news.firebaseio.com'
const app = firebase.initializeApp({
	databaseURL: BASE_URL
})

const db = app.database()

const once = ref => ref.once('value').then(x => x.val())

const itemById = id => once(db.ref(`/v0/item/${id}`))
const itemsByIds = ids => Promise.all(ids.map(itemById))

export const getFeed = async feedName => {
	const allowedFeedNames = ['new', 'top', 'best']
	if (!allowedFeedNames.includes(feedName))
		throw new Error(
			`Can not find feed, must be one of ${allowedFeedNames.join(', ')}`
		)

	const byIds = await once(db.ref(`/v0/${feedName}stories`))
	const feed = await itemsByIds(byIds)
	return {
		byIds,
		feed
	}
}
