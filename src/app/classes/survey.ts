export class Survey {
    id:any;
    gender:any;
    course:any;
    age:any;
    q1_1:any = false ;
    q1_2:any = false ;
    q1_3:any = false ;
    q1_4:any = false ;
    q1_none:any  = false ; 
    q2_1:any = false ;
    q2_2:any = false ;
    q2_3:any = false ;
    q2_4:any = false ;
    q2_5:any  = false ;
    q2_6:any  = false ;
    others:any;
    
    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }
    constructor(input:any = {}){
        Object.assign(this, input);
        // this.course = course;
        // this.gender = gender;
        // this.age = age;
        // this.q1_1 = q1_1;
        // this.q1_2 = q1_2;
        // this.q1_3= q1_3;
        // this.q1_4= q1_4;
        // this.q1_none= q1_none ;
        // this.q2_1 = q2_1;
        // this.q2_2 = q2_2;
        // this.q2_3 = q2_3;
        // this.q2_4  = q2_4;
        // this.q2_5  = q2_5;
        // this.q2_6  = q2_6;
        // this.others = others;
    }

    toArray(){
      return [
        this.id,
        this.course ,
        this.gender ,
        this.age ,
        this.q1_1 ,
        this.q1_2,
        this.q1_3,
        this.q1_4,
        this.q1_none,
        this.q2_1,
        this.q2_2 ,
        this.q2_3,
        this.q2_4 ,
        this.q2_5,
        this.q2_6,
        this.others
      ];
    }
}
