/*
 * Lince - Laboratory for Innovation on Computing and Engineering
 * UFSCar - Universidade Federal de São Carlos
 * São Carlos - SP, Brazil
 * <http://lince.dc.ufscar.br>
 * <http://webncl.org>
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

Parser.prototype.parseAttributeAssessment = function (obj,tag,parent,tree) {
	// role
	if (obj.role!=null) {
		var connectorID = tree.split("causalConnector#")[1].split(">")[0];
		if (!this.uniqueTable["id#"+connectorID]) {
			this.uniqueTable["id#"+connectorID] = [];
		}
		if (this.uniqueTable["id#"+connectorID][obj.role]) {
			if (!this.uniqueTable["id#"+connectorID][obj.role].duplicated) {
				this.uniqueTable["id#"+connectorID][obj.role].duplicated = true;
				Logger.error(Logger.ERR_DUPLICATED_ATTR,"role",[obj.role,connectorID,["simpleAction","simpleCondition","attributeAssessment"]]);
			}
		} else {
			this.uniqueTable["id#"+connectorID][obj.role] = {
				duplicated: false
			};
		}
	}
	// eventType
	values = ["selection","presentation","attribution"];
	if (obj.eventType!=null && jQuery.inArray(obj.eventType,values)==-1) {
		Logger.error(Logger.ERR_INVALID_ATTR_VALUE,tag,["eventType",obj.eventType,values]);
	}
	// key
	values = [
		"VARIAVEL","0-9","A-Z","*","#","MENU","INFO","GUIDE","CURSOR_DOWN","CURSOR_LEFT","CURSOR_RIGHT",
		"CURSOR_UP","CHANNEL_DOWN","CHANNEL_UP","VOLUME_DOWN","VOLUME_UP","ENTER","RED","GREEN",
		"YELLOW","BLUE","BACK","EXIT","POWER","REWIND","STOP","EJECT","PLAY","RECORD","PAUSE"
	];
	patt = /^([0-9A-Z]|\*|\$[A-Za-z_][0-9A-Za-z_]*|#|MENU|INFO|GUIDE|CURSOR_DOWN|CURSOR_LEFT|CURSOR_RIGHT|CURSOR_UP|CHANNEL_DOWN|CHANNEL_UP|VOLUME_DOWN|VOLUME_UP|ENTER|RED|GREEN|YELLOW|BLUE|BACK|EXIT|POWER|REWIND|STOP|EJECT|PLAY|RECORD|PAUSE)$/;
	if (obj.key==null) {
		if (obj.eventType=="selection") {
			Logger.error(Logger.ERR_MISSING_ATTR,tag,["key"]);
		}
	} else if (!patt.test(obj.key)) {
		Logger.error(Logger.ERR_INVALID_ATTR_VALUE,tag,["key",obj.key,values]);
	}
	// attributeType
	switch (obj.eventType) {
		case "selection": {
			values = ["occurences","state"];
			break;
		}
		case "presentation": {
			values = ["occurences","state","repetitions"];
			break;
		}
		case "attribution": {
			values = ["occurences","state","repetitions","nodeProperty"];
			break;
		}
	}
	if (obj.attributeType!=null && jQuery.inArray(obj.attributeType,values)==-1) {
		Logger.error(Logger.ERR_INVALID_ATTR_VALUE,tag,["attributeType",obj.attributeType,values]);
	}
};
