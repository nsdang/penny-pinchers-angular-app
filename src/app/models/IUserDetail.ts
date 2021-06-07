export interface User {
    userId: string; 
    fname: string;
    lname: string;
    creditcardInfo: {
        cardNo: number;
        cvv: number;
    }
    isPremium: boolean;
    phoneNo: string;
    email: string;
}