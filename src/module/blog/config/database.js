const db = require('../../../../config/databases');

module.exports = {
    developmemt: {
        ...db.blog
    },
    homolog: {
        ...db.blog
    },
    production: {
        ...db.blog
    }
}
