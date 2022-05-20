import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  studentList =
[{
  id: 1,
  name: "Penelopa Braidwood",
  telephone: "(63) 99484-6783",
  plan: {
    id: 2,
    name: "Basic"
  },
  avatar: "../../../assets/avatar/1.png"
}, {
  id: 2,
  name: "Maribel Pulman",
  telephone: "(25) 99641-8460",
  plan: {
    id: 1,
    name: "Premium"
  },
  avatar: "../../../assets/avatar/2.png"
}, {
  id: 3,
  name: "Valentijn Ruselin",
  telephone: "(68) 99769-6306",
  plan: {
    id: 2,
    name: "Basic"
  },
  avatar: "../../../assets/avatar/3.png"
}, {
  id: 4,
  name: "Ludovico Duncan",
  telephone: "(89) 99901-7448",
  plan: {
    id: 1,
    name: "Premium"
  },
  avatar: "../../../assets/avatar/4.png"
}, {
  id: 5,
  name: "Brandi Nichol",
  telephone: "(78) 99911-8149",
  plan: {
    id: 1,
    name: "Premium"
  },
  avatar: "../../../assets/avatar/5.png"
}, {
  id: 6,
  name: "Gherardo Pelz",
  telephone: "(21) 99340-9477",
  plan: {
    id: 2,
    name: "Basic"
  },
  avatar: "../../../assets/avatar/6.png"
}, {
  id: 7,
  name: "Jeddy McGirr",
  telephone: "(59) 99980-4075",
  plan: {
    id: 2,
    name: "Basic"
  },
  avatar: "../../../assets/avatar/7.png"
}, {
  id: 8,
  name: "Parnell Hardson",
  telephone: "(11) 99933-5792",
  plan: {
    id: 2,
    name: "Basic"
  },
  avatar: "../../../assets/avatar/8.png"
}, {
  id: 9,
  name: "Claudette Craske",
  telephone: "(50) 99671-3956",
  plan: {
    id: 2,
    name: "Basic"
  },
  avatar: "../../../assets/avatar/9.png"
}, {
  id: 10,
  name: "Raf Gomersall",
  telephone: "(74) 99379-3853",
  plan: {
    id: 2,
    name: "Basic"
  },
  avatar: "../../../assets/avatar/10.png"
}, {
  id: 11,
  name: "Allayne Schutze",
  telephone: "(94) 99813-9580",
  plan: {
    id: 2,
    name: "Basic"
  },
  avatar: "../../../assets/avatar/11.png"
}, {
  id: 12,
  name: "Elston Colleford",
  telephone: "(85) 99344-2246",
  plan: {
    id: 2,
    name: "Basic"
  },
  avatar: "../../../assets/avatar/12.png"
}, {
  id: 13,
  name: "Hedvige Wooffitt",
  telephone: "(73) 99797-3094",
  plan: {
    id: 2,
    name: "Basic"
  },
  avatar: "../../../assets/avatar/1.png"
}, {
  id: 14,
  name: "Agnella Boswell",
  telephone: "(74) 99260-1082",
  plan: {
    id: 1,
    name: "Premium"
  },
  avatar: "../../../assets/avatar/2.png"
}, {
  id: 15,
  name: "Elyse Aldrick",
  telephone: "(25) 99516-2169",
  plan: {
    id: 1,
    name: "Premium"
  },
  avatar: "../../../assets/avatar/3.png"
}, {
  id: 16,
  name: "Ranice Skurray",
  telephone: "(37) 99247-4470",
  plan: {
    id: 1,
    name: "Premium"
  },
  avatar: "../../../assets/avatar/4.png"
}, {
  id: 17,
  name: "Tabbitha Diwell",
  telephone: "(89) 99191-3383",
  plan: {
    id: 1,
    name: "Premium"
  },
  avatar: "../../../assets/avatar/5.png"
}, {
  id: 18,
  name: "Sibyl Mowles",
  telephone: "(79) 99596-1964",
  plan: {
    id: 1,
    name: "Premium"
  },
  avatar: "../../../assets/avatar/6.png"
}, {
  id: 19,
  name: "Kissee O'Bradane",
  telephone: "(63) 99858-5320",
  plan: {
    id: 1,
    name: "Premium"
  },
  avatar: "../../../assets/avatar/7.png"
}, {
  id: 20,
  name: "Maxy Semrad",
  telephone: "(86) 99675-3417",
  plan: {
    id: 1,
    name: "Premium"
  },
  avatar: "../../../assets/avatar/8.png"
}, {
  id: 21,
  name: "Alexandrina Klemencic",
  telephone: "(33) 99628-0448",
  plan: {
    id: 1,
    name: "Premium"
  },
  avatar: "../../../assets/avatar/9.png"
}, {
  id: 22,
  name: "Sharline Pullar",
  telephone: "(26) 99834-9829",
  plan: {
    id: 1,
    name: "Premium"
  },
  avatar: "../../../assets/avatar/10.png"
}, {
  id: 23,
  name: "Lilli Bernardinelli",
  telephone: "(89) 99969-3773",
  plan: {
    id: 1,
    name: "Premium"
  },
  avatar: "../../../assets/avatar/11.png"
}, {
  id: 24,
  name: "Glynn Jeafferson",
  telephone: "(99) 99745-7928",
  plan: {
    id: 1,
    name: "Premium"
  },
  avatar: "../../../assets/avatar/12.png"
}, {
  id: 25,
  name: "Sandi Huyge",
  telephone: "(48) 99137-2272",
  plan: {
    id: 1,
    name: "Premium"
  },
  avatar: "../../../assets/avatar/10.png"
}, {
  id: 26,
  name: "Christian Scolli",
  telephone: "(34) 99351-6597",
  plan: {
    id: 1,
    name: "Premium"
  },
  avatar: "../../../assets/avatar/11.png"
}, {
  id: 27,
  name: "Rafaela Raith",
  telephone: "(24) 99156-5079",
  plan: {
    id: 1,
    name: "Premium"
  },
  avatar: "../../../assets/avatar/12.png"
}, {
  id: 28,
  name: "Anthe Timpany",
  telephone: "(93) 99517-2440",
  plan: {
    id: 1,
    name: "Premium"
  },
  avatar: "../../../assets/avatar/10.png"
}, {
  id: 29,
  name: "Dode Bunten",
  telephone: "(13) 99878-9565",
  plan: {
    id: 1,
    name: "Premium"
  },
  avatar: "../../../assets/avatar/11.png"
}, {
  id: 30,
  name: "Baxie Gergus",
  telephone: "(84) 99611-5342",
  plan: {
    id: 1,
    name: "Premium"
  },
  avatar: "../../../assets/avatar/12.png"
}] 

  public selectPlan = this.listPlan().filter((elem, index, self) => index === self.map(x=> x.id).indexOf(elem.id));

  constructor() { }

  listPlan(){
    return this.studentList.map(x => x.plan)
  }


  filterRows(userName: string, planId: number){
    return this.studentList.filter(x => (x.name.toLowerCase().includes(userName) || !userName) && ( x.plan.id == planId || !planId))
  }

  getStudents(){
    return this.studentList;
  }
}
