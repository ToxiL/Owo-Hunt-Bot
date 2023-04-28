const Discord = require("discord.js");
const client = new Discord.Client();
const {JsonDatabase} = require("wio.db");
const db = new JsonDatabase("db");
const uptime = require("moment");
require("moment-duration-format");

client.on("ready", () => {
	
	let status = " Aktif!";
	if (db.get("owosystemstatus") == "0") { //made by Toxil#0001 & MyStore#2901, software version 8.5
		status = "Aktif Değil";
	}
	console.log("//made by Toxil#0001 & MyStore#2901, software version 8.5 OwoHunt Bot Çalışıyor | Anlık durum: "+status);
	if (db.get("channelid") != "0") {
		if (!client.channels.get(db.get("channelid"))) return db.set("channelid", "0");
		client.channels.get(db.get("channelid")).send("Bot başlatılmıştır. Durum:"+status);
	}
});

setInterval(function() {
	if (Number(db.get("securitytime")) > 10 || Number(db.get("securitytime")) < 1) {
		db.set("securitytime", "3");
		client.channels.get(db.get("channelid")).send("Güvenlik ayarları hatalı girildiğinden tekrar yapılandırıldı."); //made by Toxil#0001 & MyStore#2901, software version 8.5
	}
	if (db.get("captchasecurity") == "1") {
		if (db.get("owosecurity") == "0") {
			if (db.get("owosystemstatus") == "1") {
				db.set("owosystemstatus", "0");
				client.channels.get(db.get("channelid")).send("Botun doğrulamaya girmemesi amacıyla bot "+db.get("securitytime")+" dakikalığına durdurulmuştur.");
				return;
			}
		
			if (db.get("owosystemstatus") == "0") {
				db.set("owosystemstatus", "1");
				client.channels.get(db.get("channelid")).send("Bot tekrardan aktif edilmiştir."); //made by Toxil#0001 & MyStore#2901, software version 8.5
				return;
			}
		}
	}
}, 60000*Number(db.get("securitytime")));

setInterval(function() {
	if (db.get("owosystemstatus") == "1") {
		if (db.get("autosell") == "1") {
			client.channels.get(db.get("channelid")).send("Otomatik satım işlemi yapılıyor.").then(msg => { //made by Toxil#0001 & MyStore#2901, software version 8.5
				setTimeout(function() {
					client.channels.get(db.get("channelid")).send("owo sell all").then(msg2 => {
						msg2.delete();
						client.channels.get(db.get("channelid")).send("Otomatik satım işlemi tamamlandı.");
					});
				}, 500);
			});
			return;
		}
		if (db.get("autogive") == "1") {
			db.set("owomessagestatus", "1");
			db.set("owomessage", db.get("channelid"));
			db.set("owomessagetype", "control");
			client.channels.get(db.get("channelid")).send("owo cash").then(msg => {
				msg.delete();
			});
		}
	}
}, 60000*10);

let hunt = ['17000', '20000', '24000', '27000'];
hunt = hunt[Math.floor(Math.random() * hunt.length)];
let battle = ['27000' ,'33000' ,'37000' ,'43000'];
battle = battle[Math.floor(Math.random() * battle.length)];
let kiss = ['35000' ,'35500' ,'36000' ,'36500'];
kiss  = kiss[Math.floor(Math.random() * kiss.length)];
let hug = ['43000' ,'45500' ,'47000' ,'49500'];
hug = hug[Math.floor(Math.random() * hug.length)];
let cf = ['51000' ,'53000' ,'55000' ,'57500'];
cf = cf[Math.floor(Math.random() * cf.length)];

let pray = "300000"

setInterval(function(){
	if (db.get("owosystemstatus") == "1") {
		if (db.get("systems.whunt") == "1") {
			db.add("hunt", 1);
			client.channels.get(db.get("channelid")).send("owo h");
		}
	}
}, hunt);

