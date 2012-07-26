	



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
						"<div 	id=\"ButtonPower\">"+
						"</div>"+	
						"<div 	id=\"ButtonEject\">"+
						"</div>"+			
					"</div>"+	

					"<div id=\"areaSpace2\">"+ 
					"</div>"+  

					"<div id=\"areaNumbers\">"+	
						"<div 	id=\"ButtonKey_1\">"+
						"</div>"+
						"<div 	id=\"ButtonKey_2\">"+
						"</div>"+
						"<div 	id=\"ButtonKey_3\">"+
						"</div>"+
						"<div 	id=\"ButtonKey_4\">"+
						"</div>"+
						"<div 	id=\"ButtonKey_5\">"+
						"</div>"+
						"<div 	id=\"ButtonKey_6\">"+
						"</div>"+
						"<div 	id=\"ButtonKey_7\">"+
						"</div>"+
						"<div 	id=\"ButtonKey_8\">"+
						"</div>"+
						"<div 	id=\"ButtonKey_9\">"+
						"</div>"+
						"<div 	id=\"ButtonKey_Hash\">"+
						"</div>"+
						"<div 	id=\"ButtonKey_0\">"+
						"</div>"+
						"<div 	id=\"ButtonKey_Star\">"+
						"</div>"+
					"</div>"+

					"<div id=\"areaSpace3\">"+
					"</div>"+ 

					"<div id=\"areaVolumeChannel\">"+					
						"<div 	id=\"ButtonVolume_Up\">"+
						"</div>"+
						"<div 	id=\"ButtonVolume_Down\">"+
						"</div>"+
						"<div 	id=\"ButtonChannel_Up\">"+
						"</div>"+
						"<div 	id=\"ButtonChannel_Down\">"+
						"</div>"+
						"<div 	id=\"ButtonMenu\">"+
						"</div>"+
						"<div 	id=\"ButtonMute\">"+
						"</div>"+
						"<div 	id=\"ButtonHelp\">"+
						"</div>"+						
					"</div>"+

					"<div id=\"areaSpace4\">"+
					"</div>"+

					"<div id=\"areaInteractive\">"+	
						"<div 	id=\"ButtonCursor_Up\">"+
						"</div>"+
						"<div 	id=\"ButtonCursor_Down\">"+
						"</div>"+
						"<div 	id=\"ButtonCursor_Left\">"+
						"</div>"+
						"<div 	id=\"ButtonCursor_Right\">"+
						"</div>"+
						"<div 	id=\"ButtonEnter\">"+
						"</div>"+
						"<div 	id=\"ButtonInfo\">"+
						"</div>"+
						"<div 	id=\"ButtonGuide\">"+
						"</div>"+	
						"<div 	id=\"ButtonBack\">"+
						"</div>"+
						"<div 	id=\"ButtonExit\">"+
						"</div>"+									
					"</div>"+

					"<div id=\"areaSpace5\">"+
					"</div>"+

					"<div id=\"areaColorful\">"+
						"<div 	id=\"ButtonRed\">"+
						"</div>"+
						"<div 	id=\"ButtonGreen\">"+
						"</div>"+
						"<div 	id=\"ButtonYellow\">"+
						"</div>"+
						"<div 	id=\"ButtonBlue\">"+
						"</div>"+										
					"</div>"+ 

					"<div id=\"areaSpace6\">"+
					"</div>"+

					"<div id=\"areaMultimedia\">"+					
						"<div 	id=\"ButtonRewind\">"+
						"</div>"+
						"<div 	id=\"ButtonPlay\">"+
						"</div>"+
						"<div 	id=\"ButtonForward\">"+
						"</div>"+
						"<div 	id=\"ButtonRec\">"+
						"</div>"+
						"<div 	id=\"ButtonPause\">"+
						"</div>"+
						"<div 	id=\"ButtonStop\">"+
						"</div>"+						
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
				
							
				//Pressionando o botão quando hover (Chamada da Função apropriada para o botão)
				var imgButtons = ['Eject', 'Power', 'Key_1', 'Key_2', 'Key_3', 'Key_4', 'Key_5', 'Key_6', 'Key_7', 'Key_8', 'Key_9', 'Key_Hash', 'Key_0', 'Key_Star', 'Volume_Up', 'Channel_Up', 'Volume_Down', 'Channel_Down', 'Menu', 'Mute', 'Help', 'Info','Guide', 'Exit', 'Back', 'Enter', 'Cursor_Up', 'Cursor_Down', 'Cursor_Left', 'Cursor_Right', 'Red', 'Green', 'Yellow', 'Blue', 'Rewind', 'Play', 'Forward', 'Pause', 'Rec', 'Stop'];
		
				for(button in imgButtons){		
					eval('$("#Button" + imgButtons[button]).click($.proxy(function(){'+
						'this.functionButton("'+ imgButtons[button].toUpperCase() + '");' +		
						'},this));'
					);
				
				}					
			}
			
			
			//Chamada da função específica de cada botão			
			RemoteControl.prototype.functionButton = function(b){
				if((b!="CURSOR_UP")&&(b!="CURSOR_DOWN")&&(b!="CURSOR_LEFT")&&(b!="CURSOR_RIGHT")&&(b!="ENTER")&&(b!="GREEN")&&(b!="YELLOW")&&(b!="RED")&&(b!="BLUE"))
				alert("Botao " + b + " clicado!");
			else
				this.player.presentation.focusManager.keyEvent(Keys[b]);
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
			
			/*var areas = ['Numbers'];
			
			for(area in areas){
				
				RemoteControl.prototype.setArea + areas[area] = function(p_area + areas[area]){
					if(p_area + areas[area]){
						this.control + areas[area] = !(this.control areas[area]);
						
						$("#areaSpace" + (area+1)).toggle();
						$("#area" + areas[area]).toggle();

					if((this.controlPowerEject)||(this.controlNumbers)||(this.controlVolumeChannel)||(this.controlInteractive)||(this.controlColorful)||(this.controlMultimedia)||(this.controlLogo))
						$('#areaSpace8').show();
					else
						$('#areaSpace8').hide();
					}					
				}
			}*/

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
		
		
