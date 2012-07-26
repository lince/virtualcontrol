		/*Classe Controle:*/
		function RemoteControl(player, divId, p_areaPowerEject, p_areaNumbers, p_areaVolumeChannel, p_areaInteractive, p_areaColorful, p_areaMultimedia) 
		{
				this.player = player;
				this.divId = divId;
				this.p_areaPowerEject = p_areaPowerEject;
				this.p_areaNumbers = p_areaNumbers;
				this.p_areaVolumeChannel = p_areaVolumeChannel;
				this.p_areaInteractive = p_areaInteractive;
				this.p_areaColorful = p_areaColorful;
				this.p_areaMultimedia = p_areaMultimedia;


				//flags para controle visual de cada área
				var controlPowerEject = 0;
				var controlNumbers = 0;
				var controlVolumeChannel = 0;
				var controlInteractive = 0;
				var controlColorful = 0;
				var controlMultimedia = 0;
				var controlLogo = 0;				


				//Ao criar um objeto Controle todas as áreas e botões serão criados...
				document.getElementById(this.divId).innerHTML = "<div id='areaSpace1'>"+
																"</div>"+

					"<div id='areaPowerEject'>"+					
						"<div 	id='ButtonPower'>"+
						"</div>"+	
						"<div 	id='ButtonEject'>"+
						"</div>"+			
					"</div>"+	

					"<div id='areaSpace2'>"+ 
					"</div>"+  

					"<div id='areaNumbers'>"+	
						"<div 	id='ButtonKey_1'>"+
						"</div>"+
						"<div 	id='ButtonKey_2'>"+
						"</div>"+
						"<div 	id='ButtonKey_3'>"+
						"</div>"+
						"<div 	id='ButtonKey_4'>"+
						"</div>"+
						"<div 	id='ButtonKey_5'>"+
						"</div>"+
						"<div 	id='ButtonKey_6'>"+
						"</div>"+
						"<div 	id='ButtonKey_7'>"+
						"</div>"+
						"<div 	id='ButtonKey_8'>"+
						"</div>"+
						"<div 	id='ButtonKey_9'>"+
						"</div>"+
						"<div 	id='ButtonKey_Hash'>"+
						"</div>"+
						"<div 	id='ButtonKey_0'>"+
						"</div>"+
						"<div 	id='ButtonKey_Star'>"+
						"</div>"+
					"</div>"+

					"<div id='areaSpace3'>"+
					"</div>"+ 

					"<div id='areaVolumeChannel'>"+					
						"<div 	id='ButtonVolume_Up'>"+
						"</div>"+
						"<div 	id='ButtonVolume_Down'>"+
						"</div>"+
						"<div 	id='ButtonChannel_Up'>"+
						"</div>"+
						"<div 	id='ButtonChannel_Down'>"+
						"</div>"+
						"<div 	id='ButtonMenu'>"+
						"</div>"+
						"<div 	id='ButtonMute'>"+
						"</div>"+
						"<div 	id='ButtonHelp'>"+
						"</div>"+						
					"</div>"+

					"<div id='areaSpace4'>"+
					"</div>"+

					"<div id='areaInteractive'>"+	
						"<div 	id='ButtonCursor_Up'>"+
						"</div>"+
						"<div 	id='ButtonCursor_Down'>"+
						"</div>"+
						"<div 	id='ButtonCursor_Left'>"+
						"</div>"+
						"<div 	id='ButtonCursor_Right'>"+
						"</div>"+
						"<div 	id='ButtonEnter'>"+
						"</div>"+
						"<div 	id='ButtonInfo'>"+
						"</div>"+
						"<div 	id='ButtonGuide'>"+
						"</div>"+	
						"<div 	id='ButtonBack'>"+
						"</div>"+
						"<div 	id='ButtonExit'>"+
						"</div>"+									
					"</div>"+

					"<div id='areaSpace5'>"+
					"</div>"+

					"<div id='areaColorful'>"+
						"<div 	id='ButtonRed'>"+
						"</div>"+
						"<div 	id='ButtonGreen'>"+
						"</div>"+
						"<div 	id='ButtonYellow'>"+
						"</div>"+
						"<div 	id='ButtonBlue'>"+
						"</div>"+										
					"</div>"+ 

					"<div id='areaSpace6'>"+
					"</div>"+

					"<div id='areaMultimedia'>"+					
						"<div 	id='ButtonRewind'>"+
						"</div>"+
						"<div 	id='ButtonPlay'>"+
						"</div>"+
						"<div 	id='ButtonForward'>"+
						"</div>"+
						"<div 	id='ButtonRec'>"+
						"</div>"+
						"<div 	id='ButtonPause'>"+
						"</div>"+
						"<div 	id='ButtonStop'>"+
						"</div>"+						
					"</div>"+ 

					"<div id='areaSpace7'>"+
					"</div>"+

					"<div id='areaLogo'>"+
						"<img src='img_control/logo.png' width='100%' height='100%' />"+
					"</div>"+ 

					"<div id='areaSpace8'>"+
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
				
				/*var setAreas = ['PowerEject', 'Numbers', 'VolumeChannel', 'Interactive', 'Colorful', 'Multimedia']
				
				for(p_area in setAreas){
					eval("if(this['p_area"+ setAreas[p_area] +"'])"+
							"this['setArea"+ setArea[p_area] +"']"
					);
				}*/	
					
				this.setAreas();					
							
				//Pressionando o botão quando hover (Chamada da Função apropriada para o botão)
				var imgButtons = ['Eject', 'Power', 'Key_1', 'Key_2', 'Key_3', 'Key_4', 'Key_5', 'Key_6', 'Key_7', 'Key_8', 'Key_9', 'Key_Hash', 'Key_0', 'Key_Star', 'Volume_Up', 'Channel_Up', 'Volume_Down', 'Channel_Down', 'Menu', 'Mute', 'Help', 'Info','Guide', 'Exit', 'Back', 'Enter', 'Cursor_Up', 'Cursor_Down', 'Cursor_Left', 'Cursor_Right', 'Red', 'Green', 'Yellow', 'Blue', 'Rewind', 'Play', 'Forward', 'Pause', 'Rec', 'Stop'];
		
				for(button in imgButtons){		
					eval("$('#Button' + imgButtons[button]).click($.proxy(function(){"+
						"this.functionButton('"+ imgButtons[button].toUpperCase() + "');" +		
						"},this));"
					);
				}	
											
			}			
			
			//Habilita as áreas pré-definidas pelo criador do controle:
			RemoteControl.prototype.setAreas = function(){
				if(this.p_areaPowerEject)
					this.setAreaPowerEject();
				if(this.p_areaNumbers)
					this.setAreaNumbers();
				if(this.p_areaVolumeChannel)
					this.setAreaVolumeChannel();	
				if(this.p_areaInteractive)
					this.setAreaInteractive();
				if(this.p_areaColorful)
					this.setAreaColorful();
				if(this.p_areaMultimedia)
					this.setAreaMultimedia();
			}			
			
			//Chamada da função específica de cada botão			
			RemoteControl.prototype.functionButton = function(b){
				this.player.presentation.focusManager.keyEvent(Keys[b]);
			}	
	
		
			//Para habilitar/desabilitar as áreas
			var areas = ['PowerEject', 'Numbers', 'VolumeChannel', 'Interactive', 'Colorful', 'Multimedia'];
			
			for(area in areas){
				eval("RemoteControl.prototype['setArea" +areas[area]+ "'] = function(){"+
						//sinaliza a flag de controle da área
						"this['control" +areas[area]+ "'] = !(this['control" +areas[area]+ "']);"+
						
						//a área sempre será visualizada juntamente com o seu espaçamento acima
						"$('#areaSpace"+(area+1)+"').toggle();"+
						"$('#area" +areas[area]+ "').toggle();"+
						
						//o último espaçamento e os logos serão visíveis enquanto qualquer outra área for visível:
								"if((this.controlPowerEject)||(this.controlNumbers)||(this.controlVolumeChannel)||(this.controlInteractive)||(this.controlColorful)||(this.controlMultimedia)){"+
							"$('#areaSpace7').show();"+
							"$('#areaLogo').show();"+
							"$('#areaSpace8').show();"+
						"}"+
						"else{ "+
							"$('#areaSpace7').hide();"+
							"$('#areaLogo').hide();"+
							"$('#areaSpace8').hide();"+
						"}"+			
					"}");
			}