const {REST} = require("@discordjs/rest");
const {Routes} = require("discord-api-types/v9");
const Discord = require("discord.js");
const client = new Discord.Client({intents: 32767})
const token = "ODkwNjA5NzEzODYyMDI1Mjc2.YUyS7g.0Jx1FKKNQneP70-GXoEET61tNo8";
const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js');
var message;
var reper;


(async () => {
const cmd = [{
    name: "Mesajı bildir", type: 3
}];

const rest = new REST({version: "9"}).setToken(token); //pythonic - discord.gg/javascript

const ClientID = "890609713862025276"
const GuildID = "888471579963555880"

try {
    await rest.put(Routes.applicationGuildCommands(ClientID, GuildID), {body: cmd}) //pythonic - discord.gg/javascript
    .then(() => console.log("discord.gg/javascript."))
    .catch(err => console.error(err));
} catch (error) {
    console.error(error)
};
})();

client.on("ready", () => console.log("pythonic-2021."));


client.on("interactionCreate", async interaction => {

    
if (interaction.isContextMenu() && interaction.commandName === "Mesajı bildir") {
    message = interaction.options.getMessage("message")
    reper = interaction.user
    

    const row = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
            .setCustomId('select')
            .setPlaceholder('sebep seçilmedi')
            .addOptions([
                {
                    label: 'Zorbalık/Taciz',
                    description: 'kişiyi zorbalık veya taciz yüzünden bildir.',
                    value: 'pyone',
                    emoji: '🤬',
                },
                {
                    label: 'Spam/Flooding',
                    description: 'kişiyi çok hızlı mesaj atmak yüzünden bildir.',
                    value: 'pytwo',
                    emoji: '⌨️',

                },
                {
                    label: 'Din/Siyaset',
                    description: 'kişiyi siyaset veya dini konuşmalar yüzünden bildir.',
                    value: 'pyuc',
                    emoji: '🕌',
                },
                {
                    label: 'NSFW',
                    description: 'kişiyi nsfw/+18 sayılacak içerik için bildir.',
                    value: 'pyfour',
                    emoji: '🔞',
                },
            ]),
   
    );
    interaction.reply({ content: `**Mesaj bildiriliyor**\nGereksiz mesaj bildirmek ceza ile sonuçlanır.`, ephemeral: true, components: [row] });

};

});

client.on("interactionCreate", async interaction => {
if (interaction.isSelectMenu()) {
interaction.update({ content: 'Mesajınız başarı ile iletildi!', components: [] });
	
let Mesaj = message.content //mesaj içeriği
let Reped = message.author //mesaj sahibi
let Reper = reper //mesajı bildiren
let Sebep = interaction.values[0] //interaction ismi

var pythonic; 

if (Sebep == "pyone") { pythonic = "Zorbalık/Taciz" }
if (Sebep == "pytwo") { pythonic = "Spam/Flood" }
if (Sebep == "pyuc") { pythonic = "Din/Siyaset" }
if (Sebep == "pyfour") { pythonic = "NSFW içerik" }

const emb = new MessageEmbed()
.setTitle(pythonic)
.setDescription(`
**Rapor veren: ${Reper}**
**Raporlanan kişi: ${Reped}**
**Raporlanan mesaj:**
\`\`\`
${Mesaj}
\`\`\`
`)


const channel = client.channels.cache.get('888817906476011591');
channel.send({ embeds: [ emb ] });
console.log(pythonic)

}})


client.login(token)

/*
Yukarıda verilen kod tamamen pythonic#1881 ce yazılmıştır.
Hakları tamamen plasmic sunucusuna aittir.

soru, hata vb için;
discord.gg/javascript
*/
