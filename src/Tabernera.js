const { Client } = require('klasa');
const config = require('../config.js');

Client.defaultPermissionLevels
	.add(3, (_, msg) => msg.guild && msg.guild.configs.roles.inicial.some(role => msg.member.roles.has(role)), { fetch: true })
	.add(4, (_, msg) => msg.guild && msg.guild.configs.roles.verificador && msg.member.roles.has(msg.guild.configs.roles.verificador), { fetch: true })
	.add(5, (_, msg) => msg.guild && msg.guild.configs.roles.moderador && msg.member.roles.has(msg.guild.configs.roles.moderador), { fetch: true })
	.add(6, (_, msg) => msg.guild && msg.guild.configs.roles.administrador && msg.member.roles.has(msg.guild.configs.roles.administrador), { fetch: true });

new Client({
	commandEditing: true,
	commandMessageLifetime: 120,
	disabledCorePieces: ['commands'],
	messageCacheLifetime: 120,
	messageCacheMaxSize: 100,
	messageSweepInterval: 120,
	prefix: '+',
	presence: { activity: { name: '+help', type: 'LISTENING' } },
	customPromptDefaults: { quotedStringSupport: true, limit: 5 },
	providers: { default: 'mysql', mysql: config.mysql },
	typing: true
}).login(config.token);