setInterval(function(){
	if (db.get("owosystemstatus") == "1") {
		if (db.get("systems.wbattle") == "1") {
			db.add("battle", 1);
			client.channels.get(db.get("channelid")).send("owo b");
		}
	}
}, battle);

setInterval(function(){
	if (db.get("owosystemstatus") == "1") {
		if (db.get("systems.wkiss") == "1") {
			db.add("kiss", 1);
			client.channels.get(db.get("channelid")).send("owo kiss <@408785106942164992>");
		}
	}
}, kiss);

setInterval(function(){
	if (db.get("owosystemstatus") == "1") {
		if (db.get("systems.whug") == "1") {
			db.add("hug", 1);
			client.channels.get(db.get("channelid")).send("owo hug <@408785106942164992>");
		}
	}
}, hug);

setInterval(function(){
	if (db.get("owosystemstatus") == "1") {
		if (db.get("systems.wcf") == "1") {
			db.add("cf", 1);
			client.channels.get(db.get("channelid")).send("owo cf 1");
		}
	}
}, cf);
let sahip = "<@"+db.get("ownerid")+">"
setInterval(function(){
	if (db.get("owosystemstatus") == "1") {
			client.channels.get(db.get("channelid")).send("owo pray "+sahip+"");
	}
}, pray);

