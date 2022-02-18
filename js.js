
    (function () {
        var names = ["Zineb", "ayoub", "Jihane", "jad", "laila", "saif", "joli", "aya", "dora", "Jim"];
        for (var i = 0; i < names.length; i++) {
          var firstLetter = names[i].charAt(0).toLowerCase();
          if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
          } else {
            consol.log("hello"+ names[i]);;
          }
        }
        })();
        