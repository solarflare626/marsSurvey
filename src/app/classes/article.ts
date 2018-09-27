export class Article {
    id:number;
    picture:string;
    title: string;
    author:string;
    source:string;
    body: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
      constructor(input:any = {}){
          Object.assign(this, input);
      }
}
