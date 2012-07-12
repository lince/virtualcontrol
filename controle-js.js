/*
		
	Somente os botões abaixo estão com alguma função na apresentação:
		
	CURSOR_UP	    :	38 (arrow up)
	CURSOR_DOWN 	: 	40 (arrow down)
	CURSOR_LEFT     :	37 (arrow left)
	CURSOR_RIGHT    :	39 (arrow right)
	ENTER			:	13 (enter)
	RED             :   81 (q)  
    GREEN           :   87 (w)
    YELLOW          :   69 (e)
    BLUE            :   82 (r)
	
	
	Os Demais não estão:
	
    KEY_0			:   96	(0)
    KEY_1			:   97	(1)
    KEY_2			:   98	(2)
    KEY_3			:   99	(3)
    KEY_4			:   100	(4)
    KEY_5			:   101	(5)
    KEY_6			:   102	(6)
    KEY_7			:   103	(7)
    KEY_8			:   104	(8)
    KEY_9			:   105	(9)
	STAR			:	
	HASH			:	
    
	POWER			:	65 (a)
	EJECT			:	68 (d)
	
	MENU			:
	VOLUME_UP		:
	VOLUME_DOWN		:
	CHANNEL_UP		:
	CHANNEL_DOWN	:
	MUTE			:
	HELP			:
	
	INFO			:
	GUIDE			:
	EXIT			:	88 (x)
	BACK			:	90 (z)
	
	REWIND			:
	STOP			:	86 (v)
	FORWARD			:
	PLAY			:	67 (c)
	RECORD			:	78 (n)
	PAUSE			:	66 (b)
	
	
	
	
	TODO: 	fazer os eventos para os demais botões;
			atribuir teclas do teclado para todos os botões
		
		*/
		function Button(b){
			if((b!="CURSOR_UP")&&(b!="CURSOR_DOWN")&&(b!="CURSOR_LEFT")&&(b!="CURSOR_RIGHT")&&(b!="ENTER")&&(b!="GREEN")&&(b!="YELLOW")&&(b!="RED")&&(b!="BLUE"))
				alert("Botão " + b + " clicado!");
			else
				player.presentation.focusManager.keyEvent(Keys[b]);
			
		}
		

		/*Classe Controle:*/
				
		function Controle(divId, p_areaPowerEject, p_areaAlfanumericos, p_areaVolumeChannel, p_areaInterativos, p_areaColoridos, p_areaMultimidia, p_areaLogo) 
		{
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
							
				
				//Ao criar um objeto Controle todas as áreas serão criadas...
				document.getElementById(this.divId).innerHTML = "<div id=\"areaEspacamento1\">"+
																"</div>"+
		
					
					"<div id=\"areaPowerEject\">"+
						"<img src=\"img_control/power+eject.png\" width=\"100%\" height=\"100%\" usemap=\"#Map\" border=\"0\" />"+
						"<map name=\"Map\" id=\"Map\">"+
						  "<area shape=\"circle\" coords=\"26,19,15\" href=\"#\" onClick=\"Button('POWER')\" />"+
						  "<area shape=\"circle\" coords=\"111,22,11\" href=\"#\" onClick=\"Button('EJECT')\" />"+
						"</map>"+
					"</div>"+	
					
					"<div id=\"areaEspacamento2\">"+ 
					"</div>"+  
				  
					"<div id=\"areaAlfanumericos\">"+
						"<img src=\"img_control/alfanumericos.png\" width=\"100%\" height=\"100%\" usemap=\"#Map2\" border=\"0\" />"+
						"<map name=\"Map2\" id=\"Map2\">"+
						  "<area shape=\"rect\" coords=\"12,4,44,29\" href=\"#\" onClick=\"Button('KEY_1')\" />"+
						  "<area shape=\"rect\" coords=\"50,4,82,29\" href=\"#\" onClick=\"Button('KEY_2')\" />"+
						  "<area shape=\"rect\" coords=\"92,4,124,29\" href=\"#\" onClick=\"Button('KEY_3')\" />"+
						  "<area shape=\"rect\" coords=\"12,34,44,59\" href=\"#\" onClick=\"Button('KEY_4')\" />"+
						  "<area shape=\"rect\" coords=\"50,34,82,59\" href=\"#\" onClick=\"Button('KEY_5')\" />"+
						  "<area shape=\"rect\" coords=\"92,34,124,59\" href=\"#\" onClick=\"Button('KEY_6')\" />"+
						  "<area shape=\"rect\" coords=\"12,66,44,91\" href=\"#\" onClick=\"Button('KEY_7')\" />"+
						  "<area shape=\"rect\" coords=\"50,66,82,91\" href=\"#\" onClick=\"Button('KEY_8')\" />"+
						  "<area shape=\"rect\" coords=\"91,67,123,92\" href=\"#\" onClick=\"Button('KEY_9')\" />"+
						  "<area shape=\"rect\" coords=\"12,97,44,122\" href=\"#\" onClick=\"Button('HASH')\" />"+
						  "<area shape=\"rect\" coords=\"50,98,82,123\" href=\"#\" onClick=\"Button('KEY_0')\" />"+
						  "<area shape=\"rect\" coords=\"91,97,123,122\" href=\"#\" onClick=\"Button('STAR')\" />"+
						"</map>"+
					"</div>"+
				   
					"<div id=\"areaEspacamento3\">"+
					"</div>"+ 
				 
					"<div id=\"areaVolumeChannel\">"+
						"<img src=\"img_control/volume+channel.png\" width=\"100%\" height=\"100%\" usemap=\"#Map3\" border=\"0\" />"+
						"<map name=\"Map3\" id=\"Map3\">"+
						  "<area shape=\"rect\" coords=\"49,18,82,55\" href=\"#\" onClick=\"Button('MENU')\" />"+
						  "<area shape=\"rect\" coords=\"11,84,40,117\" href=\"#\" onClick=\"Button('MUTE')\" />"+
						  "<area shape=\"rect\" coords=\"93,85,123,116\" href=\"#\" onClick=\"Button('HELP')\" />"+
						  "<area shape=\"poly\" coords=\"11,30,38,30,25,4\" href=\"#\" onClick=\"Button('VOLUME_UP')\" />"+
						  "<area shape=\"poly\" coords=\"94,30,121,30,108,5\" href=\"#\" onClick=\"Button('CHANNEL_UP')\" />"+
						  "<area shape=\"poly\" coords=\"11,48,39,48,25,75\" href=\"#\" onClick=\"Button('VOLUME_DOWN')\" />"+
						  "<area shape=\"poly\" coords=\"94,48,122,48,108,75\" href=\"#\" onClick=\"Button('CHANNEL_DOWN')\" />"+
						"</map>"+ 
					"</div>"+
				  
					"<div id=\"areaEspacamento4\">"+
					"</div>"+
					
					"<div id=\"areaInterativos\">"+
						"<img src=\"img_control/interativos.png\" width=\"100%\" height=\"100%\" usemap=\"#Map4\" border=\"0\" />"+
						"<map name=\"Map4\" id=\"Map4\">"+
						  "<area shape=\"circle\" coords=\"25,17,13\" href=\"#\" onClick=\"Button('INFO')\" />"+
						  "<area shape=\"circle\" coords=\"109,17,13\" href=\"#\" onClick=\"Button('GUIDE')\" />"+
						  "<area shape=\"circle\" coords=\"26,108,13\" href=\"#\" onClick=\"Button('EXIT')\" />"+
						  "<area shape=\"circle\" coords=\"109,109,13\" href=\"#\" onClick=\"Button('BACK')\" />"+
						  "<area shape=\"circle\" coords=\"67,63,22\" href=\"#\" onClick=\"Button('ENTER')\" />"+
						  "<area shape=\"poly\" coords=\"93,48,96,56,96,63,95,70,92,78,105,90,110,82,112,73,113,65,113,55,110,46,104,36,93,47\" href=\"#\" onClick=\"Button('CURSOR_RIGHT')\" />"+
						  "<area shape=\"poly\" coords=\"52,36,57,33,65,31,73,32,81,35,93,24,86,19,77,15,67,14,59,16,51,18,40,23,52,36\" href=\"#\" onClick=\"Button('CURSOR_UP')\" />"+
						  "<area shape=\"poly\" coords=\"40,48,38,56,37,62,38,70,41,78,28,90,23,82,21,72,20,63,21,54,23,46,30,36\" href=\"#\" onClick=\"Button('CURSOR_LEFT')\" />"+
						  "<area shape=\"poly\" coords=\"53,89,58,92,66,93,73,92,81,89,92,102,85,106,77,109,67,111,60,111,51,108,40,101,51,89\" href=\"#\" onClick=\"Button('CURSOR_DOWN')\" />"+
						"</map>"+ 
					"</div>"+
					
					"<div id=\"areaEspacamento5\">"+
					"</div>"+
					
					"<div id=\"areaColoridos\">"+
						"<img src=\"img_control/coloridos.png\" width=\"100%\" height=\"100%\" usemap=\"#Map5\" border=\"0\" />"+
						"<map name=\"Map5\" id=\"Map5\">"+
						  "<area shape=\"circle\" coords=\"25,14,11\" href=\"#\" onClick=\"Button('RED')\"/>"+
						  "<area shape=\"rect\" coords=\"97,3,120,27\" href=\"#\" onClick=\"Button('BLUE')\" />"+
						  "<area shape=\"poly\" coords=\"43,14,53,26,64,15,53,4\" href=\"#\" onClick=\"Button('GREEN')\" />"+
						  "<area shape=\"poly\" coords=\"71,24,90,24,80,4,70,24\" href=\"#\" onClick=\"Button('YELLOW')\" />"+
						"</map>"+
					"</div>"+ 
					
					"<div id=\"areaEspacamento6\">"+
					"</div>"+
					
					"<div id=\"areaMultimidia\">"+
						"<img src=\"img_control/multimidia.png\" width=\"100%\" height=\"100%\" usemap=\"#Map6\" border=\"0\" />"+
						"<map name=\"Map6\" id=\"Map6\">"+
						  "<area shape=\"poly\" coords=\"43,35,42,8,32,15,31,9,11,23,31,36,31,27,40,36\" href=\"#\" onClick=\"Button('REWIND')\"/>"+
						  "<area shape=\"poly\" coords=\"104,38,122,24,103,10,103,18,91,10,92,38,102,27,103,37\" href=\"#\" onClick=\"Button('FORWARD')\"/>"+
						  "<area shape=\"poly\" coords=\"58,42,57,4,80,23,60,42\" href=\"#\" onClick=\"Button('PLAY')\" />"+
						  "<area shape=\"circle\" coords=\"29,65,14\" href=\"#\" onClick=\"Button('REC')\" />"+
						  "<area shape=\"rect\" coords=\"92,51,119,79\" href=\"#\" onClick=\"Button('STOP')\" />"+
						  "<area shape=\"rect\" coords=\"57,52,76,78\" href=\"#\" onClick=\"Button('PAUSE')\" />"+
						"</map>"+
					"</div>"+ 
					
					"<div id=\"areaEspacamento7\">"+
					"</div>"+
					
					"<div id=\"areaLogo\">"+
						"<img src=\"img_control/logo.png\" width=\"100%\" height=\"100%\" />"+
					"</div>"+ 
					
					"<div id=\"areaEspacamento8\">"+
					"</div>";
				
				//... porém as áreas iniciarão escondidas
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