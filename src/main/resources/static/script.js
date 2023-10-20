fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=BTCEUR")
 .then(reponse1=>reponse1.text())
 .then(reponse2=>console.info(reponse2))