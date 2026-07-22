class multiselecting{
    constructor(page){
        this.page = page;
    }


    async testmselect(){
        await this.page.locator("#colors").selectOption(['Red', 'Blue', 'Green']);




    }

}
module.exports = {multiselecting};