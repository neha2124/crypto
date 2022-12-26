const table = document.querySelector('.table')

// console.log(table)
const data = () => {
    fetch ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then (Response => Response.json())
    // .then (data => console.log(data))
    .then(data => {
        let list = `
        <thead class="px-5">
        <tr >
        <th scope="col"></th>
        <th scope="col">Coin</th>
        <th scope="col">Symbol</th>
        <th scope="col">Price</th>
        <th scope="col">Volume(24_h)</th>
        <th scope="col">24h %</th>
        <th scope="col">Market Cap</th>
        
    </tr>

      </thead>
        `
        data.forEach(r => {
            let price = r.price_change_percentage_24h.toFixed(2)
            
            let market = r.market_cap.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            let volume = r.total_volume.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            list += `
            <tbody>
            <tr>
                <th scope="row" class="img"><img src="${r.image}"></th>
                <td>${r.name}</td>
                <td>${r.symbol}</td>
                 <td> $${r.current_price}</td>
                 <td> $${volume}</td>
    
                <td>${price}%</td>
               <td>Mkt Cap: $${market}</td>
            </tr>
          </tbody>`
            
            
        });
        table.innerHTML=list
    })

}
data()
