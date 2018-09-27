import * as moment from 'moment';
export class Survey {
  id:string;
  sex:string;
  course:string;
  age:number;
  article1:boolean;
  article1_1:boolean;
  article1_2:boolean;
  article1_3:boolean;
  article1_4:boolean;
  article1_5:boolean;
  article1_6:boolean;
  article1_7:boolean;
  article1_8:boolean;
  article1_9:boolean;
  article1_10:boolean;
  article1_11:boolean;
  article1_12:boolean;
  article1_13:boolean;
  article1_14:boolean;
  article1_others:string;
  article2:boolean;
  article2_1:boolean;
  article2_2:boolean;
  article2_3:boolean;
  article2_4:boolean;
  article2_5:boolean;
  article2_6:boolean;
  article2_7:boolean;
  article2_8:boolean;
  article2_9:boolean;
  article2_10:boolean;
  article2_11:boolean;
  article2_12:boolean;
  article2_13:boolean;
  article2_14:boolean;
  article2_others:string;
  article3:boolean;
  article3_1:boolean;
  article3_2:boolean;
  article3_3:boolean;
  article3_4:boolean;
  article3_5:boolean;
  article3_6:boolean;
  article3_7:boolean;
  article3_8:boolean;
  article3_9:boolean;
  article3_10:boolean;
  article3_11:boolean;
  article3_12:boolean;
  article3_13:boolean;
  article3_14:boolean;
  article3_others:string;
  article4:boolean;
  article4_1:boolean;
  article4_2:boolean;
  article4_3:boolean;
  article4_4:boolean;
  article4_5:boolean;
  article4_6:boolean;
  article4_7:boolean;
  article4_8:boolean;
  article4_9:boolean;
  article4_10:boolean;
  article4_11:boolean;
  article4_12:boolean;
  article4_13:boolean;
  article4_14:boolean;
  article4_others:string;
  created_at:string;

