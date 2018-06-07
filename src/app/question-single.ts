export class QuestionSingle {

    idq: string;
    question: string;
    ida1: string;
    a1: string;
    ida2: string;
    a2: string;
    ida3: string;
    a3: string;
    aOk: string;

    constructor(
        idq: string,
        question: string,
        ida1: string,
        a1: string,
        ida2: string,
        a2: string,
        ida3: string,
        a3: string) {

        this.idq = idq;
        this.question = question;
        this.ida1 = ida1;
        this.a1 = a1;
        this.ida2 = ida2;
        this.a2 = a2;
        this.ida3 = ida3;
        this.a3 = a3;
        
    }
}
