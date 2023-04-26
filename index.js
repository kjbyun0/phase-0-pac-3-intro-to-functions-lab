function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase()); 
}

  function logWhisper(string) {
    console.log(string.toLowerCase());
  }

  function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
        return "I can't hear you!";
    } else if (string.toUpperCase() === string) {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
  }

  console.log(shout("Test"));
  console.log(whisper("Test"));
  logShout("Test");
  logWhisper("Test");
  console.log(sayHiToHeadphonedRoommate("test"));
  console.log(sayHiToHeadphonedRoommate("TEST"));
  console.log(sayHiToHeadphonedRoommate("Test"));
  console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));