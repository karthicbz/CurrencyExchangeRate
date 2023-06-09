import { fetcher } from "./currency_fetcher";
import swapCurrency from '../images/swap_round.svg';

const contentItems = (()=>{
    const makeContainer = async ()=>{
        const container = document.createElement('div');
        const inputContainer = document.createElement('div');
        inputContainer.id = 'inputContainer';
        inputContainer.appendChild(await divCreator.creator('Amount'));
        inputContainer.appendChild(await divCreator.creator('From'));
        inputContainer.appendChild(imgElement());
        inputContainer.appendChild(await divCreator.creator('To'));
        container.appendChild(inputContainer);
        container.appendChild(convertedTextDetails());
        container.appendChild(button());
        return container;
    }
    return {makeContainer};
})();

const divCreator = (()=>{
    const creator = async (name)=>{
        const container = document.createElement('div');
        // container.id = divName;
        
        const header = document.createElement('p');
        header.className = name;
        header.textContent = name;
        container.appendChild(header);

        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.name = name+'-input';
        inputField.className = name+'-input';
        inputField.setAttribute('list', name+'-currency-list');
        container.appendChild(inputField);

        if(name === 'From' || name==='To'){
            container.appendChild(await createOption(name));
        }

        return container;
    }
    return {creator}
})();

const convertedTextDetails = ()=>{
    const classNameArray = ['from-curr', 'to-curr', 'curr-details'];
    const container = document.createElement('div');
    container.className = 'converted-details';

    for(let name of classNameArray){
        const element = document.createElement('p');
        element.className = name;
        container.appendChild(element);
    }
    return container;
}

const button = ()=>{
    const convertButton = document.createElement('button');
    convertButton.id = 'convert-button';
    convertButton.textContent = 'convert';
    return convertButton;
}

const createOption = async (name)=>{
    const options = await fetcher.fetchAvailableCurrencies();
    const list = document.createElement('datalist');
    list.id = name+'-currency-list';
    for(let key in options){
        const option = document.createElement('option');
        option.textContent = `${key}-${options[key]}`;
        list.appendChild(option);
    }
    return list;
}

const imgElement = ()=>{
    const element = document.createElement('img');
    element.src = swapCurrency;
    element.className = 'swap-curr';
    return element;
}

// createOption();

export {contentItems};