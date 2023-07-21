import { defineStore } from "pinia";

export const useStoreVerbs = defineStore("storeId", {
  state: () => {
    return {
      verbForms: {
        0: ["be", "быть, являться", "was, were", "been"],
        1: ["beat", "бить, колотить", "beat", "beaten"],
        2: ["become", "становиться", "became", "become"],
        3: ["begin", "начинать", "began", "begun"],
        4: ["bend", "гнуть", "bent", "bent"],
        5: ["bet", "держать пари", "bet", "bet"],
        6: ["bite", "кусать", "bit", "bitten"],
        7: ["blow", "дуть, выдыхать", "blew", "blown"],
        8: ["break", "ломать, разбивать, разрушать", "broke", "broken"], 
        9: ["bring", "приносить, привозить, доставлять", "brought", "brought"],  
        10: ["build", "	строить, сооружать", "built", "built"], 
        11: ["buy", "покупать, приобретать", "bought", "bought"], 
        12: ["catch", "", "caught", "caught"],   
        12: ["choose", "выбирать, избирать", "chose", "chosen"],   
        13: ["come", "	приходить, подходить", "came", "come"],
        14: ["cost", "стоить, обходиться", "cost", "cost"],
        15: ["cut", "резать, разрезать", "cut", "cut"],
        16: ["deal", "иметь дело, распределять", "dealt", "dealt"],
        17: ["dig", "копать, рыть", "dug", "dug"], 
        18: ["do", "делать, выполнять", "did", "done"],  
        19: ["draw", "рисовать, чертить", "drew", "drawn"], 
        20: ["drink", "пить", "drank", "drunk"], 
        21: ["drive", "ездить, подвозить", "drove", "driven"],   
        22: ["eat", "есть, поглощать, поедать", "ate", "eaten"],
        23: ["fall", "падать", "fell", "fallen"],
        24: ["feed", "кормить", "fed", "fed"],
        25: ["feel", "чувствовать, ощущать", "felt", "felt"],
        26: ["fight", "драться, сражаться, воевать", "fought", "fought"],
        27: ["find", "находить, обнаруживать", "found", "found"],
        28: ["fly", "летать", "flew", "flown"],
        29: ["forget", "забывать", "forgot", "forgotten"],
        30: ["forgive", "прощать", "forgave", "forgiven"],
        31: ["freeze", "замерзать, замирать", "froze", "frozen"],
        32: ["get", "получать, добираться", "got", "got"],
        33: ["give", "дать, подать, дарить", "gave", "given"],
        34: ["go", "идти, двигаться", "went", "gone"],
        35: ["grow", "расти, вырастать", "grew", "grown"],
        36: ["hang", "вешать, развешивать, висеть", "hung", "hung"],
        37: ["have", "иметь, обладать", "had", "had"],
        38: ["hear", "слышать, услышать", "heard", "heard"],
        39: ["hide", "прятать, скрывать", "hid", "hidden"],
        40: ["hit", "ударять, поражать", "hit", "hit"],
        41: ["hold", "держать, удерживать, задерживать", "held", "held"],
        42: ["hurt", "ранить, причинять боль, ушибить", "hurt", "hurt"],
        43: ["keep", "держать, хранить, сохранять, поддерживать", "kept", "kept"],
        44: ["know", "знать, иметь представление", "knew", "known"],
        45: ["lay", "класть, положить, покрывать", "laid", "laid"],
        46: ["lead", "вести за собой, сопровождать, руководить", "led", "led"],
        47: ["leave", "покидать, уходить, уезжать, оставлять", "left", "left"],
        48: ["lend", "одалживать, давать взаймы, давать в долг", "lent", "lent"],
        49: ["let", "позволять, разрешать", "let", "let"],
        50: ["lie", "лежать", "lay", "lain"],
        51: ["light", "зажигать, светиться, освещать", "lit", "lit"],
        52: ["", "", "", ""],
        53: ["", "", "", ""],
        54: ["", "", "", ""],
        55: ["", "", "", ""],
        56: ["", "", "", ""],
        57: ["", "", "", ""],
        58: ["", "", "", ""],
        59: ["", "", "", ""],
        60: ["", "", "", ""],
        61: ["", "", "", ""],
      },
      randVerb: "",
      rendArrFromVerbForms: "",
      translateStore: "",
      pastSimpleStore: "",
      pastParticipleStore: "",
      user: "",
      rendUser: "",
      allVerbs: "",
    };
  },
  getters: {},
  actions: {
    async getUser() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users/" +
          (Math.floor(Math.random() * 10) + 1)
      );
      const user = await res.json();
      this.user = user.name;
    },

    async getVerbs() {
      const res = await fetch("http://localhost:5001/verbs");
      this.allVerbs = await res.json();
    },

    async getRandVerb() {
      const res = await fetch("http://localhost:5001/randverb");
      const arrRandVerb = await res.json();
      this.randVerb = arrRandVerb[0].infinitive;
    },

    async getRandomUser() {
      const res = await fetch("http://localhost:5001/user");
      const verbs = await res.json();
      this.rendUser = verbs[0].name;
    },

    async rendomNumFromVerbs() {
      this.rendArrFromVerbForms =
        this.verbForms[
          Math.floor(Math.random() * Object.keys(this.verbForms).length)
        ];
    },

    async setMyPoint(){
      const response= await fetch("http://localhost:5001/setPoint");
      if (!response.ok) {
        throw new Error('Ошибка при выполнении запроса');
      }
      const data = await response.json();
      return data;
    }
  },
});
