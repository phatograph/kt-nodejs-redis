const redis = require("redis"), client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});

const validateDate = (userId, date) => {
    console.log(`validate userId: [${userId}] . . .`);

    return client.get(userId, (err, currentDate) => {
        if(currentDate) {
            console.log(`date: ${date}, currentDate: ${currentDate}`);

            if (date == currentDate) {
                console.log("> do nothing (same date)");
                return
                // TODO return { source: 'api', data: { userId: `${userId}`, date: `${date}` }}
            }

            date > currentDate ?
                saveDate(userId, date):
                console.log("> throw new Error(\"User already login\")")
        } else {
            console.log(`no date for ${userId}`);
            saveDate(userId, date)
        }
    });
};

const saveDate = (userId, date) => {
    console.log(`> save new date for ${userId} . . .`);
    client.set(userId, date, function (err, reply) {
        if (err) { console.log("error: " + err); }
        return
        // TODO return { source: 'api', data: { userId: `${userId}`, date: `${date}` }}
    });
};

module.exports = {
    validateDate
};