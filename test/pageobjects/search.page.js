import Page from "./page.js";

class SearchPage extends Page{
    get SearchLink() {return $("b=Google Cloud Pricing Calculator");}
    async SearchLinkClick() {
        return this.SearchLink.click();
    }
}


export default new SearchPage()