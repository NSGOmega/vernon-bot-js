let idCounter = 0;

function count(){ 
  idCounter++
  return idCounter;
}


var num = 1;

function pad(n){
    var string = "" + num;
    var pad = "0000";
    n = pad.substring(0, pad.length - string.length) + string;
    num++;
    return n;
}
    
let collection = [
    {
        name: "24H",
        amount: 3,
        link: "",
        thumb: "",
        worth: "",
    }
]

let v_list = [
    { 
        link: "https://vernonbot.xyz/vernon-img/0.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/24h.jpeg", 
        version: "Carat", 
        worth: 500, 
        era: "24H", 
        quality: "Epic", 
        title: `[⭐️⭐️⭐️] 24H Carat Vernon`, 
        collection: 1,
        id: pad(count()) 
    },
    { 
        link: "http://vernonbot.xyz/vernon-img/1.jpeg", 
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/ainochikara.jpeg", 
        version: "Weverse Preorder", 
        worth: 250, 
        era: "Ainochikara", 
        quality: "Rare", 
        title: `[⭐️⭐️] Ainochikara Weverse Vernon`, 
        collection: 3,
        id: pad(count()) 
    },
    {   
        link: "http://vernonbot.xyz/vernon-img/2.jpeg", 
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/ainochikara.jpeg", 
        version: "Christmas", 
        worth: 500, 
        era: "Ainochikara", 
        quality: "Epic", 
        title: `[⭐️⭐️⭐️] Ainochikara Christmas Vernon`, 
        collection: 3,
        id: pad(count()) 
    },
    {
        link: "http://vernonbot.xyz/vernon-img/3.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/ainochikara.jpeg",
        version: "Universal",
        worth: 250,
        era: "Ainochikara",
        quality: "Rare",
        title: "[⭐️⭐️] Ainochikara Universal Vernon",
        collection: 3,
        id: pad(count())

    },
    {
        link: "http://vernonbot.xyz/vernon-img/4.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/alone.jpg",
        version: "Alone 01",
        worth: 250,
        era: "AL1",
        quality: "Rare",
        title: "[⭐️⭐️] AL1 Alone 01 Vernon",
        collection: 3,
        id: pad(count())

    },
    {
        link: "http://vernonbot.xyz/vernon-img/5.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/alone.jpg",
        version: "All 03",
        worth: 250,
        era: "AL1",
        quality: "Rare",
        title: "[⭐️⭐️] AL1 All 03 Vernon",
        collection: 3,
        id: pad(count())

    },
    {
        link: "http://vernonbot.xyz/vernon-img/6.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/alone.jpg",
        version: "All 13",
        worth: 250,
        era: "AL1",
        quality: "Rare",
        title: "[⭐️⭐️] AL1 All 13 Vernon",
        collection: 3,
        id: pad(count())

    },
    {
        link: "http://vernonbot.xyz/vernon-img/7.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/anode.jpeg",
        version: "Truth - White 01",
        worth: 100,
        era: "An Ode",
        quality: "Common",
        title: "[⭐️] An Ode Truth - White 01 Vernon",
        collection: 2,
        id: pad(count())

    },
    {
        link: "http://vernonbot.xyz/vernon-img/8.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/anode.jpeg",
        version: "Hope - White 01",
        worth: 100,
        era: "An Ode",
        quality: "Common",
        title: "[⭐️] An Ode Hope - White 01 Vernon",
        collection: 2,
        id: pad(count())

    },
    {
        link: "http://vernonbot.xyz/vernon-img/9.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/anode.jpeg",
        version: "Begin - Color 01",
        worth: 100,
        era: "An Ode",
        quality: "Common",
        title: "[⭐️] An Ode Begin - Color 01 Vernon",
        collection: 2,
        id: pad(count())

    },
    
    
    
];

exports.v_list = v_list;
