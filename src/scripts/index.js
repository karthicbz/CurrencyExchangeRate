import { contentItems } from "./content_item";
import { fetcher } from "./currency_fetcher";
import '../styles/style.css';

const content = document.querySelector('#content');
// content.appendChild(contentItems.makeContainer());
const appendContentItems = async ()=>{
    content.appendChild(await contentItems.makeContainer());
}

appendContentItems();

content.addEventListener('click', (e)=>{
    const amountInput = content.querySelector('.Amount-input');
    const fromValue = document.querySelector('.From-input');
    const toValue = document.querySelector('.To-input');
    const fromPara = document.querySelector('.from-curr');
    const toPara = document.querySelector('.to-curr');
    const container = document.querySelector('#content>div');
    const allParas = document.querySelectorAll('.converted-details>p');
    const convertButton = document.querySelector('#convert-button');

    if(e.target.className === 'From-input' || e.target.className === 'To-input'){
        if(e.target.value !== ''){
            e.target.value = '';
        }
    }

    if(e.target.id === 'convert-button'){
        displayDetails();
    }

    if(e.target.className === 'swap-curr'){
        displayDetails()
    }

    amountInput.addEventListener('input', ()=>{
        displayDetails();
    });

    function displayDetails(){
        if(amountInput.value !== '' && fromValue.value !== '' && toValue.value !== ''){
            if(e.target.id === 'convert-button'){
                container.setAttribute('style', 'height: 249px');
                allParas.forEach(para=>{
                    para.setAttribute('style', 'opacity: 1');
                });
            }
            if(e.target.className === 'swap-curr'){
                const tempFromValue = fromValue.value;
                const tempToValue = toValue.value;
                fromValue.value = tempToValue;
                toValue.value = tempFromValue;
            }
            new Promise(function(resolve){
                resolve(price(fromValue.value.split('-')[0], toValue.value.split('-')[0]));
            })
            .then(function(data){
                // const currencyData = data;
                fromPara.textContent = `${amountInput.value} ${fromValue.value.split('-')[1]} =`;
                toPara.textContent = `${(data[toValue.value.split('-')[0]])*amountInput.value} ${toValue.value.split('-')[1]}`;
            })
            .catch(function(err){
                console.log(err);
            })
        }
    }

});

const price = async (from, to)=>{
   const currentPrice = await fetcher.fetchExchangeRate(from, to);
   return currentPrice;
}
