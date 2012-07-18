	



		/*Classe Controle:*/

		function Controle(player, divId, p_areaPowerEject, p_areaAlfanumericos, p_areaVolumeChannel, p_areaInterativos, p_areaColoridos, p_areaMultimidia, p_areaLogo) 
		{
				this.player = player;
				this.divId = divId;
				this.p_areaPowerEject = p_areaPowerEject;
				this.p_areaAlfanumericos = p_areaAlfanumericos;
				this.p_areaVolumeChannel = p_areaVolumeChannel;
				this.p_areaInterativos = p_areaInterativos;
				this.p_areaColoridos = p_areaColoridos;
				this.p_areaMultimidia = p_areaMultimidia;
				this.p_areaLogo = p_areaLogo;


				//flags para controle visual de cada área
				var controlPowerEject = 0;
				var controlAlfanumericos = 0;
				var controlVolumeChannel = 0;
				var controlInterativos = 0;
				var controlColoridos = 0;
				var controlMultimidia = 0;
				var controlLogo = 0;


				//Ao criar um objeto Controle todas as áreas serao criadas...
				document.getElementById(this.divId).innerHTML = "<div id=\"areaEspacamento1\">"+
																"</div>"+


					"<div id=\"areaPowerEject\">"+
						"<img src=\"img_control/power+eject.png\" width=\"100%\" height=\"100%\" usemap=\"#Map\" border=\"0\" />"+
						"<map name=\"Map\" id=\"Map\">"+
						  "<area shape=\"circle\" coords=\"26,19,15\" href=\"#\"  id=\"areaButtonPower\" />"+
						  "<area shape=\"circle\" coords=\"111,22,11\" href=\"#\" id=\"areaButtonEject\" />"+
						"</map>"+
					"</div>"+	

					"<div id=\"areaEspacamento2\">"+ 
					"</div>"+  

					"<div id=\"areaAlfanumericos\">"+
						"<img src=\"img_control/alfanumericos.png\" width=\"100%\" height=\"100%\" usemap=\"#Map2\" border=\"0\" />"+
						"<map name=\"Map2\" id=\"Map2\">"+
						  "<area shape=\"rect\" coords=\"12,4,44,29\" href=\"#\"    id=\"areaButton1\" />"+
						  "<area shape=\"rect\" coords=\"50,4,82,29\" href=\"#\"    id=\"areaButton2\" />"+
						  "<area shape=\"rect\" coords=\"92,4,124,29\" href=\"#\"   id=\"areaButton3\" />"+
						  "<area shape=\"rect\" coords=\"12,34,44,59\" href=\"#\"   id=\"areaButton4\" />"+
						  "<area shape=\"rect\" coords=\"50,34,82,59\" href=\"#\"   id=\"areaButton5\" />"+
						  "<area shape=\"rect\" coords=\"92,34,124,59\" href=\"#\"  id=\"areaButton6\" />"+
						  "<area shape=\"rect\" coords=\"12,66,44,91\" href=\"#\"   id=\"areaButton7\" />"+
						  "<area shape=\"rect\" coords=\"50,66,82,91\" href=\"#\"   id=\"areaButton8\" />"+
						  "<area shape=\"rect\" coords=\"91,67,123,92\" href=\"#\"  id=\"areaButton9\" />"+
						  "<area shape=\"rect\" coords=\"12,97,44,122\" href=\"#\"  id=\"areaButtonHash\" />"+
						  "<area shape=\"rect\" coords=\"50,98,82,123\" href=\"#\"  id=\"areaButton0\" />"+
						  "<area shape=\"rect\" coords=\"91,97,123,122\" href=\"#\" id=\"areaButtonStar\" />"+
						"</map>"+
					"</div>"+

					"<div id=\"areaEspacamento3\">"+
					"</div>"+ 

					"<div id=\"areaVolumeChannel\">"+
						"<img src=\"img_control/volume+channel.png\" width=\"100%\" height=\"100%\" usemap=\"#Map3\" border=\"0\" />"+
						"<map name=\"Map3\" id=\"Map3\">"+
						  "<area shape=\"rect\" coords=\"49,18,82,55\" href=\"#\"         id=\"areaButtonMenu\" />"+
						  "<area shape=\"rect\" coords=\"11,84,40,117\" href=\"#\"        id=\"areaButtonMute\"/>"+
						  "<area shape=\"rect\" coords=\"93,85,123,116\" href=\"#\"       id=\"areaButtonHelp\" />"+
						  "<area shape=\"poly\" coords=\"11,30,38,30,25,4\" href=\"#\"    id=\"areaButtonVolumeUp\" />"+
						  "<area shape=\"poly\" coords=\"94,30,121,30,108,5\" href=\"#\"  id=\"areaButtonChannelUp\" />"+
						  "<area shape=\"poly\" coords=\"11,48,39,48,25,75\" href=\"#\"   id=\"areaButtonVolumeDown\" />"+
						  "<area shape=\"poly\" coords=\"94,48,122,48,108,75\" href=\"#\" id=\"areaButtonChannelDown\" />"+
						"</map>"+ 
					"</div>"+

					"<div id=\"areaEspacamento4\">"+
					"</div>"+

					"<div id=\"areaInterativos\">"+
						"<img src=\"img_control/interativos.png\" width=\"100%\" height=\"100%\" usemap=\"#Map4\" border=\"0\" />"+
						"<map name=\"Map4\" id=\"Map4\">"+
						  "<area shape=\"circle\" coords=\"25,17,13\" href=\"#\"   id=\"areaButtonInfo\" />"+
						  "<area shape=\"circle\" coords=\"109,17,13\" href=\"#\"  id=\"areaButtonGuide\" />"+
						  "<area shape=\"circle\" coords=\"26,108,13\" href=\"#\"  id=\"areaButtonExit\" />"+
						  "<area shape=\"circle\" coords=\"109,109,13\" href=\"#\" id=\"areaButtonBack\" />"+
						  "<area shape=\"circle\" coords=\"67,63,22\" href=\"#\"   id=\"areaButtonEnter\" />"+
						  "<area shape=\"poly\" coords=\"93,48,96,56,96,63,95,70,92,78,105,90,110,82,112,73,113,65,113,55,110,46,104,36,93,47\" href=\"#\" id=\"areaButtonCursorRight\" />"+
						  "<area shape=\"poly\" coords=\"52,36,57,33,65,31,73,32,81,35,93,24,86,19,77,15,67,14,59,16,51,18,40,23,52,36\" href=\"#\" id=\"areaButtonCursorUp\" />"+
						  "<area shape=\"poly\" coords=\"40,48,38,56,37,62,38,70,41,78,28,90,23,82,21,72,20,63,21,54,23,46,30,36\" href=\"#\" id=\"areaButtonCursorLeft\" />"+
						  "<area shape=\"poly\" coords=\"53,89,58,92,66,93,73,92,81,89,92,102,85,106,77,109,67,111,60,111,51,108,40,101,51,89\" href=\"#\" id=\"areaButtonCursorDown\" />"+
						"</map>"+ 
					"</div>"+

					"<div id=\"areaEspacamento5\">"+
					"</div>"+

					"<div id=\"areaColoridos\">"+
						"<img src=\"img_control/coloridos.png\" width=\"100%\" height=\"100%\" usemap=\"#Map5\" border=\"0\" />"+
						"<map name=\"Map5\" id=\"Map5\">"+
						  "<area shape=\"circle\" coords=\"25,14,11\" href=\"#\"             id=\"areaButtonRed\"/>"+
						  "<area shape=\"rect\" coords=\"97,3,120,27\" href=\"#\"            id=\"areaButtonBlue\" />"+
						  "<area shape=\"poly\" coords=\"43,14,53,26,64,15,53,4\" href=\"#\" id=\"areaButtonGreen\" />"+
						  "<area shape=\"poly\" coords=\"71,24,90,24,80,4,70,24\" href=\"#\" id=\"areaButtonYellow\" />"+
						"</map>"+
					"</div>"+ 

					"<div id=\"areaEspacamento6\">"+
					"</div>"+

					"<div id=\"areaMultimidia\">"+
						"<img src=\"img_control/multimidia.png\" width=\"100%\" height=\"100%\" usemap=\"#Map6\" border=\"0\" />"+
						"<map name=\"Map6\" id=\"Map6\">"+
						  "<area shape=\"poly\" coords=\"43,35,42,8,32,15,31,9,11,23,31,36,31,27,40,36\" href=\"#\"         id=\"areaButtonRewind\"/>"+
						  "<area shape=\"poly\" coords=\"104,38,122,24,103,10,103,18,91,10,92,38,102,27,103,37\" href=\"#\" id=\"areaButtonForward\"/>"+
						  "<area shape=\"poly\" coords=\"58,42,57,4,80,23,60,42\" href=\"#\"                                id=\"areaButtonPlay\" />"+
						  "<area shape=\"circle\" coords=\"29,65,14\" href=\"#\"                                            id=\"areaButtonRec\" />"+
						  "<area shape=\"rect\" coords=\"92,51,119,79\" href=\"#\"                                          id=\"areaButtonStop\" />"+
						  "<area shape=\"rect\" coords=\"57,52,76,78\" href=\"#\"                                           id=\"areaButtonPause\" />"+
						"</map>"+
					"</div>"+ 

					"<div id=\"areaEspacamento7\">"+
					"</div>"+

					"<div id=\"areaLogo\">"+
						"<img src=\"img_control/logo.png\" width=\"100%\" height=\"100%\" />"+
					"</div>"+ 

					"<div id=\"areaEspacamento8\">"+
					"</div>";
					
				//... porém as áreas iniciarao escondidas
				$('#areaEspacamento1').hide();
				$('#areaPowerEject').hide();
				$('#areaEspacamento2').hide();
				$('#areaAlfanumericos').hide();
				$('#areaEspacamento3').hide();
				$('#areaVolumeChannel').hide();
				$('#areaEspacamento4').hide();
				$('#areaInterativos').hide();
				$('#areaEspacamento5').hide();
				$('#areaColoridos').hide();
				$('#areaEspacamento6').hide();
				$('#areaMultimidia').hide();
				$('#areaEspacamento7').hide();
				$('#areaLogo').hide();
				$('#areaEspacamento8').hide();
				
				
				//Chamadas para o evento click de cada botão:	
				$('#areaButtonPower').click($.proxy(function(){this.Button('POWER')}, this));
				$('#areaButtonEject').click($.proxy(function(){this.Button('EJECT')}, this));
				
				$('#areaButton1').click($.proxy(function(){this.Button('KEY_1')}, this));
				$('#areaButton2').click($.proxy(function(){this.Button('KEY_2')}, this));
				$('#areaButton3').click($.proxy(function(){this.Button('KEY_3')}, this));
				$('#areaButton4').click($.proxy(function(){this.Button('KEY_4')}, this));
				$('#areaButton5').click($.proxy(function(){this.Button('KEY_5')}, this));
				$('#areaButton6').click($.proxy(function(){this.Button('KEY_6')}, this));
				$('#areaButton7').click($.proxy(function(){this.Button('KEY_7')}, this));
				$('#areaButton8').click($.proxy(function(){this.Button('KEY_8')}, this));
				$('#areaButton9').click($.proxy(function(){this.Button('KEY_9')}, this));
				$('#areaButtonHash').click($.proxy(function(){this.Button('KEY_HASH')}, this));
				$('#areaButton0').click($.proxy(function(){this.Button('KEY_0')}, this));
				$('#areaButtonStar').click($.proxy(function(){this.Button('KEY_STAR')}, this));
				
				$('#areaButtonMenu').click($.proxy(function(){this.Button('MENU')}, this));
				$('#areaButtonMute').click($.proxy(function(){this.Button('MUTE')}, this));
				$('#areaButtonHelp').click($.proxy(function(){this.Button('HELP')}, this));
				$('#areaButtonVolumeUp').click($.proxy(function(){this.Button('VULUME_UP')}, this));
				$('#areaButtonChannelUp').click($.proxy(function(){this.Button('CHANNEL_UP')}, this));
				$('#areaButtonVolumeDown').click($.proxy(function(){this.Button('VOLUME_DOWN')}, this));
				$('#areaButtonChannelDown').click($.proxy(function(){this.Button('CHANNEL_DOWN')}, this));				
				
				$('#areaButtonGuide').click($.proxy(function(){this.Button('GUIDE')}, this));
				$('#areaButtonInfo').click($.proxy(function(){this.Button('INFO')}, this));
				$('#areaButtonBack').click($.proxy(function(){this.Button('BACK')}, this));
				$('#areaButtonExit').click($.proxy(function(){this.Button('EXIT')}, this));
				$('#areaButtonEnter').click($.proxy(function(){this.Button('ENTER')}, this));
				$('#areaButtonUp').click($.proxy(function(){this.Button('UP')}, this));
				$('#areaButtonDown').click($.proxy(function(){this.Button('DOWN')}, this));
				$('#areaButtonRight').click($.proxy(function(){this.Button('RIGHT')}, this));
				$('#areaButtonLeft').click($.proxy(function(){this.Button('LEFT')}, this));
				
				$('#areaButtonRed').click($.proxy(function(){this.Button('RED')}, this));
				$('#areaButtonBlue').click($.proxy(function(){this.Button('BLUE')}, this));
				$('#areaButtonGreen').click($.proxy(function(){this.Button('GREEN')}, this));
				$('#areaButtonYellow').click($.proxy(function(){this.Button('YELLOW')}, this));
				
				$('#areaButtonRewind').click($.proxy(function(){this.Button('REWIND')}, this));
				$('#areaButtonPlay').click($.proxy(function(){this.Button('PLAY')}, this));
				$('#areaButtonForward').click($.proxy(function(){this.Button('FORWARD')}, this));
				$('#areaButtonPause').click($.proxy(function(){this.Button('PAUSE')}, this));
				$('#areaButtonStop').click($.proxy(function(){this.Button('STOP')}, this));
				$('#areaButtonRec').click($.proxy(function(){this.Button('REC')}, this));


				
				
				//$('#areaPlayer2').hide();
		}

		//Para visualizar a área PowerEject(mesma lógica para as demais áreas)
		Controle.prototype.setAreaPowerEject = function(p_areaPowerEject){
				if(p_areaPowerEject){

					//sinaliza a flag de controle da área
					this.controlPowerEject = !(this.controlPowerEject);

					//a área sempre será visualizada juntamente com o seu espaçamento acima
					$('#areaEspacamento1').toggle();
					$('#areaPowerEject').toggle();

					//o último espaçamento será visível enquanto qualquer outra área for visível
					if((this.controlPowerEject)||(this.controlAlfanumericos)||(this.controlVolumeChannel)||(this.controlInterativos)||(this.controlColoridos)||(this.controlMultimidia)||(this.controlLogo))
						$('#areaEspacamento8').show();
					else
						$('#areaEspacamento8').hide();
				}
		}

		Controle.prototype.setAreaAlfanumericos = function(p_areaAlfanumericos){				
				if(p_areaAlfanumericos){
					this.controlAlfanumericos = !(this.controlAlfanumericos);

					$('#areaEspacamento2').toggle();
					$('#areaAlfanumericos').toggle();

					if((this.controlPowerEject)||(this.controlAlfanumericos)||(this.controlVolumeChannel)||(this.controlInterativos)||(this.controlColoridos)||(this.controlMultimidia)||(this.controlLogo))
						$('#areaEspacamento8').show();
					else
						$('#areaEspacamento8').hide();
				}
		}

		Controle.prototype.setAreaVolumeChannel = function(p_areaVolumeChannel){
				if(p_areaVolumeChannel){
					this.controlVolumeChannel = !(this.controlVolumeChannel);

					$('#areaEspacamento3').toggle();
					$('#areaVolumeChannel').toggle();

					if((this.controlPowerEject)||(this.controlAlfanumericos)||(this.controlVolumeChannel)||(this.controlInterativos)||(this.controlColoridos)||(this.controlMultimidia)||(this.controlLogo))
						$('#areaEspacamento8').show();
					else
						$('#areaEspacamento8').hide();
				}
		}

		Controle.prototype.setAreaInterativos = function(p_areaInterativos){
				if(p_areaInterativos){
					this.controlInterativos = !(this.controlInterativos);

					$('#areaEspacamento4').toggle();
					$('#areaInterativos').toggle();

					if((this.controlPowerEject)||(this.controlAlfanumericos)||(this.controlVolumeChannel)||(this.controlInterativos)||(this.controlColoridos)||(this.controlMultimidia)||(this.controlLogo))
						$('#areaEspacamento8').show();
					else
						$('#areaEspacamento8').hide();
				}
		}

		Controle.prototype.setAreaColoridos = function(p_areaColoridos){
				if(p_areaColoridos){
					this.controlColoridos = !(this.controlColoridos);

					$('#areaEspacamento5').toggle();
					$('#areaColoridos').toggle();

					if((this.controlPowerEject)||(this.controlAlfanumericos)||(this.controlVolumeChannel)||(this.controlInterativos)||(this.controlColoridos)||(this.controlMultimidia)||(this.controlLogo))
						$('#areaEspacamento8').show();
					else
						$('#areaEspacamento8').hide();
				}
		}

		Controle.prototype.setAreaMultimidia = function(p_areaMultimidia){
				if(p_areaMultimidia){
					this.controlMultimidia = !(this.controlMultimidia);

					$('#areaEspacamento6').toggle();
					$('#areaMultimidia').toggle();

					if((this.controlPowerEject)||(this.controlAlfanumericos)||(this.controlVolumeChannel)||(this.controlInterativos)||(this.controlColoridos)||(this.controlMultimidia)||(this.controlLogo))
						$('#areaEspacamento8').show();
					else
						$('#areaEspacamento8').hide();
				}
		}

		Controle.prototype.setAreaLogo = function(p_areaLogo){
				if(p_areaLogo){
					this.controlLogo = !(this.controlLogo);

					$('#areaEspacamento7').toggle();
					$('#areaLogo').toggle();

					if((this.controlPowerEject)||(this.controlAlfanumericos)||(this.controlVolumeChannel)||(this.controlInterativos)||(this.controlColoridos)||(this.controlMultimidia)||(this.controlLogo))
						$('#areaEspacamento8').show();
					else
						$('#areaEspacamento8').hide();
				}
		}
		
		
		Controle.prototype.Button = function(b){
			if((b!="CURSOR_UP")&&(b!="CURSOR_DOWN")&&(b!="CURSOR_LEFT")&&(b!="CURSOR_RIGHT")&&(b!="ENTER")&&(b!="GREEN")&&(b!="YELLOW")&&(b!="RED")&&(b!="BLUE"))
				alert("Botao " + b + " clicado!");
			else
				this.player.presentation.focusManager.keyEvent(Keys[b]);

		}
		
		Controle.prototype.Button2 = function(b){
			$('#areaPlayer2').toggle();

		}