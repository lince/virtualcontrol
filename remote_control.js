	



		/*Classe Controle:*/

		function RemoteControl(player, divId, p_areaPowerEject, p_areaNumbers, p_areaVolumeChannel, p_areaInteractive, p_areaColorful, p_areaMultimedia, p_areaLogo) 
		{
				this.player = player;
				this.divId = divId;
				this.p_areaPowerEject = p_areaPowerEject;
				this.p_areaNumbers = p_areaNumbers;
				this.p_areaVolumeChannel = p_areaVolumeChannel;
				this.p_areaInteractive = p_areaInteractive;
				this.p_areaColorful = p_areaColorful;
				this.p_areaMultimedia = p_areaMultimedia;
				this.p_areaLogo = p_areaLogo;


				//flags para controle visual de cada área
				var controlPowerEject = 0;
				var controlNumbers = 0;
				var controlVolumeChannel = 0;
				var controlInteractive = 0;
				var controlColorful = 0;
				var controlMultimedia = 0;
				var controlLogo = 0;


				//Ao criar um objeto Controle todas as áreas e botões serão criados...
				document.getElementById(this.divId).innerHTML = "<div id=\"areaSpace1\">"+
																"</div>"+


					"<div id=\"areaPowerEject\">"+					
						"<img src=\"img_control/Buttons/hover/png/Power.png\" width=\"55\" height=\"41\" 	id=\"imgButtonPowerHover\">"+
						"<img src=\"img_control/Buttons/press/png/Power.png\" width=\"55\" height=\"41\" 	id=\"imgButtonPowerPress\">"+
						"<img src=\"img_control/Buttons/hover/png/Eject.png\" width=\"55\" height=\"41\" 	id=\"imgButtonEjectHover\">"+
						"<img src=\"img_control/Buttons/press/png/Eject.png\" width=\"55\" height=\"41\" 	id=\"imgButtonEjectPress\">"+
						
						"<img src=\"img_control/power_eject.png\" width=\"100%\" height=\"100%\" usemap=\"#Map\" border=\"0\" />"+
						"<map name=\"Map\" id=\"Map\">"+
						  "<area shape=\"circle\" coords=\"26,19,15\" href=\"#\"  id=\"areaButtonPower\" />"+
						  "<area shape=\"circle\" coords=\"111,22,11\" href=\"#\" id=\"areaButtonEject\" />"+
						"</map>"+
					"</div>"+	

					"<div id=\"areaSpace2\">"+ 
					"</div>"+  

					"<div id=\"areaNumbers\">"+					
						"<img src=\"img_control/Buttons/hover/png/Key_1.png\" width=\"55\" height=\"41\" 	id=\"imgButtonKey_1Hover\">"+
						"<img src=\"img_control/Buttons/press/png/Key_1.png\" width=\"55\" height=\"41\" 	id=\"imgButtonKey_1Press\">"+
						"<img src=\"img_control/Buttons/hover/png/Key_2.png\" width=\"55\" height=\"41\" 	id=\"imgButtonKey_2Hover\">"+
						"<img src=\"img_control/Buttons/press/png/Key_2.png\" width=\"55\" height=\"41\" 	id=\"imgButtonKey_2Press\">"+
						"<img src=\"img_control/Buttons/hover/png/Key_3.png\" width=\"55\" height=\"41\"	id=\"imgButtonKey_3Hover\">"+
						"<img src=\"img_control/Buttons/press/png/Key_3.png\" width=\"55\" height=\"41\" 	id=\"imgButtonKey_3Press\">"+
						"<img src=\"img_control/Buttons/hover/png/Key_4.png\" width=\"55\" height=\"41\" 	id=\"imgButtonKey_4Hover\">"+
						"<img src=\"img_control/Buttons/press/png/Key_4.png\" width=\"55\" height=\"41\" 	id=\"imgButtonKey_4Press\">"+						
						"<img src=\"img_control/Buttons/hover/png/Key_5.png\" width=\"55\" height=\"41\" 	id=\"imgButtonKey_5Hover\">"+
						"<img src=\"img_control/Buttons/press/png/Key_5.png\" width=\"55\" height=\"41\" 	id=\"imgButtonKey_5Press\">"+
						"<img src=\"img_control/Buttons/hover/png/Key_6.png\" width=\"55\" height=\"41\" 	id=\"imgButtonKey_6Hover\">"+
						"<img src=\"img_control/Buttons/press/png/Key_6.png\" width=\"55\" height=\"41\" 	id=\"imgButtonKey_6Press\">"+
						"<img src=\"img_control/Buttons/hover/png/Key_7.png\" width=\"55\" height=\"41\" 	id=\"imgButtonKey_7Hover\">"+
						"<img src=\"img_control/Buttons/press/png/Key_7.png\" width=\"55\" height=\"41\" 	id=\"imgButtonKey_7Press\">"+
						"<img src=\"img_control/Buttons/hover/png/Key_8.png\" width=\"55\" height=\"41\" 	id=\"imgButtonKey_8Hover\">"+
						"<img src=\"img_control/Buttons/press/png/Key_8.png\" width=\"55\" height=\"41\" 	id=\"imgButtonKey_8Press\">"+						
						"<img src=\"img_control/Buttons/hover/png/Key_9.png\" width=\"55\" height=\"41\" 	id=\"imgButtonKey_9Hover\">"+
						"<img src=\"img_control/Buttons/press/png/Key_9.png\" width=\"55\" height=\"41\" 	id=\"imgButtonKey_9Press\">"+
						"<img src=\"img_control/Buttons/hover/png/Key_Hash.png\" width=\"55\" height=\"41\" id=\"imgButtonKey_HashHover\">"+
						"<img src=\"img_control/Buttons/press/png/Key_Hash.png\" width=\"55\" height=\"41\"	id=\"imgButtonKey_HashPress\">"+
						"<img src=\"img_control/Buttons/hover/png/Key_0.png\" width=\"55\" height=\"41\" 	id=\"imgButtonKey_0Hover\">"+
						"<img src=\"img_control/Buttons/press/png/Key_0.png\" width=\"55\" height=\"41\" 	id=\"imgButtonKey_0Press\">"+
						"<img src=\"img_control/Buttons/hover/png/Key_Star.png\" width=\"55\" height=\"41\" id=\"imgButtonKey_StarHover\">"+
						"<img src=\"img_control/Buttons/press/png/Key_Star.png\" width=\"55\" height=\"41\" id=\"imgButtonKey_StarPress\">"+
												
						"<img src=\"img_control/numbers.png\" width=\"100%\" height=\"100%\" usemap=\"#Map2\" border=\"0\" />"+
						"<map name=\"Map2\" id=\"Map2\">"+
						  "<area shape=\"rect\" coords=\"12,4,44,29\" href=\"#\"    id=\"areaButtonKey_1\" />"+
						  "<area shape=\"rect\" coords=\"50,4,82,29\" href=\"#\"    id=\"areaButtonKey_2\" />"+
						  "<area shape=\"rect\" coords=\"92,4,124,29\" href=\"#\"   id=\"areaButtonKey_3\" />"+
						  "<area shape=\"rect\" coords=\"12,34,44,59\" href=\"#\"   id=\"areaButtonKey_4\" />"+
						  "<area shape=\"rect\" coords=\"50,34,82,59\" href=\"#\"   id=\"areaButtonKey_5\" />"+
						  "<area shape=\"rect\" coords=\"92,34,124,59\" href=\"#\"  id=\"areaButtonKey_6\" />"+
						  "<area shape=\"rect\" coords=\"12,66,44,91\" href=\"#\"   id=\"areaButtonKey_7\" />"+
						  "<area shape=\"rect\" coords=\"50,66,82,91\" href=\"#\"   id=\"areaButtonKey_8\" />"+
						  "<area shape=\"rect\" coords=\"91,67,123,92\" href=\"#\"  id=\"areaButtonKey_9\" />"+
						  "<area shape=\"rect\" coords=\"12,97,44,122\" href=\"#\"  id=\"areaButtonKey_Hash\" />"+
						  "<area shape=\"rect\" coords=\"50,98,82,123\" href=\"#\"  id=\"areaButtonKey_0\" />"+
						  "<area shape=\"rect\" coords=\"91,97,123,122\" href=\"#\" id=\"areaButtonKey_Star\" />"+
						"</map>"+
					"</div>"+

					"<div id=\"areaSpace3\">"+
					"</div>"+ 

					"<div id=\"areaVolumeChannel\">"+					
						"<img src=\"img_control/Buttons/hover/png/Volume_Up.png\" width=\"55\" height=\"41\" 	id=\"imgButtonVolume_UpHover\">"+
						"<img src=\"img_control/Buttons/press/png/Volume_Up.png\" width=\"55\" height=\"41\" 	id=\"imgButtonVolume_UpPress\">"+
						"<img src=\"img_control/Buttons/hover/png/Volume_Up.png\" width=\"55\" height=\"41\" 	id=\"imgButtonChannel_UpHover\">"+
						"<img src=\"img_control/Buttons/press/png/Volume_Up.png\" width=\"55\" height=\"41\" 	id=\"imgButtonChannel_UpPress\">"+						
						"<img src=\"img_control/Buttons/hover/png/Volume_Down.png\" width=\"55\" height=\"41\" 	id=\"imgButtonVolume_DownHover\">"+
						"<img src=\"img_control/Buttons/press/png/Volume_Down.png\" width=\"55\" height=\"41\" 	id=\"imgButtonVolume_DownPress\">"+
						"<img src=\"img_control/Buttons/hover/png/Volume_Down.png\" width=\"55\" height=\"41\" 	id=\"imgButtonChannel_DownHover\">"+
						"<img src=\"img_control/Buttons/press/png/Volume_Down.png\" width=\"55\" height=\"41\" 	id=\"imgButtonChannel_DownPress\">"+
						"<img src=\"img_control/Buttons/hover/png/Menu.png\" width=\"55\" height=\"41\" 		id=\"imgButtonMenuHover\">"+
						"<img src=\"img_control/Buttons/press/png/Menu.png\" width=\"55\" height=\"41\" 		id=\"imgButtonMenuPress\">"+
						"<img src=\"img_control/Buttons/hover/png/Mute.png\" width=\"55\" height=\"41\" 		id=\"imgButtonMuteHover\">"+
						"<img src=\"img_control/Buttons/press/png/Mute.png\" width=\"55\" height=\"41\" 		id=\"imgButtonMutePress\">"+	
						"<img src=\"img_control/Buttons/hover/png/Help.png\" width=\"55\" height=\"41\" 		id=\"imgButtonHelpHover\">"+
						"<img src=\"img_control/Buttons/press/png/Help.png\" width=\"55\" height=\"41\" 		id=\"imgButtonHelpPress\">"+					
					
						"<img src=\"img_control/volume_channel.png\" width=\"100%\" height=\"100%\" usemap=\"#Map3\" border=\"0\" />"+
						"<map name=\"Map3\" id=\"Map3\">"+
						  "<area shape=\"rect\" coords=\"49,18,82,55\" href=\"#\"         id=\"areaButtonMenu\" />"+
						  "<area shape=\"rect\" coords=\"11,84,40,117\" href=\"#\"        id=\"areaButtonMute\"/>"+
						  "<area shape=\"rect\" coords=\"93,85,123,116\" href=\"#\"       id=\"areaButtonHelp\" />"+
						  "<area shape=\"poly\" coords=\"11,30,38,30,25,4\" href=\"#\"    id=\"areaButtonVolume_Up\" />"+
						  "<area shape=\"poly\" coords=\"94,30,121,30,108,5\" href=\"#\"  id=\"areaButtonChannel_Up\" />"+
						  "<area shape=\"poly\" coords=\"11,48,39,48,25,75\" href=\"#\"   id=\"areaButtonVolume_Down\" />"+
						  "<area shape=\"poly\" coords=\"94,48,122,48,108,75\" href=\"#\" id=\"areaButtonChannel_Down\" />"+
						"</map>"+ 
					"</div>"+

					"<div id=\"areaSpace4\">"+
					"</div>"+

					"<div id=\"areaInteractive\">"+					
						"<img src=\"img_control/Buttons/hover/png/Info.png\" width=\"55\" height=\"41\" 		id=\"imgButtonInfoHover\">"+
						"<img src=\"img_control/Buttons/press/png/Info.png\" width=\"55\" height=\"41\" 		id=\"imgButtonInfoPress\">"+
						"<img src=\"img_control/Buttons/hover/png/Exit.png\" width=\"55\" height=\"41\" 		id=\"imgButtonExitHover\">"+
						"<img src=\"img_control/Buttons/press/png/Exit.png\" width=\"55\" height=\"41\" 		id=\"imgButtonExitPress\">"+
						"<img src=\"img_control/Buttons/hover/png/Guide.png\" width=\"55\" height=\"41\"		id=\"imgButtonGuideHover\">"+
						"<img src=\"img_control/Buttons/press/png/Guide.png\" width=\"55\" height=\"41\" 		id=\"imgButtonGuidePress\">"+
						"<img src=\"img_control/Buttons/hover/png/Back.png\" width=\"55\" height=\"41\" 		id=\"imgButtonBackHover\">"+
						"<img src=\"img_control/Buttons/press/png/Back.png\" width=\"55\" height=\"41\" 		id=\"imgButtonBackPress\">"+						
						"<img src=\"img_control/Buttons/hover/png/Enter.png\" width=\"55\" height=\"41\" 		id=\"imgButtonEnterHover\">"+
						"<img src=\"img_control/Buttons/press/png/Enter.png\" width=\"55\" height=\"41\" 		id=\"imgButtonEnterPress\">"+
						"<img src=\"img_control/Buttons/hover/png/Cursor_Up.png\" width=\"55\" height=\"41\" 	id=\"imgButtonCursor_UpHover\">"+
						"<img src=\"img_control/Buttons/press/png/Cursor_Up.png\" width=\"55\" height=\"41\" 	id=\"imgButtonCursor_UpPress\">"+
						"<img src=\"img_control/Buttons/hover/png/Cursor_Down.png\" width=\"55\" height=\"41\" 	id=\"imgButtonCursor_DownHover\">"+
						"<img src=\"img_control/Buttons/press/png/Cursor_Down.png\" width=\"55\" height=\"41\" 	id=\"imgButtonCursor_DownPress\">"+
						"<img src=\"img_control/Buttons/hover/png/Cursor_Left.png\" width=\"55\" height=\"41\" 	id=\"imgButtonCursor_LeftHover\">"+
						"<img src=\"img_control/Buttons/press/png/Cursor_Left.png\" width=\"55\" height=\"41\" 	id=\"imgButtonCursor_LeftPress\">"+						
						"<img src=\"img_control/Buttons/hover/png/Cursor_Right.png\" width=\"55\" height=\"41\" id=\"imgButtonCursor_RightHover\">"+
						"<img src=\"img_control/Buttons/press/png/Cursor_Right.png\" width=\"55\" height=\"41\" id=\"imgButtonCursor_RightPress\">"+					
					
						"<img src=\"img_control/interactive.png\" width=\"100%\" height=\"100%\" usemap=\"#Map4\" border=\"0\" />"+
						"<map name=\"Map4\" id=\"Map4\">"+
						  "<area shape=\"circle\" coords=\"25,17,13\" href=\"#\"   id=\"areaButtonInfo\" />"+
						  "<area shape=\"circle\" coords=\"109,17,13\" href=\"#\"  id=\"areaButtonGuide\" />"+
						  "<area shape=\"circle\" coords=\"26,108,13\" href=\"#\"  id=\"areaButtonExit\" />"+
						  "<area shape=\"circle\" coords=\"109,109,13\" href=\"#\" id=\"areaButtonBack\" />"+
						  "<area shape=\"circle\" coords=\"67,63,22\" href=\"#\"   id=\"areaButtonEnter\" />"+
						  "<area shape=\"poly\" coords=\"93,48,96,56,96,63,95,70,92,78,105,90,110,82,112,73,113,65,113,55,110,46,104,36,93,47\" href=\"#\" id=\"areaButtonCursor_Right\" />"+
						  "<area shape=\"poly\" coords=\"52,36,57,33,65,31,73,32,81,35,93,24,86,19,77,15,67,14,59,16,51,18,40,23,52,36\" href=\"#\" id=\"areaButtonCursor_Up\" />"+
						  "<area shape=\"poly\" coords=\"40,48,38,56,37,62,38,70,41,78,28,90,23,82,21,72,20,63,21,54,23,46,30,36\" href=\"#\" id=\"areaButtonCursor_Left\" />"+
						  "<area shape=\"poly\" coords=\"53,89,58,92,66,93,73,92,81,89,92,102,85,106,77,109,67,111,60,111,51,108,40,101,51,89\" href=\"#\" id=\"areaButtonCursor_Down\" />"+
						"</map>"+ 
					"</div>"+

					"<div id=\"areaSpace5\">"+
					"</div>"+

					"<div id=\"areaColorful\">"+					
						"<img src=\"img_control/Buttons/hover/png/Red.png\" width=\"55\" height=\"41\" 			id=\"imgButtonRedHover\">"+
						"<img src=\"img_control/Buttons/press/png/Red.png\" width=\"55\" height=\"41\" 			id=\"imgButtonRedPress\">"+
						"<img src=\"img_control/Buttons/hover/png/Green.png\" width=\"55\" height=\"41\" 		id=\"imgButtonGreenHover\">"+
						"<img src=\"img_control/Buttons/press/png/Green.png\" width=\"55\" height=\"41\" 		id=\"imgButtonGreenPress\">"+
						"<img src=\"img_control/Buttons/hover/png/Yellow.png\" width=\"55\" height=\"41\"		id=\"imgButtonYellowHover\">"+
						"<img src=\"img_control/Buttons/press/png/Yellow.png\" width=\"55\" height=\"41\" 		id=\"imgButtonYellowPress\">"+
						"<img src=\"img_control/Buttons/hover/png/Blue.png\" width=\"55\" height=\"41\" 		id=\"imgButtonBlueHover\">"+
						"<img src=\"img_control/Buttons/press/png/Blue.png\" width=\"55\" height=\"41\" 		id=\"imgButtonBluePress\">"+		
					
						"<img src=\"img_control/colorful.png\" width=\"100%\" height=\"100%\" usemap=\"#Map5\" border=\"0\" />"+
						"<map name=\"Map5\" id=\"Map5\">"+
						  "<area shape=\"circle\" coords=\"25,14,11\" href=\"#\"             id=\"areaButtonRed\"/>"+
						  "<area shape=\"rect\" coords=\"97,3,120,27\" href=\"#\"            id=\"areaButtonBlue\" />"+
						  "<area shape=\"poly\" coords=\"43,14,53,26,64,15,53,4\" href=\"#\" id=\"areaButtonGreen\" />"+
						  "<area shape=\"poly\" coords=\"71,24,90,24,80,4,70,24\" href=\"#\" id=\"areaButtonYellow\" />"+
						"</map>"+
					"</div>"+ 

					"<div id=\"areaSpace6\">"+
					"</div>"+

					"<div id=\"areaMultimedia\">"+					
						"<img src=\"img_control/Buttons/hover/png/Forward.png\" width=\"55\" height=\"41\" 	id=\"imgButtonForwardHover\">"+
						"<img src=\"img_control/Buttons/press/png/Forward.png\" width=\"55\" height=\"41\" 	id=\"imgButtonForwardPress\">"+
						"<img src=\"img_control/Buttons/hover/png/Play.png\" width=\"55\" height=\"41\" 	id=\"imgButtonPlayHover\">"+
						"<img src=\"img_control/Buttons/press/png/Play.png\" width=\"55\" height=\"41\" 	id=\"imgButtonPlayPress\">"+
						"<img src=\"img_control/Buttons/hover/png/Rewind.png\" width=\"55\" height=\"41\"	id=\"imgButtonRewindHover\">"+
						"<img src=\"img_control/Buttons/press/png/Rewind.png\" width=\"55\" height=\"41\" 	id=\"imgButtonRewindPress\">"+
						"<img src=\"img_control/Buttons/hover/png/Rec.png\" width=\"55\" height=\"41\" 		id=\"imgButtonRecHover\">"+
						"<img src=\"img_control/Buttons/press/png/Rec.png\" width=\"55\" height=\"41\" 		id=\"imgButtonRecPress\">"+
						"<img src=\"img_control/Buttons/hover/png/Pause.png\" width=\"55\" height=\"41\" 	id=\"imgButtonPauseHover\">"+
						"<img src=\"img_control/Buttons/press/png/Pause.png\" width=\"55\" height=\"41\" 	id=\"imgButtonPausePress\">"+
						"<img src=\"img_control/Buttons/hover/png/Stop.png\" width=\"55\" height=\"41\" 	id=\"imgButtonStopHover\">"+
						"<img src=\"img_control/Buttons/press/png/Stop.png\" width=\"55\" height=\"41\" 	id=\"imgButtonStopPress\">"+
					
						"<img src=\"img_control/multimedia.png\" width=\"100%\" height=\"100%\" usemap=\"#Map6\" border=\"0\" />"+
						"<map name=\"Map6\" id=\"Map6\">"+
						  "<area shape=\"poly\" coords=\"43,35,42,8,32,15,31,9,11,23,31,36,31,27,40,36\" href=\"#\"         id=\"areaButtonRewind\"/>"+
						  "<area shape=\"poly\" coords=\"104,38,122,24,103,10,103,18,91,10,92,38,102,27,103,37\" href=\"#\" id=\"areaButtonForward\"/>"+
						  "<area shape=\"poly\" coords=\"58,42,57,4,80,23,60,42\" href=\"#\"                                id=\"areaButtonPlay\" />"+
						  "<area shape=\"circle\" coords=\"29,65,14\" href=\"#\"                                            id=\"areaButtonRec\" />"+
						  "<area shape=\"rect\" coords=\"92,51,119,79\" href=\"#\"                                          id=\"areaButtonStop\" />"+
						  "<area shape=\"rect\" coords=\"57,52,76,78\" href=\"#\"                                           id=\"areaButtonPause\" />"+
						"</map>"+
					"</div>"+ 

					"<div id=\"areaSpace7\">"+
					"</div>"+

					"<div id=\"areaLogo\">"+
						"<img src=\"img_control/logo.png\" width=\"100%\" height=\"100%\" />"+
					"</div>"+ 

					"<div id=\"areaSpace8\">"+
					"</div>";
					
				//... porém iniciarão todos escondidos:
				$('#areaSpace1').hide();
				$('#areaPowerEject').hide();
				$('#areaSpace2').hide();
				$('#areaNumbers').hide();
				$('#areaSpace3').hide();
				$('#areaVolumeChannel').hide();
				$('#areaSpace4').hide();
				$('#areaInteractive').hide();
				$('#areaSpace5').hide();
				$('#areaColorful').hide();
				$('#areaSpace6').hide();
				$('#areaMultimedia').hide();
				$('#areaSpace7').hide();
				$('#areaLogo').hide();
				$('#areaSpace8').hide();
				
				
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
				
				
				
				//Transição entre Hover, press e click:
				var imgButtons = ['ButtonEject', 'ButtonPower', 'ButtonKey_1', 'ButtonKey_2', 'ButtonKey_3', 'ButtonKey_4', 'ButtonKey_5', 'ButtonKey_6', 'ButtonKey_7', 'ButtonKey_8', 'ButtonKey_9', 'ButtonKey_Hash', 'ButtonKey_0', 'ButtonKey_Star', 'ButtonVolume_Up', 'ButtonChannel_Up', 'ButtonVolume_Down', 'ButtonChannel_Down', 'ButtonMenu', 'ButtonMute', 'ButtonHelp', 'ButtonInfo','ButtonGuide', 'ButtonExit', 'ButtonBack', 'ButtonEnter', 'ButtonCursor_Up', 'ButtonCursor_Down', 'ButtonCursor_Left', 'ButtonCursor_Right', 'ButtonRed', 'ButtonGreen', 'ButtonYellow', 'ButtonBlue', 'ButtonRewind', 'ButtonPlay', 'ButtonForward', 'ButtonPause', 'ButtonRec', 'ButtonStop'];
		
				for(button in imgButtons)
				{	
					$("#img" + imgButtons[button] + "Hover").hide();
					$("#img" + imgButtons[button] + "Press").hide();
			
					eval('$("#area" + imgButtons[button]).mouseover(function(){'+
						'$("#img" + imgButtons[' + button + '] + "Hover").show();'+
						'});'
					);
												
					eval('$("#img" + imgButtons[button] + "Hover").mouseout(function(){'+
						'$("#img" + imgButtons[' + button + '] + "Hover").hide();'+
						'});'
					);
								
												
					eval('$("#img" + imgButtons[button] + "Hover").mousedown(function(){'+
						'$("#img" + imgButtons[' + button + '] + "Press").show();'+
						'$("#img" + imgButtons[' + button + '] + "Hover").hide();'+
						'});'
					);
					
					eval('$("#img" + imgButtons[button] + "Press").mouseout(function(){'+
						'$("#img" + imgButtons[' + button + '] + "Press").hide();'+
						'$("#img" + imgButtons[' + button + '] + "Hover").hide();'+
						'});'
					);
							
												
					eval('$("#img" + imgButtons[button] + "Press").mouseup(function(){'+
						'$("#img" + imgButtons[' + button + '] + "Press").hide();'+
						'$("#img" + imgButtons[' + button + '] + "Hover").show();'+
						'});'
					);
					
				}
	
					
			}
	
			//Para visualizar a área PowerEject(mesma lógica para as demais áreas)
			RemoteControl.prototype.setAreaPowerEject = function(p_areaPowerEject){
					if(p_areaPowerEject){
	
						//sinaliza a flag de controle da área
						this.controlPowerEject = !(this.controlPowerEject);
	
						//a área sempre será visualizada juntamente com o seu espaçamento acima
						$('#areaSpace1').toggle();
						$('#areaPowerEject').toggle();
	
						//o último espaçamento será visível enquanto qualquer outra área for visível
						if((this.controlPowerEject)||(this.controlNumbers)||(this.controlVolumeChannel)||(this.controlInteractive)||(this.controlColorful)||(this.controlMultimedia)||(this.controlLogo))
							$('#areaSpace8').show();
						else
							$('#areaSpace8').hide();
					}
		}

		RemoteControl.prototype.setAreaNumbers = function(p_areaNumbers){				
				if(p_areaNumbers){
					this.controlNumbers = !(this.controlNumbers);

					$('#areaSpace2').toggle();
					$('#areaNumbers').toggle();

					if((this.controlPowerEject)||(this.controlNumbers)||(this.controlVolumeChannel)||(this.controlInteractive)||(this.controlColorful)||(this.controlMultimedia)||(this.controlLogo))
						$('#areaSpace8').show();
					else
						$('#areaSpace8').hide();
				}
		}

		RemoteControl.prototype.setAreaVolumeChannel = function(p_areaVolumeChannel){
				if(p_areaVolumeChannel){
					this.controlVolumeChannel = !(this.controlVolumeChannel);

					$('#areaSpace3').toggle();
					$('#areaVolumeChannel').toggle();

					if((this.controlPowerEject)||(this.controlNumbers)||(this.controlVolumeChannel)||(this.controlInteractive)||(this.controlColorful)||(this.controlMultimedia)||(this.controlLogo))
						$('#areaSpace8').show();
					else
						$('#areaSpace8').hide();
				}
		}

		RemoteControl.prototype.setAreaInteractive = function(p_areaInteractive){
				if(p_areaInteractive){
					this.controlInteractive = !(this.controlInteractive);

					$('#areaSpace4').toggle();
					$('#areaInteractive').toggle();

					if((this.controlPowerEject)||(this.controlNumbers)||(this.controlVolumeChannel)||(this.controlInteractive)||(this.controlColorful)||(this.controlMultimedia)||(this.controlLogo))
						$('#areaSpace8').show();
					else
						$('#areaSpace8').hide();
				}
		}

		RemoteControl.prototype.setAreaColorful = function(p_areaColorful){
				if(p_areaColorful){
					this.controlColorful = !(this.controlColorful);

					$('#areaSpace5').toggle();
					$('#areaColorful').toggle();

					if((this.controlPowerEject)||(this.controlNumbers)||(this.controlVolumeChannel)||(this.controlInteractive)||(this.controlColorful)||(this.controlMultimedia)||(this.controlLogo))
						$('#areaSpace8').show();
					else
						$('#areaSpace8').hide();
				}
		}

		RemoteControl.prototype.setAreaMultimedia = function(p_areaMultimedia){
				if(p_areaMultimedia){
					this.controlMultimedia = !(this.controlMultimedia);

					$('#areaSpace6').toggle();
					$('#areaMultimedia').toggle();

					if((this.controlPowerEject)||(this.controlNumbers)||(this.controlVolumeChannel)||(this.controlInteractive)||(this.controlColorful)||(this.controlMultimedia)||(this.controlLogo))
						$('#areaSpace8').show();
					else
						$('#areaSpace8').hide();
				}
		}

		RemoteControl.prototype.setAreaLogo = function(p_areaLogo){
				if(p_areaLogo){
					this.controlLogo = !(this.controlLogo);

					$('#areaSpace7').toggle();
					$('#areaLogo').toggle();

					if((this.controlPowerEject)||(this.controlNumbers)||(this.controlVolumeChannel)||(this.controlInteractive)||(this.controlColorful)||(this.controlMultimedia)||(this.controlLogo))
						$('#areaSpace8').show();
					else
						$('#areaSpace8').hide();
				}
		}
		
		
		RemoteControl.prototype.Button = function(b){
			if((b!="CURSOR_UP")&&(b!="CURSOR_DOWN")&&(b!="CURSOR_LEFT")&&(b!="CURSOR_RIGHT")&&(b!="ENTER")&&(b!="GREEN")&&(b!="YELLOW")&&(b!="RED")&&(b!="BLUE"))
				alert("Botao " + b + " clicado!");
			else
				this.player.presentation.focusManager.keyEvent(Keys[b]);

		}
		
		RemoteControl.prototype.Button2 = function(b){
			$('#areaPlayer2').toggle();

		}