const fetcher = (()=>{
    const fetchAvailableCurrencies = async ()=>{
        const response = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json',);
        const data = await response.json();
        // console.log(data);
        return data;
    }

    const fetchExchangeRate = async (from, to)=>{
        const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`);
        const data = await response.json();
        return data;
    }

    return {fetchAvailableCurrencies, fetchExchangeRate};
})();

export {fetcher};