import DeepstreamServer from 'deepstream.io'
import RethinkDBStorageConnector from 'deepstream.io-storage-rethinkdb'

const ds = new DeepstreamServer()

ds.set('host', 'localhost')
ds.set('port', 6020)

ds.set('storage', new RethinkDBStorageConnector({
  host: '0.0.0.0',
  port: 28015,
  splitChar: '/',
  database: 'jeopardy'
}))

ds.start()