  deserialize(input: Survey) {
    Object.assign(this, input);
    return this;
  }
  constructor(input:any = {
    id:null,
    course:null,
    sex:null,
    age:null,
    article1:false,
    article1_1:false,
    article1_2:false,
    article1_3:false,
    article1_4:false,
    article1_5:false,
    article1_6:false,
    article1_7:false,
    article1_8:false,
    article1_9:false,
    article1_10:false,
    article1_11:false,
    article1_12:false,
    article1_13:false,
    article1_14:false,
    article1_others:"",
    article2:false,
    article2_1:false,
    article2_2:false,
    article2_3:false,
    article2_4:false,
    article2_5:false,
    article2_6:false,
    article2_7:false,
    article2_8:false,
    article2_9:false,
    article2_10:false,
    article2_11:false,
    article2_12:false,
    article2_13:false,
    article2_14:false,
    article2_others:"",
    article3:false,
    article3_1:false,
    article3_2:false,
    article3_3:false,
    article3_4:false,
    article3_5:false,
    article3_6:false,
    article3_7:false,
    article3_8:false,
    article3_9:false,
    article3_10:false,
    article3_11:false,
    article3_12:false,
    article3_13:false,
    article3_14:false,
    article3_others:"",
    article4:false,
    article4_1:false,
    article4_2:false,
    article4_3:false,
    article4_4:false,
    article4_5:false,
    article4_6:false,
    article4_7:false,
    article4_8:false,
    article4_9:false,
    article4_10:false,
    article4_11:false,
    article4_12:false,
    article4_13:false,
    article4_14:false,
    article4_others:"",
    created_at: moment().format('YYYY-MM-DD HH:MM:SS')
  }){
    this.id = input.id;
    this.course = input.course;
    this.sex = input.sex;
    this.age = input.age;
    this.article1 = input.article1 == "true";
    this.article1_1 = input.article1_1 == "true";
    this.article1_2 = input.article1_2 == "true";
    this.article1_3 = input.article1_3 == "true";
    this.article1_4 = input.article1_4 == "true";
    this.article1_5 = input.article1_5 == "true";
    this.article1_6 = input.article1_6 == "true";
    this.article1_7 = input.article1_7 == "true";
    this.article1_8 = input.article1_8 == "true";
    this.article1_9 = input.article1_9 == "true";
    this.article1_10 = input.article1_10 == "true";
    this.article1_11 = input.article1_11 == "true";
    this.article1_12 = input.article1_12 == "true";
    this.article1_13 = input.article1_13 == "true";
    this.article1_14 = input.article1_14 == "true";
    this.article1_others = input.article1_others;
    this.article2 = input.article2 == "true";
    this.article2_1 = input.article2_1 == "true";
    this.article2_2 = input.article2_2 == "true";
    this.article2_3 = input.article2_3 == "true";
    this.article2_4 = input.article2_4 == "true";
    this.article2_5 = input.article2_5 == "true";
    this.article2_6 = input.article2_6 == "true";
    this.article2_7 = input.article2_7 == "true";
    this.article2_8 = input.article2_8 == "true";
    this.article2_9 = input.article2_9 == "true";
    this.article2_10 = input.article2_10 == "true";
    this.article2_11 = input.article2_11 == "true";
    this.article2_12 = input.article2_12 == "true";
    this.article2_13 = input.article2_13 == "true";
    this.article2_14 = input.article2_14 == "true";
    this.article2_others = input.article2_others;
    this.article3 = input.article3 == "true";
    this.article3_1 = input.article3_1 == "true";
    this.article3_2 = input.article3_2 == "true";
    this.article3_3 = input.article3_3 == "true";
    this.article3_4 = input.article3_4 == "true";
    this.article3_5 = input.article3_5 == "true";
    this.article3_6 = input.article3_6 == "true";
    this.article3_7 = input.article3_7 == "true";
    this.article3_8 = input.article3_8 == "true";
    this.article3_9 = input.article3_9 == "true";
    this.article3_10 = input.article3_10 == "true";
    this.article3_11 = input.article3_11 == "true";
    this.article3_12 = input.article3_12 == "true";
    this.article3_13 = input.article3_13 == "true";
    this.article3_14 = input.article3_14 == "true";
    this.article3_others = input.article3_others;
    this.article4 = input.article4 == "true";
    this.article4_1 = input.article4_1 == "true";
    this.article4_2 = input.article4_2 == "true";
    this.article4_3 = input.article4_3 == "true";
    this.article4_4 = input.article4_4 == "true";
    this.article4_5 = input.article4_5 == "true";
    this.article4_6 = input.article4_6 == "true";
    this.article4_7 = input.article4_7 == "true";
    this.article4_8 = input.article4_8 == "true";
    this.article4_9 = input.article4_9 == "true";
    this.article4_10 = input.article4_10 == "true";
    this.article4_11 = input.article4_11 == "true";
    this.article4_12 = input.article4_12 == "true";
    this.article4_13 = input.article4_13 == "true";
    this.article4_14 = input.article4_14 == "true";
    this.article4_others = input.article4_others;
    this.created_at = moment().format('YYYY-MM-DD HH:MM:SS');
  }

  toArray(){
    return [
      this.id,
      this.course,
      this.sex,
      this.age,
      this.article1,
      this.article1_1,
      this.article1_2,
      this.article1_3,
      this.article1_4,
      this.article1_5,
      this.article1_6,
      this.article1_7,
      this.article1_8,
      this.article1_9,
      this.article1_10,
      this.article1_11,
      this.article1_12,
      this.article1_13,
      this.article1_14,
      this.article1_others,
      this.article2,
      this.article2_1,
      this.article2_2,
      this.article2_3,
      this.article2_4,
      this.article2_5,
      this.article2_6,
      this.article2_7,
      this.article2_8,
      this.article2_9,
      this.article2_10,
      this.article2_11,
      this.article2_12,
      this.article2_13,
      this.article2_14,
      this.article2_others,
      this.article3,
      this.article3_1,
      this.article3_2,
      this.article3_3,
      this.article3_4,
      this.article3_5,
      this.article3_6,
      this.article3_7,
      this.article3_8,
      this.article3_9,
      this.article3_10,
      this.article3_11,
      this.article3_12,
      this.article3_13,
      this.article3_14,
      this.article3_others,
      this.article4,
      this.article4_1,
      this.article4_2,
      this.article4_3,
      this.article4_4,
      this.article4_5,
      this.article4_6,
      this.article4_7,
      this.article4_8,
      this.article4_9,
      this.article4_10,
      this.article4_11,
      this.article4_12,
      this.article4_13,
      this.article4_14,
      this.article4_others
    ];
  }
}