client.on("message", message => {
	if (db.get("ownerid") != message.author.id) return;
	if (message.content.split(" ")[0] == "!istatistik") {
	let huntis = db.get("hunt")
	let battleis = db.get("battle")
	let kissis = db.get("kiss")
	let hugis = db.get("hug")
	let cfis = db.get("cf")



	let huntdurum = "Aktif!";
	if (db.get("systems.whunt") == "0") { //made by Toxil#0001 & MyStore#2901, software version 8.5
		huntdurum = "Aktif Değil!";
	}

	let battledurum = "Aktif!";
	if (db.get("systems.wbattle") == "0") {
		battledurum = "Aktif Değil!";
	}

	let kissdurum = "Aktif!";
	if (db.get("systems.wkiss") == "0") {
		kissdurum = "Aktif Değil!";
	}

	let hugdurum = "Aktif!";
	if (db.get("systems.whug") == "0") {
		hugdurum = "Aktif Değil!";
	}
	
	let cfdurum = "Aktif!";
	if (db.get("systems.wcf") == "0") {
		cfdurum = "Aktif Değil!";
	}

	message.channel.send("```==============================================\n\nHunt:  "+huntis+" | "+huntdurum+"\nBattle:  "+battleis+" | "+battledurum+"\nKiss:  "+kissis+" | "+kissdurum+"\nHug:  "+hugis+" | "+hugdurum+"\nCoinFlip:  "+cfis+" | "+cfdurum+"\nÇalışma Süresi: "+uptime.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")+"\n\n==============================================\n\n"+message.author.username+" Adlı Kullanıcıya ait istatistikler```");
	                                                                                                                                                                                                                                                                     

}
})

client.on("message", message => {
	if (message.author.id != "408785106942164992") return; 
	if (db.get("owomessagestatus") == "1") {
		if (db.get("owomessage") != message.channel.id) return;
		if (message.content.indexOf(client.user.username) != "-1") {
			if (message.content.indexOf("you currently have") == "-1") return;

			let cash = message.content.replace("**<:cowoncy:416043450337853441> | "+client.user.username+"**, you currently have **__", "").replace("__ cowoncy!**", "").replace(",", "");
			if (db.get("owomessagetype") == "çek") {
				if (Number(cash) < 3000) {
					message.channel.send("Hata! Çekim yapmanız için en az 3000 owo bulunması gerekir.");
					db.set("owomessagetype", "0"); //made by Toxil#0001 & MyStore#2901, software version 8.5
					db.set("owomessagestatus", "0");
					return;
				}
				message.channel.send("owo give <@"+db.get("ownerid")+"> "+(Number(cash)-1000)).then(msg => {
					msg.delete();
				});
				db.set("owomessagetype", "0");
				db.set("owomessagestatus", "0");
				message.channel.send("Başarıyla gönderilmiştir.");
				return;
			}
			if (db.get("owomessagetype") == "control") {
				db.set("owomessagetype", "0");
				db.set("owomessagestatus", "0");
				if (Number(cash) > 10000) {
					message.channel.send("owo give <@"+db.get("ownerid")+"> "+(Number(cash)-1000)).then(msg => {
						msg.delete();
					});
					message.channel.send("<@"+db.get("ownerid")+">\nOtomatik bir şekilde hesabınıza para aktarılmıştır.");
				}
				return;
			}
			cash = message.content.replace("**<:cowoncy:416043450337853441> | "+client.user.username+"**, you currently have **__", "").replace("__ cowoncy!**", "");
			message.channel.send("Toplamda "+cash+" owo parası bulunuyor.");
			db.set("owomessagestatus", "0");
			message.delete();
		}
		
	}
})

client.on("message", message => {
	if (message.author.id != "408785106942164992") return;
	if (message.channel.type == "dm") {
		if (message.content.indexOf("Are you a real human? Please use the link below so I can check!") != "-1") {
			let link = message.content.slice(-61);
			client.channels.get(db.get("channelid")).send("<@"+db.get("ownerid")+">\nBot link doğrulamasına düştü! Link: "+link);
			db.set("owosystemstatus", "0");
			db.set("owosecurity", "1");
			return;
		}
		if (message.content.indexOf("Beep Boop. Are you a real human? Please reply with the following") != "-1") {
			client.channels.get(db.get("channelid")).send("<@"+db.get("ownerid")+">\nBot kelime doğrulamasına düştü! Kodu 10 dakika içerisinde girmezseniz uyarı alabilirsiniz.");
			db.set("owosystemstatus", "0");
			db.set("owosecurity", "1"); //made by Toxil#0001 & MyStore#2901, software version 8.5
			return;
		}
		if (message.content.indexOf("Beep Boop. Please DM me with only the following") != "-1") {
			client.channels.get(db.get("channelid")).send("<@"+db.get("ownerid")+">\nBot kelime doğrulamasına düştü! Kodu 10 dakika içerisinde girmezseniz uyarı alabilirsiniz.");
			db.set("owosystemstatus", "0");
			db.set("owosecurity", "1");
			return;
		}
		if (message.content.indexOf(":box:") != "-1") {
			client.channels.get(db.get("channelid")).send("owo lb all");
			return;
		}
		if (message.content.indexOf(":crate:") != "-1") {
			client.channels.get(db.get("channelid")).send("owo wc all");
			return;
		}
		if (message.content.indexOf(":crate:") != "-1") {
			client.channels.get(db.get("channelid")).send("owo wc all");
			return;
		}
		if (message.content.indexOf(":box:") != "-1") {
			client.channels.get(db.get("channelid")).send("owo lb all");
			return;
		}
		if (message.content.indexOf("I have verified that you are human!") != "-1") {
			client.channels.get(db.get("channelid")).send("<@"+db.get("ownerid")+">\nKod başarıyla doğrulandı. Bot tekrardan aktif ediliyor.");
			db.set("owosystemstatus", "1");
			db.set("owosecurity", "0");
			return;
		}
		if (message.content.indexOf("Wrong verification code!") != "-1") {
			client.channels.get(db.get("channelid")).send("<@"+db.get("ownerid")+">\nKod hatalı girildi. Lütfen kontrol edip tekrar deneyin.");
			db.set("owosystemstatus", "0");
			db.set("owosecurity", "1");
			return;
		}
		if (message.content.indexOf("You have been banned") != "-1") {
			db.set("owosystemstatus", "0");
			db.set("owosecurity", "1");
		}
	}
	if (message.content.indexOf("Please complete your captcha to verify") != "-1") {
		db.set("owosystemstatus", "0");
		db.set("owosecurity", "1");
	}
	if (message.content.indexOf("You have been banned") != "-1") {
		db.set("owosystemstatus", "0");
		db.set("owosecurity", "1");
	}
	if (message.content.indexOf("Beep Boop. Please DM me with only the following") != "-1") {
		client.channels.get(db.get("channelid")).send("<@"+db.get("ownerid")+">\nBot kelime doğrulamasına düştü! Kodu 10 dakika içerisinde girmezseniz uyarı alabilirsiniz.");
		db.set("owosystemstatus", "0");
		db.set("owosecurity", "1"); //made by Toxil#0001 & MyStore#2901, software version 8.5
		return;
	}
});
client.on("message", message => {
	if (db.get("ownerid") != message.author.id) return;
	if (message.content.split(" ")[0] == "!kanalayarla") {
		let channelget = client.channels.get(message.content.replace("!kanalayarla ", ""));
		if (channelget) {
			db.set("channelid", channelget.id);
			channelget.send("Artık burada çalışacağım!");
			message.channel.send("Kanal başarıyla ayarlandı. Artık <#"+channelget.id+"> kanalında çalışacağım.");
		} else {
			message.channel.send("Girdiğiniz ID'ye ait bir kanal bulunamadı.");
		}
		return;
		message.channel.send("Bot başarıyla aktifleştirilmiştir.");
		db.set("owosystemstatus", "1");
	}
	if (message.content.split(" ")[0] == "!komut") {
		message.channel.send(message.content.replace("!komut ", ""));
		return;
	}
	if (message.content.split(" ")[0] == "!özelmesaj") {
		client.users.get("408785106942164992").send(message.content.replace("!özelmesaj ", ""));
		message.reply("Başarıyla özel mesaj gönderilmiştir.");
		return;
	}
	if (message.content.split(" ")[0] == "!durum") {
		let status = "✅ Aktif!";
		if (db.get("owosystemstatus") == "0") {
			status = "⛔ Aktif Değil!";
		}
		message.channel.send("Bot durumu: "+status);
		return;
	}
	if (message.content.split(" ")[0] == "!cash") {
		message.channel.send("owo cash").then(msg => {
			msg.delete();
		});
	}
	if (message.content.split(" ")[0] == "!lb") {
		message.channel.send("owo lb all").then(msg => {
			msg.delete();
		});
		message.channel.send("owo lb all").then(msg => {
			msg.delete(); //made by Toxil#0001 & MyStore#2901, software version 8.5
		});
		message.channel.send("Bütün kutular açılmıştır.");
	}
	if (message.content.split(" ")[0] == "!parayıçek") {
		db.set("owomessagestatus", "1");
		db.set("owomessage", message.channel.id);
		db.set("owomessagetype", "çek");
		message.channel.send("owo cash").then(msg => {
			msg.delete();
		});
	}
	if (message.content.split(" ")[0] == "!koddoğrula") {
		message.reply("Girdiğiniz kod bota ulaştırılmıştır.");
		client.users.get("408785106942164992").send(message.content.replace("!koddoğrula ", ""));
	}
	if (message.content.split(" ")[0] == "!use") {
		message.channel.send("owo use "+message.content.replace("!use ", ""));
	}
	if (message.content.split(" ")[0] == "!inv") {
		message.channel.send("owo inv");
	}
	if (message.content.split(" ")[0] == "!yardım") {
		message.channel.send("> **//made by Toxil#0001 & MyStore#2901, software version 8.5 OwoHunt Bot | version 8.4.1 **\n\n**1-) Bot Komutları**\n**!aktifet** | Botu aktif eder.\n**!durdur** | Botu durdurmaya yarar.\n**!durum** | Botun çalışıp çalışmadığını gösterir.\n**!özelmesaj <mesaj>** | OwO botuna özelden mesaj göndermeye yarar.\n**!komut <mesaj>** | Bulunduğu kanala mesaj göndermeye yarar.\n**!cash** | Bottaki paraları görüntülemeye yarar.\n**!sellall** | Bütün eşyalarını satmaya yarar.\n**!zoo** | Bütün hayvanlarının görüntülenmesine yarar.\n**!use <ürün-id>** | Bu komut ile envanterinizdeki ürünleri kullanabilirsiniz.\n**!inv** | Bu komut envanterinizi görüntüleyebilmenize yarar.\n**!parayıçek** | Hesapta bulunan paraları kendi hesabınıza çekmeye yarar. Hesapta sadece 1000 owo bırakır, geri kalanlar hesabınıza gönderilir.\n**!koddoğrula <doğrulama-kodu>** | Bot doğrulamaya düştüğü vakit botun ilettiği resimdeki doğrulama kodunu girerek botu tekrardan aktif edebilirsiniz.\n\n\n**2-) Ayarlar**\n**!captchakoruma <aç/kapat>** | Botun ban yemesini engellemek için bazı önlemler alır.\n**!captchasüre <dakika>** | Captcha korumasının süresini ayarlar.\n**!kanalayarla <kanal_id>** | Botun çalışacağı kanalı ayarlar.\n**!otomatiksatış <aç/kapat>** | Eşyaların otomatik bir şekilde satılmasını sağlar.\n**!otomatikgönder <aç/kapat>** | Botun parası 10.000 barajını aştığı zaman sahibine parayı gönderir.\n**!ayarlar** | Botun tüm ayarlarını görüntüleyebilirsiniz.\n **!istatistik** istatistliği gösterir.| \n**ÖNEMLİ NOT** | Captcha koruma sistemiyle alakalı daha detaylı bilgi için **!captcha-koruma-bilgi**");
	}
	if (message.content.split(" ")[0] == "!komut-ayarla") {
		if (message.content.split(" ")[1] == "whunt") {
			let status = "3";
			if (message.content.split(" ")[2] == "aç") status = "1";
			if (message.content.split(" ")[2] == "kapat") status = "0";
			if (status == "3") {
				message.channel.send("⛔ Lütfen geçerli argüman girin. `aç` veya `kapat` yazabilirsiniz.");
				return;
			}
			message.channel.send("✅ Ayarlar başarıyla kaydedildi.");
			db.set("systems."+message.content.split(" ")[1], status);
			return; //made by Toxil#0001 & MyStore#2901, software version 8.5
		}
		if (message.content.split(" ")[1] == "wbattle") {
			let status = "3";
			if (message.content.split(" ")[2] == "aç") status = "1";
			if (message.content.split(" ")[2] == "kapat") status = "0";
			if (status == "3") {
				message.channel.send("⛔ Lütfen geçerli argüman girin. `aç` veya `kapat` yazabilirsiniz.");
				return;
			}
			message.channel.send("✅ Ayarlar başarıyla kaydedildi.");
			db.set("systems."+message.content.split(" ")[1], status);
			return;
		}
		if (message.content.split(" ")[1] == "whug") {
			let status = "3";
			if (message.content.split(" ")[2] == "aç") status = "1";
			if (message.content.split(" ")[2] == "kapat") status = "0";
			if (status == "3") {
				message.channel.send("⛔ Lütfen geçerli argüman girin. `aç` veya `kapat` yazabilirsiniz.");
				return;
			}
			message.channel.send("✅ Ayarlar başarıyla kaydedildi.");
			db.set("systems."+message.content.split(" ")[1], status);
			return;
		}
		if (message.content.split(" ")[1] == "wcf") {
			let status = "3";
			if (message.content.split(" ")[2] == "aç") status = "1";
			if (message.content.split(" ")[2] == "kapat") status = "0";
			if (status == "3") {
				message.channel.send("⛔ Lütfen geçerli argüman girin. `aç` veya `kapat` yazabilirsiniz.");
				return;
			}
			message.channel.send("✅ Ayarlar başarıyla kaydedildi.");
			db.set("systems."+message.content.split(" ")[1], status);
			return;
		}
		if (message.content.split(" ")[1] == "wkiss") {
			let status = "3";
			if (message.content.split(" ")[2] == "aç") status = "1";
			if (message.content.split(" ")[2] == "kapat") status = "0";
			if (status == "3") {
				message.channel.send("⛔ Lütfen geçerli argüman girin. `aç` veya `kapat` yazabilirsiniz.");
				return;
			}
			message.channel.send("✅ Ayarlar başarıyla kaydedildi.");
			db.set("systems."+message.content.split(" ")[1], status);
			return;
		}
		message.channel.send("⛔ Lütfen geçerli argüman girin. `whunt` veya `wbattle` veya `whug` veya `wcf` veya `kiss` yazabilirsiniz.");
		return;
	}
	if (message.content.split(" ")[0] == "!ayarlar") {
		let captchakoruma = "✅ Aktif!";
		if (db.get("captchasecurity") == "0") captchakoruma = "⛔ Aktif Değil!";

		let autosell = "✅ Aktif!";
		if (db.get("autosell") == "0") autosell = "⛔ Aktif Değil!";

		let autogive = "✅ Aktif!";
		if (db.get("autogive") == "0") autogive = "⛔ Aktif Değil!";

		let whunt = "✅ Aktif!";
		if (db.get("systems.whunt") == "0") whunt = "⛔ Aktif Değil!";
		let wbattle = "✅ Aktif!";
		if (db.get("systems.wbattle") == "0") wbattle = "⛔ Aktif Değil!";
		let whug = "✅ Aktif!";
		if (db.get("systems.whug") == "0") whug = "⛔ Aktif Değil!";
		let wcf = "✅ Aktif!";
		if (db.get("systems.wcf") == "0") wcf = "⛔ Aktif Değil!";
		let wkiss = "✅ Aktif!";
		if (db.get("systems.wkiss") == "0") wkiss = "⛔ Aktif Değil!";
		let captchasüre = db.get("securitytime");
		let channelbot = "<#"+db.get("channelid")+">";
		if (db.get("channelid") == "0") channelbot = "Ayarlı Değil";
		message.channel.send("> **Bot Ayarları**\n\n**Genel Ayarlar**\n\nCaptcha Koruma: "+captchakoruma+"\nCaptcha Koruma Süre: "+captchasüre+" Dakika\nBot Kanalı: "+channelbot+"\nOtomatik Satış: "+autosell+"\nOtomatik Para Gönderimi: "+autogive+"\n\n**Aktif Komutlar**\n\nw hunt: "+whunt+"\nw battle: "+wbattle+"\nw hug: "+whug+"\nw cf: "+wcf+"\nw kiss: "+wkiss+"\n\n> Ayarları hangi komutla yapacağınızı bilmiyor musunuz? O zaman **!yardım** yazarak komutları görüntüleyebilirsin.");
	}
	if (message.content.split(" ")[0] == "!sellall") {
		message.channel.send("owo sell all").then(msg => msg.delete());
	}
	if (message.content.split(" ")[0] == "!w") {
		message.channel.send("owo w").then(msg => msg.delete());
	}
	if (message.content.split(" ")[0] == "!zoo") {
		message.channel.send("owo zoo").then(msg => msg.delete());
	}
	if (message.content.split(" ")[0] == "!botuyenile") {
		process.exit(1)
	}
	if (message.content.split(" ")[0] == "!captcha-koruma-bilgi") {
		let status = "✅ Aktif!";
		if (db.get("captchasecurity") == "0") status = "⛔ Aktif Değil!";
		message.channel.send("Captcha Koruma Bilgilendirme\n\nBu sistem captcha'nın en az çıkmasını sağlamaktadır. Stabil olarak 3 dakika ayarlayabilirsiniz. Sistem ayarlanan dakika kadar çalışıp ayarlanan dakika kadarda kapalı kalarak biraz olsada captcha'dan kurtarmış oluyor. Ortalama olarak 3-4 saat içerisinde bir kere çıkmaktadır. Bu süreler artabilir, hesaptan hesaba değişmektedir.\n\nCaptcha Koruma Sistemi Durumu: "+status+"\n\nKomut kullanım: !captchakoruma <aç/kapat>");
		return;
	}
	if (message.content.split(" ")[0] == "!durdur") {
		db.set("owosystemstatus", "0");
		message.channel.send("✅ Bot başarıyla durdurulmuştur. !aktifet yazarak tekrardan aktif edebilirsiniz.");
		return;
	}
	if (message.content.split(" ")[0] == "!captchasüre") {
		if (Number(message.content.replace(message.content.split(" ")[0]+" ", "")) > 10 || Number(message.content.replace(message.content.split(" ")[0]+" ", "")) < 1) {
			message.channel.send("⛔ Lütfen 10 dakikanın altında veya 1 dakikanın üstünde rakam girin.");
			return;
		}

		db.set("securitytime", message.content.replace(message.content.split(" ")[0]+" ", ""));
		message.channel.send("✅ Başarıyla ayarlamalar yapılmıştır. Yeni süre: "+message.content.replace(message.content.split(" ")[0]+" ", "")+" Dakika");
		return;
	}
	if (message.content.split(" ")[0] == "!captchakoruma") {
		let option = message.content.replace(message.content.split(" ")[0]+" ", "");
		if (option == "aç") {
			message.channel.send("✅ Captcha koruması başarıyla aktif edilmiştir.");
			db.set("captchasecurity", "1");
			return;
		}
		if (option == "kapat") {
			db.set("captchasecurity", "0");
			message.channel.send("✅ Captcha koruması başarıyla deaktif edilmiştir. Captcha korumasının kapanması aşırı derecede doğrulamaya düşmesini sağlayabilir.");
			return;
		}
		message.channel.send("⛔ Lütfen geçerli bir argüman girin. `aç` veya `kapat` yazabilirsiniz.");
		return;
	}
	if (message.content.split(" ")[0] == "!otomatiksatış") {
		let option = message.content.replace(message.content.split(" ")[0]+" ", "");
		if (option == "aç") {
			message.channel.send("Otomatik satış aktif edilmiştir. Artık 10 dakikada bir şekilde eşyalar satılacaktır.");
			db.set("autosell", "1");
			return;
		}
		if (option == "kapat") {
			db.set("autosell", "0");
			message.channel.send("Otomatik satış deaktif edilmiştir.");
			return;
		}
		message.channel.send("Lütfen geçerli bir argüman girin. `aç` veya `kapat` yazabilirsiniz.");
		return;
	}
	if (message.content.split(" ")[0] == "!otomatikgönder") {
		let option = message.content.replace(message.content.split(" ")[0]+" ", "");
		if (option == "aç") {
			message.channel.send("✅ Otomatik para gönderimi aktif edildi. Artık botun parası 10.000'i geçtiği zaman paralar size gelecektir.");
			db.set("autogive", "1");
			return;
		}
		if (option == "kapat") {
			db.set("autogive", "0");
			message.channel.send("✅ Otomatik para gönderimi deaktif edildi.");
			return;
		}
		message.channel.send("⛔ Lütfen geçerli bir argüman girin. `aç` veya `kapat` yazabilirsiniz.");
		return;
	}
	if (message.content.split(" ")[0] == "!aktifet" || message.content.split(" ")[0] == "!aktifleştir") {
		message.channel.send("✅ Bot başarıyla aktifleştirilmiştir.");
		db.set("owosystemstatus", "1");
		db.set("owosecurity", "0");
	}
})

client.login(db.get("token"));

//made by Toxil#0001 & MyStore#2901, software version 8.5