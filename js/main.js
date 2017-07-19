
// Zodiac Array of objects with detailed information about each signs
var zodiacSigns = [ 
    
    {
    	signName: "aries",
    	yourCharactor:"Active, Demanding, Dtermined, Effective, Ambitious",
    	secretWeakness: "Anger: Aries knows this weakness well. They feel it coming and you see it in their body language.",
        signImg: "img/aries.png",

    },
     
    {
    	signName: "taurus",
    	yourCharactor: "Security, Subtle strength, Appreciation, Instruction, Patience.",
    	secretWeakness: "intolerance: Despite Taurus' goal of using common sense to hold the highest values, they usually fall short on one value - tolerance. ",
        signImg:"img/taurus.png",
    },

    {
    	signName: "gemini",
    	yourCharactor: "Communication, Indecision, Inquisitive, Intelligent, Changeable ",
    	secretWeakness: "being Curt: ​Sharp words and insensitive comments are Gemini's weakness. ",
        signImg: "img/gemini.png",
    },

    {
    	signName: "cancer",
    	yourCharactor: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
        //
        secretWeakness: "being vengeful: This trait is normally attributed to Scorpio, but it is definitely Cancer secret weakness.",
        signImg: "img/cancer.png",
    },

    {
    	signName: "leo",
    	yourCharactor: "Ruling, Warmth, Generosity, Faithful, Initiative",
    	secretWeakness: "arrogance: Leos easily fall into the trap of believing no one can do things as well as they can do them.",
        signImg: "img/leo.png",
    },

    {
    	signName: "virgo",
    	yourCharactor: "Analyzing, Practical, Reflective, Observation, Thoughtful",
    	secretWeakness: "being a schemer: Even your closest Virgo friend doesn't want to admit how they scheme.  ",
        signImg:"img/virgo.png",
    },

    {
    	signName: "aquarius",
    	yourCharactor: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
    	secretWeakness: "being judgmental:Above all else, Aquarians want to be impartial and level in all of their dealings with people or issues.",
        signImg:"img/aquarius.png",
    },

    {
    	signName: "libra",
    	yourCharactor:"Justice, Balance, Truth, Beauty, Perfection",
    	secretWeakness: "dishonesty: Libras too often take the path of least resistance and ending up lying. ",
        signImg: "img/libra.png",
    },

    {
    	signName:"scorpio",
    	yourCharactor: "Transient, Self-willed, Purposeful, Unyielding",
    	secretWeakness: "being petty: Letting the little things go is not an option for Scorpios.",
        signImg:"img/scorpio.png",
    },

    {
    	signName: "sagittarius",
    	yourCharactor: "Motion, Philosophical, Experimentation, Optimism",
    	secretWeakness: "being a prima donna: The Sagittarius whose time is more valuable than anyone else's is a common find. Sagittarians have no desire to sacrifice for success.",
        signImg:"img/sagittarius.png",
    },

    {
    	signName: "capricorn",
    	yourCharactor: "ambitious, careful, disciplined, humorous, patient, practical",
    	secretWeakness: "pessimistic: a person who only focuses on the negative side of a situation and is always negative about the future. ",
        signImg:"img/capricorn.png",
    },

    {
    	signName: "pisces",
    	yourCharactor: "Depth, Reactive, Fluctuation, imaginationsaga",
    	secretWeakness: "being delusional: Pisces actually prefer to live a fog. When things aren't completely clear, there's always room for change, room for error and time to just relax and contemplate. ",
        signImg:"img/pisces.png",
    },

];

     //This function invokes by user while they press the Button 

    function showHoroscope() {
       var userdata =   document.getElementById('userdata');

     //for loop 

    for (var i = 0; i < zodiacSigns.length; i++) {
    //if statement
    if(userdata.value === zodiacSigns[i].signName) {

    console.log("you entered a valid Zodiac Sign");
    
    document.getElementById("yourSign").textContent = userdata.value;
    document.getElementById("signPic").src = zodiacSigns[i].signImg;
    document.getElementById("horoscopeDetail").textContent = " Your Best Charactor Detail: " + zodiacSigns[i].yourCharactor + " and Your Charactor's Weaknesses  " + zodiacSigns[i].secretWeakness;
    
      return;
 
    //else if statement
    
  } else if (userdata.value != zodiacSigns[i].signName) {
     console.log("not a valid horoscope sign, Please reenter a valid horoscope sign!");
     document.getElementById("yourSign").textContent = "Oops, You DID NOT enter a valid Sign, Please try again ";
     document.getElementById("signPic").src = "";
     document.getElementById("horoscopeDetail").textContent = "";

  };

};

};







