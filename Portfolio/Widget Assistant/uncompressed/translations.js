var translator = {};
translator.enc = function(str){
 	encodeURIComponent(str);
 	return decodeURIComponent(str);
 	//for whatever reason, this makes a few characters show up properly that otherwise wouldn't. 
 	//I have no idea why, but it works so I'm not messing with it.
}
translator.eventday = function(time) {
      var dayNumber = time.getDay();
      var today = new Date();
      var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
      switch (lang) {
        case "pt":
          switch (dayNumber){ 
            case today.getDay():
              { return this.enc("Hoje"); }
            case tomorrow.getDay():
              { return this.enc("Amanhã"); }
            case 0: 
              { return this.enc("Domingo"); }
            case 1: 
              { return this.enc("Segunda-feira"); } 
            case 2: 
              { return this.enc("Terça-feira"); } 
            case 3: 
              { return this.enc("Quarta-feira"); } 
            case 4: 
              { return this.enc("Quinta-feira"); } 
            case 5: 
              { return this.enc("Sexta-feira"); } 
            case 6: 
              { return this.enc("Sábado"); }
            default:
              return this.enc("Hoje");
          break;}
          case "en":
          switch (dayNumber){ 
            case today.getDay():
              { return this.enc("Today"); }
            case tomorrow.getDay():
              { return this.enc("Tomorrow"); }
            case 0: 
              { return this.enc("Sunday"); }
            case 1: 
              { return this.enc("Monday"); } 
            case 2: 
              { return this.enc("Tuesday"); } 
            case 3: 
              { return this.enc("Wednesday"); } 
            case 4: 
              { return this.enc("Thursday"); } 
            case 5: 
              { return this.enc("Friday"); } 
            case 6: 
              { return this.enc("Saturday"); }
            default:
              return this.enc("Today");
          break;}
          case "ja":
          switch (dayNumber){ 
            case today.getDay():
              { return this.enc("今日"); }
            case tomorrow.getDay():
              { return this.enc("明日"); }
            case 0: 
              { return this.enc("日曜日"); }
            case 1: 
              { return this.enc("月曜"); } 
            case 2: 
              { return this.enc("火曜日"); } 
            case 3: 
              { return this.enc("水曜日"); } 
            case 4: 
              { return this.enc("木曜日"); } 
            case 5: 
              { return this.enc("金曜日"); } 
            case 6: 
              { return this.enc("土曜日"); }
            default:
              return this.enc("今日"); 
          break;}
          case "sp":
          switch (dayNumber){ 
            case today.getDay():
              { return this.enc("Hoy"); }
            case tomorrow.getDay():
              { return this.enc("Mañana"); }
            case 0: 
              { return this.enc("Domingo"); }
            case 1: 
              { return this.enc("Lunes"); } 
            case 2: 
              { return this.enc("Martes"); } 
            case 3: 
              { return this.enc("Miércoles"); } 
            case 4: 
              { return this.enc("Jueves"); } 
            case 5: 
              { return this.enc("Viernes"); } 
            case 6: 
              { return this.enc("Sábado"); }
            default:
              return this.enc("Hoy");
          break;}
          case "it":
          switch (dayNumber){ 
            case today.getDay():
              { return this.enc("Oggi"); }
            case tomorrow.getDay():
              { return this.enc("Domani"); }
            case 0: 
              { return this.enc("Domenica"); }
            case 1: 
              { return this.enc("Lunedi"); } 
            case 2: 
              { return this.enc("Martedì"); } 
            case 3: 
              { return this.enc("Mercoledì"); } 
            case 4: 
              { return this.enc("Giovedi"); } 
            case 5: 
              { return this.enc("Venerdì"); } 
            case 6: 
              { return this.enc("Sabato"); }
            default:
              return this.enc("Oggi");
          break;}
          case "fr":
          switch (dayNumber){ 
            case today.getDay():
              { return this.enc("Aujourd'hui"); }
            case tomorrow.getDay():
              { return this.enc("Demain"); }
            case 0: 
              { return this.enc("Dimanche"); }
            case 1: 
              { return this.enc("Lundi"); } 
            case 2: 
              { return this.enc("Mardi"); } 
            case 3: 
              { return this.enc("Mercredi"); } 
            case 4: 
              { return this.enc("Jeudi"); } 
            case 5: 
              { return this.enc("Vendredi"); } 
            case 6: 
              { return this.enc("Samedi"); }
            default:
              return this.enc("Aujourd'hui");
          break;}
          case "de":
          switch (dayNumber){ 
            case today.getDay():
              { return this.enc("Heute"); }
            case tomorrow.getDay():
              { return this.enc("Morgen"); }
            case 0: 
              { return this.enc("Sonntag"); }
            case 1: 
              { return this.enc("Montag"); } 
            case 2: 
              { return this.enc("Dienstag"); } 
            case 3: 
              { return this.enc("Mittwoch"); } 
            case 4: 
              { return this.enc("Donnerstag"); } 
            case 5: 
              { return this.enc("Freitag"); } 
            case 6: 
              { return this.enc("Samstag"); }
            default:
              return this.enc("Heute");
          break;} 
 }}
