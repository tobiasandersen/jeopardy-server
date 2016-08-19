import DeepstreamServer from 'deepstream.io'
import RethinkDBStorageConnector from 'deepstream.io-storage-rethinkdb'

const ds = new DeepstreamServer()

const storage = new RethinkDBStorageConnector({
  host: '0.0.0.0',
  port: 28015,
  database: 'nxt',
  splitChar: '/'
})

ds.set('storage', storage)
ds.start()
