import { contentItems } from "./content_item";
import { fetcher } from "./currency_fetcher";

const content = document.querySelector('#content');
// content.appendChild(contentItems.makeContainer());
const appendContentItems = async ()=>{
    content.appendChild(await contentItems.makeContainer());
}

appendContentItems();

document.getElementById('convert-button').addEventListener('click', ()=>{
    fetcher.fetchAvailableCurrencies();
})