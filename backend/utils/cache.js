import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 60 }); // default TTL = 60 sec

export default cache;