module.exports = {
	name: 'podcast',
	permission: 1,
	main: function (bot, msg) {

        const podcastEmbed = new Discord.MessageEmbed()
            .setcolor('#fafafa')
            .setTitle(`:microphone2:  Operation Politics Podcast  :microphone2:`)
            .setDescription(`We run a weekly podcast to discuss major issues facing our society today. Check out <#893205436063449118> for more information!`)
            .addFields(
                { name: `<:sounder:894407909272854569> Sounder.fm`, value: `https://operation-politics.sounder.fm/`},
                { name: `<:applepodcasts:893225324618346586> iTunes`, value: `https://podcasts.apple.com/us/podcast/operation-politics/id1588499450`},
                { name: `<:spotify:879109154919284737> Spotify`, value: `https://open.spotify.com/show/2iOwmb5lzsY8xIDXa8Z4Ab`},
                { name: `<:kofi:893202723938398218> Interested in supporting our efforts?`, value: `If you like what you hear and you want to support this server or the podcast, check us out on Ko-fi and consider donating for special perks! https://ko-fi.com/operationpolitics`},
            )
            .addThumbnail(`https://i.imgur.com/jKEHqWd.png`)
            .addFooter(`If you have any questions about the podcast, check <#893205436063449118> for more information or DM 𝓻𝓪𝔂#4390`)

		msg.channel.send(podcastEmbed)
	}
}