translator.noevent = function() {
  switch (lang) {
    case "fr":
      { return this.enc("Aucun événement à venir");}
    case "de":
      { return this.enc("Sie haben keine weiteren Termine");}
    case "sp":
      { return this.enc("No tiene eventos próximos");}
    case "it":
      { return this.enc("Non ci sono eventi imminenti");}
    case "en":
      { return this.enc("You have no upcoming events");}
    case "ja": 
      { return this.enc("あなたは何も予定されているイベントがありません");}  
    case "pt": 
      { return this.enc("Você não tem eventos programados");}
  break;
}}
translator.eventintro = function() {
  switch (lang) {
    case "fr":
      { return this.enc("Votre prochain événement est");}
    case "de":
      { return this.enc("Dein nächster Termin ist");}
    case "sp":
      { return this.enc("Su próximo evento es");}
    case "it":
      { return this.enc("Il vostro prossimo evento è");}
    case "en":
      { return this.enc("Your next event is");}
    case "ja": 
      { return this.enc("あなたの次のイベントです");}  
    case "pt": 
      { return this.enc("Seu próximo evento é");}
  break;
}}
translator.allday = function() {
  switch (lang) {
    case "fr":
      { return this.enc("toute la journée");}
    case "de":
      { return this.enc("den ganzen Tag");}
    case "sp":
      { return this.enc("todo el dia");}
    case "it":
      { return this.enc("tutto il giorno");}
    case "en":
      { return this.enc("all day");}
    case "ja": 
      { return this.enc("一日中");}  
    case "pt": 
      { return this.enc("dia todo");}
  break;
}}
translator.to = function() {
  switch (lang) {
    case "fr":
      {return this.enc("à");}
    case "de":
      {return this.enc("bis");}
    case "sp":
      {return this.enc("a");}
    case "it":
      {return this.enc("a");}
    case "en":
      {return this.enc("to");}
    case "ja": 
      {return this.enc("に");}  
    case "pt": 
      {return this.enc("até");}
  break;
}}
translator.at = function() {
  switch (lang) {
    case "fr":
      { return this.enc("à");}
    case "de":
      { return this.enc("bei");}
    case "sp":
      { return this.enc("a");}
    case "it":
      { return this.enc("a");}
    case "en":
      { return this.enc("at");}
    case "ja": 
      { return this.enc("に");}  
    case "pt": 
      { return this.enc("em");}
  break;
}}
translator.from = function() {
  switch (lang) {
    case "fr":
      { return this.enc("de");}
    case "de":
      { return this.enc("von");}
    case "sp":
      { return this.enc("de");}
    case "it":
      { return this.enc("da");}
    case "en":
      { return this.enc("from");}
    case "ja": 
      { return this.enc("から");} 
    case "pt": 
      { return this.enc("de");}
  break;
}}
translator.localweather = function(){
  switch (lang){
    case "en":
      { return this.enc("Here's what the local weather looks like.");}
    case "fr":
      { return this.enc("Voici ce que la météo locale ressemble.");}    
    case "pt":
      { return this.enc("O tempo no local está assim.");}
    case "de":
      { return this.enc("Die lokale Wettervorhersage für:");}
    case "sp":
      { return this.enc("Esto es lo que la temperatura local se parece.");}
    case "it":
      { return this.enc("Ecco ciò che il meteo locale assomiglia.");}
    case "ja":
      { return this.enc("ここでは地元の天気予報は次のようになります。");}
}}
translator.nameMonth = function(month) {
switch (lang) {
case "en":
  switch (month){
      case 0:
        { return this.enc("January"); }
      case 1:
        { return this.enc("February"); }
      case 2:
        { return this.enc("March"); }
      case 3:
        { return this.enc("April"); }
      case 4:
        { return this.enc("May"); }
      case 5:
        { return this.enc("Jun"); }
      case 6:
        { return this.enc("July"); }
      case 7:
        { return this.enc("August"); }
      case 8:
        { return this.enc("September"); }
      case 9:
        { return this.enc("October"); }
      case 10:
        { return this.enc("November"); }
      case 11:
        { return this.enc("December"); }
      }
break;
case "pt":
  switch (month){
      case 0: 
        { return this.enc("Janeiro");}
      case 1: 
        { return this.enc("Fevereir");}
      case 2: 
        { return this.enc("Março");}
      case 3: 
        { return this.enc("Abril");}
      case 4: 
        { return this.enc("Maio");}
      case 5: 
        { return this.enc("Junho");}
      case 6: 
        { return this.enc("Julho");}
      case 7: 
        { return this.enc("Agosto");}
      case 8: 
        { return this.enc("Setembro");}
      case 9: 
        { return this.enc("Outubro");}
      case 10: 
        { return this.enc("Novembro");}
      case 11: 
        { return this.enc("Dezembro");}
  }
break;
case "fr":
  switch (month){
      case 0:
        { return this.enc("Janvier");}
      case 1:
        { return this.enc("Février");}
      case 2:
        { return this.enc("Mars");}
      case 3:
        { return this.enc("Avril");}
      case 4:
        { return this.enc("Mai");}
      case 5:
        { return this.enc("Juin");}
      case 6:
        { return this.enc("Juillet");}
      case 7:
        { return this.enc("Août");}
      case 8:
        { return this.enc("Septembre");}
      case 9:
        { return this.enc("Octobre");}
      case 10:
        { return this.enc("Novembre");}
      case 11:
        { return this.enc("Décembre");}
      }
break;
case "de":
  switch (month){
      case 0:
        { return this.enc("Januar");}
      case 1:
        { return this.enc("Februar");}
      case 2:
        { return this.enc("März");}
      case 3:
        { return this.enc("April");}
      case 4:
        { return this.enc("Mai");}
      case 5:
        { return this.enc("Juni");}
      case 6:
        { return this.enc("Juli");}
      case 7:
        { return this.enc("August");}
      case 8:
        { return this.enc("September");}
      case 9:
        { return this.enc("Oktober");}
      case 10:
        { return this.enc("November");}
      case 11:
        { return this.enc("Dezember");}
      }
break;
case "sp":
  switch (month){
       case 0:
        { return this.enc("Enero");}
      case 1:
        { return this.enc("Febrero");}
      case 2:
        { return this.enc("Marzo");}
      case 3:
        { return this.enc("Abril");}
      case 4:
        { return this.enc("Mayo");}
      case 5:
        { return this.enc("Junio");}
      case 6:
        { return this.enc("Juilio");}
      case 7:
        { return this.enc("Agosto");}
      case 8:
        { return this.enc("Septiembre");}
      case 9:
        { return this.enc("Octubre");}
      case 10:
        { return this.enc("Noviembre");}
      case 11:
        { return this.enc("Diciembre");}
      }
break;
case "it":
  switch (month){
       case 0:
        { return this.enc("Gennaio");}
      case 1:
        { return this.enc("Febbraio");}
      case 2:
        { return this.enc("Marzo");}
      case 3:
        { return this.enc("Aprile");}
      case 4:
        { return this.enc("Maggio");}
      case 5:
        { return this.enc("Giugno");}
      case 6:
        { return this.enc("Luglio");}
      case 7:
        { return this.enc("Agosto");}
      case 8:
        { return this.enc("Settembre");}
      case 9:
        { return this.enc("Octtobre");}
      case 10:
        { return this.enc("Novembre");}
      case 11:
        { return this.enc("Dicembre");}
      }
break;
case "ja": 
  switch (month){
      case 0:
        { return this.enc("1月");}
      case 1:
        { return this.enc("2月");}
      case 2:
        { return this.enc("3月");}
      case 3:
        { return this.enc("4月");}
      case 4:
        { return this.enc("5月");}
      case 5:
        { return this.enc("6月");}
      case 6:
        { return this.enc("7月");}
      case 7:
        { return this.enc("8月");}
      case 8:
        { return this.enc("9月");}
      case 9:
        { return this.enc("10月");}
      case 10:
        { return this.enc("11月");}
      case 11:
        { return this.enc("12月");}
      }
break;
}}
translator.nameday = function(day) {
switch (lang) {
case "pt":
  switch (day){ 
    case "Sun": 
      { return this.enc("Dom"); } 
    case "Mon": 
      { return this.enc("Seg"); } 
    case "Tue": 
      { return this.enc("Ter"); } 
    case "Wed": 
      { return this.enc("Qua"); } 
    case "Thu": 
      { return this.enc("Qui"); } 
    case "Fri": 
      { return this.enc("Sex"); } 
    case "Sat": 
	  { return this.enc("Sáb"); }
	}
break;
case "fr":
  switch (day){
      case "Sun":
        { return this.enc("Dim"); }
      case "Mon":
        { return this.enc("Lun"); }
        case "Tue":
        { return this.enc("Mar"); }
      case "Wed":
        { return this.enc("Mer"); }
        case "Thu":
        { return this.enc("Jeu"); }
      case "Fri":
        { return this.enc("Ven"); }
        case "Sat":
        { return this.enc("Sam"); }
    }
break;
case "de":
  switch (day){
      case "Sun":
        { return this.enc("Son"); }
      case "Mon":
        { return this.enc("Mon"); }
        case "Tue":
        { return this.enc("Die"); }
      case "Wed":
        { return this.enc("Mit"); }
        case "Thu":
        { return this.enc("Don"); }
      case "Fri":
        { return this.enc("Fre"); }
        case "Sat":
        { return this.enc("Sam"); }
    }
break;
case "sp":
  switch (day){
      case "Sun":
        { return this.enc("Dom"); }
      case "Mon":
        { return this.enc("Lun"); }
        case "Tue":
        { return this.enc("Mar"); }
      case "Wed":
        { return this.enc("Mie"); }
        case "Thu":
        { return this.enc("Jue"); }
      case "Fri":
        { return this.enc("Vie"); }
        case "Sat":
        { return this.enc("Sab"); }
    }
break;
case "it":
  switch (day){
      case "Sun":
        { return this.enc("Dom"); }
      case "Mon":
        { return this.enc("Lun"); }
        case "Tue":
        { return this.enc("Mar"); }
      case "Wed":
        { return this.enc("Mer"); }
        case "Thu":
        { return this.enc("Gio"); }
      case "Fri":
        { return this.enc("Ven"); }
        case "Sat":
        { return this.enc("Sab"); }
    }
break;
case "en":
  switch (day){
      case "Sun":
        { return this.enc("Sun"); }
      case "Mon":
        { return this.enc("Mon"); }
        case "Tue":
        { return this.enc("Tue"); }
      case "Wed":
        { return this.enc("Wed"); }
        case "Thu":
        { return this.enc("Thu"); }
      case "Fri":
        { return this.enc("Fri"); }
        case "Sat":
        { return this.enc("Sat"); }
    }
break;
case "ja": 
  switch (day){
      case "Sun":
        { return this.enc("日曜日"); }
      case "Mon":
        { return this.enc("月曜"); } 
        case "Tue":
        { return this.enc("火曜日"); } 
      case "Wed":
        { return this.enc("水曜日"); } 
        case "Thu":
        { return this.enc("木曜日"); } 
      case "Fri":
        { return this.enc("金曜日"); }
        case "Sat":
        { return this.enc("土曜日"); }
    }
break;
}}