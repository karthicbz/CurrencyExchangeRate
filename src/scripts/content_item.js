const contentItems = (()=>{
    const makeContainer = ()=>{
        const container = document.createElement('div');
        container.appendChild(divCreator.creator('Amount'));
        container.appendChild(divCreator.creator('From'));
        container.appendChild(divCreator.creator('To'));
        container.appendChild(convertedTextDetails());
        container.appendChild(button());
        return container;
    }
    return {makeContainer};
})();

const divCreator = (()=>{
    const creator = (name)=>{
        const container = document.createElement('div');
        // container.id = divName;
        
        const header = document.createElement('p');
        header.className = name;
        header.textContent = name;
        container.appendChild(header);

        const inputField = document.createElement('input');
        inputField.className = name+'-input';
        container.appendChild(inputField);

        if(name === 'From' || name==='To'){
            const list = document.createElement('div');
            list.className = name+'-currency-list';
            container.appendChild(list);
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

export {contentItems};