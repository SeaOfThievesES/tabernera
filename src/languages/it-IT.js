const { Language, util } = require('klasa');

module.exports = class extends Language {

	constructor(...args) {
		super(...args);
		this.language = {
			DEFAULT: (key) => `La chiave '${key}' non è stata ancora tradotta per 'it-IT'`,
			DEFAULT_LANGUAGE: 'Lingua predefinita',
			PREFIX_REMINDER: (prefix) => `Il prefisso configurato per questo server è: ${Array.isArray(prefix) ? prefix.map(pre => `\`${pre}\``).join(', ') : `\`${prefix}\``}`,
			SETTING_GATEWAY_VALUE_FOR_KEY_NOEXT: (data, key) => `il valore '${data}' per la chiave '${key}' non esiste.`,
			SETTING_GATEWAY_VALUE_FOR_KEY_ALREXT: (data, key) => `il valore '${data}' per la chiave '${key}' esiste già.`,
			SETTING_GATEWAY_SPECIFY_VALUE: 'È necessario specificare il valore da aggiungere o filtrare.',
			SETTING_GATEWAY_KEY_NOT_ARRAY: (key) => `La chiave '${key}' non è un Array.`,
			SETTING_GATEWAY_KEY_NOEXT: (key) => `La chiave '${key}' non esiste nello schema dei dati.`,
			SETTING_GATEWAY_INVALID_TYPE: 'Il parametro \'type\' deve essere o \'add\' o \'remove\'.',
			RESOLVER_INVALID_CUSTOM: (name, type) => `${name} deve essere un nome valido di ${type}`,
			RESOLVER_INVALID_PIECE: (name, piece) => `${name} deve essere un nome valido di ${piece}.`,
			RESOLVER_INVALID_MESSAGE: (name) => `${name} deve essere un ID valido del messaggio.`,
			RESOLVER_INVALID_USER: (name) => `${name} deve essere una menzione o un ID utente valido.`,
			RESOLVER_INVALID_MEMBER: (name) => `${name} deve essere una menzione o un ID membro valido.`,
			RESOLVER_INVALID_CHANNEL: (name) => `${name} deve essere una menzione o un ID canale valido.`,
			RESOLVER_INVALID_EMOJI: (name) => `${name} Deve essere un'emoji valida.`,
			RESOLVER_INVALID_GUILD: (name) => `${name} deve essere un ID server valido.`,
			RESOLVER_INVALID_ROLE: (name) => `${name} deve essere una menzione o un ID di ruolo valido.`,
			RESOLVER_INVALID_LITERAL: (name) => `La tua scelta non corrisponde alla seguente possibilità: ${name}`,
			RESOLVER_INVALID_BOOL: (name) => `${name} deve essere 'true' o 'false'.`,
			RESOLVER_INVALID_INT: (name) => `${name} deve essere un numero intero.`,
			RESOLVER_INVALID_FLOAT: (name) => `${name} deve essere un numero.`,
			RESOLVER_INVALID_REGEX_MATCH: (name, pattern) => `${name} deve seguire lo schema dell'espressione regolare \`${pattern}\``,
			RESOLVER_INVALID_URL: (name) => `${name} deve essere un link URL valido.`,
			RESOLVER_INVALID_DATE: (name) => `${name} Deve essere una data valida.`,
			RESOLVER_INVALID_DURATION: (name) => `${name} deve essere una durata valida.`,
			RESOLVER_INVALID_TIME: (name) => `${name} deve essere una data o durata valida.`,
			RESOLVER_STRING_SUFFIX: ' personaggi',
			RESOLVER_MINMAX_EXACTLY: (name, min, suffix) => `${name} deve essere esattamente ${min}${suffix}.`,
			RESOLVER_MINMAX_BOTH: (name, min, max, suffix) => `${name} deve essere tra ${min} e ${max}${suffix}.`,
			RESOLVER_MINMAX_MIN: (name, min, suffix) => `${name} deve essere maggiore di ${min}${suffix}.`,
			RESOLVER_MINMAX_MAX: (name, max, suffix) => `${name} deve essere minore di ${max}${suffix}.`,
			REACTIONHANDLER_PROMPT: 'A quale pagina vorresti saltare?',
			COMMANDMESSAGE_MISSING: 'Alla fine della voce mancano uno o più argomenti.',
			COMMANDMESSAGE_MISSING_REQUIRED: (name) => `${name} è un argomento obbligatorio.`,
			COMMANDMESSAGE_MISSING_OPTIONALS: (possibles) => `Manca un'opzione obbligatoria: (${possibles})`,
			COMMANDMESSAGE_NOMATCH: (possibles) => `La tua opzione non corrisponde a nessuna delle possibilità: (${possibles})`,
			MONITOR_COMMAND_HANDLER_REPROMPT: (tag, error, time) => `${tag} | **${error}** | Hai ** ${time} ** secondi per rispondere a questo messaggio pop-up con un argomento valido. Digitare ** "ABORT" ** per interrompere il messaggio a comparsa.`, // eslint-disable-line max-len
			MONITOR_COMMAND_HANDLER_REPEATING_REPROMPT: (tag, name, time) => `${tag} | **${name}** è un argomento ripetibile | Hai **${time}** secondi per rispondere a questo messaggio pop-up con un argomento valido. Scrivi ** "ANNULLA" ** per interrompere il messaggio pop-up.`, // eslint-disable-line max-len
			MONITOR_COMMAND_HANDLER_ABORTED: 'Abortito.',
			INHIBITOR_COOLDOWN: (remaining) => `Hai appena usato questo comando. Puoi usarlo nuovamente in ${remaining} secondi.`,
			INHIBITOR_DISABLED: 'Questo comando è disabilitato.',
			INHIBITOR_MISSING_BOT_PERMS: (missing) => `Permessi insufficienti, è necessario: **${missing}**`,
			INHIBITOR_NSFW: 'Non dovresti usare i comandi NSFW su questo canale.',
			INHIBITOR_PERMISSIONS: 'Non hai il permesso di usare questo comando.',
			INHIBITOR_REQUIRED_CONFIGS: (settings) => `Il server non ha ${settings.length > 1 ? 'le' : 'la'} ${settings.length > 1 ? 'seguenti' : 'seguente'} ${settings.length > 1 ? 'chiavi' : 'chiave'}: **${settings.join(', ')}** e non può essere eseguito.`,
			INHIBITOR_RUNIN: (types) => `Questo comando è disponibile solo nei canali di testo: ${types}.`,
			INHIBITOR_RUNIN_NONE: (name) => `Il comando ${name} non è configurato per essere eseguito su qualsiasi canale.`,
			COMMAND_BLACKLIST_DESCRIPTION: 'Aggiungi o rimuovi utenti e server nella lista nera.',
			COMMAND_BLACKLIST_SUCCESS: (usersAdded, usersRemoved, guildsAdded, guildsRemoved) => [
				usersAdded.length ? `**Utenti aggiunti**\n${util.codeBlock('', usersAdded.join(', '))}` : '',
				usersRemoved.length ? `**Utenti eliminati**\n${util.codeBlock('', usersRemoved.join(', '))}` : '',
				guildsAdded.length ? `**Server aggiunti**\n${util.codeBlock('', guildsAdded.join(', '))}` : '',
				guildsRemoved.length ? `**Server eliminati**\n${util.codeBlock('', guildsRemoved.join(', '))}` : ''
			].filter(val => val !== '').join('\n'),
			COMMAND_EVAL_DESCRIPTION: 'Valuta Javascript arbitrario. Riservato al proprietario del bot.',
			COMMAND_EVAL_EXTENDEDHELP: [
				`Il comando eval esegue il codice così com'è scritto, qualsiasi errore verrà catturato.`,
				`Utilizza anche lo strumento "flags". Scrivi --silent, --depth=numero o --async per personalizzare l'output.`,
				`Il flag --silent silenzia l'output.`,
				'Il flag --depth accetta un numero, per esempio, --depth=2, per personalizzare la profondità di util.inspect.',
				'Il flag --async circonda il codice in una AsyncFunction in cui è possibile usare await, tuttavia, se è necessario conoscere il valore di qualcosa, sarà necessaria la parola chiave di restituzione',
				`Il flag --showHidden attiverà l'opzione showHidden di util.inspect.`,
				`Se l'output è troppo lungo, l'output verrà inviato come file`
			].join('\n'),
			COMMAND_EVAL_ERROR: (time, output, type) => `**Errore**:${output}\n**Tipo**:${type}\n${time}`,
			COMMAND_EVAL_OUTPUT: (time, output, type) => `**Output**:${output}\n**Tipo**:${type}\n${time}`,
			COMMAND_EVAL_SENDFILE: (time, type) => `L'output era troppo lungo... inviato come file.\n**Tipo**:${type}\n${time}`,
			COMMAND_EVAL_SENDCONSOLE: (time, type) => `L'output era troppo lungo... ha inviato il risultato alla console.\n**Tipo**:${type}\n${time}`,
			COMMAD_UNLOAD: (type, name) => `✅ Scaricato il pezzo ${type}: ${name}`,
			COMMAND_UNLOAD_DESCRIPTION: 'Scarica un pezzo di Klasa.',
			COMMAND_UNLOAD: (type, name) => `✅ Scaricato il pezzo ${type}: ${name}`,
			COMMAND_TRANSFER_ERROR: '❌ Il file è stato trasferito o non è mai esistito.',
			COMMAND_TRANSFER_SUCCESS: (type, name) => `✅ Trasferito il pezzo ${type}: ${name} con successo.`,
			COMMAND_TRANSFER_FAILED: (type, name) => `Il trasferimento del pezzo ${type}: ${name} al Cliente ha fallito. Per favore, controlla la tua console.`,
			COMMAND_RELOAD: (type, name) => `✅ Ricaricato il pezzo ${type}: ${name}`,
			COMMAND_RELOAD_ALL: (type) => `✅ Ricaricati tutti i pezzi ${type}.`,
			COMMAND_RELOAD_DESCRIPTION: 'Ricarica un pezzo di Klasa o tutti i pezzi di una collezione.',
			COMMAND_REBOOT: 'Riavvio...',
			COMMAND_REBOOT_DESCRIPTION: 'Riavvia il bot.',
			COMMAND_PING: 'Ping?',
			COMMAND_PING_DESCRIPTION: 'Esegui un test di connessione a Discord.',
			COMMAND_PINGPONG: (diff, ping) => `Pong! (il viaggio è durato: ${diff}ms. ping: ${ping}ms.)`,
			COMMAND_INVITE_SELFBOT: 'Perché avresti bisogno di un link di invito per un selfbot?',
			COMMAND_INVITE: (client) => [
				`Aggiungere ${client.user.username} al tuo server Discord:`,
				client.invite,
				util.codeBlock('', [
					'Il link sopra è generato con le autorizzazioni necessarie per eseguire tutti i comandi correnti.',
					'Comprendo che non tutte le autorizzazioni sono necessarie per tutti i server, ma non preoccuparti di rimuovere nessuna delle autorizzazioni.',
					'Se tenti di utilizzare un comando che richiede più autorizzazioni di quelle del bot, ti farò sapere.'
				].join(' ')),
				'Si prega di segnalare i problemi su <https://github.com/dirigeants/klasa> se trovate un bug.'
			],
			COMMAND_INVITE_DESCRIPTION: 'Mostra il link di invito per il bot.',
			COMMAND_INFO: [
				'Klasa è un framework \'plug-and-play\' costruito sopra la libreria Discord.js.',
				'La maggior parte del codice è modulare, che consente agli sviluppatori di modificare Klasa in base alle proprie esigenze.',
				'',
				'Alcune delle caratteristiche di Klasa includono:',
				'• 🐇💨 Caricamenti molto veloci con supporto ES2017 (`async`/`await`).',
				'• 🎚🎛 Configurazione separata per ogni server, utente e client; che può essere espanso con il tuo codice.',
				'• 💬 Un sistema di comando personalizzabile con analisi automatica degli argomenti e moduli di facile utilizzo, aggiornamento e download.',
				'• 👀 "Monitor", che possono interagire con tutti i messaggi, come un normale evento di messaggio (filtro di parole, protezione antispam, ecc.).',
				`• ⛔ "Inibitori", che possono impedire l'esecuzione di comandi basati su una serie di parametri (Autorizzazioni, Lista nera, ecc.).`,
				'• 🗄 "Providers", che ti permettono di connettere Klasa con qualsiasi database.',
				'• ✅ "Terminatori", che vengono eseguiti dopo un comando riuscito.',
				'• ➕ "Estensioni", codice che agisce passivamente. Aggiungono proprietà o metodi alle classi Discord.js.',
				'• 🌐 "Lingue", che ti permettono di usare diverse lingue nel tuo bot.',
				'• ⏲ "Compiti", possono essere programmati per eseguire il codice in futuro, opzionalmente ripetibile.',
				'',
				'Ci auguriamo di poter offrire un framework personalizzabile al 100% per ogni tipo di pubblico. Facciamo frequenti aggiornamenti.',
				'Se siete interessati a noi, consultateci su <https://klasa.js.org>'
			],
			COMMAND_INFO_DESCRIPTION: 'Fornisce informazioni sul bot.',
			COMMAND_HELP_DESCRIPTION: 'Visualizza il messaggio di aiuto per i comandi.',
			COMMAND_HELP_NO_EXTENDED: 'Descrizione dettagliata non disponibile.',
			COMMAND_HELP_DM: `📥 | L'elenco dei comandi è stato inviato come messaggio privato.`,
			COMMAND_HELP_NODM: '❌ | Sembra che i tuoi messaggi privati siano disabilitati, impossibile inviarti la lista dei comandi.',
			COMMAND_HELP_USAGE: (usage) => `Usa :: ${usage}`,
			COMMAND_HELP_EXTENDED: 'Informazioni dettagliate ::',
			COMMAND_ENABLE: (type, name) => `+ Attivato con successo il pezzo ${type}: ${name}`,
			COMMAND_ENABLE_DESCRIPTION: 'Riattiva temporaneamente un pezzo. Il suo stato originale verrà ripristinato al riavvio.',
			COMMAND_DISABLE: (type, name) => `+ Disabilitato con successo il pezzo ${type}: ${name}`,
			COMMAND_DISABLE_DESCRIPTION: 'Ri-disattiva temporaneamente un pezzo. Il suo stato originale verrà ripristinato al riavvio.',
			COMMAND_DISABLE_WARN: 'Probabilmente non vuoi disattivarlo, dal momento che non è possibile eseguire un comando per riattivarlo.',
			COMMAND_CONF_NOKEY: 'Devi scrivere una chiave',
			COMMAND_CONF_NOVALUE: 'Devi scrivere un valore',
			COMMAND_CONF_GUARDED: (name) => `La chiave ${util.toTitleCase(name)} non dovrebbe essere disattivata`,
			COMMAND_CONF_UPDATED: (key, response) => `Aggiornata con successo la chiave **${key}**: \`${response}\``,
			COMMAND_CONF_KEY_NOT_ARRAY: `Questa chiave non memorizza più valori. Usa l'azione \'reset\'.`,
			COMMAND_CONF_GET_NOEXT: (key) => `La chiave **${key}** sembra non esistere.`,
			COMMAND_CONF_GET: (key, value) => `Il valore per la chiave **${key}** è: \`${value}\``,
			COMMAND_CONF_RESET: (key, response) => `Il valore per la chiave **${key}** è stato ripristinato a: \`${response}\``,
			COMMAND_CONF_SERVER_DESCRIPTION: 'Definire la configurazione per il server.',
			COMMAND_CONF_SERVER: (key, list) => `**Configurazione del server ${key}**\n${list}`,
			COMMAND_CONF_USER_DESCRIPTION: 'Definire le impostazioni per utente.',
			COMMAND_CONF_USER: (key, list) => `**Configurazione utente${key}**\n${list}`,
			COMMAND_STATS: (memUsage, uptime, users, servers, channels, klasaVersion, discordVersion, processVersion, msg) => [
				'= STATISTICS =',
				'',
				`• Uso Memoria  :: ${memUsage} MB`,
				`• T. Attivi	:: ${uptime}`,
				`• Utenti	    :: ${users}`,
				`• Server		:: ${servers}`,
				`• Canali	    :: ${channels}`,
				`• Klasa        :: v${klasaVersion}`,
				`• Discord.js   :: v${discordVersion}`,
				`• Node.js      :: ${processVersion}`,
				this.client.options.shardCount ? `• Shard        :: ${((msg.guild ? msg.guild.shardID : msg.channel.shardID) || this.client.options.shardId) + 1} / ${this.client.options.shardCount}` : ''
			],
			COMMAND_STATS_DESCRIPTION: 'Fornisce alcuni dettagli sul bot e le sue statistiche.',
			MESSAGE_PROMPT_TIMEOUT: 'Il tempo è scaduto.'
		};
	}

	async init() {
		await super.init();
	}

};
