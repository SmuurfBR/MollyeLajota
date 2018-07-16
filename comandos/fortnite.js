const Discord = require('discord.js');
const Fortnite = require('fortnite');
const ftnApi = new Fortnite(process.env.fortnite);
const currentSeason = '5';

exports.run = async (bot, message, args) =>{
  let username = args[0];
  let platform = args[1] || 'pc';
  let mode = 'life';
  if(args[2]){
    if (args[2].toLowerCase() == 'all' || args[2].toLowerCase() == 'season') {
      mode = args[2];
    }else{
      return message.channel.send(':x: **| Erro. certifique-se de que está usando a síntaxe correta, exemplo:** `m!fortnite ninja pc all ou season`.\n**Para visão geral use** `m!fortnite ninja pc`');
    }
  }

  if(!username)
    return message.channel.send(':exclamation: **| Usúario não fornecido. certifique-se de que está usando a síntaxe correta, exemplo:** `m!fortnite ninja pc all ou season`.\n**Para visão geral use** `m!fortnite ninja pc`');

  let data = ftnApi.user(username, platform).then(data => {
    let stats = data.stats;
    if(mode == 'life'){
      let lifetime = stats.lifetime;
        let lifeScore = lifetime[6]['Score'];
        let lifeMatches = lifetime[7]['Matches Played'];
        let lifeWins = lifetime[8]['Wins'];
        let lifeWinPercent = lifetime[9]['Win%'];
        let lifeKills = lifetime[10]['Kills'];
        let lifeKd = lifetime[11]['K/d'];

      let lifeEmbed = new Discord.RichEmbed()
        .setTitle('Fortnite Status')
        .setThumbnail('https://cdn2.unrealengine.com/Fortnite%2Fhome%2Ffn_battle_logo-1159x974-8edd8b02d505b78febe3baacec47a83c2d5215ce.png')
        .setDescription(`Status do player ${data.username}`)
        .setImage('https://media1.tenor.com/images/d89ba4e965cb9144c82348a1c234d425/tenor.gif?itemid=11793362')
        .setColor('#42b6f4')
        .addField('🏆 | `Vitorias`', lifeWins, false)
        .addField('🔪 | `Kills`', lifeKills, false)
        .addField('🛡 | `K/D`', lifeKd, false)
        .addField('🔎 | `Partidas`', lifeMatches, false)
        .addField('🌐 | `Score`', lifeScore, false)
        .addField('📊 | `Taxa de vitórias`', lifeWinPercent, false)
      message.channel.send(lifeEmbed);
    }

    if(mode.toLowerCase() == 'all'){
      let solo = stats.solo;
        let soloScore = solo.score;
        let soloMatches = solo.matches;
        let soloWins = solo.wins;
        let soloKills = solo.kills;
        let soloKd = solo.kd;

      let soloEmbed = new Discord.RichEmbed()
        .setTitle('Fortnite Solo Status')
        .setDescription(`Status do modo solo do player ${data.username}`)
        .setImage('https://media1.tenor.com/images/69e328defc99aacc38a675bff4a7a813/tenor.gif?itemid=11998490')
        .setColor('#42b6f4')
        .addField('🏆 | `Vitorias`', soloWins, false)
        .addField('🔪 | `Kills`', soloKills, false)
        .addField('🛡 | `K/D`', soloKd, false)
        .addField('🔎 | `Partidas`', soloMatches, false)
        .addField('🌐 | `Score`', soloScore, false)
      message.channel.send(soloEmbed);

      let duo = stats.duo;
        let duoScore = duo.score;
        let duoMatches = duo.matches;
        let duoWins = duo.wins;
        let duoKills = duo.kills;
        let duoKd = duo.kd;

      let duoEmbed = new Discord.RichEmbed()
        .setTitle('Fortnite Duo Status')
        .setThumbnail('http://www.dualski.com/wp-content/uploads/2015/08/Duo.png')
        .setDescription(`Status do modo duo do player ${data.username}`)
        .setImage('https://media.tenor.com/images/c25706e4bef5466784285d18c459679e/tenor.gif')
        .setColor('#42b6f4')
        .addField('🏆 | `Vitorias`', duoWins, false)
        .addField('🔪 | `Kills`', duoKills, false)
        .addField('🛡 | `K/D`', duoKd, false)
        .addField('🔎 | `Partidas`', duoMatches, false)
        .addField('🌐 | `Score`', duoScore, false)
      message.channel.send(duoEmbed);

      let squad = stats.squad;
        let squadScore = squad.score;
        let squadMatches = squad.matches;
        let squadWins = squad.wins;
        let squadKills = squad.kills;
        let squadKd = squad.kd;

      let squadEmbed = new Discord.RichEmbed()
        .setTitle('Fortnite Squad Status')
        .setThumbnail('https://images.joinsquad.com/Logos/squadlogo_black_hires.png')
        .setDescription(`Status do modo squad do player ${data.username}`)
        .setImage('https://media.tenor.com/images/f56404abcae8a106198e8b9477112ee6/tenor.gif')
        .setColor('#42b6f4')
        .addField('🏆 | `Vitorias`', squadWins, false)
        .addField('🔪 | `Kills`', squadKills, false)
        .addField('🛡 | `K/D`', squadKd, false)
        .addField('🔎 | `Partidas`', squadMatches, false)
        .addField('🌐 | `Score`', squadScore, false)
      message.channel.send(squadEmbed);
    }

    if(mode.toLowerCase() == 'season'){
      let currentSolo = stats.current_solo;
        let currentSoloScore = currentSolo.score;
        let currentSoloMatches = currentSolo.matches;
        let currentSoloWins = currentSolo.wins;
        let currentSoloKills = currentSolo.kills;
        let currentSoloKd = currentSolo.kd;

      let currentSoloEmbed = new Discord.RichEmbed()
        .setTitle(`Fortnite Season ${currentSeason} Status Solo`)
        .setThumbnail('https://s3.amazonaws.com/media.atp/42511_solof.png')
        .setDescription(`Season ${currentSeason} Status do modo solo para o player ${data.username}`)
        .setImage('https://media.tenor.com/images/c22ee1ef9681fb23df10c50546424e18/tenor.gif')
        .setColor('#42b6f4')
        .addField('🏆 | `Vitorias`', currentSoloWins, false)
        .addField('🔪 | `Kills`', currentSoloKills, false)
        .addField('🛡 | `K/D`', currentSoloKd, false)
        .addField('🔎 | `Partidas`', currentSoloMatches, false)
        .addField('🌐 | `Score`', currentSoloScore, false)
      message.channel.send(currentSoloEmbed);

      let currentDuo = stats.current_duo;
        let currentDuoScore = currentDuo.score;
        let currentDuoMatches = currentDuo.matches;
        let currentDuoWins = currentDuo.wins;
        let currentDuoKills = currentDuo.kills;
        let currentDuoKd = currentDuo.kd;

      let currentDuoEmbed = new Discord.RichEmbed()
        .setTitle(`Fortnite Season ${currentSeason} Status Duo`)
        .setThumbnail('http://www.dualski.com/wp-content/uploads/2015/08/Duo.png')
        .setDescription(`Season ${currentSeason} Status do modo duo do player ${data.username}`)
        .setImage('https://media1.tenor.com/images/e1182979361299761741172bf9fd0ca3/tenor.gif?itemid=12164777')
        .setColor('#42b6f4')
        .addField('🏆 | `Vitorias`', currentDuoWins, false)
        .addField('🔪 | `Kills`', currentDuoKills, false)
        .addField('🛡 | `K/D`', currentDuoKd, false)
        .addField('🔎 | `Partidas`', currentDuoMatches, false)
        .addField('🌐 | `Score`', currentDuoScore, false)
      message.channel.send(currentDuoEmbed);

      let currentSquad = stats.current_duo;
        let currentSquadScore = currentSquad.score;
        let currentSquadMatches = currentSquad.matches;
        let currentSquadWins = currentSquad.wins;
        let currentSquadKills = currentSquad.kills;
        let currentSquadKd = currentSquad.kd;

      let currentSquadEmbed = new Discord.RichEmbed()
        .setTitle(`Fortnite Season ${currentSeason} Status Squad`)
        .setThumbnail('https://images.joinsquad.com/Logos/squadlogo_black_hires.png')
        .setDescription(`Season ${currentSeason} Status do modo squad do player ${data.username}`)
        .setImage('https://media.tenor.com/images/d89ba4e965cb9144c82348a1c234d425/tenor.gif')
        .setColor('#42b6f4')
        .addField('🏆 | `Vitorias`', currentSquadWins, false)
        .addField('🔪 | `Kills`', currentSquadKills, false)
        .addField('🛡 | `K/D`', currentSquadKd, false)
        .addField('🔎 | `Partidas`', currentSquadMatches, false)
        .addField('🌐 | `Score`', currentSquadScore, false)
      message.channel.send(currentSquadEmbed);
    }
  }).catch(e => {
    console.log(e);
    message.channel.send(':x: **| Erro usúario não encontrado, certifique-se de que está usando a síntaxe correta:** `m!fortnite <epic-username> [platform pc/xbl/psn] {mode all/season}`.\n**Para visão geral use **`m!fortnite <epic-username> [platform pc/xbl/psn]`');
  })
}
