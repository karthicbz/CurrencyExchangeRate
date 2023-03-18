const fetcher = (()=>{
    const fetchAvailableCurrencies = async ()=>{
        const response = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json');
        const data = await response.json();
        console.log(data);
    }

    return {fetchAvailableCurrencies};
})();

export {fetcher};