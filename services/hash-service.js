const crypto = require('crypto');
require('dotenv').config();

class HashService {
    hashOtp(data) {
        return crypto
            .createHmac('sha256', process.env.HASH_SECRET)
            .update(data)
            .digest('hex');
    }
}

module.exports = new HashService();
