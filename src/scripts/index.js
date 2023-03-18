import { contentItems } from "./content_item";
import { fetcher } from "./currency_fetcher";

const content = document.querySelector('#content');
// content.appendChild(contentItems.makeContainer());
const appendContentItems = async ()=>{
    content.appendChild(await contentItems.makeContainer());
}

appendContentItems();

content.addEventListener('click', (e)=>{
    if(e.target.className === 'From-input' || e.target.className === 'To-input'){
        if(e.target.value !== ''){
            e.target.value = '';
        }
    }

    if(e.target.id === 'convert-button'){
        const amountInput = content.querySelector('.Amount-input');
        if(amountInput.value !== ''){
            console.log(amountInput.value);
        }else{
            alert('Amount should not be empty');
        }
    }
});
