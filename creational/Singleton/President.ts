export class President{
    private static president:President;

    private constructor(){}

    public static getInstance():President{
        if(!President.president){
            President.president = new President();
        }
        return  President.president;
    }
}