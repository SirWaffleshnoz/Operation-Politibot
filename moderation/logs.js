var Discord = require('discord.js');

module.exports = {
    name: "logs",
    permission: 1,
    main: function(bot, msg) {
        var caseCount = bot.caseNum.count;
        var userID = msg.content.split(' ').splice(0)[0];
        const target = msg.guild.members.cache.get(userID);
        if (!target) {
            msg.reply("user is no longer in the server.");
        } else {
            var log = new Discord.MessageEmbed()
                .setTitle('Moderation Log History')
                .setAuthor(target.user.username + "#" + target.user.discriminator, target.user.avatarURL())
                .setFooter('User ID: ' + target.id)
                .setTimestamp()
                .setColor(3447003);

            for (let i = 0; i < caseCount; i++) {
                if (bot.logs[i] && bot.logs[i].userid == userID) {
                    var moderator = msg.guild.members.cache.get(bot.logs[i].moderatorid);
                    log.addField(bot.logs[i].type + ' issued by ' + moderator.user.username, bot.logs[i].date + '\n' + bot.logs[i].reason + '\nCase ID: ' + bot.logs[i].caseNum)
                }
            }

            msg.channel.send({
                embed: log
            })
        }
    }
}