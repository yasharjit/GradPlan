const mongoose = require('mongoose');


const inviteSchema = new mongoose.Schema({
    // the user who sent this request
    from_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // the user who accepted this request
    to_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

const Invite = mongoose.model('Friendship', inviteSchema);
module.exports = Invite;
