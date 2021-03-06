/**
 * Details passed into the constructor of the cassandra-driver.
 * @see http://docs.datastax.com/en/drivers/nodejs/2.1/global.html#ClientOptions
 */
exports.cassandra = {
    contactPoints: ['127.0.0.1'],
    keyspace: 'beam',
    reconnect: { start: 500, increase: 500, max: 10000 }
};

/**
 * Details passed into client-sessions. See full options on the
 * linked page.
 * @see https://github.com/mozilla/node-client-sessions
 */
exports.cookie = {
    cookieName: 'auth',
    secret: 'changeme',
    duration: 1000 * 60 * 60 * 24
};

/**
 * OAuth details for the developers site itself.
 */
exports.oauth = {
    clientId: 'developers-site',
    secret: 'foobar'
};

/**
 * Config about the developer site server.
 */
exports.server = {
    port: 9393,
    // Public URL this server is accessible on:
    url: 'https://developer.beam.pro'
};

/**
 * Link to beam frontend and backends.
 */
exports.url = {
    api: 'https://beam.pro/api/v1',
    public: 'https://beam.pro'
};
