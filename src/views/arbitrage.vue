<template>
  <div id="arbitrage">
    <table class="arb_menu_style">
      <tbody>
      <tr>
        <td><a @click="show('table_exchange')" v-on:click="setActive('money')"
               :class="{ activelink: isActive('money') }">По монетам</a></td>
        <td><a @click="show('table_profit')" v-on:click="setActive('profit')"
               :class="{ activelink: isActive('profit') }">По профиту</a></td>
        <td><a @click="show('arb_menu')" v-on:click="setActive('menu')" :class="{ activelink: isActive('menu') }">По
          биржам</a></td>
        <td></td>
      </tr>
      </tbody>
    </table>
    <br><br><br>
    <div id="arb_menu" class="hidden">
      <table class="arb_menu_table">
        <tbody>
        <tr>
          <td><a @click="show('binance_bittrex')">Binance / Bittrex</a></td>
          <td><a @click="show('binance_hitbtc')">Binance / HitBTC</a></td>
          <td><a @click="show('binance_kucoin')">Binance / Kucoin</a></td>
          <td><a @click="show('binance_livecoin')">Binance / Livecoin</a></td>
          <td><a @click="show('binance_poloniex')">Binance / Poloniex</a></td>
          <td><a @click="show('binance_kraken')">Binance / Kraken</a></td>
          <td><a @click="show('binance_okex')">Binance / OKex</a></td>
          <td><a @click="show('binance_gateio')">Binance / Gate.io</a></td>
          <td><a @click="show('binance_bitz')">Binance / Bit-Z</a></td>
        </tr>
        <tr>
          <td><a @click="show('binance_huobi')">Binance / Huobi</a></td>
          <td><a @click="show('binance_coinex')">Binance / Coinex</a></td>
          <td><a @click="show('binance_bibox')">Binance / Bibox</a></td>
          <td><a @click="show('bittrex_hitbtc')">Bittrex / HitBTC</a></td>
          <td><a @click="show('bittrex_kucoin')">Bittrex / Kucoin</a></td>
          <td><a @click="show('bittrex_livecoin')">Bittrex / Livecoin</a></td>
          <td><a @click="show('bittrex_poloniex')">Bittrex / Poloniex</a></td>
          <td><a @click="show('bittrex_kraken')">Bittrex / Kraken</a></td>
          <td><a @click="show('bittrex_okex')">Bittrex / OKex</a></td>
        </tr>
        <tr>
          <td><a @click="show('bittrex_gateio')">Bittrex / Gate.io</a></td>
          <td><a @click="show('bittrex_bitz')">Bittrex / Bit-Z</a></td>
          <td><a @click="show('bittrex_huobi')">Bittrex / Huobi</a></td>
          <td><a @click="show('bittrex_coinex')">Bittrex / Coinex</a></td>
          <td><a @click="show('bittrex_bibox')">Bittrex / Bibox</a></td>
          <td><a @click="show('poloniex_hitbtc')">Poloniex / HitBTC</a></td>
          <td><a @click="show('poloniex_kucoin')">Poloniex / Kucoin</a></td>
          <td><a @click="show('poloniex_livecoin')">Poloniex / Livecoin</a></td>
          <td><a @click="show('poloniex_kraken')">Poloniex / Kraken</a></td>
        </tr>
        <tr>
          <td><a @click="show('poloniex_okex')">Poloniex / OKex</a></td>
          <td><a @click="show('poloniex_gateio')">Poloniex / Gate.io</a></td>
          <td><a @click="show('poloniex_bitz')">Poloniex / Bit-Z</a></td>
          <td><a @click="show('poloniex_huobi')">Poloniex / Huobi</a></td>
          <td><a @click="show('poloniex_coinex')">Poloniex / Coinex</a></td>
          <td><a @click="show('poloniex_bibox')">Poloniex / Bibox</a></td>

          <td><a @click="show('hitbtc_kucoin')">HitBTC / Kucoin</a></td>
          <td><a @click="show('hitbtc_livecoin')">HitBTC / Livecoin</a></td>
          <td><a @click="show('hitbtc_kraken')">HitBTC / Kraken</a></td>
        </tr>
        <tr>
          <td><a @click="show('hitbtc_okex')">HitBTC / OKex</a></td>
          <td><a @click="show('hitbtc_gateio')">HitBTC / Gate.io</a></td>
          <td><a @click="show('hitbtc_bitz')">HitBTC / Bit-Z</a></td>
          <td><a @click="show('hitbtc_huobi')">HitBTC / Huobi</a></td>
          <td><a @click="show('hitbtc_coinex')">HitBTC / Coinex</a></td>
          <td><a @click="show('hitbtc_bibox')">HitBTC / Bibox</a></td>

          <td><a @click="show('kucoin_livecoin')">Kucoin / Livecoin</a></td>
          <td><a @click="show('kucoin_kraken')">Kucoin / Kraken</a></td>
          <td><a @click="show('kucoin_okex')">Kucoin / OKex</a></td>
        </tr>
        <tr>
          <td><a @click="show('kucoin_gateio')">Kucoin / Gate.io</a></td>
          <td><a @click="show('kucoin_bitz')">Kucoin / Bit-Z</a></td>
          <td><a @click="show('kucoin_huobi')">Kucoin / Huobi</a></td>
          <td><a @click="show('kucoin_coinex')">Kucoin / Coinex</a></td>
          <td><a @click="show('kucoin_bibox')">Kucoin / Bibox</a></td>

          <td><a @click="show('livecoin_kraken')">Livecoin / Kraken</a></td>
          <td><a @click="show('livecoin_okex')">Livecoin / OKex</a></td>
          <td><a @click="show('livecoin_gateio')">Livecoin / Gate.io</a></td>
          <td><a @click="show('livecoin_bitz')">Livecoin / Bit-Z</a></td>
        </tr>
        <tr>
          <td><a @click="show('livecoin_huobi')">Livecoin / Huobi</a></td>
          <td><a @click="show('livecoin_coinex')">Livecoin / Coinex</a></td>
          <td><a @click="show('livecoin_bibox')">Livecoin / Bibox</a></td>

          <td><a @click="show('kraken_okex')">Kraken / OKex</a></td>
          <td><a @click="show('kraken_gateio')">Kraken / Gate.io</a></td>
          <td><a @click="show('kraken_bitz')">Kraken / Bit-Z</a></td>
          <td><a @click="show('kraken_huobi')">Kraken / Huobi</a></td>
          <td><a @click="show('kraken_coinex')">Kraken / Coinex</a></td>
          <td><a @click="show('kraken_bibox')">Kraken / Bibox</a></td>
        </tr>
        <tr>
          <td><a @click="show('okex_gateio')">OKex / Gate.io</a></td>
          <td><a @click="show('okex_bitz')">OKex / Bit-Z</a></td>
          <td><a @click="show('okex_huobi')">OKex / Huobi</a></td>
          <td><a @click="show('okex_coinex')">OKex / Coinex</a></td>
          <td><a @click="show('okex_bibox')">OKex / Bibox</a></td>

          <td><a @click="show('gateio_bitz')">Gate.io / Bit-Z</a></td>
          <td><a @click="show('gateio_huobi')">Gate.io / Huobi</a></td>
          <td><a @click="show('gateio_coinex')">Gate.io / Coinex</a></td>
          <td><a @click="show('gateio_bibox')">Gate.io / Bibox</a></td>
        </tr>
        <tr>
          <td><a @click="show('bitz_huobi')">Bit-Z / Huobi</a></td>
          <td><a @click="show('bitz_coinex')">Bit-Z / Coinex</a></td>
          <td><a @click="show('bitz_bibox')">Bit-Z / Bibox</a></td>

          <td><a @click="show('huobi_coinex')">Huobi / Coinex</a></td>
          <td><a @click="show('huobi_bibox')">Huobi / Bibox</a></td>

          <td><a @click="show('coinex_bibox')">Coinex / Bibox</a></td>
        </tr>
        </tbody>
      </table>
    </div>
    <br><br><br><br>
    <div id="binance_bittrex" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Binance</td>
          <td>Bittrex</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="binance_hitbtc" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Binance</td>
          <td>HitBTC</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="binance_kucoin" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Binance</td>
          <td>Kucoin</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="binance_livecoin" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Binance</td>
          <td>Livecoin</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="binance_poloniex" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Binance</td>
          <td>Poloniex</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="binance_kraken" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Binance</td>
          <td>Kraken</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="binance_okex" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Binance</td>
          <td>OKex</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="binance_gateio" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Binance</td>
          <td>Gate.io</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="binance_bitz" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Binance</td>
          <td>Bit-Z</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="binance_huobi" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Binance</td>
          <td>Huobi</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="binance_coinex" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Binance</td>
          <td>Coinex</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="binance_bibox" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Binance</td>
          <td>Bibox</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="bittrex_hitbtc" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Bittrex</td>
          <td>HitBTC</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ARDR</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ARDR"
                                                    title="Продать" target="_blank">0.0000053600</a></td>
          <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/ARDR-to-BTC" title="Купить"
                                                    target="_blank">0.0000053210</a></td>
          <td>0.73</td>
        </tr>
        <tr>
          <td>BTC-ENJ</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ENJ"
                                                    title="Продать" target="_blank">0.0000151200</a></td>
          <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/ENJ-to-BTC" title="Купить"
                                                    target="_blank">0.0000150260</a></td>
          <td>0.63</td>
        </tr>
        <tr>
          <td>ETH-XRP</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=ETH-XRP"
                                                    title="Продать" target="_blank">0.0006855000</a></td>
          <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/XRP-to-ETH" title="Купить"
                                                    target="_blank">0.0006837000</a></td>
          <td>0.26</td>
        </tr>
        <tr>
          <td>BTC-KMD</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-KMD"
                                                    title="Продать" target="_blank">0.0000600400</a></td>
          <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/KMD-to-BTC" title="Купить"
                                                    target="_blank">0.0000599200</a></td>
          <td>0.20</td>
        </tr>
        <tr>
          <td>BTC-LSK</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-LSK"
                                                    title="Продать" target="_blank">0.0001336900</a></td>
          <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/LSK-to-BTC" title="Купить"
                                                    target="_blank">0.0001334300</a></td>
          <td>0.19</td>
        </tr>
        <tr>
          <td>ETH-XEM</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=ETH-XEM"
                                                    title="Продать" target="_blank">0.0003518300</a></td>
          <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/XEM-to-ETH" title="Купить"
                                                    target="_blank">0.0003513760</a></td>
          <td>0.13</td>
        </tr>
        <tr>
          <td>BTC-WAVES</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-WAVES"
                                                    title="Продать" target="_blank">0.0002370600</a></td>
          <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/WAVES-to-BTC" title="Купить"
                                                    target="_blank">0.0002367900</a></td>
          <td>0.11</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="bittrex_kucoin" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Bittrex</td>
          <td>Kucoin</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-VID</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-VID"
                                                    title="Продать" target="_blank">0.0000067500</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/VID-BTC" title="Купить"
                                                    target="_blank">0.0000067300</a></td>
          <td>0.30</td>
        </tr>
        <tr>
          <td>BTC-TRX</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-TRX"
                                                    title="Продать" target="_blank">0.0000030500</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/TRX-BTC" title="Купить"
                                                    target="_blank">0.0000030440</a></td>
          <td>0.20</td>
        </tr>
        <tr>
          <td>BTC-ENJ</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ENJ"
                                                    title="Продать" target="_blank">0.0000151200</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ENJ-BTC" title="Купить"
                                                    target="_blank">0.0000151000</a></td>
          <td>0.13</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ETH"
                                                    title="Продать" target="_blank">0.0340721197</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETH-BTC" title="Купить"
                                                    target="_blank">0.0340300016</a></td>
          <td>0.12</td>
        </tr>
        <tr>
          <td>BTC-XTZ</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-XTZ"
                                                    title="Продать" target="_blank">0.0002474100</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/XTZ-BTC" title="Купить"
                                                    target="_blank">0.0002471600</a></td>
          <td>0.10</td>
        </tr>
        <tr>
          <td>BTC-ALGO</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ALGO"
                                                    title="Продать" target="_blank">0.0000341400</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ALGO-BTC" title="Купить"
                                                    target="_blank">0.0000341300</a></td>
          <td>0.03</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="bittrex_livecoin" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Bittrex</td>
          <td>Livecoin</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-GAME</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-GAME"
                                                    title="Продать" target="_blank">0.0000068800</a></td>
          <td style="background-color: #00FF00;"><a
              href="https://www.livecoin.net/ru/trade/index?currencyPair=GAME%2FBTC" title="Купить" target="_blank">0.0000064800</a>
          </td>
          <td>6.17</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="bittrex_poloniex" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Bittrex</td>
          <td>Poloniex</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ETH"
                                                    title="Купить" target="_blank">0.0341003984</a></td>
          <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ETH" title="Продать"
                                                    target="_blank">0.0341893099</a></td>
          <td>0.26</td>
        </tr>
        <tr>
          <td>BTC-XEM</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-XEM"
                                                    title="Продать" target="_blank">0.0000120100</a></td>
          <td style="background-color: #00FF00;"><a href="https://poloniex.com/exchange#BTC_XEM" title="Купить"
                                                    target="_blank">0.0000119900</a></td>
          <td>0.17</td>
        </tr>
        <tr>
          <td>BTC-LTC</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-LTC"
                                                    title="Купить" target="_blank">0.0047192099</a></td>
          <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_LTC" title="Продать"
                                                    target="_blank">0.0047238902</a></td>
          <td>0.10</td>
        </tr>
        <tr>
          <td>BTC-ATOM</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ATOM"
                                                    title="Купить" target="_blank">0.0005015700</a></td>
          <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ATOM" title="Продать"
                                                    target="_blank">0.0005019200</a></td>
          <td>0.07</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="bittrex_kraken" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Bittrex</td>
          <td>Kraken</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ALGO</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ALGO"
                                                    title="Продать" target="_blank">0.0000341400</a></td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/algo/btc"
                                                    title="Купить" target="_blank">0.0000339200</a></td>
          <td>0.65</td>
        </tr>
        <tr>
          <td>ETH-LINK</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=ETH-LINK"
                                                    title="Продать" target="_blank">0.0342828110</a></td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/link/eth"
                                                    title="Купить" target="_blank">0.0341107100</a></td>
          <td>0.50</td>
        </tr>
        <tr>
          <td>BTC-WAVES</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-WAVES"
                                                    title="Продать" target="_blank">0.0002370600</a></td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/waves/btc"
                                                    title="Купить" target="_blank">0.0002361900</a></td>
          <td>0.37</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ETH"
                                                    title="Купить" target="_blank">0.0341003984</a></td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/eth/btc"
                                                    title="Продать" target="_blank">0.0342100002</a></td>
          <td>0.32</td>
        </tr>
        <tr>
          <td>BTC-XTZ</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-XTZ"
                                                    title="Купить" target="_blank">0.0002480100</a></td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/xtz/btc"
                                                    title="Продать" target="_blank">0.0002485000</a></td>
          <td>0.20</td>
        </tr>
        <tr>
          <td>ETH-XRP</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=ETH-XRP"
                                                    title="Продать" target="_blank">0.0006855000</a></td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/xrp/eth"
                                                    title="Купить" target="_blank">0.0006845000</a></td>
          <td>0.15</td>
        </tr>
        <tr>
          <td>BTC-XLM</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-XLM"
                                                    title="Купить" target="_blank">0.0000074900</a></td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/xlm/btc"
                                                    title="Продать" target="_blank">0.0000075000</a></td>
          <td>0.13</td>
        </tr>
        <tr>
          <td>BTC-COMP</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-COMP"
                                                    title="Продать" target="_blank">0.0162448902</a></td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/comp/btc"
                                                    title="Купить" target="_blank">0.0162240006</a></td>
          <td>0.13</td>
        </tr>
        <tr>
          <td>ETH-LTC</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=ETH-LTC"
                                                    title="Продать" target="_blank">0.1381162703</a></td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/ltc/eth"
                                                    title="Купить" target="_blank">0.1379600018</a></td>
          <td>0.11</td>
        </tr>
        <tr>
          <td>ETH-GNO</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=ETH-GNO"
                                                    title="Продать" target="_blank">0.1414423734</a></td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/gno/eth"
                                                    title="Купить" target="_blank">0.1412999928</a></td>
          <td>0.10</td>
        </tr>
        <tr>
          <td>BTC-EOS</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-EOS"
                                                    title="Продать" target="_blank">0.0002855400</a></td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/eos/btc"
                                                    title="Купить" target="_blank">0.0002853000</a></td>
          <td>0.08</td>
        </tr>
        <tr>
          <td>ETH-EOS</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=ETH-EOS"
                                                    title="Продать" target="_blank">0.0083792498</a></td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/eos/eth"
                                                    title="Купить" target="_blank">0.0083740000</a></td>
          <td>0.06</td>
        </tr>
        <tr>
          <td>BTC-LINK</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-LINK"
                                                    title="Продать" target="_blank">0.0011691800</a></td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/link/btc"
                                                    title="Купить" target="_blank">0.0011686700</a></td>
          <td>0.04</td>
        </tr>
        <tr>
          <td>BTC-LTC</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-LTC"
                                                    title="Купить" target="_blank">0.0047192099</a></td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/ltc/btc"
                                                    title="Продать" target="_blank">0.0047209999</a></td>
          <td>0.04</td>
        </tr>
        <tr>
          <td>BTC-BCH</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-BCC"
                                                    title="Продать" target="_blank">0.0222979393</a></td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/bch/btc"
                                                    title="Купить" target="_blank">0.0222900007</a></td>
          <td>0.04</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="bittrex_okex" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Bittrex</td>
          <td>OKex</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ANT</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ANT"
                                                    title="Купить" target="_blank">0.0004516700</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=ant_btc"
                                                    title="Продать" target="_blank">0.0004604000</a></td>
          <td>1.93</td>
        </tr>
        <tr>
          <td>BTC-DGB</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-DGB"
                                                    title="Купить" target="_blank">0.0000022100</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=dgb_btc"
                                                    title="Продать" target="_blank">0.0000022190</a></td>
          <td>0.41</td>
        </tr>
        <tr>
          <td>BTC-MANA</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-MANA"
                                                    title="Купить" target="_blank">0.0000075300</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=mana_btc"
                                                    title="Продать" target="_blank">0.0000075600</a></td>
          <td>0.40</td>
        </tr>
        <tr>
          <td>BTC-ARDR</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ARDR"
                                                    title="Продать" target="_blank">0.0000053600</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=ardr_btc"
                                                    title="Купить" target="_blank">0.0000053400</a></td>
          <td>0.37</td>
        </tr>
        <tr>
          <td>BTC-BAT</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-BAT"
                                                    title="Купить" target="_blank">0.0000244600</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bat_btc"
                                                    title="Продать" target="_blank">0.0000245500</a></td>
          <td>0.37</td>
        </tr>
        <tr>
          <td>ETH-XRP</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=ETH-XRP"
                                                    title="Продать" target="_blank">0.0006855000</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=xrp_eth"
                                                    title="Купить" target="_blank">0.0006830000</a></td>
          <td>0.37</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ETH"
                                                    title="Купить" target="_blank">0.0341003984</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eth_btc"
                                                    title="Продать" target="_blank">0.0342199989</a></td>
          <td>0.35</td>
        </tr>
        <tr>
          <td>BTC-LINK</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-LINK"
                                                    title="Купить" target="_blank">0.0011724700</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=link_btc"
                                                    title="Продать" target="_blank">0.0011760000</a></td>
          <td>0.30</td>
        </tr>
        <tr>
          <td>BTC-ZRX</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ZRX"
                                                    title="Купить" target="_blank">0.0000444800</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=zrx_btc"
                                                    title="Продать" target="_blank">0.0000446100</a></td>
          <td>0.29</td>
        </tr>
        <tr>
          <td>BTC-CELO</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-CELO"
                                                    title="Продать" target="_blank">0.0003319900</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=celo_btc"
                                                    title="Купить" target="_blank">0.0003311000</a></td>
          <td>0.27</td>
        </tr>
        <tr>
          <td>BTC-GNT</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-GNT"
                                                    title="Продать" target="_blank">0.0000108300</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=gnt_btc"
                                                    title="Купить" target="_blank">0.0000108100</a></td>
          <td>0.19</td>
        </tr>
        <tr>
          <td>BTC-XLM</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-XLM"
                                                    title="Купить" target="_blank">0.0000074900</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=xlm_btc"
                                                    title="Продать" target="_blank">0.0000075000</a></td>
          <td>0.13</td>
        </tr>
        <tr>
          <td>BTC-BCH</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-BCC"
                                                    title="Купить" target="_blank">0.0223468095</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bch_btc"
                                                    title="Продать" target="_blank">0.0223699994</a></td>
          <td>0.10</td>
        </tr>
        <tr>
          <td>BTC-LTC</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-LTC"
                                                    title="Купить" target="_blank">0.0047192099</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=ltc_btc"
                                                    title="Продать" target="_blank">0.0047229999</a></td>
          <td>0.08</td>
        </tr>
        <tr>
          <td>BTC-CRO</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-CRO"
                                                    title="Продать" target="_blank">0.0000147700</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=cro_btc"
                                                    title="Купить" target="_blank">0.0000147600</a></td>
          <td>0.07</td>
        </tr>
        <tr>
          <td>BTC-ATOM</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ATOM"
                                                    title="Купить" target="_blank">0.0005015700</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=atom_btc"
                                                    title="Продать" target="_blank">0.0005018200</a></td>
          <td>0.05</td>
        </tr>
        <tr>
          <td>BTC-COMP</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-COMP"
                                                    title="Купить" target="_blank">0.0163236596</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=comp_btc"
                                                    title="Продать" target="_blank">0.0163300000</a></td>
          <td>0.04</td>
        </tr>
        <tr>
          <td>BTC-EOS</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-EOS"
                                                    title="Купить" target="_blank">0.0002863200</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eos_btc"
                                                    title="Продать" target="_blank">0.0002864000</a></td>
          <td>0.03</td>
        </tr>
        <tr>
          <td>BTC-WAVES</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-WAVES"
                                                    title="Продать" target="_blank">0.0002370600</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=waves_btc"
                                                    title="Купить" target="_blank">0.0002370000</a></td>
          <td>0.03</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="bittrex_gateio" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Bittrex</td>
          <td>Gate.io</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ETH"
                                                    title="Купить" target="_blank">0.0341003984</a></td>
          <td style="background-color: #FF6666;"><a href="https://gate.io/trade/eth_btc" title="Продать"
                                                    target="_blank">0.0342009999</a></td>
          <td>0.30</td>
        </tr>
        <tr>
          <td>BTC-XEM</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-XEM"
                                                    title="Продать" target="_blank">0.0000120100</a></td>
          <td style="background-color: #00FF00;"><a href="https://gate.io/trade/xem_btc" title="Купить" target="_blank">0.0000119820</a>
          </td>
          <td>0.23</td>
        </tr>
        <tr>
          <td>ETH-EOS</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=ETH-EOS"
                                                    title="Продать" target="_blank">0.0083792498</a></td>
          <td style="background-color: #00FF00;"><a href="https://gate.io/trade/eos_eth" title="Купить" target="_blank">0.0083670001</a>
          </td>
          <td>0.15</td>
        </tr>
        <tr>
          <td>ETH-TRX</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=ETH-TRX"
                                                    title="Продать" target="_blank">0.0000896200</a></td>
          <td style="background-color: #00FF00;"><a href="https://gate.io/trade/trx_eth" title="Купить" target="_blank">0.0000895300</a>
          </td>
          <td>0.10</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="bittrex_bitz" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Bittrex</td>
          <td>Bit-Z</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ETH"
                                                    title="Купить" target="_blank">0.0341003984</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.bit-z.com/exchange/eth_btc" title="Продать"
                                                    target="_blank">0.0341989808</a></td>
          <td>0.29</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="bittrex_huobi" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Bittrex</td>
          <td>Huobi</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ANT</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ANT"
                                                    title="Купить" target="_blank">0.0004516700</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/ant_btc/exchange/" title="Продать"
                                                    target="_blank">0.0004633400</a></td>
          <td>2.58</td>
        </tr>
        <tr>
          <td>BTC-AKRO</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-AKRO"
                                                    title="Продать" target="_blank">0.0000026800</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/akro_btc/exchange/" title="Купить"
                                                    target="_blank">0.0000026321</a></td>
          <td>1.82</td>
        </tr>
        <tr>
          <td>BTC-ARDR</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ARDR"
                                                    title="Продать" target="_blank">0.0000053600</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/ardr_btc/exchange/" title="Купить"
                                                    target="_blank">0.0000053300</a></td>
          <td>0.56</td>
        </tr>
        <tr>
          <td>BTC-MANA</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-MANA"
                                                    title="Купить" target="_blank">0.0000075300</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/mana_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000075600</a></td>
          <td>0.40</td>
        </tr>
        <tr>
          <td>BTC-WAVES</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-WAVES"
                                                    title="Продать" target="_blank">0.0002370600</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/waves_btc/exchange/" title="Купить"
                                                    target="_blank">0.0002361600</a></td>
          <td>0.38</td>
        </tr>
        <tr>
          <td>BTC-XLM</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-XLM"
                                                    title="Купить" target="_blank">0.0000074900</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xlm_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000075100</a></td>
          <td>0.27</td>
        </tr>
        <tr>
          <td>BTC-BAT</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-BAT"
                                                    title="Купить" target="_blank">0.0000244600</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bat_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000245200</a></td>
          <td>0.25</td>
        </tr>
        <tr>
          <td>BTC-KMD</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-KMD"
                                                    title="Продать" target="_blank">0.0000600400</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/kmd_btc/exchange/" title="Купить"
                                                    target="_blank">0.0000599000</a></td>
          <td>0.23</td>
        </tr>
        <tr>
          <td>BTC-LINK</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-LINK"
                                                    title="Купить" target="_blank">0.0011724700</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/link_btc/exchange/" title="Продать"
                                                    target="_blank">0.0011750800</a></td>
          <td>0.22</td>
        </tr>
        <tr>
          <td>BTC-BCH</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-BCC"
                                                    title="Купить" target="_blank">0.0223468095</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bch_btc/exchange/" title="Продать"
                                                    target="_blank">0.0223900005</a></td>
          <td>0.19</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ETH"
                                                    title="Купить" target="_blank">0.0341003984</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/eth_btc/exchange/" title="Продать"
                                                    target="_blank">0.0341629982</a></td>
          <td>0.18</td>
        </tr>
        <tr>
          <td>BTC-CRO</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-CRO"
                                                    title="Продать" target="_blank">0.0000147700</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/cro_btc/exchange/" title="Купить"
                                                    target="_blank">0.0000147500</a></td>
          <td>0.14</td>
        </tr>
        <tr>
          <td>BTC-STEEM</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-STEEM"
                                                    title="Купить" target="_blank">0.0000168600</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/steem_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000168800</a></td>
          <td>0.12</td>
        </tr>
        <tr>
          <td>BTC-GNT</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-GNT"
                                                    title="Продать" target="_blank">0.0000108300</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/gnt_btc/exchange/" title="Купить"
                                                    target="_blank">0.0000108200</a></td>
          <td>0.09</td>
        </tr>
        <tr>
          <td>BTC-ZRX</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ZRX"
                                                    title="Купить" target="_blank">0.0000444800</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/zrx_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000445200</a></td>
          <td>0.09</td>
        </tr>
        <tr>
          <td>BTC-LTC</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-LTC"
                                                    title="Купить" target="_blank">0.0047192099</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/ltc_btc/exchange/" title="Продать"
                                                    target="_blank">0.0047220001</a></td>
          <td>0.06</td>
        </tr>
        <tr>
          <td>BTC-XMR</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-XMR"
                                                    title="Купить" target="_blank">0.0078362497</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xmr_btc/exchange/" title="Продать"
                                                    target="_blank">0.0078379996</a></td>
          <td>0.02</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="bittrex_coinex" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Bittrex</td>
          <td>Coinex</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ZIL</td>
          <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ZIL"
                                                    title="Купить" target="_blank">0.0000015000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=zil"
                                                    title="Продать" target="_blank">0.0000015180</a></td>
          <td>1.20</td>
        </tr>
        <tr>
          <td>BTC-BCH</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-BCC"
                                                    title="Продать" target="_blank">0.0222979393</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=bch"
                                                    title="Купить" target="_blank">0.0222842395</a></td>
          <td>0.06</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="bittrex_bibox" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Bittrex</td>
          <td>Bibox</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-UQC</td>
          <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-UQC"
                                                    title="Продать" target="_blank">0.0002600000</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=UQC_BTC"
                                                    title="Купить" target="_blank">0.0002588400</a></td>
          <td>0.45</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="poloniex_hitbtc" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Poloniex</td>
          <td>HitBTC</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-LINK</td>
          <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_LINK" title="Продать"
                                                    target="_blank">0.0011710600</a></td>
          <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/LINK-to-BTC" title="Купить"
                                                    target="_blank">0.0011708500</a></td>
          <td>0.02</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="poloniex_kucoin" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Poloniex</td>
          <td>Kucoin</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-TRX</td>
          <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_TRX" title="Продать"
                                                    target="_blank">0.0000030700</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/TRX-BTC" title="Купить"
                                                    target="_blank">0.0000030440</a></td>
          <td>0.85</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ETH" title="Продать"
                                                    target="_blank">0.0341893099</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETH-BTC" title="Купить"
                                                    target="_blank">0.0340300016</a></td>
          <td>0.47</td>
        </tr>
        <tr>
          <td>BTC-ATOM</td>
          <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ATOM" title="Продать"
                                                    target="_blank">0.0005019200</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ATOM-BTC" title="Купить"
                                                    target="_blank">0.0004998600</a></td>
          <td>0.41</td>
        </tr>
        <tr>
          <td>BTC-BCHABC</td>
          <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_BCHABC" title="Продать"
                                                    target="_blank">0.0223890301</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/BCHABC-BTC" title="Купить"
                                                    target="_blank">0.0223319996</a></td>
          <td>0.26</td>
        </tr>
        <tr>
          <td>BTC-LTC</td>
          <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_LTC" title="Продать"
                                                    target="_blank">0.0047238902</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/LTC-BTC" title="Купить"
                                                    target="_blank">0.0047129998</a></td>
          <td>0.23</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="poloniex_livecoin" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Poloniex</td>
          <td>Livecoin</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ETH" title="Продать"
                                                    target="_blank">0.0341893099</a></td>
          <td style="background-color: #00FF00;"><a
              href="https://www.livecoin.net/ru/trade/index?currencyPair=ETH%2FBTC" title="Купить" target="_blank">0.0341479890</a>
          </td>
          <td>0.12</td>
        </tr>
        <tr>
          <td>BTC-XRP</td>
          <td style="background-color: #00FF00;"><a href="https://poloniex.com/exchange#BTC_XRP" title="Купить"
                                                    target="_blank">0.0000233900</a></td>
          <td style="background-color: #FF6666;"><a
              href="https://www.livecoin.net/ru/trade/index?currencyPair=XRP%2FBTC" title="Продать" target="_blank">0.0000234000</a>
          </td>
          <td>0.04</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="poloniex_kraken" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Poloniex</td>
          <td>Kraken</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ATOM</td>
          <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ATOM" title="Продать"
                                                    target="_blank">0.0005019200</a></td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/atom/btc"
                                                    title="Купить" target="_blank">0.0004977000</a></td>
          <td>0.85</td>
        </tr>
        <tr>
          <td>BTC-LINK</td>
          <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_LINK" title="Продать"
                                                    target="_blank">0.0011710600</a></td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/link/btc"
                                                    title="Купить" target="_blank">0.0011686700</a></td>
          <td>0.20</td>
        </tr>
        <tr>
          <td>BTC-TRX</td>
          <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_TRX" title="Продать"
                                                    target="_blank">0.0000030700</a></td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/trx/btc"
                                                    title="Купить" target="_blank">0.0000030644</a></td>
          <td>0.18</td>
        </tr>
        <tr>
          <td>BTC-LTC</td>
          <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_LTC" title="Продать"
                                                    target="_blank">0.0047238902</a></td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/ltc/btc"
                                                    title="Купить" target="_blank">0.0047229999</a></td>
          <td>0.02</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="poloniex_okex" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Poloniex</td>
          <td>OKex</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-TRX</td>
          <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_TRX" title="Продать"
                                                    target="_blank">0.0000030700</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=trx_btc"
                                                    title="Купить" target="_blank">0.0000030670</a></td>
          <td>0.10</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="poloniex_gateio" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Poloniex</td>
          <td>Gate.io</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="poloniex_bitz" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Poloniex</td>
          <td>Bit-Z</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="poloniex_huobi" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Poloniex</td>
          <td>Huobi</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-XEM</td>
          <td style="background-color: #00FF00;"><a href="https://poloniex.com/exchange#BTC_XEM" title="Купить"
                                                    target="_blank">0.0000119900</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xem_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000120500</a></td>
          <td>0.50</td>
        </tr>
        <tr>
          <td>BTC-TRX</td>
          <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_TRX" title="Продать"
                                                    target="_blank">0.0000030700</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/trx_btc/exchange/" title="Купить"
                                                    target="_blank">0.0000030593</a></td>
          <td>0.35</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ETH" title="Продать"
                                                    target="_blank">0.0341893099</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/eth_btc/exchange/" title="Купить"
                                                    target="_blank">0.0341680013</a></td>
          <td>0.06</td>
        </tr>
        <tr>
          <td>BTC-ATOM</td>
          <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ATOM" title="Продать"
                                                    target="_blank">0.0005019200</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/atom_btc/exchange/" title="Купить"
                                                    target="_blank">0.0005017800</a></td>
          <td>0.03</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="poloniex_coinex" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Poloniex</td>
          <td>Coinex</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ETH" title="Продать"
                                                    target="_blank">0.0341893099</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=eth"
                                                    title="Купить" target="_blank">0.0341499709</a></td>
          <td>0.12</td>
        </tr>
        <tr>
          <td>BTC-ATOM</td>
          <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ATOM" title="Продать"
                                                    target="_blank">0.0005019200</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=atom"
                                                    title="Купить" target="_blank">0.0005015200</a></td>
          <td>0.08</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="poloniex_bibox" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Poloniex</td>
          <td>Bibox</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ETH" title="Продать"
                                                    target="_blank">0.0341893099</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=ETH_BTC"
                                                    title="Купить" target="_blank">0.0341179296</a></td>
          <td>0.21</td>
        </tr>
        <tr>
          <td>BTC-LTC</td>
          <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_LTC" title="Продать"
                                                    target="_blank">0.0047238902</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=LTC_BTC"
                                                    title="Купить" target="_blank">0.0047187302</a></td>
          <td>0.11</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="hitbtc_kucoin" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>HitBTC</td>
          <td>Kucoin</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="hitbtc_livecoin" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>HitBTC</td>
          <td>Livecoin</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-XRP</td>
          <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/XRP-to-BTC" title="Купить"
                                                    target="_blank">0.0000233740</a></td>
          <td style="background-color: #FF6666;"><a
              href="https://www.livecoin.net/ru/trade/index?currencyPair=XRP%2FBTC" title="Продать" target="_blank">0.0000234000</a>
          </td>
          <td>0.11</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="hitbtc_kraken" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>HitBTC</td>
          <td>Kraken</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-XRP</td>
          <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/XRP-to-BTC" title="Купить"
                                                    target="_blank">0.0000233740</a></td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/xrp/btc"
                                                    title="Продать" target="_blank">0.0000233800</a></td>
          <td>0.03</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="hitbtc_okex" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>HitBTC</td>
          <td>OKex</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-LINK</td>
          <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/LINK-to-BTC" title="Купить"
                                                    target="_blank">0.0011708500</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=link_btc"
                                                    title="Продать" target="_blank">0.0011760000</a></td>
          <td>0.44</td>
        </tr>
        <tr>
          <td>BTC-ZRX</td>
          <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/ZRX-to-BTC" title="Купить"
                                                    target="_blank">0.0000445320</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=zrx_btc"
                                                    title="Продать" target="_blank">0.0000446100</a></td>
          <td>0.18</td>
        </tr>
        <tr>
          <td>ETH-OMG</td>
          <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/OMG-to-ETH" title="Купить"
                                                    target="_blank">0.0111109996</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=omg_eth"
                                                    title="Продать" target="_blank">0.0111199999</a></td>
          <td>0.08</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="hitbtc_gateio" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>HitBTC</td>
          <td>Gate.io</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="hitbtc_bitz" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>HitBTC</td>
          <td>Bit-Z</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="hitbtc_huobi" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>HitBTC</td>
          <td>Huobi</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-LINK</td>
          <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/LINK-to-BTC" title="Купить"
                                                    target="_blank">0.0011708500</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/link_btc/exchange/" title="Продать"
                                                    target="_blank">0.0011750800</a></td>
          <td>0.36</td>
        </tr>
        <tr>
          <td>BTC-ANT</td>
          <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/ANT-to-BTC" title="Купить"
                                                    target="_blank">0.0004619000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/ant_btc/exchange/" title="Продать"
                                                    target="_blank">0.0004633400</a></td>
          <td>0.31</td>
        </tr>
        <tr>
          <td>BTC-XEM</td>
          <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/XEM-to-BTC" title="Купить"
                                                    target="_blank">0.0000120140</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xem_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000120500</a></td>
          <td>0.30</td>
        </tr>
        <tr>
          <td>BTC-DASH</td>
          <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/DASH-to-BTC" title="Купить"
                                                    target="_blank">0.0068140002</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/dash_btc/exchange/" title="Продать"
                                                    target="_blank">0.0068160002</a></td>
          <td>0.03</td>
        </tr>
        <tr>
          <td>BTC-XRP</td>
          <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/XRP-to-BTC" title="Купить"
                                                    target="_blank">0.0000233740</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xrp_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000233800</a></td>
          <td>0.03</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="hitbtc_coinex" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>HitBTC</td>
          <td>Coinex</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ZIL</td>
          <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/ZIL-to-BTC" title="Купить"
                                                    target="_blank">0.0000015012</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=zil"
                                                    title="Продать" target="_blank">0.0000015180</a></td>
          <td>1.12</td>
        </tr>
        <tr>
          <td>BTC-ENJ</td>
          <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/ENJ-to-BTC" title="Купить"
                                                    target="_blank">0.0000150260</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=enj"
                                                    title="Продать" target="_blank">0.0000150300</a></td>
          <td>0.03</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="hitbtc_bibox" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>HitBTC</td>
          <td>Bibox</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="kucoin_livecoin" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Kucoin</td>
          <td>Livecoin</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="kucoin_kraken" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Kucoin</td>
          <td>Kraken</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ETC</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETC-BTC" title="Купить"
                                                    target="_blank">0.0004831000</a></td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/etc/btc"
                                                    title="Продать" target="_blank">0.0005170000</a></td>
          <td>7.02</td>
        </tr>
        <tr>
          <td>BTC-XTZ</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/XTZ-BTC" title="Купить"
                                                    target="_blank">0.0002471600</a></td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/xtz/btc"
                                                    title="Продать" target="_blank">0.0002485000</a></td>
          <td>0.54</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETH-BTC" title="Купить"
                                                    target="_blank">0.0340300016</a></td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/eth/btc"
                                                    title="Продать" target="_blank">0.0342100002</a></td>
          <td>0.53</td>
        </tr>
        <tr>
          <td>BTC-TRX</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/TRX-BTC" title="Купить"
                                                    target="_blank">0.0000030440</a></td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/trx/btc"
                                                    title="Продать" target="_blank">0.0000030538</a></td>
          <td>0.32</td>
        </tr>
        <tr>
          <td>BTC-LTC</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/LTC-BTC" title="Купить"
                                                    target="_blank">0.0047129998</a></td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/ltc/btc"
                                                    title="Продать" target="_blank">0.0047209999</a></td>
          <td>0.17</td>
        </tr>
        <tr>
          <td>BTC-XLM</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/XLM-BTC" title="Купить"
                                                    target="_blank">0.0000074900</a></td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/xlm/btc"
                                                    title="Продать" target="_blank">0.0000075000</a></td>
          <td>0.13</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="kucoin_okex" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Kucoin</td>
          <td>OKex</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ETC</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETC-BTC" title="Купить"
                                                    target="_blank">0.0004831000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=etc_btc"
                                                    title="Продать" target="_blank">0.0005041000</a></td>
          <td>4.35</td>
        </tr>
        <tr>
          <td>BTC-TRX</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/TRX-BTC" title="Купить"
                                                    target="_blank">0.0000030440</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=trx_btc"
                                                    title="Продать" target="_blank">0.0000030610</a></td>
          <td>0.56</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETH-BTC" title="Купить"
                                                    target="_blank">0.0340300016</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eth_btc"
                                                    title="Продать" target="_blank">0.0342199989</a></td>
          <td>0.56</td>
        </tr>
        <tr>
          <td>BTC-OMG</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/OMG-BTC" title="Купить"
                                                    target="_blank">0.0003792200</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=omg_btc"
                                                    title="Продать" target="_blank">0.0003808000</a></td>
          <td>0.42</td>
        </tr>
        <tr>
          <td>BTC-ATOM</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ATOM-BTC" title="Купить"
                                                    target="_blank">0.0004998600</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=atom_btc"
                                                    title="Продать" target="_blank">0.0005018200</a></td>
          <td>0.39</td>
        </tr>
        <tr>
          <td>BTC-ZRX</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ZRX-BTC" title="Купить"
                                                    target="_blank">0.0000445000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=zrx_btc"
                                                    title="Продать" target="_blank">0.0000446100</a></td>
          <td>0.25</td>
        </tr>
        <tr>
          <td>BTC-ADA</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ADA-BTC" title="Купить"
                                                    target="_blank">0.0000090900</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=ada_btc"
                                                    title="Продать" target="_blank">0.0000091100</a></td>
          <td>0.22</td>
        </tr>
        <tr>
          <td>BTC-LTC</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/LTC-BTC" title="Купить"
                                                    target="_blank">0.0047129998</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=ltc_btc"
                                                    title="Продать" target="_blank">0.0047229999</a></td>
          <td>0.21</td>
        </tr>
        <tr>
          <td>BTC-DOT</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/DOT-BTC" title="Купить"
                                                    target="_blank">0.0004626700</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=dot_btc"
                                                    title="Продать" target="_blank">0.0004635400</a></td>
          <td>0.19</td>
        </tr>
        <tr>
          <td>BTC-XTZ</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/XTZ-BTC" title="Купить"
                                                    target="_blank">0.0002471600</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=xtz_btc"
                                                    title="Продать" target="_blank">0.0002475900</a></td>
          <td>0.17</td>
        </tr>
        <tr>
          <td>BTC-LEND</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/LEND-BTC" title="Купить"
                                                    target="_blank">0.0000530800</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=lend_btc"
                                                    title="Продать" target="_blank">0.0000531600</a></td>
          <td>0.15</td>
        </tr>
        <tr>
          <td>BTC-XLM</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/XLM-BTC" title="Купить"
                                                    target="_blank">0.0000074900</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=xlm_btc"
                                                    title="Продать" target="_blank">0.0000075000</a></td>
          <td>0.13</td>
        </tr>
        <tr>
          <td>BTC-EOS</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/EOS-BTC" title="Купить"
                                                    target="_blank">0.0002860500</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eos_btc"
                                                    title="Продать" target="_blank">0.0002864000</a></td>
          <td>0.12</td>
        </tr>
        <tr>
          <td>BTC-BSV</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/BSV-BTC" title="Купить"
                                                    target="_blank">0.0160019994</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bsv_btc"
                                                    title="Продать" target="_blank">0.0160080008</a></td>
          <td>0.04</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="kucoin_gateio" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Kucoin</td>
          <td>Gate.io</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETH-BTC" title="Купить"
                                                    target="_blank">0.0340300016</a></td>
          <td style="background-color: #FF6666;"><a href="https://gate.io/trade/eth_btc" title="Продать"
                                                    target="_blank">0.0342009999</a></td>
          <td>0.50</td>
        </tr>
        <tr>
          <td>BTC-ATOM</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ATOM-BTC" title="Купить"
                                                    target="_blank">0.0004998600</a></td>
          <td style="background-color: #FF6666;"><a href="https://gate.io/trade/atom_btc" title="Продать"
                                                    target="_blank">0.0005004000</a></td>
          <td>0.11</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="kucoin_bitz" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Kucoin</td>
          <td>Bit-Z</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETH-BTC" title="Купить"
                                                    target="_blank">0.0340300016</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.bit-z.com/exchange/eth_btc" title="Продать"
                                                    target="_blank">0.0341989808</a></td>
          <td>0.50</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="kucoin_huobi" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Kucoin</td>
          <td>Huobi</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-OMG</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/OMG-BTC" title="Купить"
                                                    target="_blank">0.0003792200</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/omg_btc/exchange/" title="Продать"
                                                    target="_blank">0.0003810000</a></td>
          <td>0.47</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETH-BTC" title="Купить"
                                                    target="_blank">0.0340300016</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/eth_btc/exchange/" title="Продать"
                                                    target="_blank">0.0341629982</a></td>
          <td>0.39</td>
        </tr>
        <tr>
          <td>BTC-LEND</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/LEND-BTC" title="Купить"
                                                    target="_blank">0.0000530800</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/lend_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000532800</a></td>
          <td>0.38</td>
        </tr>
        <tr>
          <td>BTC-TRX</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/TRX-BTC" title="Купить"
                                                    target="_blank">0.0000030440</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/trx_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000030550</a></td>
          <td>0.36</td>
        </tr>
        <tr>
          <td>BTC-XLM</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/XLM-BTC" title="Купить"
                                                    target="_blank">0.0000074900</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xlm_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000075100</a></td>
          <td>0.27</td>
        </tr>
        <tr>
          <td>BTC-ATOM</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ATOM-BTC" title="Купить"
                                                    target="_blank">0.0004998600</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/atom_btc/exchange/" title="Продать"
                                                    target="_blank">0.0005011100</a></td>
          <td>0.25</td>
        </tr>
        <tr>
          <td>BTC-ALGO</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ALGO-BTC" title="Купить"
                                                    target="_blank">0.0000341300</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/algo_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000342100</a></td>
          <td>0.23</td>
        </tr>
        <tr>
          <td>BTC-XTZ</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/XTZ-BTC" title="Купить"
                                                    target="_blank">0.0002471600</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xtz_btc/exchange/" title="Продать"
                                                    target="_blank">0.0002476400</a></td>
          <td>0.19</td>
        </tr>
        <tr>
          <td>BTC-LTC</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/LTC-BTC" title="Купить"
                                                    target="_blank">0.0047129998</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/ltc_btc/exchange/" title="Продать"
                                                    target="_blank">0.0047220001</a></td>
          <td>0.19</td>
        </tr>
        <tr>
          <td>BTC-ZEC</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ZEC-BTC" title="Купить"
                                                    target="_blank">0.0055740001</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/zec_btc/exchange/" title="Продать"
                                                    target="_blank">0.0055800001</a></td>
          <td>0.11</td>
        </tr>
        <tr>
          <td>BTC-BSV</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/BSV-BTC" title="Купить"
                                                    target="_blank">0.0160019994</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bsv_btc/exchange/" title="Продать"
                                                    target="_blank">0.0160130002</a></td>
          <td>0.07</td>
        </tr>
        <tr>
          <td>BTC-ZRX</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ZRX-BTC" title="Купить"
                                                    target="_blank">0.0000445000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/zrx_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000445200</a></td>
          <td>0.04</td>
        </tr>
        <tr>
          <td>BTC-EOS</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/EOS-BTC" title="Купить"
                                                    target="_blank">0.0002860500</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/eos_btc/exchange/" title="Продать"
                                                    target="_blank">0.0002861500</a></td>
          <td>0.03</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="kucoin_coinex" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Kucoin</td>
          <td>Coinex</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ZIL</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ZIL-BTC" title="Купить"
                                                    target="_blank">0.0000015000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=zil"
                                                    title="Продать" target="_blank">0.0000015180</a></td>
          <td>1.20</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETH-BTC" title="Купить"
                                                    target="_blank">0.0340300016</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=eth"
                                                    title="Продать" target="_blank">0.0340499990</a></td>
          <td>0.06</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="kucoin_bibox" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Kucoin</td>
          <td>Bibox</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-OMG</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/OMG-BTC" title="Купить"
                                                    target="_blank">0.0003792200</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.bibox.com/exchange?coinPair=OMG_BTC"
                                                    title="Продать" target="_blank">0.0003806500</a></td>
          <td>0.38</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETH-BTC" title="Купить"
                                                    target="_blank">0.0340300016</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.bibox.com/exchange?coinPair=ETH_BTC"
                                                    title="Продать" target="_blank">0.0340986885</a></td>
          <td>0.20</td>
        </tr>
        <tr>
          <td>BTC-ONT</td>
          <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ONT-BTC" title="Купить"
                                                    target="_blank">0.0000625000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.bibox.com/exchange?coinPair=ONT_BTC"
                                                    title="Продать" target="_blank">0.0000625100</a></td>
          <td>0.02</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="livecoin_kraken" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Livecoin</td>
          <td>Kraken</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #00FF00;"><a
              href="https://www.livecoin.net/ru/trade/index?currencyPair=ETH%2FBTC" title="Купить" target="_blank">0.0341479890</a>
          </td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/eth/btc"
                                                    title="Продать" target="_blank">0.0342100002</a></td>
          <td>0.18</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="livecoin_okex" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Livecoin</td>
          <td>OKex</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #00FF00;"><a
              href="https://www.livecoin.net/ru/trade/index?currencyPair=ETH%2FBTC" title="Купить" target="_blank">0.0341479890</a>
          </td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eth_btc"
                                                    title="Продать" target="_blank">0.0342199989</a></td>
          <td>0.21</td>
        </tr>
        <tr>
          <td>BTC-XRP</td>
          <td style="background-color: #FF6666;"><a
              href="https://www.livecoin.net/ru/trade/index?currencyPair=XRP%2FBTC" title="Продать" target="_blank">0.0000234000</a>
          </td>
          <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=xrp_btc"
                                                    title="Купить" target="_blank">0.0000233800</a></td>
          <td>0.09</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="livecoin_gateio" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Livecoin</td>
          <td>Gate.io</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #00FF00;"><a
              href="https://www.livecoin.net/ru/trade/index?currencyPair=ETH%2FBTC" title="Купить" target="_blank">0.0341479890</a>
          </td>
          <td style="background-color: #FF6666;"><a href="https://gate.io/trade/eth_btc" title="Продать"
                                                    target="_blank">0.0342009999</a></td>
          <td>0.16</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="livecoin_bitz" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Livecoin</td>
          <td>Bit-Z</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #00FF00;"><a
              href="https://www.livecoin.net/ru/trade/index?currencyPair=ETH%2FBTC" title="Купить" target="_blank">0.0341479890</a>
          </td>
          <td style="background-color: #FF6666;"><a href="https://www.bit-z.com/exchange/eth_btc" title="Продать"
                                                    target="_blank">0.0341989808</a></td>
          <td>0.15</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="livecoin_huobi" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Livecoin</td>
          <td>Huobi</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-DOGE</td>
          <td style="background-color: #FF6666;"><a
              href="https://www.livecoin.net/ru/trade/index?currencyPair=DOGE%2FBTC" title="Продать" target="_blank">0.0000002700</a>
          </td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/doge_btc/exchange/" title="Купить"
                                                    target="_blank">0.0000002694</a></td>
          <td>0.22</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #00FF00;"><a
              href="https://www.livecoin.net/ru/trade/index?currencyPair=ETH%2FBTC" title="Купить" target="_blank">0.0341479890</a>
          </td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/eth_btc/exchange/" title="Продать"
                                                    target="_blank">0.0341629982</a></td>
          <td>0.04</td>
        </tr>
        <tr>
          <td>BTC-XRP</td>
          <td style="background-color: #FF6666;"><a
              href="https://www.livecoin.net/ru/trade/index?currencyPair=XRP%2FBTC" title="Продать" target="_blank">0.0000234000</a>
          </td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/xrp_btc/exchange/" title="Купить"
                                                    target="_blank">0.0000233900</a></td>
          <td>0.04</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="livecoin_coinex" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Livecoin</td>
          <td>Coinex</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="livecoin_bibox" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Livecoin</td>
          <td>Bibox</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="kraken_okex" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Kraken</td>
          <td>OKex</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-DOT</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/dot/btc"
                                                    title="Купить" target="_blank">0.0004509300</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=dot_btc"
                                                    title="Продать" target="_blank">0.0004635400</a></td>
          <td>2.80</td>
        </tr>
        <tr>
          <td>ETH-DOT</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/dot/eth"
                                                    title="Купить" target="_blank">0.0132480003</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=dot_eth"
                                                    title="Продать" target="_blank">0.0135880001</a></td>
          <td>2.57</td>
        </tr>
        <tr>
          <td>BTC-ETC</td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/etc/btc"
                                                    title="Продать" target="_blank">0.0005170000</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=etc_btc"
                                                    title="Купить" target="_blank">0.0005049000</a></td>
          <td>2.40</td>
        </tr>
        <tr>
          <td>ETH-ETC</td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/etc/eth"
                                                    title="Продать" target="_blank">0.0149149997</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=etc_eth"
                                                    title="Купить" target="_blank">0.0147599997</a></td>
          <td>1.05</td>
        </tr>
        <tr>
          <td>BTC-ATOM</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/atom/btc"
                                                    title="Купить" target="_blank">0.0004977000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=atom_btc"
                                                    title="Продать" target="_blank">0.0005018200</a></td>
          <td>0.83</td>
        </tr>
        <tr>
          <td>BTC-COMP</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/comp/btc"
                                                    title="Купить" target="_blank">0.0162240006</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=comp_btc"
                                                    title="Продать" target="_blank">0.0163300000</a></td>
          <td>0.65</td>
        </tr>
        <tr>
          <td>BTC-LINK</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/link/btc"
                                                    title="Купить" target="_blank">0.0011686700</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=link_btc"
                                                    title="Продать" target="_blank">0.0011760000</a></td>
          <td>0.63</td>
        </tr>
        <tr>
          <td>ETH-LINK</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/link/eth"
                                                    title="Купить" target="_blank">0.0341107100</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=link_eth"
                                                    title="Продать" target="_blank">0.0343099982</a></td>
          <td>0.58</td>
        </tr>
        <tr>
          <td>BTC-ALGO</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/algo/btc"
                                                    title="Купить" target="_blank">0.0000339200</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=algo_btc"
                                                    title="Продать" target="_blank">0.0000341000</a></td>
          <td>0.53</td>
        </tr>
        <tr>
          <td>BTC-QTUM</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/qtum/btc"
                                                    title="Купить" target="_blank">0.0002353000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=qtum_btc"
                                                    title="Продать" target="_blank">0.0002363000</a></td>
          <td>0.42</td>
        </tr>
        <tr>
          <td>BTC-KNC</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/knc/btc"
                                                    title="Купить" target="_blank">0.0001221000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=knc_btc"
                                                    title="Продать" target="_blank">0.0001226000</a></td>
          <td>0.41</td>
        </tr>
        <tr>
          <td>BTC-EOS</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/eos/btc"
                                                    title="Купить" target="_blank">0.0002853000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eos_btc"
                                                    title="Продать" target="_blank">0.0002864000</a></td>
          <td>0.39</td>
        </tr>
        <tr>
          <td>BTC-BCH</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/bch/btc"
                                                    title="Купить" target="_blank">0.0222900007</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bch_btc"
                                                    title="Продать" target="_blank">0.0223699994</a></td>
          <td>0.36</td>
        </tr>
        <tr>
          <td>ETH-ALGO</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/algo/eth"
                                                    title="Купить" target="_blank">0.0009955000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=algo_eth"
                                                    title="Продать" target="_blank">0.0009990000</a></td>
          <td>0.35</td>
        </tr>
        <tr>
          <td>BTC-BAT</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/bat/btc"
                                                    title="Купить" target="_blank">0.0000244700</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bat_btc"
                                                    title="Продать" target="_blank">0.0000245500</a></td>
          <td>0.33</td>
        </tr>
        <tr>
          <td>BTC-ADA</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/ada/btc"
                                                    title="Купить" target="_blank">0.0000090900</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=ada_btc"
                                                    title="Продать" target="_blank">0.0000091100</a></td>
          <td>0.22</td>
        </tr>
        <tr>
          <td>BTC-XTZ</td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/xtz/btc"
                                                    title="Продать" target="_blank">0.0002485000</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=xtz_btc"
                                                    title="Купить" target="_blank">0.0002481800</a></td>
          <td>0.13</td>
        </tr>
        <tr>
          <td>ETH-QTUM</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/qtum/eth"
                                                    title="Купить" target="_blank">0.0069017000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=qtum_eth"
                                                    title="Продать" target="_blank">0.0069100000</a></td>
          <td>0.12</td>
        </tr>
        <tr>
          <td>ETH-OMG</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/omg/eth"
                                                    title="Купить" target="_blank">0.0111099901</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=omg_eth"
                                                    title="Продать" target="_blank">0.0111199999</a></td>
          <td>0.09</td>
        </tr>
        <tr>
          <td>ETH-XRP</td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/xrp/eth"
                                                    title="Продать" target="_blank">0.0006832000</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=xrp_eth"
                                                    title="Купить" target="_blank">0.0006830000</a></td>
          <td>0.03</td>
        </tr>
        <tr>
          <td>BTC-OMG</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/omg/btc"
                                                    title="Купить" target="_blank">0.0003806910</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=omg_btc"
                                                    title="Продать" target="_blank">0.0003808000</a></td>
          <td>0.03</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="kraken_gateio" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Kraken</td>
          <td>Gate.io</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-DOT</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/dot/btc"
                                                    title="Купить" target="_blank">0.0004509300</a></td>
          <td style="background-color: #FF6666;"><a href="https://gate.io/trade/dot_btc" title="Продать"
                                                    target="_blank">0.0004567000</a></td>
          <td>1.28</td>
        </tr>
        <tr>
          <td>BTC-ATOM</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/atom/btc"
                                                    title="Купить" target="_blank">0.0004977000</a></td>
          <td style="background-color: #FF6666;"><a href="https://gate.io/trade/atom_btc" title="Продать"
                                                    target="_blank">0.0005004000</a></td>
          <td>0.54</td>
        </tr>
        <tr>
          <td>ETH-LINK</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/link/eth"
                                                    title="Купить" target="_blank">0.0341107100</a></td>
          <td style="background-color: #FF6666;"><a href="https://gate.io/trade/link_eth" title="Продать"
                                                    target="_blank">0.0341570005</a></td>
          <td>0.14</td>
        </tr>
        <tr>
          <td>BTC-BCH</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/bch/btc"
                                                    title="Купить" target="_blank">0.0222900007</a></td>
          <td style="background-color: #FF6666;"><a href="https://gate.io/trade/bch_btc" title="Продать"
                                                    target="_blank">0.0223099999</a></td>
          <td>0.09</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="kraken_bitz" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Kraken</td>
          <td>Bit-Z</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="kraken_huobi" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Kraken</td>
          <td>Huobi</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-DOT</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/dot/btc"
                                                    title="Купить" target="_blank">0.0004509300</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/dot_btc/exchange/" title="Продать"
                                                    target="_blank">0.0004621000</a></td>
          <td>2.48</td>
        </tr>
        <tr>
          <td>BTC-ALGO</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/algo/btc"
                                                    title="Купить" target="_blank">0.0000339200</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/algo_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000342100</a></td>
          <td>0.85</td>
        </tr>
        <tr>
          <td>BTC-ATOM</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/atom/btc"
                                                    title="Купить" target="_blank">0.0004977000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/atom_btc/exchange/" title="Продать"
                                                    target="_blank">0.0005011100</a></td>
          <td>0.69</td>
        </tr>
        <tr>
          <td>BTC-LINK</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/link/btc"
                                                    title="Купить" target="_blank">0.0011686700</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/link_btc/exchange/" title="Продать"
                                                    target="_blank">0.0011750800</a></td>
          <td>0.55</td>
        </tr>
        <tr>
          <td>BTC-BCH</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/bch/btc"
                                                    title="Купить" target="_blank">0.0222900007</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bch_btc/exchange/" title="Продать"
                                                    target="_blank">0.0223900005</a></td>
          <td>0.45</td>
        </tr>
        <tr>
          <td>BTC-ICX</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/icx/btc"
                                                    title="Купить" target="_blank">0.0000410800</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/icx_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000412300</a></td>
          <td>0.37</td>
        </tr>
        <tr>
          <td>BTC-COMP</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/comp/btc"
                                                    title="Купить" target="_blank">0.0162240006</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/comp_btc/exchange/" title="Продать"
                                                    target="_blank">0.0162829999</a></td>
          <td>0.36</td>
        </tr>
        <tr>
          <td>BTC-EOS</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/eos/btc"
                                                    title="Купить" target="_blank">0.0002853000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/eos_btc/exchange/" title="Продать"
                                                    target="_blank">0.0002861500</a></td>
          <td>0.30</td>
        </tr>
        <tr>
          <td>BTC-QTUM</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/qtum/btc"
                                                    title="Купить" target="_blank">0.0002353000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/qtum_btc/exchange/" title="Продать"
                                                    target="_blank">0.0002360000</a></td>
          <td>0.30</td>
        </tr>
        <tr>
          <td>BTC-BAT</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/bat/btc"
                                                    title="Купить" target="_blank">0.0000244700</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bat_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000245200</a></td>
          <td>0.20</td>
        </tr>
        <tr>
          <td>BTC-MLN</td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/mln/btc"
                                                    title="Продать" target="_blank">0.0041089999</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/mln_btc/exchange/" title="Купить"
                                                    target="_blank">0.0041009998</a></td>
          <td>0.20</td>
        </tr>
        <tr>
          <td>BTC-XTZ</td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/xtz/btc"
                                                    title="Продать" target="_blank">0.0002485000</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/xtz_btc/exchange/" title="Купить"
                                                    target="_blank">0.0002481600</a></td>
          <td>0.14</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/eth/btc"
                                                    title="Продать" target="_blank">0.0342100002</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/eth_btc/exchange/" title="Купить"
                                                    target="_blank">0.0341680013</a></td>
          <td>0.12</td>
        </tr>
        <tr>
          <td>BTC-OMG</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/omg/btc"
                                                    title="Купить" target="_blank">0.0003806910</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/omg_btc/exchange/" title="Продать"
                                                    target="_blank">0.0003810000</a></td>
          <td>0.08</td>
        </tr>
        <tr>
          <td>BTC-KNC</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/knc/btc"
                                                    title="Купить" target="_blank">0.0001221000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/knc_btc/exchange/" title="Продать"
                                                    target="_blank">0.0001221900</a></td>
          <td>0.07</td>
        </tr>
        <tr>
          <td>BTC-XMR</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/xmr/btc"
                                                    title="Купить" target="_blank">0.0078330003</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xmr_btc/exchange/" title="Продать"
                                                    target="_blank">0.0078379996</a></td>
          <td>0.06</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="kraken_coinex" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Kraken</td>
          <td>Coinex</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-REP</td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/rep/btc"
                                                    title="Продать" target="_blank">0.0016410000</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=rep"
                                                    title="Купить" target="_blank">0.0015190000</a></td>
          <td>8.03</td>
        </tr>
        <tr>
          <td>ETH-REP</td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/rep/eth"
                                                    title="Продать" target="_blank">0.0478300005</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=eth&amp;dest=rep"
                                                    title="Купить" target="_blank">0.0446400009</a></td>
          <td>7.15</td>
        </tr>
        <tr>
          <td>BTC-ETC</td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/etc/btc"
                                                    title="Продать" target="_blank">0.0005170000</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=etc"
                                                    title="Купить" target="_blank">0.0004939900</a></td>
          <td>4.66</td>
        </tr>
        <tr>
          <td>BTC-ALGO</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/algo/btc"
                                                    title="Купить" target="_blank">0.0000339200</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=algo"
                                                    title="Продать" target="_blank">0.0000340802</a></td>
          <td>0.47</td>
        </tr>
        <tr>
          <td>ETH-LINK</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/link/eth"
                                                    title="Купить" target="_blank">0.0341107100</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=eth&amp;dest=link"
                                                    title="Продать" target="_blank">0.0341962501</a></td>
          <td>0.25</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/eth/btc"
                                                    title="Продать" target="_blank">0.0342100002</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=eth"
                                                    title="Купить" target="_blank">0.0341499709</a></td>
          <td>0.18</td>
        </tr>
        <tr>
          <td>BTC-EOS</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/eos/btc"
                                                    title="Купить" target="_blank">0.0002853000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=eos"
                                                    title="Продать" target="_blank">0.0002855900</a></td>
          <td>0.10</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="kraken_bibox" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Kraken</td>
          <td>Bibox</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-REP</td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/rep/btc"
                                                    title="Продать" target="_blank">0.0016410000</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=REP_BTC"
                                                    title="Купить" target="_blank">0.0015161900</a></td>
          <td>8.23</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/eth/btc"
                                                    title="Продать" target="_blank">0.0342100002</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=ETH_BTC"
                                                    title="Купить" target="_blank">0.0341179296</a></td>
          <td>0.27</td>
        </tr>
        <tr>
          <td>BTC-QTUM</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/qtum/btc"
                                                    title="Купить" target="_blank">0.0002353000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.bibox.com/exchange?coinPair=QTUM_BTC"
                                                    title="Продать" target="_blank">0.0002358900</a></td>
          <td>0.25</td>
        </tr>
        <tr>
          <td>BTC-EOS</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/eos/btc"
                                                    title="Купить" target="_blank">0.0002853000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.bibox.com/exchange?coinPair=EOS_BTC"
                                                    title="Продать" target="_blank">0.0002859300</a></td>
          <td>0.22</td>
        </tr>
        <tr>
          <td>BTC-BCH</td>
          <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/bch/btc"
                                                    title="Купить" target="_blank">0.0222900007</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.bibox.com/exchange?coinPair=BCH_BTC"
                                                    title="Продать" target="_blank">0.0223107599</a></td>
          <td>0.09</td>
        </tr>
        <tr>
          <td>BTC-LTC</td>
          <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/ltc/btc"
                                                    title="Продать" target="_blank">0.0047209999</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=LTC_BTC"
                                                    title="Купить" target="_blank">0.0047187302</a></td>
          <td>0.05</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="okex_gateio" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>OKex</td>
          <td>Gate.io</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-DOT</td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=dot_btc"
                                                    title="Продать" target="_blank">0.0004635400</a></td>
          <td style="background-color: #00FF00;"><a href="https://gate.io/trade/dot_btc" title="Купить" target="_blank">0.0004625000</a>
          </td>
          <td>0.22</td>
        </tr>
        <tr>
          <td>BTC-EOS</td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eos_btc"
                                                    title="Продать" target="_blank">0.0002864000</a></td>
          <td style="background-color: #00FF00;"><a href="https://gate.io/trade/eos_btc" title="Купить" target="_blank">0.0002861000</a>
          </td>
          <td>0.10</td>
        </tr>
        <tr>
          <td>BTC-BCH</td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bch_btc"
                                                    title="Продать" target="_blank">0.0223699994</a></td>
          <td style="background-color: #00FF00;"><a href="https://gate.io/trade/bch_btc" title="Купить" target="_blank">0.0223600008</a>
          </td>
          <td>0.04</td>
        </tr>
        <tr>
          <td>ETH-EOS</td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eos_eth"
                                                    title="Продать" target="_blank">0.0083699999</a></td>
          <td style="background-color: #00FF00;"><a href="https://gate.io/trade/eos_eth" title="Купить" target="_blank">0.0083670001</a>
          </td>
          <td>0.04</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="okex_bitz" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>OKex</td>
          <td>Bit-Z</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="okex_huobi" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>OKex</td>
          <td>Huobi</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ICX</td>
          <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=icx_btc"
                                                    title="Купить" target="_blank">0.0000411000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/icx_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000412300</a></td>
          <td>0.32</td>
        </tr>
        <tr>
          <td>BTC-XEM</td>
          <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=xem_btc"
                                                    title="Купить" target="_blank">0.0000120200</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xem_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000120500</a></td>
          <td>0.25</td>
        </tr>
        <tr>
          <td>BTC-KNC</td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=knc_btc"
                                                    title="Продать" target="_blank">0.0001226000</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/knc_btc/exchange/" title="Купить"
                                                    target="_blank">0.0001223900</a></td>
          <td>0.17</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eth_btc"
                                                    title="Продать" target="_blank">0.0342199989</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/eth_btc/exchange/" title="Купить"
                                                    target="_blank">0.0341680013</a></td>
          <td>0.15</td>
        </tr>
        <tr>
          <td>BTC-EGT</td>
          <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=egt_btc"
                                                    title="Купить" target="_blank">0.0000000890</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/egt_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000000891</a></td>
          <td>0.11</td>
        </tr>
        <tr>
          <td>BTC-WTC</td>
          <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=wtc_btc"
                                                    title="Купить" target="_blank">0.0000462000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/wtc_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000462300</a></td>
          <td>0.06</td>
        </tr>
        <tr>
          <td>BTC-EOS</td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eos_btc"
                                                    title="Продать" target="_blank">0.0002864000</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/eos_btc/exchange/" title="Купить"
                                                    target="_blank">0.0002862200</a></td>
          <td>0.06</td>
        </tr>
        <tr>
          <td>BTC-TRX</td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=trx_btc"
                                                    title="Продать" target="_blank">0.0000030610</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/trx_btc/exchange/" title="Купить"
                                                    target="_blank">0.0000030593</a></td>
          <td>0.06</td>
        </tr>
        <tr>
          <td>BTC-XMR</td>
          <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=xmr_btc"
                                                    title="Купить" target="_blank">0.0078360001</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xmr_btc/exchange/" title="Продать"
                                                    target="_blank">0.0078379996</a></td>
          <td>0.03</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="okex_coinex" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>OKex</td>
          <td>Coinex</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ETC</td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=etc_btc"
                                                    title="Продать" target="_blank">0.0005041000</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=etc"
                                                    title="Купить" target="_blank">0.0004939900</a></td>
          <td>2.05</td>
        </tr>
        <tr>
          <td>BTC-ZIL</td>
          <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=zil_btc"
                                                    title="Купить" target="_blank">0.0000015070</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=zil"
                                                    title="Продать" target="_blank">0.0000015180</a></td>
          <td>0.73</td>
        </tr>
        <tr>
          <td>BTC-LRC</td>
          <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=lrc_btc"
                                                    title="Купить" target="_blank">0.0000176100</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=lrc"
                                                    title="Продать" target="_blank">0.0000177300</a></td>
          <td>0.68</td>
        </tr>
        <tr>
          <td>BTC-IOTA</td>
          <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=iota_btc"
                                                    title="Купить" target="_blank">0.0000276000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=iota"
                                                    title="Продать" target="_blank">0.0000277670</a></td>
          <td>0.61</td>
        </tr>
        <tr>
          <td>ETH-LRC</td>
          <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=lrc_eth"
                                                    title="Купить" target="_blank">0.0005150000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=eth&amp;dest=lrc"
                                                    title="Продать" target="_blank">0.0005181000</a></td>
          <td>0.60</td>
        </tr>
        <tr>
          <td>BTC-BCH</td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bch_btc"
                                                    title="Продать" target="_blank">0.0223699994</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=bch"
                                                    title="Купить" target="_blank">0.0222842395</a></td>
          <td>0.38</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eth_btc"
                                                    title="Продать" target="_blank">0.0342199989</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=eth"
                                                    title="Купить" target="_blank">0.0341499709</a></td>
          <td>0.21</td>
        </tr>
        <tr>
          <td>BTC-LINK</td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=link_btc"
                                                    title="Продать" target="_blank">0.0011760000</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=link"
                                                    title="Купить" target="_blank">0.0011741200</a></td>
          <td>0.16</td>
        </tr>
        <tr>
          <td>BTC-BAT</td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bat_btc"
                                                    title="Продать" target="_blank">0.0000245500</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=bat"
                                                    title="Купить" target="_blank">0.0000245141</a></td>
          <td>0.15</td>
        </tr>
        <tr>
          <td>BTC-ATOM</td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=atom_btc"
                                                    title="Продать" target="_blank">0.0005018200</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=atom"
                                                    title="Купить" target="_blank">0.0005015200</a></td>
          <td>0.06</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="okex_bibox" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>OKex</td>
          <td>Bibox</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eth_btc"
                                                    title="Продать" target="_blank">0.0342199989</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=ETH_BTC"
                                                    title="Купить" target="_blank">0.0341179296</a></td>
          <td>0.30</td>
        </tr>
        <tr>
          <td>BTC-BAT</td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bat_btc"
                                                    title="Продать" target="_blank">0.0000245500</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=BAT_BTC"
                                                    title="Купить" target="_blank">0.0000245000</a></td>
          <td>0.20</td>
        </tr>
        <tr>
          <td>BTC-LINK</td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=link_btc"
                                                    title="Продать" target="_blank">0.0011760000</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=LINK_BTC"
                                                    title="Купить" target="_blank">0.0011740100</a></td>
          <td>0.17</td>
        </tr>
        <tr>
          <td>BTC-BCH</td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bch_btc"
                                                    title="Продать" target="_blank">0.0223699994</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=BCH_BTC"
                                                    title="Купить" target="_blank">0.0223474503</a></td>
          <td>0.10</td>
        </tr>
        <tr>
          <td>BTC-LTC</td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=ltc_btc"
                                                    title="Продать" target="_blank">0.0047229999</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=LTC_BTC"
                                                    title="Купить" target="_blank">0.0047187302</a></td>
          <td>0.09</td>
        </tr>
        <tr>
          <td>BTC-EOS</td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eos_btc"
                                                    title="Продать" target="_blank">0.0002864000</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=EOS_BTC"
                                                    title="Купить" target="_blank">0.0002862000</a></td>
          <td>0.07</td>
        </tr>
        <tr>
          <td>BTC-BSV</td>
          <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bsv_btc"
                                                    title="Продать" target="_blank">0.0160080008</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=BSV_BTC"
                                                    title="Купить" target="_blank">0.0160063598</a></td>
          <td>0.01</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="gateio_bitz" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Gate.io</td>
          <td>Bit-Z</td>
          <td>Profit,%</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="gateio_huobi" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Gate.io</td>
          <td>Huobi</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-XEM</td>
          <td style="background-color: #00FF00;"><a href="https://gate.io/trade/xem_btc" title="Купить" target="_blank">0.0000119820</a>
          </td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xem_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000120500</a></td>
          <td>0.57</td>
        </tr>
        <tr>
          <td>BTC-BCH</td>
          <td style="background-color: #00FF00;"><a href="https://gate.io/trade/bch_btc" title="Купить" target="_blank">0.0223600008</a>
          </td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bch_btc/exchange/" title="Продать"
                                                    target="_blank">0.0223900005</a></td>
          <td>0.13</td>
        </tr>
        <tr>
          <td>BTC-GT</td>
          <td style="background-color: #FF6666;"><a href="https://gate.io/trade/gt_btc" title="Продать" target="_blank">0.0000556100</a>
          </td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/gt_btc/exchange/" title="Купить"
                                                    target="_blank">0.0000555400</a></td>
          <td>0.13</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #FF6666;"><a href="https://gate.io/trade/eth_btc" title="Продать"
                                                    target="_blank">0.0342009999</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/eth_btc/exchange/" title="Купить"
                                                    target="_blank">0.0341680013</a></td>
          <td>0.10</td>
        </tr>
        <tr>
          <td>BTC-EOS</td>
          <td style="background-color: #00FF00;"><a href="https://gate.io/trade/eos_btc" title="Купить" target="_blank">0.0002861000</a>
          </td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/eos_btc/exchange/" title="Продать"
                                                    target="_blank">0.0002861500</a></td>
          <td>0.02</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="gateio_coinex" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Gate.io</td>
          <td>Coinex</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #FF6666;"><a href="https://gate.io/trade/eth_btc" title="Продать"
                                                    target="_blank">0.0342009999</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=eth"
                                                    title="Купить" target="_blank">0.0341499709</a></td>
          <td>0.15</td>
        </tr>
        <tr>
          <td>BTC-BCH</td>
          <td style="background-color: #FF6666;"><a href="https://gate.io/trade/bch_btc" title="Продать"
                                                    target="_blank">0.0223099999</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=bch"
                                                    title="Купить" target="_blank">0.0222842395</a></td>
          <td>0.12</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="gateio_bibox" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Gate.io</td>
          <td>Bibox</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #FF6666;"><a href="https://gate.io/trade/eth_btc" title="Продать"
                                                    target="_blank">0.0342009999</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=ETH_BTC"
                                                    title="Купить" target="_blank">0.0341179296</a></td>
          <td>0.24</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="bitz_huobi" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Bit-Z</td>
          <td>Huobi</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #FF6666;"><a href="https://www.bit-z.com/exchange/eth_btc" title="Продать"
                                                    target="_blank">0.0341989808</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/eth_btc/exchange/" title="Купить"
                                                    target="_blank">0.0341680013</a></td>
          <td>0.09</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="bitz_coinex" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Bit-Z</td>
          <td>Coinex</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #FF6666;"><a href="https://www.bit-z.com/exchange/eth_btc" title="Продать"
                                                    target="_blank">0.0341989808</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=eth"
                                                    title="Купить" target="_blank">0.0341499709</a></td>
          <td>0.14</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="bitz_bibox" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Bit-Z</td>
          <td>Bibox</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #FF6666;"><a href="https://www.bit-z.com/exchange/eth_btc" title="Продать"
                                                    target="_blank">0.0341989808</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=ETH_BTC"
                                                    title="Купить" target="_blank">0.0341179296</a></td>
          <td>0.24</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="huobi_coinex" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Huobi</td>
          <td>Coinex</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-ZIL</td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/zil_btc/exchange/" title="Купить"
                                                    target="_blank">0.0000014961</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=zil"
                                                    title="Продать" target="_blank">0.0000015180</a></td>
          <td>1.46</td>
        </tr>
        <tr>
          <td>BTC-BCH</td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bch_btc/exchange/" title="Продать"
                                                    target="_blank">0.0223900005</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=bch"
                                                    title="Купить" target="_blank">0.0222842395</a></td>
          <td>0.47</td>
        </tr>
        <tr>
          <td>BTC-YFI</td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/yfi_btc/exchange/" title="Продать"
                                                    target="_blank">2.3108999729</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=yfi"
                                                    title="Купить" target="_blank">2.3010001183</a></td>
          <td>0.43</td>
        </tr>
        <tr>
          <td>BTC-LINK</td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/link_btc/exchange/" title="Продать"
                                                    target="_blank">0.0011750800</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=link"
                                                    title="Купить" target="_blank">0.0011741200</a></td>
          <td>0.08</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/eth_btc/exchange/" title="Продать"
                                                    target="_blank">0.0341629982</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=eth"
                                                    title="Купить" target="_blank">0.0341499709</a></td>
          <td>0.04</td>
        </tr>
        <tr>
          <td>BTC-BAT</td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bat_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000245200</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=bat"
                                                    title="Купить" target="_blank">0.0000245141</a></td>
          <td>0.02</td>
        </tr>
        <tr>
          <td>BTC-WAVES</td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/waves_btc/exchange/" title="Купить"
                                                    target="_blank">0.0002361600</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=waves"
                                                    title="Продать" target="_blank">0.0002362000</a></td>
          <td>0.02</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="huobi_bibox" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Huobi</td>
          <td>Bibox</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-FSN</td>
          <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/fsn_btc/exchange/" title="Купить"
                                                    target="_blank">0.0000406000</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.bibox.com/exchange?coinPair=FSN_BTC"
                                                    title="Продать" target="_blank">0.0000414600</a></td>
          <td>2.12</td>
        </tr>
        <tr>
          <td>BTC-BCH</td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bch_btc/exchange/" title="Продать"
                                                    target="_blank">0.0223900005</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=BCH_BTC"
                                                    title="Купить" target="_blank">0.0223474503</a></td>
          <td>0.19</td>
        </tr>
        <tr>
          <td>BTC-ETH</td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/eth_btc/exchange/" title="Продать"
                                                    target="_blank">0.0341629982</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=ETH_BTC"
                                                    title="Купить" target="_blank">0.0341179296</a></td>
          <td>0.13</td>
        </tr>
        <tr>
          <td>BTC-IRIS</td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/iris_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000068586</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=IRIS_BTC"
                                                    title="Купить" target="_blank">0.0000068500</a></td>
          <td>0.13</td>
        </tr>
        <tr>
          <td>BTC-LINK</td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/link_btc/exchange/" title="Продать"
                                                    target="_blank">0.0011750800</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=LINK_BTC"
                                                    title="Купить" target="_blank">0.0011740100</a></td>
          <td>0.09</td>
        </tr>
        <tr>
          <td>BTC-BAT</td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bat_btc/exchange/" title="Продать"
                                                    target="_blank">0.0000245200</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=BAT_BTC"
                                                    title="Купить" target="_blank">0.0000245000</a></td>
          <td>0.08</td>
        </tr>
        <tr>
          <td>BTC-LTC</td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/ltc_btc/exchange/" title="Продать"
                                                    target="_blank">0.0047220001</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=LTC_BTC"
                                                    title="Купить" target="_blank">0.0047187302</a></td>
          <td>0.07</td>
        </tr>
        <tr>
          <td>BTC-BSV</td>
          <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bsv_btc/exchange/" title="Продать"
                                                    target="_blank">0.0160130002</a></td>
          <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=BSV_BTC"
                                                    title="Купить" target="_blank">0.0160063598</a></td>
          <td>0.04</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="coinex_bibox" class="hidden">
      <table cellpadding="2">
        <tbody>
        <tr align="center">
          <td>Name</td>
          <td>Coinex</td>
          <td>Bibox</td>
          <td>Profit,%</td>
        </tr>
        <tr>
          <td>BTC-BCH</td>
          <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=bch"
                                                    title="Купить" target="_blank">0.0222842395</a></td>
          <td style="background-color: #FF6666;"><a href="https://www.bibox.com/exchange?coinPair=BCH_BTC"
                                                    title="Продать" target="_blank">0.0223107599</a></td>
          <td>0.12</td>
        </tr>
        </tbody>
      </table>
    </div>
    <table border="1" id="table_exchange" class="hidden" align="center">
      <thead>
      <tr>
        <th>Coin</th>
        <th>Buy Price</th>
        <th>Sell Price</th>
        <th>Profit, %</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td id="ADA_td" class="td_icon" @mouseover="signs('ADA')" @mouseout="sign_out('ADA')">
          <a id="ADA_on" class="ADA_on" @click="activate('ADA',2)">ADA</a></td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/ada/btc" title="Kraken"
                                                  target="_blank">0.0000090900</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=ada_btc" title="OKex"
                                                  target="_blank">0.0000091100</a></td>
        <td>0.22</td>
      </tr>
      <tr id="ADA1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ADA-BTC" title="Kucoin"
                                                  target="_blank">0.0000090900</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=ada_btc" title="OKex"
                                                  target="_blank">0.0000091100</a></td>
        <td>0.22</td>
      </tr>
      <tr>
        <td id="AKRO_td">
          AKRO
        </td>
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/akro_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000026321</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-AKRO"
                                                  title="Bittrex" target="_blank">0.0000026800</a></td>
        <td>1.82</td>
      </tr>
      <tr>
        <td id="ALGO_td" class="td_icon" @mouseover="signs('ALGO')" @mouseout="sign_out('ALGO')">
          <a id="ALGO_on" class="ALGO_on" @click="activate('ALGO',6)">ALGO</a></td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/algo/btc" title="Kraken"
                                                  target="_blank">0.0000339200</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/algo_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000342100</a></td>
        <td>0.85</td>
      </tr>
      <tr id="ALGO1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/algo/btc" title="Kraken"
                                                  target="_blank">0.0000339200</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ALGO"
                                                  title="Bittrex" target="_blank">0.0000341400</a></td>
        <td>0.65</td>
      </tr>
      <tr id="ALGO2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/algo/btc" title="Kraken"
                                                  target="_blank">0.0000339200</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=algo"
                                                  title="Coinex" target="_blank">0.0000340802</a></td>
        <td>0.47</td>
      </tr>
      <tr id="ALGO3" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/algo/eth" title="Kraken"
                                                  target="_blank">0.0009955000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=algo_eth" title="OKex"
                                                  target="_blank">0.0009990000</a></td>
        <td>0.35</td>
      </tr>
      <tr id="ALGO4" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ALGO-BTC" title="Kucoin"
                                                  target="_blank">0.0000341300</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/algo_btc/exchange/" title="Huobi'"
                                                  target="_blank">0.0000342100</a></td>
        <td>0.23</td>
      </tr>
      <tr id="ALGO5" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ALGO-BTC" title="Kucoin"
                                                  target="_blank">0.0000341300</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ALGO"
                                                  title="Bittrex" target="_blank">0.0000341400</a></td>
        <td>0.03</td>
      </tr>
      <tr>
        <td id="ANT_td" class="td_icon" @mouseover="signs('ANT')" @mouseout="sign_out('ANT')">
          <a id="ANT_on" class="ANT_on" @click="activate('ANT',3)">ANT</a></td>
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ANT"
                                                  title="Bittrex" target="_blank">0.0004516700</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/ant_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0004633400</a></td>
        <td>2.58</td>
      </tr>
      <tr id="ANT1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ANT"
                                                  title="Bittrex" target="_blank">0.0004516700</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=ant_btc" title="OKex"
                                                  target="_blank">0.0004604000</a></td>
        <td>1.93</td>
      </tr>
      <tr id="ANT2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/ANT-to-BTC" title="HitBTC"
                                                  target="_blank">0.0004619000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/ant_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0004633400</a></td>
        <td>0.31</td>
      </tr>
      <tr>
        <td id="ARDR_td" class="td_icon" @mouseover="signs('ARDR')" @mouseout="sign_out('ARDR')">
          <a id="ARDR_on" class="ARDR_on" @click="activate('ARDR',3)">ARDR</a></td>
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/ARDR-to-BTC" title="HitBTC"
                                                  target="_blank">0.0000053210</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ARDR"
                                                  title="Bittrex" target="_blank">0.0000053600</a></td>
        <td>0.73</td>
      </tr>
      <tr id="ARDR1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/ardr_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000053300</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ARDR"
                                                  title="Bittrex" target="_blank">0.0000053600</a></td>
        <td>0.56</td>
      </tr>
      <tr id="ARDR2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=ardr_btc" title="OKex"
                                                  target="_blank">0.0000053400</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ARDR"
                                                  title="Bittrex" target="_blank">0.0000053600</a></td>
        <td>0.37</td>
      </tr>
      <tr>
        <td id="ATOM_td" class="td_icon" @mouseover="signs('ATOM')" @mouseout="sign_out('ATOM')">
          <a id="ATOM_on" class="ATOM_on" @click="activate('ATOM',13)">ATOM</a></td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/atom/btc" title="Kraken"
                                                  target="_blank">0.0004977000</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ATOM" title="Poloniex"
                                                  target="_blank">0.0005019200</a></td>
        <td>0.85</td>
      </tr>
      <tr id="ATOM1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/atom/btc" title="Kraken"
                                                  target="_blank">0.0004977000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=atom_btc" title="OKex"
                                                  target="_blank">0.0005018200</a></td>
        <td>0.83</td>
      </tr>
      <tr id="ATOM2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/atom/btc" title="Kraken"
                                                  target="_blank">0.0004977000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/atom_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0005011100</a></td>
        <td>0.69</td>
      </tr>
      <tr id="ATOM3" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/atom/btc" title="Kraken"
                                                  target="_blank">0.0004977000</a></td>
        <td style="background-color: #FF6666;"><a href="https://Gate.io/trade/atom_btc" title="Gate.io" target="_blank">0.0005004000</a>
        </td>
        <td>0.54</td>
      </tr>
      <tr id="ATOM4" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ATOM-BTC" title="Kucoin"
                                                  target="_blank">0.0004998600</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ATOM" title="Poloniex"
                                                  target="_blank">0.0005019200</a></td>
        <td>0.41</td>
      </tr>
      <tr id="ATOM5" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ATOM-BTC" title="Kucoin"
                                                  target="_blank">0.0004998600</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=atom_btc" title="OKex"
                                                  target="_blank">0.0005018200</a></td>
        <td>0.39</td>
      </tr>
      <tr id="ATOM6" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ATOM-BTC" title="Kucoin"
                                                  target="_blank">0.0004998600</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/atom_btc/exchange/" title="Huobi'"
                                                  target="_blank">0.0005011100</a></td>
        <td>0.25</td>
      </tr>
      <tr id="ATOM7" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ATOM-BTC" title="Kucoin"
                                                  target="_blank">0.0004998600</a></td>
        <td style="background-color: #FF6666;"><a href="https://Gate.io/trade/atom_btc" title="Gate.io" target="_blank">0.0005004000</a>
        </td>
        <td>0.11</td>
      </tr>
      <tr id="ATOM8" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=atom"
                                                  title="Coinex" target="_blank">0.0005015200</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ATOM" title="Poloniex"
                                                  target="_blank">0.0005019200</a></td>
        <td>0.08</td>
      </tr>
      <tr id="ATOM9" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ATOM"
                                                  title="Bittrex" target="_blank">0.0005015700</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ATOM" title="Poloniex"
                                                  target="_blank">0.0005019200</a></td>
        <td>0.07</td>
      </tr>
      <tr id="ATOM10" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=atom"
                                                  title="Coinex" target="_blank">0.0005015200</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=atom_btc" title="OKex"
                                                  target="_blank">0.0005018200</a></td>
        <td>0.06</td>
      </tr>
      <tr id="ATOM11" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ATOM"
                                                  title="Bittrex" target="_blank">0.0005015700</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=atom_btc" title="OKex"
                                                  target="_blank">0.0005018200</a></td>
        <td>0.05</td>
      </tr>
      <tr id="ATOM12" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/atom_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0005017800</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ATOM" title="Poloniex"
                                                  target="_blank">0.0005019200</a></td>
        <td>0.03</td>
      </tr>
      <tr>
        <td id="BAT_td" class="td_icon" @mouseover="signs('BAT')" @mouseout="sign_out('BAT')">
          <a id="BAT_on" class="BAT_on" @click="activate('BAT',8)">BAT</a></td>
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-BAT"
                                                  title="Bittrex" target="_blank">0.0000244600</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bat_btc" title="OKex"
                                                  target="_blank">0.0000245500</a></td>
        <td>0.37</td>
      </tr>
      <tr id="BAT1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/bat/btc" title="Kraken"
                                                  target="_blank">0.0000244700</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bat_btc" title="OKex"
                                                  target="_blank">0.0000245500</a></td>
        <td>0.33</td>
      </tr>
      <tr id="BAT2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-BAT"
                                                  title="Bittrex" target="_blank">0.0000244600</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bat_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000245200</a></td>
        <td>0.25</td>
      </tr>
      <tr id="BAT3" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/bat/btc" title="Kraken"
                                                  target="_blank">0.0000244700</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bat_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000245200</a></td>
        <td>0.20</td>
      </tr>
      <tr id="BAT4" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=BAT_BTC" title="Bibox"
                                                  target="_blank">0.0000245000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bat_btc" title="OKex"
                                                  target="_blank">0.0000245500</a></td>
        <td>0.20</td>
      </tr>
      <tr id="BAT5" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=bat"
                                                  title="Coinex" target="_blank">0.0000245141</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bat_btc" title="OKex"
                                                  target="_blank">0.0000245500</a></td>
        <td>0.15</td>
      </tr>
      <tr id="BAT6" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=BAT_BTC" title="Bibox"
                                                  target="_blank">0.0000245000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bat_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000245200</a></td>
        <td>0.08</td>
      </tr>
      <tr id="BAT7" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=bat"
                                                  title="Coinex" target="_blank">0.0000245141</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bat_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000245200</a></td>
        <td>0.02</td>
      </tr>
      <tr>
        <td id="BCH_td" class="td_icon" @mouseover="signs('BCH')" @mouseout="sign_out('BCH')">
          <a id="BCH_on" class="BCH_on" @click="activate('BCH',16)">BCH</a></td>
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=bch"
                                                  title="Coinex" target="_blank">0.0222842395</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bch_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0223900005</a></td>
        <td>0.47</td>
      </tr>
      <tr id="BCH1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/bch/btc" title="Kraken"
                                                  target="_blank">0.0222900007</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bch_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0223900005</a></td>
        <td>0.45</td>
      </tr>
      <tr id="BCH2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=bch"
                                                  title="Coinex" target="_blank">0.0222842395</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bch_btc" title="OKex"
                                                  target="_blank">0.0223699994</a></td>
        <td>0.38</td>
      </tr>
      <tr id="BCH3" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/bch/btc" title="Kraken"
                                                  target="_blank">0.0222900007</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bch_btc" title="OKex"
                                                  target="_blank">0.0223699994</a></td>
        <td>0.36</td>
      </tr>
      <tr id="BCH4" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-BCC"
                                                  title="Bittrex" target="_blank">0.0223468095</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bch_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0223900005</a></td>
        <td>0.19</td>
      </tr>
      <tr id="BCH5" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=BCH_BTC" title="Bibox"
                                                  target="_blank">0.0223474503</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bch_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0223900005</a></td>
        <td>0.19</td>
      </tr>
      <tr id="BCH6" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://Gate.io/trade/bch_btc" title="Gate.io" target="_blank">0.0223600008</a>
        </td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bch_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0223900005</a></td>
        <td>0.13</td>
      </tr>
      <tr id="BCH7" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=bch"
                                                  title="Coinex" target="_blank">0.0222842395</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.bibox.com/exchange?coinPair=BCH_BTC" title="Bibox"
                                                  target="_blank">0.0223107599</a></td>
        <td>0.12</td>
      </tr>
      <tr id="BCH8" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=bch"
                                                  title="Coinex" target="_blank">0.0222842395</a></td>
        <td style="background-color: #FF6666;"><a href="https://Gate.io/trade/bch_btc" title="Gate.io" target="_blank">0.0223099999</a>
        </td>
        <td>0.12</td>
      </tr>
      <tr id="BCH9" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-BCC"
                                                  title="Bittrex" target="_blank">0.0223468095</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bch_btc" title="OKex"
                                                  target="_blank">0.0223699994</a></td>
        <td>0.10</td>
      </tr>
      <tr id="BCH10" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=BCH_BTC" title="Bibox"
                                                  target="_blank">0.0223474503</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bch_btc" title="OKex"
                                                  target="_blank">0.0223699994</a></td>
        <td>0.10</td>
      </tr>
      <tr id="BCH11" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/bch/btc" title="Kraken"
                                                  target="_blank">0.0222900007</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.bibox.com/exchange?coinPair=BCH_BTC" title="Bibox"
                                                  target="_blank">0.0223107599</a></td>
        <td>0.09</td>
      </tr>
      <tr id="BCH12" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/bch/btc" title="Kraken"
                                                  target="_blank">0.0222900007</a></td>
        <td style="background-color: #FF6666;"><a href="https://Gate.io/trade/bch_btc" title="Gate.io" target="_blank">0.0223099999</a>
        </td>
        <td>0.09</td>
      </tr>
      <tr id="BCH13" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=bch"
                                                  title="Coinex" target="_blank">0.0222842395</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-BCC"
                                                  title="Bittrex" target="_blank">0.0222979393</a></td>
        <td>0.06</td>
      </tr>
      <tr id="BCH14" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://Gate.io/trade/bch_btc" title="Gate.io" target="_blank">0.0223600008</a>
        </td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bch_btc" title="Okex"
                                                  target="_blank">0.0223699994</a></td>
        <td>0.04</td>
      </tr>
      <tr id="BCH15" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/bch/btc" title="Kraken"
                                                  target="_blank">0.0222900007</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-BCC"
                                                  title="Bittrex" target="_blank">0.0222979393</a></td>
        <td>0.04</td>
      </tr>
      <tr>
        <td id="BCHABC_td">
          BCHABC
        </td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/BCHABC-BTC" title="Kucoin"
                                                  target="_blank">0.0223319996</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_BCHABC" title="Poloniex"
                                                  target="_blank">0.0223890301</a></td>
        <td>0.26</td>
      </tr>
      <tr>
        <td id="BSV_td" class="td_icon" @mouseover="signs('BSV')" @mouseout="sign_out('BSV')">
          <a id="BSV_on" class="BSV_on" @click="activate('BSV',4)">BSV</a></td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/BSV-BTC" title="Kucoin"
                                                  target="_blank">0.0160019994</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bsv_btc/exchange/" title="Huobi'"
                                                  target="_blank">0.0160130002</a></td>
        <td>0.07</td>
      </tr>
      <tr id="BSV1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=BSV_BTC" title="Bibox"
                                                  target="_blank">0.0160063598</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bsv_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0160130002</a></td>
        <td>0.04</td>
      </tr>
      <tr id="BSV2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/BSV-BTC" title="Kucoin"
                                                  target="_blank">0.0160019994</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bsv_btc" title="OKex"
                                                  target="_blank">0.0160080008</a></td>
        <td>0.04</td>
      </tr>
      <tr id="BSV3" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=BSV_BTC" title="Bibox"
                                                  target="_blank">0.0160063598</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bsv_btc" title="OKex"
                                                  target="_blank">0.0160080008</a></td>
        <td>0.01</td>
      </tr>
      <tr>
        <td id="CELO_td">
          CELO
        </td>
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=celo_btc" title="OKex"
                                                  target="_blank">0.0003311000</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-CELO"
                                                  title="Bittrex" target="_blank">0.0003319900</a></td>
        <td>0.27</td>
      </tr>
      <tr>
        <td id="COMP_td" class="td_icon" @mouseover="signs('COMP')" @mouseout="sign_out('COMP')">
          <a id="COMP_on" class="COMP_on" @click="activate('COMP',4)">COMP</a></td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/comp/btc" title="Kraken"
                                                  target="_blank">0.0162240006</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=comp_btc" title="OKex"
                                                  target="_blank">0.0163300000</a></td>
        <td>0.65</td>
      </tr>
      <tr id="COMP1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/comp/btc" title="Kraken"
                                                  target="_blank">0.0162240006</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/comp_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0162829999</a></td>
        <td>0.36</td>
      </tr>
      <tr id="COMP2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/comp/btc" title="Kraken"
                                                  target="_blank">0.0162240006</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-COMP"
                                                  title="Bittrex" target="_blank">0.0162448902</a></td>
        <td>0.13</td>
      </tr>
      <tr id="COMP3" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-COMP"
                                                  title="Bittrex" target="_blank">0.0163236596</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=comp_btc" title="OKex"
                                                  target="_blank">0.0163300000</a></td>
        <td>0.04</td>
      </tr>
      <tr>
        <td id="CRO_td" class="td_icon" @mouseover="signs('CRO')" @mouseout="sign_out('CRO')">
          <a id="CRO_on" class="CRO_on" @click="activate('CRO',2)">CRO</a></td>
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/cro_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000147500</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-CRO"
                                                  title="Bittrex" target="_blank">0.0000147700</a></td>
        <td>0.14</td>
      </tr>
      <tr id="CRO1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=cro_btc" title="OKex"
                                                  target="_blank">0.0000147600</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-CRO"
                                                  title="Bittrex" target="_blank">0.0000147700</a></td>
        <td>0.07</td>
      </tr>
      <tr>
        <td id="DASH_td">
          DASH
        </td>
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/DASH-to-BTC" title="HitBTC"
                                                  target="_blank">0.0068140002</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/dash_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0068160002</a></td>
        <td>0.03</td>
      </tr>
      <tr>
        <td id="DGB_td">
          DGB
        </td>
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-DGB"
                                                  title="Bittrex" target="_blank">0.0000022100</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=dgb_btc" title="OKex"
                                                  target="_blank">0.0000022190</a></td>
        <td>0.41</td>
      </tr>
      <tr>
        <td id="DOGE_td">
          DOGE
        </td>
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/doge_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000002694</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.livecoin.net/ru/trade/index?currencyPair=DOGE%2FBTC"
                                                  title="Livecoin" target="_blank">0.0000002700</a></td>
        <td>0.22</td>
      </tr>
      <tr>
        <td id="DOT_td" class="td_icon" @mouseover="signs('DOT')" @mouseout="sign_out('DOT')">
          <a id="DOT_on" class="DOT_on" @click="activate('DOT',5)">DOT</a></td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/dot/eth" title="Kraken"
                                                  target="_blank">0.0132480003</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=dot_eth" title="OKex"
                                                  target="_blank">0.0135880001</a></td>
        <td>2.57</td>
      </tr>
      <tr id="DOT1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/dot/btc" title="Kraken"
                                                  target="_blank">0.0004509300</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/dot_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0004621000</a></td>
        <td>2.48</td>
      </tr>
      <tr id="DOT2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/dot/btc" title="Kraken"
                                                  target="_blank">0.0004509300</a></td>
        <td style="background-color: #FF6666;"><a href="https://Gate.io/trade/dot_btc" title="Gate.io" target="_blank">0.0004567000</a>
        </td>
        <td>1.28</td>
      </tr>
      <tr id="DOT3" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://Gate.io/trade/dot_btc" title="Gate.io" target="_blank">0.0004625000</a>
        </td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=dot_btc" title="Okex"
                                                  target="_blank">0.0004635400</a></td>
        <td>0.22</td>
      </tr>
      <tr id="DOT4" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/DOT-BTC" title="Kucoin"
                                                  target="_blank">0.0004626700</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=dot_btc" title="OKex"
                                                  target="_blank">0.0004635400</a></td>
        <td>0.19</td>
      </tr>
      <tr>
        <td id="EGT_td">
          EGT
        </td>
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=egt_btc" title="OKex"
                                                  target="_blank">0.0000000890</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/egt_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000000891</a></td>
        <td>0.11</td>
      </tr>
      <tr>
        <td id="ENJ_td" class="td_icon" @mouseover="signs('ENJ')" @mouseout="sign_out('ENJ')">
          <a id="ENJ_on" class="ENJ_on" @click="activate('ENJ',3)">ENJ</a></td>
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/ENJ-to-BTC" title="HitBTC"
                                                  target="_blank">0.0000150260</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ENJ"
                                                  title="Bittrex" target="_blank">0.0000151200</a></td>
        <td>0.63</td>
      </tr>
      <tr id="ENJ1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ENJ-BTC" title="Kucoin"
                                                  target="_blank">0.0000151000</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ENJ"
                                                  title="Bittrex" target="_blank">0.0000151200</a></td>
        <td>0.13</td>
      </tr>
      <tr id="ENJ2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/ENJ-to-BTC" title="HitBTC"
                                                  target="_blank">0.0000150260</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=enj"
                                                  title="Coinex" target="_blank">0.0000150300</a></td>
        <td>0.03</td>
      </tr>
      <tr>
        <td id="EOS_td" class="td_icon" @mouseover="signs('EOS')" @mouseout="sign_out('EOS')">
          <a id="EOS_on" class="EOS_on" @click="activate('EOS',13)">EOS</a></td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/eos/btc" title="Kraken"
                                                  target="_blank">0.0002853000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eos_btc" title="OKex"
                                                  target="_blank">0.0002864000</a></td>
        <td>0.39</td>
      </tr>
      <tr id="EOS1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/eos/btc" title="Kraken"
                                                  target="_blank">0.0002853000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/eos_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0002861500</a></td>
        <td>0.30</td>
      </tr>
      <tr id="EOS2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/eos/btc" title="Kraken"
                                                  target="_blank">0.0002853000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.bibox.com/exchange?coinPair=EOS_BTC" title="Bibox"
                                                  target="_blank">0.0002859300</a></td>
        <td>0.22</td>
      </tr>
      <tr id="EOS3" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://Gate.io/trade/eos_eth" title="Gate.io" target="_blank">0.0083670001</a>
        </td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=ETH-EOS"
                                                  title="Bittrex" target="_blank">0.0083792498</a></td>
        <td>0.15</td>
      </tr>
      <tr id="EOS4" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/EOS-BTC" title="Kucoin"
                                                  target="_blank">0.0002860500</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eos_btc" title="OKex"
                                                  target="_blank">0.0002864000</a></td>
        <td>0.12</td>
      </tr>
      <tr id="EOS5" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/eos/btc" title="Kraken"
                                                  target="_blank">0.0002853000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=eos"
                                                  title="Coinex" target="_blank">0.0002855900</a></td>
        <td>0.10</td>
      </tr>
      <tr id="EOS6" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=EOS_BTC" title="Bibox"
                                                  target="_blank">0.0002862000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eos_btc" title="OKex"
                                                  target="_blank">0.0002864000</a></td>
        <td>0.07</td>
      </tr>
      <tr id="EOS7" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/eos_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0002862200</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eos_btc" title="OKex"
                                                  target="_blank">0.0002864000</a></td>
        <td>0.06</td>
      </tr>
      <tr id="EOS8" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/eos/eth" title="Kraken"
                                                  target="_blank">0.0083740000</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=ETH-EOS"
                                                  title="Bittrex" target="_blank">0.0083792498</a></td>
        <td>0.06</td>
      </tr>
      <tr id="EOS9" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://Gate.io/trade/eos_eth" title="Gate.io" target="_blank">0.0083670001</a>
        </td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eos_eth" title="Okex"
                                                  target="_blank">0.0083699999</a></td>
        <td>0.04</td>
      </tr>
      <tr id="EOS10" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/EOS-BTC" title="Kucoin"
                                                  target="_blank">0.0002860500</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/eos_btc/exchange/" title="Huobi'"
                                                  target="_blank">0.0002861500</a></td>
        <td>0.03</td>
      </tr>
      <tr id="EOS11" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-EOS"
                                                  title="Bittrex" target="_blank">0.0002863200</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eos_btc" title="OKex"
                                                  target="_blank">0.0002864000</a></td>
        <td>0.03</td>
      </tr>
      <tr id="EOS12" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://Gate.io/trade/eos_btc" title="Gate.io" target="_blank">0.0002861000</a>
        </td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/eos_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0002861500</a></td>
        <td>0.02</td>
      </tr>
      <tr>
        <td id="ETC_td" class="td_icon" @mouseover="signs('ETC')" @mouseout="sign_out('ETC')">
          <a id="ETC_on" class="ETC_on" @click="activate('ETC',5)">ETC</a></td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETC-BTC" title="Kucoin"
                                                  target="_blank">0.0004831000</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/etc/btc" title="Kraken"
                                                  target="_blank">0.0005170000</a></td>
        <td>7.02</td>
      </tr>
      <tr id="ETC1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=etc"
                                                  title="Coinex" target="_blank">0.0004939900</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/etc/btc" title="Kraken"
                                                  target="_blank">0.0005170000</a></td>
        <td>4.66</td>
      </tr>
      <tr id="ETC2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETC-BTC" title="Kucoin"
                                                  target="_blank">0.0004831000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=etc_btc" title="OKex"
                                                  target="_blank">0.0005041000</a></td>
        <td>4.35</td>
      </tr>
      <tr id="ETC3" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=etc"
                                                  title="Coinex" target="_blank">0.0004939900</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=etc_btc" title="OKex"
                                                  target="_blank">0.0005041000</a></td>
        <td>2.05</td>
      </tr>
      <tr id="ETC4" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=etc_eth" title="OKex"
                                                  target="_blank">0.0147599997</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/etc/eth" title="Kraken"
                                                  target="_blank">0.0149149997</a></td>
        <td>1.05</td>
      </tr>
      <tr>
        <td id="ETH_td" class="td_icon" @mouseover="signs('ETH')" @mouseout="sign_out('ETH')">
          <a id="ETH_on" class="ETH_on" @click="activate('ETH',38)">ETH</a></td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETH-BTC" title="Kucoin"
                                                  target="_blank">0.0340300016</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eth_btc" title="OKex"
                                                  target="_blank">0.0342199989</a></td>
        <td>0.56</td>
      </tr>
      <tr id="ETH1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETH-BTC" title="Kucoin"
                                                  target="_blank">0.0340300016</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/eth/btc" title="Kraken"
                                                  target="_blank">0.0342100002</a></td>
        <td>0.53</td>
      </tr>
      <tr id="ETH2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETH-BTC" title="Kucoin"
                                                  target="_blank">0.0340300016</a></td>
        <td style="background-color: #FF6666;"><a href="https://Gate.io/trade/eth_btc" title="Gate.io" target="_blank">0.0342009999</a>
        </td>
        <td>0.50</td>
      </tr>
      <tr id="ETH3" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETH-BTC" title="Kucoin"
                                                  target="_blank">0.0340300016</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.bit-z.com/exchange/eth_btc" title="Bit-Z"
                                                  target="_blank">0.0341989808</a></td>
        <td>0.50</td>
      </tr>
      <tr id="ETH4" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETH-BTC" title="Kucoin"
                                                  target="_blank">0.0340300016</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ETH" title="Poloniex"
                                                  target="_blank">0.0341893099</a></td>
        <td>0.47</td>
      </tr>
      <tr id="ETH5" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETH-BTC" title="Kucoin"
                                                  target="_blank">0.0340300016</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/eth_btc/exchange/" title="Huobi'"
                                                  target="_blank">0.0341629982</a></td>
        <td>0.39</td>
      </tr>
      <tr id="ETH6" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ETH"
                                                  title="Bittrex" target="_blank">0.0341003984</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eth_btc" title="OKex"
                                                  target="_blank">0.0342199989</a></td>
        <td>0.35</td>
      </tr>
      <tr id="ETH7" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ETH"
                                                  title="Bittrex" target="_blank">0.0341003984</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/eth/btc" title="Kraken"
                                                  target="_blank">0.0342100002</a></td>
        <td>0.32</td>
      </tr>
      <tr id="ETH8" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=ETH_BTC" title="Bibox"
                                                  target="_blank">0.0341179296</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eth_btc" title="OKex"
                                                  target="_blank">0.0342199989</a></td>
        <td>0.30</td>
      </tr>
      <tr id="ETH9" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ETH"
                                                  title="Bittrex" target="_blank">0.0341003984</a></td>
        <td style="background-color: #FF6666;"><a href="https://Gate.io/trade/eth_btc" title="Gate.io" target="_blank">0.0342009999</a>
        </td>
        <td>0.30</td>
      </tr>
      <tr id="ETH10" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ETH"
                                                  title="Bittrex" target="_blank">0.0341003984</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.bit-z.com/exchange/eth_btc" title="Bit-Z"
                                                  target="_blank">0.0341989808</a></td>
        <td>0.29</td>
      </tr>
      <tr id="ETH11" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=ETH_BTC" title="Bibox"
                                                  target="_blank">0.0341179296</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/eth/btc" title="Kraken"
                                                  target="_blank">0.0342100002</a></td>
        <td>0.27</td>
      </tr>
      <tr id="ETH12" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ETH"
                                                  title="Bittrex" target="_blank">0.0341003984</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ETH" title="Poloniex"
                                                  target="_blank">0.0341893099</a></td>
        <td>0.26</td>
      </tr>
      <tr id="ETH13" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=ETH_BTC" title="Bibox"
                                                  target="_blank">0.0341179296</a></td>
        <td style="background-color: #FF6666;"><a href="https://Gate.io/trade/eth_btc" title="Gate.io" target="_blank">0.0342009999</a>
        </td>
        <td>0.24</td>
      </tr>
      <tr id="ETH14" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=ETH_BTC" title="Bibox"
                                                  target="_blank">0.0341179296</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.bit-z.com/exchange/eth_btc" title="Bit-Z"
                                                  target="_blank">0.0341989808</a></td>
        <td>0.24</td>
      </tr>
      <tr id="ETH15" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.livecoin.net/ru/trade/index?currencyPair=ETH%2FBTC"
                                                  title="Livecoin" target="_blank">0.0341479890</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eth_btc" title="OKex"
                                                  target="_blank">0.0342199989</a></td>
        <td>0.21</td>
      </tr>
      <tr id="ETH16" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=ETH_BTC" title="Bibox"
                                                  target="_blank">0.0341179296</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ETH" title="Poloniex"
                                                  target="_blank">0.0341893099</a></td>
        <td>0.21</td>
      </tr>
      <tr id="ETH17" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=eth"
                                                  title="Coinex" target="_blank">0.0341499709</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eth_btc" title="OKex"
                                                  target="_blank">0.0342199989</a></td>
        <td>0.21</td>
      </tr>
      <tr id="ETH18" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETH-BTC" title="Kucoin"
                                                  target="_blank">0.0340300016</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.bibox.com/exchange?coinPair=ETH_BTC" title="Bibox'"
                                                  target="_blank">0.0340986885</a></td>
        <td>0.20</td>
      </tr>
      <tr id="ETH19" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ETH"
                                                  title="Bittrex" target="_blank">0.0341003984</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/eth_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0341629982</a></td>
        <td>0.18</td>
      </tr>
      <tr id="ETH20" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.livecoin.net/ru/trade/index?currencyPair=ETH%2FBTC"
                                                  title="Livecoin" target="_blank">0.0341479890</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/eth/btc" title="Kraken"
                                                  target="_blank">0.0342100002</a></td>
        <td>0.18</td>
      </tr>
      <tr id="ETH21" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=eth"
                                                  title="Coinex" target="_blank">0.0341499709</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/eth/btc" title="Kraken"
                                                  target="_blank">0.0342100002</a></td>
        <td>0.18</td>
      </tr>
      <tr id="ETH22" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.livecoin.net/ru/trade/index?currencyPair=ETH%2FBTC"
                                                  title="Livecoin" target="_blank">0.0341479890</a></td>
        <td style="background-color: #FF6666;"><a href="https://Gate.io/trade/eth_btc" title="Gate.io" target="_blank">0.0342009999</a>
        </td>
        <td>0.16</td>
      </tr>
      <tr id="ETH23" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/eth_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0341680013</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eth_btc" title="OKex"
                                                  target="_blank">0.0342199989</a></td>
        <td>0.15</td>
      </tr>
      <tr id="ETH24" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=eth"
                                                  title="Coinex" target="_blank">0.0341499709</a></td>
        <td style="background-color: #FF6666;"><a href="https://Gate.io/trade/eth_btc" title="Gate.io" target="_blank">0.0342009999</a>
        </td>
        <td>0.15</td>
      </tr>
      <tr id="ETH25" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.livecoin.net/ru/trade/index?currencyPair=ETH%2FBTC"
                                                  title="Livecoin" target="_blank">0.0341479890</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.bit-z.com/exchange/eth_btc" title="Bit-Z"
                                                  target="_blank">0.0341989808</a></td>
        <td>0.15</td>
      </tr>
      <tr id="ETH26" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=eth"
                                                  title="Coinex" target="_blank">0.0341499709</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.bit-z.com/exchange/eth_btc" title="Bit-Z"
                                                  target="_blank">0.0341989808</a></td>
        <td>0.14</td>
      </tr>
      <tr id="ETH27" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=ETH_BTC" title="Bibox"
                                                  target="_blank">0.0341179296</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/eth_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0341629982</a></td>
        <td>0.13</td>
      </tr>
      <tr id="ETH28" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETH-BTC" title="Kucoin"
                                                  target="_blank">0.0340300016</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ETH"
                                                  title="Bittrex" target="_blank">0.0340721197</a></td>
        <td>0.12</td>
      </tr>
      <tr id="ETH29" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/eth_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0341680013</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/eth/btc" title="Kraken"
                                                  target="_blank">0.0342100002</a></td>
        <td>0.12</td>
      </tr>
      <tr id="ETH30" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.livecoin.net/ru/trade/index?currencyPair=ETH%2FBTC"
                                                  title="Livecoin" target="_blank">0.0341479890</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ETH" title="Poloniex"
                                                  target="_blank">0.0341893099</a></td>
        <td>0.12</td>
      </tr>
      <tr id="ETH31" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=eth"
                                                  title="Coinex" target="_blank">0.0341499709</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ETH" title="Poloniex"
                                                  target="_blank">0.0341893099</a></td>
        <td>0.12</td>
      </tr>
      <tr id="ETH32" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/eth_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0341680013</a></td>
        <td style="background-color: #FF6666;"><a href="https://Gate.io/trade/eth_btc" title="Gate.io" target="_blank">0.0342009999</a>
        </td>
        <td>0.10</td>
      </tr>
      <tr id="ETH33" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/eth_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0341680013</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.bit-z.com/exchange/eth_btc" title="Bit-Z"
                                                  target="_blank">0.0341989808</a></td>
        <td>0.09</td>
      </tr>
      <tr id="ETH34" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/eth_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0341680013</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ETH" title="Poloniex"
                                                  target="_blank">0.0341893099</a></td>
        <td>0.06</td>
      </tr>
      <tr id="ETH35" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETH-BTC" title="Kucoin"
                                                  target="_blank">0.0340300016</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=eth"
                                                  title="Coinex'" target="_blank">0.0340499990</a></td>
        <td>0.06</td>
      </tr>
      <tr id="ETH36" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.livecoin.net/ru/trade/index?currencyPair=ETH%2FBTC"
                                                  title="Livecoin" target="_blank">0.0341479890</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/eth_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0341629982</a></td>
        <td>0.04</td>
      </tr>
      <tr id="ETH37" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=eth"
                                                  title="Coinex" target="_blank">0.0341499709</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/eth_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0341629982</a></td>
        <td>0.04</td>
      </tr>
      <tr>
        <td id="FSN_td">
          FSN
        </td>
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/fsn_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000406000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.bibox.com/exchange?coinPair=FSN_BTC" title="Bibox"
                                                  target="_blank">0.0000414600</a></td>
        <td>2.12</td>
      </tr>
      <tr>
        <td id="GAME_td">
          GAME
        </td>
        <td style="background-color: #00FF00;"><a href="https://www.livecoin.net/ru/trade/index?currencyPair=GAME%2FBTC"
                                                  title="Livecoin" target="_blank">0.0000064800</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-GAME"
                                                  title="Bittrex" target="_blank">0.0000068800</a></td>
        <td>6.17</td>
      </tr>
      <tr>
        <td id="GNO_td">
          GNO
        </td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/gno/eth" title="Kraken"
                                                  target="_blank">0.1412999928</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=ETH-GNO"
                                                  title="Bittrex" target="_blank">0.1414423734</a></td>
        <td>0.10</td>
      </tr>
      <tr>
        <td id="GNT_td" class="td_icon" @mouseover="signs('GNT')" @mouseout="sign_out('GNT')">
          <a id="GNT_on" class="GNT_on" @click="activate('GNT',2)">GNT</a></td>
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=gnt_btc" title="OKex"
                                                  target="_blank">0.0000108100</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-GNT"
                                                  title="Bittrex" target="_blank">0.0000108300</a></td>
        <td>0.19</td>
      </tr>
      <tr id="GNT1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/gnt_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000108200</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-GNT"
                                                  title="Bittrex" target="_blank">0.0000108300</a></td>
        <td>0.09</td>
      </tr>
      <tr>
        <td id="GT_td">
          GT
        </td>
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/gt_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000555400</a></td>
        <td style="background-color: #FF6666;"><a href="https://Gate.io/trade/gt_btc" title="Gate.io" target="_blank">0.0000556100</a>
        </td>
        <td>0.13</td>
      </tr>
      <tr>
        <td id="ICX_td" class="td_icon" @mouseover="signs('ICX')" @mouseout="sign_out('ICX')">
          <a id="ICX_on" class="ICX_on" @click="activate('ICX',2)">ICX</a></td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/icx/btc" title="Kraken"
                                                  target="_blank">0.0000410800</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/icx_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000412300</a></td>
        <td>0.37</td>
      </tr>
      <tr id="ICX1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=icx_btc" title="OKex"
                                                  target="_blank">0.0000411000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/icx_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000412300</a></td>
        <td>0.32</td>
      </tr>
      <tr>
        <td id="IOTA_td">
          IOTA
        </td>
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=iota_btc" title="OKex"
                                                  target="_blank">0.0000276000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=iota"
                                                  title="Coinex" target="_blank">0.0000277670</a></td>
        <td>0.61</td>
      </tr>
      <tr>
        <td id="IRIS_td">
          IRIS
        </td>
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=IRIS_BTC" title="Bibox"
                                                  target="_blank">0.0000068500</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/iris_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000068586</a></td>
        <td>0.13</td>
      </tr>
      <tr>
        <td id="KMD_td" class="td_icon" @mouseover="signs('KMD')" @mouseout="sign_out('KMD')">
          <a id="KMD_on" class="KMD_on" @click="activate('KMD',2)">KMD</a></td>
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/kmd_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000599000</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-KMD"
                                                  title="Bittrex" target="_blank">0.0000600400</a></td>
        <td>0.23</td>
      </tr>
      <tr id="KMD1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/KMD-to-BTC" title="HitBTC"
                                                  target="_blank">0.0000599200</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-KMD"
                                                  title="Bittrex" target="_blank">0.0000600400</a></td>
        <td>0.20</td>
      </tr>
      <tr>
        <td id="KNC_td" class="td_icon" @mouseover="signs('KNC')" @mouseout="sign_out('KNC')">
          <a id="KNC_on" class="KNC_on" @click="activate('KNC',3)">KNC</a></td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/knc/btc" title="Kraken"
                                                  target="_blank">0.0001221000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=knc_btc" title="OKex"
                                                  target="_blank">0.0001226000</a></td>
        <td>0.41</td>
      </tr>
      <tr id="KNC1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/knc_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0001223900</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=knc_btc" title="OKex"
                                                  target="_blank">0.0001226000</a></td>
        <td>0.17</td>
      </tr>
      <tr id="KNC2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/knc/btc" title="Kraken"
                                                  target="_blank">0.0001221000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/knc_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0001221900</a></td>
        <td>0.07</td>
      </tr>
      <tr>
        <td id="LEND_td" class="td_icon" @mouseover="signs('LEND')" @mouseout="sign_out('LEND')">
          <a id="LEND_on" class="LEND_on" @click="activate('LEND',2)">LEND</a></td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/LEND-BTC" title="Kucoin"
                                                  target="_blank">0.0000530800</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/lend_btc/exchange/" title="Huobi'"
                                                  target="_blank">0.0000532800</a></td>
        <td>0.38</td>
      </tr>
      <tr id="LEND1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/LEND-BTC" title="Kucoin"
                                                  target="_blank">0.0000530800</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=lend_btc" title="OKex"
                                                  target="_blank">0.0000531600</a></td>
        <td>0.15</td>
      </tr>
      <tr>
        <td id="LINK_td" class="td_icon" @mouseover="signs('LINK')" @mouseout="sign_out('LINK')">
          <a id="LINK_on" class="LINK_on" @click="activate('LINK',15)">LINK</a></td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/link/eth" title="Kraken"
                                                  target="_blank">0.0341107100</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=link_eth" title="OKex"
                                                  target="_blank">0.0343099982</a></td>
        <td>0.58</td>
      </tr>
      <tr id="LINK1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/link/btc" title="Kraken"
                                                  target="_blank">0.0011686700</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/link_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0011750800</a></td>
        <td>0.55</td>
      </tr>
      <tr id="LINK2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/LINK-to-BTC" title="HitBTC"
                                                  target="_blank">0.0011708500</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=link_btc" title="OKex"
                                                  target="_blank">0.0011760000</a></td>
        <td>0.44</td>
      </tr>
      <tr id="LINK3" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/LINK-to-BTC" title="HitBTC"
                                                  target="_blank">0.0011708500</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/link_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0011750800</a></td>
        <td>0.36</td>
      </tr>
      <tr id="LINK4" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-LINK"
                                                  title="Bittrex" target="_blank">0.0011724700</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=link_btc" title="OKex"
                                                  target="_blank">0.0011760000</a></td>
        <td>0.30</td>
      </tr>
      <tr id="LINK5" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/link/eth" title="Kraken"
                                                  target="_blank">0.0341107100</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=eth&amp;dest=link"
                                                  title="Coinex" target="_blank">0.0341962501</a></td>
        <td>0.25</td>
      </tr>
      <tr id="LINK6" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-LINK"
                                                  title="Bittrex" target="_blank">0.0011724700</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/link_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0011750800</a></td>
        <td>0.22</td>
      </tr>
      <tr id="LINK7" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/link/btc" title="Kraken"
                                                  target="_blank">0.0011686700</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_LINK" title="Poloniex"
                                                  target="_blank">0.0011710600</a></td>
        <td>0.20</td>
      </tr>
      <tr id="LINK8" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=LINK_BTC" title="Bibox"
                                                  target="_blank">0.0011740100</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=link_btc" title="OKex"
                                                  target="_blank">0.0011760000</a></td>
        <td>0.17</td>
      </tr>
      <tr id="LINK9" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=link"
                                                  title="Coinex" target="_blank">0.0011741200</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=link_btc" title="OKex"
                                                  target="_blank">0.0011760000</a></td>
        <td>0.16</td>
      </tr>
      <tr id="LINK10" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/link/eth" title="Kraken"
                                                  target="_blank">0.0341107100</a></td>
        <td style="background-color: #FF6666;"><a href="https://Gate.io/trade/link_eth" title="Gate.io" target="_blank">0.0341570005</a>
        </td>
        <td>0.14</td>
      </tr>
      <tr id="LINK11" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=LINK_BTC" title="Bibox"
                                                  target="_blank">0.0011740100</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/link_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0011750800</a></td>
        <td>0.09</td>
      </tr>
      <tr id="LINK12" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=link"
                                                  title="Coinex" target="_blank">0.0011741200</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/link_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0011750800</a></td>
        <td>0.08</td>
      </tr>
      <tr id="LINK13" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/link/btc" title="Kraken"
                                                  target="_blank">0.0011686700</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-LINK"
                                                  title="Bittrex" target="_blank">0.0011691800</a></td>
        <td>0.04</td>
      </tr>
      <tr id="LINK14" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/LINK-to-BTC" title="HitBTC"
                                                  target="_blank">0.0011708500</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_LINK" title="Poloniex"
                                                  target="_blank">0.0011710600</a></td>
        <td>0.02</td>
      </tr>
      <tr>
        <td id="LRC_td">
          LRC
        </td>
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=lrc_eth" title="OKex"
                                                  target="_blank">0.0005150000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=eth&amp;dest=lrc"
                                                  title="Coinex" target="_blank">0.0005181000</a></td>
        <td>0.60</td>
      </tr>
      <tr>
        <td id="LSK_td">
          LSK
        </td>
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/LSK-to-BTC" title="HitBTC"
                                                  target="_blank">0.0001334300</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-LSK"
                                                  title="Bittrex" target="_blank">0.0001336900</a></td>
        <td>0.19</td>
      </tr>
      <tr>
        <td id="LTC_td" class="td_icon" @mouseover="signs('LTC')" @mouseout="sign_out('LTC')">
          <a id="LTC_on" class="LTC_on" @click="activate('LTC',13)">LTC</a></td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/LTC-BTC" title="Kucoin"
                                                  target="_blank">0.0047129998</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_LTC" title="Poloniex"
                                                  target="_blank">0.0047238902</a></td>
        <td>0.23</td>
      </tr>
      <tr id="LTC1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/LTC-BTC" title="Kucoin"
                                                  target="_blank">0.0047129998</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=ltc_btc" title="OKex"
                                                  target="_blank">0.0047229999</a></td>
        <td>0.21</td>
      </tr>
      <tr id="LTC2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/LTC-BTC" title="Kucoin"
                                                  target="_blank">0.0047129998</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/ltc_btc/exchange/" title="Huobi'"
                                                  target="_blank">0.0047220001</a></td>
        <td>0.19</td>
      </tr>
      <tr id="LTC3" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/LTC-BTC" title="Kucoin"
                                                  target="_blank">0.0047129998</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/ltc/btc" title="Kraken"
                                                  target="_blank">0.0047209999</a></td>
        <td>0.17</td>
      </tr>
      <tr id="LTC4" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=LTC_BTC" title="Bibox"
                                                  target="_blank">0.0047187302</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_LTC" title="Poloniex"
                                                  target="_blank">0.0047238902</a></td>
        <td>0.11</td>
      </tr>
      <tr id="LTC5" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-LTC"
                                                  title="Bittrex" target="_blank">0.0047192099</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_LTC" title="Poloniex"
                                                  target="_blank">0.0047238902</a></td>
        <td>0.10</td>
      </tr>
      <tr id="LTC6" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=LTC_BTC" title="Bibox"
                                                  target="_blank">0.0047187302</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=ltc_btc" title="OKex"
                                                  target="_blank">0.0047229999</a></td>
        <td>0.09</td>
      </tr>
      <tr id="LTC7" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-LTC"
                                                  title="Bittrex" target="_blank">0.0047192099</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=ltc_btc" title="OKex"
                                                  target="_blank">0.0047229999</a></td>
        <td>0.08</td>
      </tr>
      <tr id="LTC8" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=LTC_BTC" title="Bibox"
                                                  target="_blank">0.0047187302</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/ltc_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0047220001</a></td>
        <td>0.07</td>
      </tr>
      <tr id="LTC9" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-LTC"
                                                  title="Bittrex" target="_blank">0.0047192099</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/ltc_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0047220001</a></td>
        <td>0.06</td>
      </tr>
      <tr id="LTC10" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=LTC_BTC" title="Bibox"
                                                  target="_blank">0.0047187302</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/ltc/btc" title="Kraken"
                                                  target="_blank">0.0047209999</a></td>
        <td>0.05</td>
      </tr>
      <tr id="LTC11" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-LTC"
                                                  title="Bittrex" target="_blank">0.0047192099</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/ltc/btc" title="Kraken"
                                                  target="_blank">0.0047209999</a></td>
        <td>0.04</td>
      </tr>
      <tr id="LTC12" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/ltc/btc" title="Kraken"
                                                  target="_blank">0.0047229999</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_LTC" title="Poloniex"
                                                  target="_blank">0.0047238902</a></td>
        <td>0.02</td>
      </tr>
      <tr>
        <td id="MANA_td" class="td_icon" @mouseover="signs('MANA')" @mouseout="sign_out('MANA')">
          <a id="MANA_on" class="MANA_on" @click="activate('MANA',2)">MANA</a></td>
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-MANA"
                                                  title="Bittrex" target="_blank">0.0000075300</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/mana_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000075600</a></td>
        <td>0.40</td>
      </tr>
      <tr id="MANA1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-MANA"
                                                  title="Bittrex" target="_blank">0.0000075300</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=mana_btc" title="OKex"
                                                  target="_blank">0.0000075600</a></td>
        <td>0.40</td>
      </tr>
      <tr>
        <td id="MLN_td">
          MLN
        </td>
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/mln_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0041009998</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/mln/btc" title="Kraken"
                                                  target="_blank">0.0041089999</a></td>
        <td>0.20</td>
      </tr>
      <tr>
        <td id="OMG_td" class="td_icon" @mouseover="signs('OMG')" @mouseout="sign_out('OMG')">
          <a id="OMG_on" class="OMG_on" @click="activate('OMG',6)">OMG</a></td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/OMG-BTC" title="Kucoin"
                                                  target="_blank">0.0003792200</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/omg_btc/exchange/" title="Huobi'"
                                                  target="_blank">0.0003810000</a></td>
        <td>0.47</td>
      </tr>
      <tr id="OMG1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/OMG-BTC" title="Kucoin"
                                                  target="_blank">0.0003792200</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=omg_btc" title="OKex"
                                                  target="_blank">0.0003808000</a></td>
        <td>0.42</td>
      </tr>
      <tr id="OMG2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/OMG-BTC" title="Kucoin"
                                                  target="_blank">0.0003792200</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.bibox.com/exchange?coinPair=OMG_BTC" title="Bibox'"
                                                  target="_blank">0.0003806500</a></td>
        <td>0.38</td>
      </tr>
      <tr id="OMG3" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/omg/btc" title="Kraken"
                                                  target="_blank">0.0003806910</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/omg_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0003810000</a></td>
        <td>0.08</td>
      </tr>
      <tr id="OMG4" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/OMG-to-ETH" title="HitBTC"
                                                  target="_blank">0.0111109996</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=omg_eth" title="OKex"
                                                  target="_blank">0.0111199999</a></td>
        <td>0.08</td>
      </tr>
      <tr id="OMG5" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/omg/btc" title="Kraken"
                                                  target="_blank">0.0003806910</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=omg_btc" title="OKex"
                                                  target="_blank">0.0003808000</a></td>
        <td>0.03</td>
      </tr>
      <tr>
        <td id="ONT_td">
          ONT
        </td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ONT-BTC" title="Kucoin"
                                                  target="_blank">0.0000625000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.bibox.com/exchange?coinPair=ONT_BTC" title="Bibox'"
                                                  target="_blank">0.0000625100</a></td>
        <td>0.02</td>
      </tr>
      <tr>
        <td id="QTUM_td" class="td_icon" @mouseover="signs('QTUM')" @mouseout="sign_out('QTUM')">
          <a id="QTUM_on" class="QTUM_on" @click="activate('QTUM',3)">QTUM</a></td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/qtum/btc" title="Kraken"
                                                  target="_blank">0.0002353000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/qtum_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0002360000</a></td>
        <td>0.30</td>
      </tr>
      <tr id="QTUM1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/qtum/btc" title="Kraken"
                                                  target="_blank">0.0002353000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.bibox.com/exchange?coinPair=QTUM_BTC" title="Bibox"
                                                  target="_blank">0.0002358900</a></td>
        <td>0.25</td>
      </tr>
      <tr id="QTUM2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/qtum/eth" title="Kraken"
                                                  target="_blank">0.0069017000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=qtum_eth" title="OKex"
                                                  target="_blank">0.0069100000</a></td>
        <td>0.12</td>
      </tr>
      <tr>
        <td id="REP_td" class="td_icon" @mouseover="signs('REP')" @mouseout="sign_out('REP')">
          <a id="REP_on" class="REP_on" @click="activate('REP',2)">REP</a></td>
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=REP_BTC" title="Bibox"
                                                  target="_blank">0.0015161900</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/rep/btc" title="Kraken"
                                                  target="_blank">0.0016410000</a></td>
        <td>8.23</td>
      </tr>
      <tr id="REP1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=eth&amp;dest=rep"
                                                  title="Coinex" target="_blank">0.0446400009</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/rep/eth" title="Kraken"
                                                  target="_blank">0.0478300005</a></td>
        <td>7.15</td>
      </tr>
      <tr>
        <td id="STEEM_td">
          STEEM
        </td>
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-STEEM"
                                                  title="Bittrex" target="_blank">0.0000168600</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/steem_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000168800</a></td>
        <td>0.12</td>
      </tr>
      <tr>
        <td id="TRX_td" class="td_icon" @mouseover="signs('TRX')" @mouseout="sign_out('TRX')">
          <a id="TRX_on" class="TRX_on" @click="activate('TRX',10)">TRX</a></td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/TRX-BTC" title="Kucoin"
                                                  target="_blank">0.0000030440</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_TRX" title="Poloniex"
                                                  target="_blank">0.0000030700</a></td>
        <td>0.85</td>
      </tr>
      <tr id="TRX1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/TRX-BTC" title="Kucoin"
                                                  target="_blank">0.0000030440</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=trx_btc" title="OKex"
                                                  target="_blank">0.0000030610</a></td>
        <td>0.56</td>
      </tr>
      <tr id="TRX2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/TRX-BTC" title="Kucoin"
                                                  target="_blank">0.0000030440</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/trx_btc/exchange/" title="Huobi'"
                                                  target="_blank">0.0000030550</a></td>
        <td>0.36</td>
      </tr>
      <tr id="TRX3" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/trx_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000030593</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_TRX" title="Poloniex"
                                                  target="_blank">0.0000030700</a></td>
        <td>0.35</td>
      </tr>
      <tr id="TRX4" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/TRX-BTC" title="Kucoin"
                                                  target="_blank">0.0000030440</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/trx/btc" title="Kraken"
                                                  target="_blank">0.0000030538</a></td>
        <td>0.32</td>
      </tr>
      <tr id="TRX5" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/TRX-BTC" title="Kucoin"
                                                  target="_blank">0.0000030440</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-TRX"
                                                  title="Bittrex" target="_blank">0.0000030500</a></td>
        <td>0.20</td>
      </tr>
      <tr id="TRX6" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/trx/btc" title="Kraken"
                                                  target="_blank">0.0000030644</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_TRX" title="Poloniex"
                                                  target="_blank">0.0000030700</a></td>
        <td>0.18</td>
      </tr>
      <tr id="TRX7" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://Gate.io/trade/trx_eth" title="Gate.io" target="_blank">0.0000895300</a>
        </td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=ETH-TRX"
                                                  title="Bittrex" target="_blank">0.0000896200</a></td>
        <td>0.10</td>
      </tr>
      <tr id="TRX8" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=trx_btc" title="OKex"
                                                  target="_blank">0.0000030670</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_TRX" title="Poloniex"
                                                  target="_blank">0.0000030700</a></td>
        <td>0.10</td>
      </tr>
      <tr id="TRX9" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/trx_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000030593</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=trx_btc" title="OKex"
                                                  target="_blank">0.0000030610</a></td>
        <td>0.06</td>
      </tr>
      <tr>
        <td id="UQC_td">
          UQC
        </td>
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=UQC_BTC" title="Bibox"
                                                  target="_blank">0.0002588400</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-UQC"
                                                  title="Bittrex" target="_blank">0.0002600000</a></td>
        <td>0.45</td>
      </tr>
      <tr>
        <td id="VID_td">
          VID
        </td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/VID-BTC" title="Kucoin"
                                                  target="_blank">0.0000067300</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-VID"
                                                  title="Bittrex" target="_blank">0.0000067500</a></td>
        <td>0.30</td>
      </tr>
      <tr>
        <td id="WAVES_td" class="td_icon" @mouseover="signs('WAVES')" @mouseout="sign_out('WAVES')">
          <a id="WAVES_on" class="WAVES_on" @click="activate('WAVES',5)">WAVES</a></td>
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/waves_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0002361600</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-WAVES"
                                                  title="Bittrex" target="_blank">0.0002370600</a></td>
        <td>0.38</td>
      </tr>
      <tr id="WAVES1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/waves/btc"
                                                  title="Kraken" target="_blank">0.0002361900</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-WAVES"
                                                  title="Bittrex" target="_blank">0.0002370600</a></td>
        <td>0.37</td>
      </tr>
      <tr id="WAVES2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/WAVES-to-BTC" title="HitBTC"
                                                  target="_blank">0.0002367900</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-WAVES"
                                                  title="Bittrex" target="_blank">0.0002370600</a></td>
        <td>0.11</td>
      </tr>
      <tr id="WAVES3" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=waves_btc" title="OKex"
                                                  target="_blank">0.0002370000</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-WAVES"
                                                  title="Bittrex" target="_blank">0.0002370600</a></td>
        <td>0.03</td>
      </tr>
      <tr id="WAVES4" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/waves_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0002361600</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=waves"
                                                  title="Coinex" target="_blank">0.0002362000</a></td>
        <td>0.02</td>
      </tr>
      <tr>
        <td id="WTC_td">
          WTC
        </td>
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=wtc_btc" title="OKex"
                                                  target="_blank">0.0000462000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/wtc_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000462300</a></td>
        <td>0.06</td>
      </tr>
      <tr>
        <td id="XEM_td" class="td_icon" @mouseover="signs('XEM')" @mouseout="sign_out('XEM')">
          <a id="XEM_on" class="XEM_on" @click="activate('XEM',7)">XEM</a></td>
        <td style="background-color: #00FF00;"><a href="https://Gate.io/trade/xem_btc" title="Gate.io" target="_blank">0.0000119820</a>
        </td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xem_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000120500</a></td>
        <td>0.57</td>
      </tr>
      <tr id="XEM1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://poloniex.com/exchange#BTC_XEM" title="Poloniex"
                                                  target="_blank">0.0000119900</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xem_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000120500</a></td>
        <td>0.50</td>
      </tr>
      <tr id="XEM2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/XEM-to-BTC" title="HitBTC"
                                                  target="_blank">0.0000120140</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xem_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000120500</a></td>
        <td>0.30</td>
      </tr>
      <tr id="XEM3" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=xem_btc" title="OKex"
                                                  target="_blank">0.0000120200</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xem_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000120500</a></td>
        <td>0.25</td>
      </tr>
      <tr id="XEM4" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://Gate.io/trade/xem_btc" title="Gate.io" target="_blank">0.0000119820</a>
        </td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-XEM"
                                                  title="Bittrex" target="_blank">0.0000120100</a></td>
        <td>0.23</td>
      </tr>
      <tr id="XEM5" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://poloniex.com/exchange#BTC_XEM" title="Poloniex"
                                                  target="_blank">0.0000119900</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-XEM"
                                                  title="Bittrex" target="_blank">0.0000120100</a></td>
        <td>0.17</td>
      </tr>
      <tr id="XEM6" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/XEM-to-ETH" title="HitBTC"
                                                  target="_blank">0.0003513760</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=ETH-XEM"
                                                  title="Bittrex" target="_blank">0.0003518300</a></td>
        <td>0.13</td>
      </tr>
      <tr>
        <td id="XLM_td" class="td_icon" @mouseover="signs('XLM')" @mouseout="sign_out('XLM')">
          <a id="XLM_on" class="XLM_on" @click="activate('XLM',6)">XLM</a></td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/XLM-BTC" title="Kucoin"
                                                  target="_blank">0.0000074900</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xlm_btc/exchange/" title="Huobi'"
                                                  target="_blank">0.0000075100</a></td>
        <td>0.27</td>
      </tr>
      <tr id="XLM1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-XLM"
                                                  title="Bittrex" target="_blank">0.0000074900</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xlm_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000075100</a></td>
        <td>0.27</td>
      </tr>
      <tr id="XLM2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-XLM"
                                                  title="Bittrex" target="_blank">0.0000074900</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=xlm_btc" title="OKex"
                                                  target="_blank">0.0000075000</a></td>
        <td>0.13</td>
      </tr>
      <tr id="XLM3" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/XLM-BTC" title="Kucoin"
                                                  target="_blank">0.0000074900</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=xlm_btc" title="OKex"
                                                  target="_blank">0.0000075000</a></td>
        <td>0.13</td>
      </tr>
      <tr id="XLM4" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/XLM-BTC" title="Kucoin"
                                                  target="_blank">0.0000074900</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/xlm/btc" title="Kraken"
                                                  target="_blank">0.0000075000</a></td>
        <td>0.13</td>
      </tr>
      <tr id="XLM5" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-XLM"
                                                  title="Bittrex" target="_blank">0.0000074900</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/xlm/btc" title="Kraken"
                                                  target="_blank">0.0000075000</a></td>
        <td>0.13</td>
      </tr>
      <tr>
        <td id="XMR_td" class="td_icon" @mouseover="signs('XMR')" @mouseout="sign_out('XMR')">
          <a id="XMR_on" class="XMR_on" @click="activate('XMR',3)">XMR</a></td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/xmr/btc" title="Kraken"
                                                  target="_blank">0.0078330003</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xmr_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0078379996</a></td>
        <td>0.06</td>
      </tr>
      <tr id="XMR1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=xmr_btc" title="OKex"
                                                  target="_blank">0.0078360001</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xmr_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0078379996</a></td>
        <td>0.03</td>
      </tr>
      <tr id="XMR2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-XMR"
                                                  title="Bittrex" target="_blank">0.0078362497</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xmr_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0078379996</a></td>
        <td>0.02</td>
      </tr>
      <tr>
        <td id="XRP_td" class="td_icon" @mouseover="signs('XRP')" @mouseout="sign_out('XRP')">
          <a id="XRP_on" class="XRP_on" @click="activate('XRP',10)">XRP</a></td>
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=xrp_eth" title="OKex"
                                                  target="_blank">0.0006830000</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=ETH-XRP"
                                                  title="Bittrex" target="_blank">0.0006855000</a></td>
        <td>0.37</td>
      </tr>
      <tr id="XRP1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/XRP-to-ETH" title="HitBTC"
                                                  target="_blank">0.0006837000</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=ETH-XRP"
                                                  title="Bittrex" target="_blank">0.0006855000</a></td>
        <td>0.26</td>
      </tr>
      <tr id="XRP2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/xrp/eth" title="Kraken"
                                                  target="_blank">0.0006845000</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=ETH-XRP"
                                                  title="Bittrex" target="_blank">0.0006855000</a></td>
        <td>0.15</td>
      </tr>
      <tr id="XRP3" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/XRP-to-BTC" title="HitBTC"
                                                  target="_blank">0.0000233740</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.livecoin.net/ru/trade/index?currencyPair=XRP%2FBTC"
                                                  title="Livecoin" target="_blank">0.0000234000</a></td>
        <td>0.11</td>
      </tr>
      <tr id="XRP4" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=xrp_btc" title="OKex"
                                                  target="_blank">0.0000233800</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.livecoin.net/ru/trade/index?currencyPair=XRP%2FBTC"
                                                  title="Livecoin" target="_blank">0.0000234000</a></td>
        <td>0.09</td>
      </tr>
      <tr id="XRP5" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://poloniex.com/exchange#BTC_XRP" title="Poloniex"
                                                  target="_blank">0.0000233900</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.livecoin.net/ru/trade/index?currencyPair=XRP%2FBTC"
                                                  title="Livecoin" target="_blank">0.0000234000</a></td>
        <td>0.04</td>
      </tr>
      <tr id="XRP6" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/xrp_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000233900</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.livecoin.net/ru/trade/index?currencyPair=XRP%2FBTC"
                                                  title="Livecoin" target="_blank">0.0000234000</a></td>
        <td>0.04</td>
      </tr>
      <tr id="XRP7" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=xrp_eth" title="OKex"
                                                  target="_blank">0.0006830000</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/xrp/eth" title="Kraken"
                                                  target="_blank">0.0006832000</a></td>
        <td>0.03</td>
      </tr>
      <tr id="XRP8" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/XRP-to-BTC" title="HitBTC"
                                                  target="_blank">0.0000233740</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xrp_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000233800</a></td>
        <td>0.03</td>
      </tr>
      <tr id="XRP9" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/XRP-to-BTC" title="HitBTC"
                                                  target="_blank">0.0000233740</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/xrp/btc" title="Kraken"
                                                  target="_blank">0.0000233800</a></td>
        <td>0.03</td>
      </tr>
      <tr>
        <td id="XTZ_td" class="td_icon" @mouseover="signs('XTZ')" @mouseout="sign_out('XTZ')">
          <a id="XTZ_on" class="XTZ_on" @click="activate('XTZ',7)">XTZ</a></td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/XTZ-BTC" title="Kucoin"
                                                  target="_blank">0.0002471600</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/xtz/btc" title="Kraken"
                                                  target="_blank">0.0002485000</a></td>
        <td>0.54</td>
      </tr>
      <tr id="XTZ1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-XTZ"
                                                  title="Bittrex" target="_blank">0.0002480100</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/xtz/btc" title="Kraken"
                                                  target="_blank">0.0002485000</a></td>
        <td>0.20</td>
      </tr>
      <tr id="XTZ2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/XTZ-BTC" title="Kucoin"
                                                  target="_blank">0.0002471600</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xtz_btc/exchange/" title="Huobi'"
                                                  target="_blank">0.0002476400</a></td>
        <td>0.19</td>
      </tr>
      <tr id="XTZ3" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/XTZ-BTC" title="Kucoin"
                                                  target="_blank">0.0002471600</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=xtz_btc" title="OKex"
                                                  target="_blank">0.0002475900</a></td>
        <td>0.17</td>
      </tr>
      <tr id="XTZ4" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/xtz_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0002481600</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/xtz/btc" title="Kraken"
                                                  target="_blank">0.0002485000</a></td>
        <td>0.14</td>
      </tr>
      <tr id="XTZ5" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=xtz_btc" title="OKex"
                                                  target="_blank">0.0002481800</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/xtz/btc" title="Kraken"
                                                  target="_blank">0.0002485000</a></td>
        <td>0.13</td>
      </tr>
      <tr id="XTZ6" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/XTZ-BTC" title="Kucoin"
                                                  target="_blank">0.0002471600</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-XTZ"
                                                  title="Bittrex" target="_blank">0.0002474100</a></td>
        <td>0.10</td>
      </tr>
      <tr>
        <td id="YFI_td">
          YFI
        </td>
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=yfi"
                                                  title="Coinex" target="_blank">2.3</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/yfi_btc/exchange/" title="Huobi"
                                                  target="_blank">2.3</a></td>
        <td>0.43</td>
      </tr>
      <tr>
        <td id="ZEC_td">
          ZEC
        </td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ZEC-BTC" title="Kucoin"
                                                  target="_blank">0.0055740001</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/zec_btc/exchange/" title="Huobi'"
                                                  target="_blank">0.0055800001</a></td>
        <td>0.11</td>
      </tr>
      <tr>
        <td id="ZIL_td" class="td_icon" @mouseover="signs('ZIL')" @mouseout="sign_out('ZIL')">
          <a id="ZIL_on" class="ZIL_on" @click="activate('ZIL',5)">ZIL</a></td>
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/zil_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000014961</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=zil"
                                                  title="Coinex" target="_blank">0.0000015180</a></td>
        <td>1.46</td>
      </tr>
      <tr id="ZIL1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ZIL"
                                                  title="Bittrex" target="_blank">0.0000015000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=zil"
                                                  title="Coinex" target="_blank">0.0000015180</a></td>
        <td>1.20</td>
      </tr>
      <tr id="ZIL2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ZIL-BTC" title="Kucoin"
                                                  target="_blank">0.0000015000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=zil"
                                                  title="Coinex'" target="_blank">0.0000015180</a></td>
        <td>1.20</td>
      </tr>
      <tr id="ZIL3" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/ZIL-to-BTC" title="HitBTC"
                                                  target="_blank">0.0000015012</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=zil"
                                                  title="Coinex" target="_blank">0.0000015180</a></td>
        <td>1.12</td>
      </tr>
      <tr id="ZIL4" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=zil_btc" title="OKex"
                                                  target="_blank">0.0000015070</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=zil"
                                                  title="Coinex" target="_blank">0.0000015180</a></td>
        <td>0.73</td>
      </tr>
      <tr>
        <td id="ZRX_td" class="td_icon" @mouseover="signs('ZRX')" @mouseout="sign_out('ZRX')">
          <a id="ZRX_on" class="ZRX_on" @click="activate('ZRX',5)">ZRX</a></td>
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ZRX"
                                                  title="Bittrex" target="_blank">0.0000444800</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=zrx_btc" title="OKex"
                                                  target="_blank">0.0000446100</a></td>
        <td>0.29</td>
      </tr>
      <tr id="ZRX1" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ZRX-BTC" title="Kucoin"
                                                  target="_blank">0.0000445000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=zrx_btc" title="OKex"
                                                  target="_blank">0.0000446100</a></td>
        <td>0.25</td>
      </tr>
      <tr id="ZRX2" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/ZRX-to-BTC" title="HitBTC"
                                                  target="_blank">0.0000445320</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=zrx_btc" title="OKex"
                                                  target="_blank">0.0000446100</a></td>
        <td>0.18</td>
      </tr>
      <tr id="ZRX3" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ZRX"
                                                  title="Bittrex" target="_blank">0.0000444800</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/zrx_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000445200</a></td>
        <td>0.09</td>
      </tr>
      <tr id="ZRX4" class="hidden">
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ZRX-BTC" title="Kucoin"
                                                  target="_blank">0.0000445000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/zrx_btc/exchange/" title="Huobi'"
                                                  target="_blank">0.0000445200</a></td>
        <td>0.04</td>
      </tr>
      </tbody>
    </table>
    <table border="1" id="table_profit" class="table_profit" align="center">
      <thead>
      <tr>
        <th>Coin</th>
        <th>Buy Price</th>
        <th>Sell Price</th>
        <th>Profit, %</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>REP</td>
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=REP_BTC" title="Bibox"
                                                  target="_blank">0.0015161900</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/rep/btc" title="Kraken"
                                                  target="_blank">0.0016410000</a></td>
        <td>8.23</td>
      </tr>
      <tr>
        <td>ETC</td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETC-BTC" title="Kucoin"
                                                  target="_blank">0.0004831000</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/etc/btc" title="Kraken"
                                                  target="_blank">0.0005170000</a></td>
        <td>7.02</td>
      </tr>
      <tr>
        <td>GAME</td>
        <td style="background-color: #00FF00;"><a href="https://www.livecoin.net/ru/trade/index?currencyPair=GAME%2FBTC"
                                                  title="Livecoin" target="_blank">0.0000064800</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-GAME"
                                                  title="Bittrex" target="_blank">0.0000068800</a></td>
        <td>6.17</td>
      </tr>
      <tr>
        <td>ANT</td>
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ANT"
                                                  title="Bittrex" target="_blank">0.0004516700</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/ant_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0004633400</a></td>
        <td>2.58</td>
      </tr>
      <tr>
        <td>DOT</td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/dot/eth" title="Kraken"
                                                  target="_blank">0.0132480003</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=dot_eth" title="OKex"
                                                  target="_blank">0.0135880001</a></td>
        <td>2.57</td>
      </tr>
      <tr>
        <td>FSN</td>
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/fsn_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000406000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.bibox.com/exchange?coinPair=FSN_BTC" title="Bibox"
                                                  target="_blank">0.0000414600</a></td>
        <td>2.12</td>
      </tr>
      <tr>
        <td>AKRO</td>
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/akro_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000026321</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-AKRO"
                                                  title="Bittrex" target="_blank">0.0000026800</a></td>
        <td>1.82</td>
      </tr>
      <tr>
        <td>ZIL</td>
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/zil_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000014961</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=zil"
                                                  title="Coinex" target="_blank">0.0000015180</a></td>
        <td>1.46</td>
      </tr>
      <tr>
        <td>ALGO</td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/algo/btc" title="Kraken"
                                                  target="_blank">0.0000339200</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/algo_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000342100</a></td>
        <td>0.85</td>
      </tr>
      <tr>
        <td>TRX</td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/TRX-BTC" title="Kucoin"
                                                  target="_blank">0.0000030440</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_TRX" title="Poloniex"
                                                  target="_blank">0.0000030700</a></td>
        <td>0.85</td>
      </tr>
      <tr>
        <td>ATOM</td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/atom/btc" title="Kraken"
                                                  target="_blank">0.0004977000</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_ATOM" title="Poloniex"
                                                  target="_blank">0.0005019200</a></td>
        <td>0.85</td>
      </tr>
      <tr>
        <td>ARDR</td>
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/ARDR-to-BTC" title="HitBTC"
                                                  target="_blank">0.0000053210</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ARDR"
                                                  title="Bittrex" target="_blank">0.0000053600</a></td>
        <td>0.73</td>
      </tr>
      <tr>
        <td>COMP</td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/comp/btc" title="Kraken"
                                                  target="_blank">0.0162240006</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=comp_btc" title="OKex"
                                                  target="_blank">0.0163300000</a></td>
        <td>0.65</td>
      </tr>
      <tr>
        <td>ENJ</td>
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/ENJ-to-BTC" title="HitBTC"
                                                  target="_blank">0.0000150260</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ENJ"
                                                  title="Bittrex" target="_blank">0.0000151200</a></td>
        <td>0.63</td>
      </tr>
      <tr>
        <td>IOTA</td>
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=iota_btc" title="OKex"
                                                  target="_blank">0.0000276000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=iota"
                                                  title="Coinex" target="_blank">0.0000277670</a></td>
        <td>0.61</td>
      </tr>
      <tr>
        <td>LRC</td>
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=lrc_eth" title="OKex"
                                                  target="_blank">0.0005150000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.coinex.com/exchange?currency=eth&amp;dest=lrc"
                                                  title="Coinex" target="_blank">0.0005181000</a></td>
        <td>0.60</td>
      </tr>
      <tr>
        <td>LINK</td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/link/eth" title="Kraken"
                                                  target="_blank">0.0341107100</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=link_eth" title="OKex"
                                                  target="_blank">0.0343099982</a></td>
        <td>0.58</td>
      </tr>
      <tr>
        <td>XEM</td>
        <td style="background-color: #00FF00;"><a href="https://Gate.io/trade/xem_btc" title="Gate.io" target="_blank">0.0000119820</a>
        </td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xem_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000120500</a></td>
        <td>0.57</td>
      </tr>
      <tr>
        <td>ETH</td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ETH-BTC" title="Kucoin"
                                                  target="_blank">0.0340300016</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eth_btc" title="OKex"
                                                  target="_blank">0.0342199989</a></td>
        <td>0.56</td>
      </tr>
      <tr>
        <td>XTZ</td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/XTZ-BTC" title="Kucoin"
                                                  target="_blank">0.0002471600</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/xtz/btc" title="Kraken"
                                                  target="_blank">0.0002485000</a></td>
        <td>0.54</td>
      </tr>
      <tr>
        <td>BCH</td>
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=bch"
                                                  title="Coinex" target="_blank">0.0222842395</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bch_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0223900005</a></td>
        <td>0.47</td>
      </tr>
      <tr>
        <td>OMG</td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/OMG-BTC" title="Kucoin"
                                                  target="_blank">0.0003792200</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/omg_btc/exchange/" title="Huobi'"
                                                  target="_blank">0.0003810000</a></td>
        <td>0.47</td>
      </tr>
      <tr>
        <td>UQC</td>
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=UQC_BTC" title="Bibox"
                                                  target="_blank">0.0002588400</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-UQC"
                                                  title="Bittrex" target="_blank">0.0002600000</a></td>
        <td>0.45</td>
      </tr>
      <tr>
        <td>YFI</td>
        <td style="background-color: #00FF00;"><a href="https://www.coinex.com/exchange?currency=btc&amp;dest=yfi"
                                                  title="Coinex" target="_blank">2.3</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/yfi_btc/exchange/" title="Huobi"
                                                  target="_blank">2.3</a></td>
        <td>0.43</td>
      </tr>
      <tr>
        <td>KNC</td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/knc/btc" title="Kraken"
                                                  target="_blank">0.0001221000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=knc_btc" title="OKex"
                                                  target="_blank">0.0001226000</a></td>
        <td>0.41</td>
      </tr>
      <tr>
        <td>DGB</td>
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-DGB"
                                                  title="Bittrex" target="_blank">0.0000022100</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=dgb_btc" title="OKex"
                                                  target="_blank">0.0000022190</a></td>
        <td>0.41</td>
      </tr>
      <tr>
        <td>MANA</td>
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-MANA"
                                                  title="Bittrex" target="_blank">0.0000075300</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/mana_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000075600</a></td>
        <td>0.40</td>
      </tr>
      <tr>
        <td>EOS</td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/eos/btc" title="Kraken"
                                                  target="_blank">0.0002853000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=eos_btc" title="OKex"
                                                  target="_blank">0.0002864000</a></td>
        <td>0.39</td>
      </tr>
      <tr>
        <td>WAVES</td>
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/waves_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0002361600</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-WAVES"
                                                  title="Bittrex" target="_blank">0.0002370600</a></td>
        <td>0.38</td>
      </tr>
      <tr>
        <td>LEND</td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/LEND-BTC" title="Kucoin"
                                                  target="_blank">0.0000530800</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/lend_btc/exchange/" title="Huobi'"
                                                  target="_blank">0.0000532800</a></td>
        <td>0.38</td>
      </tr>
      <tr>
        <td>BAT</td>
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-BAT"
                                                  title="Bittrex" target="_blank">0.0000244600</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=bat_btc" title="OKex"
                                                  target="_blank">0.0000245500</a></td>
        <td>0.37</td>
      </tr>
      <tr>
        <td>XRP</td>
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=xrp_eth" title="OKex"
                                                  target="_blank">0.0006830000</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=ETH-XRP"
                                                  title="Bittrex" target="_blank">0.0006855000</a></td>
        <td>0.37</td>
      </tr>
      <tr>
        <td>ICX</td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/icx/btc" title="Kraken"
                                                  target="_blank">0.0000410800</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/icx_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000412300</a></td>
        <td>0.37</td>
      </tr>
      <tr>
        <td>QTUM</td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/qtum/btc" title="Kraken"
                                                  target="_blank">0.0002353000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/qtum_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0002360000</a></td>
        <td>0.30</td>
      </tr>
      <tr>
        <td>VID</td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/VID-BTC" title="Kucoin"
                                                  target="_blank">0.0000067300</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-VID"
                                                  title="Bittrex" target="_blank">0.0000067500</a></td>
        <td>0.30</td>
      </tr>
      <tr>
        <td>ZRX</td>
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-ZRX"
                                                  title="Bittrex" target="_blank">0.0000444800</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=zrx_btc" title="OKex"
                                                  target="_blank">0.0000446100</a></td>
        <td>0.29</td>
      </tr>
      <tr>
        <td>CELO</td>
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=celo_btc" title="OKex"
                                                  target="_blank">0.0003311000</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-CELO"
                                                  title="Bittrex" target="_blank">0.0003319900</a></td>
        <td>0.27</td>
      </tr>
      <tr>
        <td>XLM</td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/XLM-BTC" title="Kucoin"
                                                  target="_blank">0.0000074900</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xlm_btc/exchange/" title="Huobi'"
                                                  target="_blank">0.0000075100</a></td>
        <td>0.27</td>
      </tr>
      <tr>
        <td>BCHABC</td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/BCHABC-BTC" title="Kucoin"
                                                  target="_blank">0.0223319996</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_BCHABC" title="Poloniex"
                                                  target="_blank">0.0223890301</a></td>
        <td>0.26</td>
      </tr>
      <tr>
        <td>KMD</td>
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/kmd_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000599000</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-KMD"
                                                  title="Bittrex" target="_blank">0.0000600400</a></td>
        <td>0.23</td>
      </tr>
      <tr>
        <td>LTC</td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/LTC-BTC" title="Kucoin"
                                                  target="_blank">0.0047129998</a></td>
        <td style="background-color: #FF6666;"><a href="https://poloniex.com/exchange#BTC_LTC" title="Poloniex"
                                                  target="_blank">0.0047238902</a></td>
        <td>0.23</td>
      </tr>
      <tr>
        <td>DOGE</td>
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/doge_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000002694</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.livecoin.net/ru/trade/index?currencyPair=DOGE%2FBTC"
                                                  title="Livecoin" target="_blank">0.0000002700</a></td>
        <td>0.22</td>
      </tr>
      <tr>
        <td>ADA</td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/ada/btc" title="Kraken"
                                                  target="_blank">0.0000090900</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.okex.com/spot/trade#product=ada_btc" title="OKex"
                                                  target="_blank">0.0000091100</a></td>
        <td>0.22</td>
      </tr>
      <tr>
        <td>MLN</td>
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/mln_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0041009998</a></td>
        <td style="background-color: #FF6666;"><a href="https://trade.kraken.com/markets/kraken/mln/btc" title="Kraken"
                                                  target="_blank">0.0041089999</a></td>
        <td>0.20</td>
      </tr>
      <tr>
        <td>LSK</td>
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/LSK-to-BTC" title="HitBTC"
                                                  target="_blank">0.0001334300</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-LSK"
                                                  title="Bittrex" target="_blank">0.0001336900</a></td>
        <td>0.19</td>
      </tr>
      <tr>
        <td>GNT</td>
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=gnt_btc" title="OKex"
                                                  target="_blank">0.0000108100</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-GNT"
                                                  title="Bittrex" target="_blank">0.0000108300</a></td>
        <td>0.19</td>
      </tr>
      <tr>
        <td>CRO</td>
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/cro_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000147500</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-CRO"
                                                  title="Bittrex" target="_blank">0.0000147700</a></td>
        <td>0.14</td>
      </tr>
      <tr>
        <td>GT</td>
        <td style="background-color: #00FF00;"><a href="https://www.huobipro.com/gt_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000555400</a></td>
        <td style="background-color: #FF6666;"><a href="https://Gate.io/trade/gt_btc" title="Gate.io" target="_blank">0.0000556100</a>
        </td>
        <td>0.13</td>
      </tr>
      <tr>
        <td>IRIS</td>
        <td style="background-color: #00FF00;"><a href="https://www.bibox.com/exchange?coinPair=IRIS_BTC" title="Bibox"
                                                  target="_blank">0.0000068500</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/iris_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000068586</a></td>
        <td>0.13</td>
      </tr>
      <tr>
        <td>STEEM</td>
        <td style="background-color: #00FF00;"><a href="https://bittrex.com/Market/Index?MarketName=BTC-STEEM"
                                                  title="Bittrex" target="_blank">0.0000168600</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/steem_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000168800</a></td>
        <td>0.12</td>
      </tr>
      <tr>
        <td>EGT</td>
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=egt_btc" title="OKex"
                                                  target="_blank">0.0000000890</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/egt_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000000891</a></td>
        <td>0.11</td>
      </tr>
      <tr>
        <td>ZEC</td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ZEC-BTC" title="Kucoin"
                                                  target="_blank">0.0055740001</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/zec_btc/exchange/" title="Huobi'"
                                                  target="_blank">0.0055800001</a></td>
        <td>0.11</td>
      </tr>
      <tr>
        <td>GNO</td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/gno/eth" title="Kraken"
                                                  target="_blank">0.1412999928</a></td>
        <td style="background-color: #FF6666;"><a href="https://bittrex.com/Market/Index?MarketName=ETH-GNO"
                                                  title="Bittrex" target="_blank">0.1414423734</a></td>
        <td>0.10</td>
      </tr>
      <tr>
        <td>BSV</td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/BSV-BTC" title="Kucoin"
                                                  target="_blank">0.0160019994</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/bsv_btc/exchange/" title="Huobi'"
                                                  target="_blank">0.0160130002</a></td>
        <td>0.07</td>
      </tr>
      <tr>
        <td>WTC</td>
        <td style="background-color: #00FF00;"><a href="https://www.okex.com/spot/trade#product=wtc_btc" title="OKex"
                                                  target="_blank">0.0000462000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/wtc_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0000462300</a></td>
        <td>0.06</td>
      </tr>
      <tr>
        <td>XMR</td>
        <td style="background-color: #00FF00;"><a href="https://trade.kraken.com/markets/kraken/xmr/btc" title="Kraken"
                                                  target="_blank">0.0078330003</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/xmr_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0078379996</a></td>
        <td>0.06</td>
      </tr>
      <tr>
        <td>DASH</td>
        <td style="background-color: #00FF00;"><a href="https://hitbtc.com/exchange/DASH-to-BTC" title="HitBTC"
                                                  target="_blank">0.0068140002</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.huobipro.com/dash_btc/exchange/" title="Huobi"
                                                  target="_blank">0.0068160002</a></td>
        <td>0.03</td>
      </tr>
      <tr>
        <td>ONT</td>
        <td style="background-color: #00FF00;"><a href="https://www.kucoin.com/#/trade.pro/ONT-BTC" title="Kucoin"
                                                  target="_blank">0.0000625000</a></td>
        <td style="background-color: #FF6666;"><a href="https://www.bibox.com/exchange?coinPair=ONT_BTC" title="Bibox'"
                                                  target="_blank">0.0000625100</a></td>
        <td>0.02</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "arbitrage",
  data() {
    return {
      activelink: 'profit',
      listarbitrage: []
    }
  },
  created() {
    this.loadlistarbitrage()
  },
  methods: {
    async loadlistarbitrage(){
      this.listarbitrage = await fetch('${this.$store.getters.getServerUrl}/arbitrage').then(responce => responce.json())
      console.log(this.listarbitrage)
    },
    isActive: function (link) {
      return this.activelink === link
    },
    setActive: function (link) {
      this.activelink = link
    },
    activate(text, item) {
      let b = document.getElementById(text + "_td")
      for (let i = 1; i < item; i++) {
        let a = document.getElementById(text + i)
        if (a.className === "visible") {
          a.className = "hidden";
          b.setAttribute("rowspan", "1")
        } else {
          a.className = "visible";
          b.setAttribute("rowspan", item)
        }
      }
      b.style.backgroundImage = "";
    },
    signs(text) {
      let a = document.getElementById(text + 1)
      let b = document.getElementById(text + "_td")
      if (a.className === "visible") {
        b.style.backgroundImage = "url(" + require("../assets/img/minus.png") + ")"
      } else {
        b.style.backgroundImage = "url(" + require("../assets/img/plus.png") + ")"
      }
    },
    sign_out(text) {
      let b = document.getElementById(text + "_td")
      b.style.backgroundImage = ""
    },
    show(text) {
      let arr = {
        table_exchange: 'table_exchange',
        table_profit: 'table_profit',
        arb_menu: 'visible',
        binance_bittrex: 'arbitrage_table-visible',
        binance_hitbtc: 'arbitrage_table-visible',
        binance_kucoin: 'arbitrage_table-visible',
        binance_livecoin: 'arbitrage_table-visible',
        binance_poloniex: 'arbitrage_table-visible',
        binance_kraken: 'arbitrage_table-visible',
        binance_okex: 'arbitrage_table-visible',
        binance_gateio: 'arbitrage_table-visible',
        binance_bitz: 'arbitrage_table-visible',
        binance_huobi: 'arbitrage_table-visible',
        binance_coinex: 'arbitrage_table-visible',
        bittrex_hitbtc: 'arbitrage_table-visible',
        bittrex_kucoin: 'arbitrage_table-visible',
        bittrex_livecoin: 'arbitrage_table-visible',
        bittrex_poloniex: 'arbitrage_table-visible',
        bittrex_kraken: 'arbitrage_table-visible',
        bittrex_okex: 'arbitrage_table-visible',
        bittrex_gateio: 'arbitrage_table-visible',
        bittrex_bitz: 'arbitrage_table-visible',
        bittrex_huobi: 'arbitrage_table-visible',
        bittrex_coinex: 'arbitrage_table-visible',
        poloniex_hitbtc: 'arbitrage_table-visible',
        poloniex_kucoin: 'arbitrage_table-visible',
        poloniex_livecoin: 'arbitrage_table-visible',
        poloniex_kraken: 'arbitrage_table-visible',
        poloniex_okex: 'arbitrage_table-visible',
        poloniex_gateio: 'arbitrage_table-visible',
        poloniex_bitz: 'arbitrage_table-visible',
        poloniex_huobi: 'arbitrage_table-visible',
        poloniex_coinex: 'arbitrage_table-visible',
        hitbtc_kucoin: 'arbitrage_table-visible',
        hitbtc_livecoin: 'arbitrage_table-visible',
        hitbtc_kraken: 'arbitrage_table-visible',
        hitbtc_okex: 'arbitrage_table-visible',
        hitbtc_gateio: 'arbitrage_table-visible',
        hitbtc_bitz: 'arbitrage_table-visible',
        hitbtc_huobi: 'arbitrage_table-visible',
        hitbtc_coinex: 'arbitrage_table-visible',
        kucoin_livecoin: 'arbitrage_table-visible',
        kucoin_kraken: 'arbitrage_table-visible',
        kucoin_okex: 'arbitrage_table-visible',
        kucoin_gateio: 'arbitrage_table-visible',
        kucoin_bitz: 'arbitrage_table-visible',
        kucoin_huobi: 'arbitrage_table-visible',
        kucoin_coinex: 'arbitrage_table-visible',
        livecoin_kraken: 'arbitrage_table-visible',
        livecoin_okex: 'arbitrage_table-visible',
        livecoin_gateio: 'arbitrage_table-visible',
        livecoin_bitz: 'arbitrage_table-visible',
        livecoin_huobi: 'arbitrage_table-visible',
        livecoin_coinex: 'arbitrage_table-visible',
        kraken_okex: 'arbitrage_table-visible',
        kraken_gateio: 'arbitrage_table-visible',
        kraken_bitz: 'arbitrage_table-visible',
        kraken_huobi: 'arbitrage_table-visible',
        kraken_coinex: 'arbitrage_table-visible',
        okex_gateio: 'arbitrage_table-visible',
        okex_bitz: 'arbitrage_table-visible',
        okex_huobi: 'arbitrage_table-visible',
        okex_coinex: 'arbitrage_table-visible',
        gateio_bitz: 'arbitrage_table-visible',
        gateio_huobi: 'arbitrage_table-visible',
        gateio_coinex: 'arbitrage_table-visible',
        bitz_huobi: 'arbitrage_table-visible',
        bitz_coinex: 'arbitrage_table-visible',
        huobi_coinex: 'arbitrage_table-visible',
        binance_bibox: 'arbitrage_table-visible',
        bittrex_bibox: 'arbitrage_table-visible',
        poloniex_bibox: 'arbitrage_table-visible',
        hitbtc_bibox: 'arbitrage_table-visible',
        kucoin_bibox: 'arbitrage_table-visible',
        livecoin_bibox: 'arbitrage_table-visible',
        kraken_bibox: 'arbitrage_table-visible',
        okex_bibox: 'arbitrage_table-visible',
        gateio_bibox: 'arbitrage_table-visible',
        bitz_bibox: 'arbitrage_table-visible',
        huobi_bibox: 'arbitrage_table-visible',
        coinex_bibox: 'arbitrage_table-visible',
      }

      let arr2 = ['binance_bittrex', 'binance_hitbtc', 'binance_kucoin', 'binance_livecoin', 'binance_poloniex', 'binance_kraken', 'binance_okex', 'binance_gateio', 'binance_bitz', 'binance_huobi', 'binance_coinex', 'bittrex_hitbtc', 'bittrex_kucoin', 'bittrex_livecoin', 'bittrex_poloniex', 'bittrex_kraken', 'bittrex_okex', 'bittrex_gateio', 'bittrex_bitz', 'bittrex_huobi', 'bittrex_coinex', 'poloniex_hitbtc', 'poloniex_kucoin', 'poloniex_livecoin', 'poloniex_kraken', 'poloniex_okex', 'poloniex_gateio', 'poloniex_bitz', 'poloniex_huobi', 'poloniex_coinex', 'hitbtc_kucoin', 'hitbtc_livecoin', 'hitbtc_kraken', 'hitbtc_okex', 'hitbtc_gateio', 'hitbtc_bitz', 'hitbtc_huobi', 'hitbtc_coinex', 'kucoin_livecoin', 'kucoin_kraken', 'kucoin_okex', 'kucoin_gateio', 'kucoin_bitz', 'kucoin_huobi', 'kucoin_coinex', 'livecoin_kraken', 'livecoin_okex', 'livecoin_gateio', 'livecoin_bitz', 'livecoin_huobi', 'livecoin_coinex', 'kraken_okex', 'kraken_gateio', 'kraken_bitz', 'kraken_huobi', 'kraken_coinex', 'okex_gateio', 'okex_bitz', 'okex_huobi', 'okex_coinex', 'gateio_bitz', 'gateio_huobi', 'gateio_coinex', 'bitz_huobi', 'bitz_coinex', 'huobi_coinex', 'binance_bibox', 'bittrex_bibox', 'poloniex_bibox', 'hitbtc_bibox', 'kucoin_bibox', 'livecoin_bibox', 'kraken_bibox', 'okex_bibox', 'gateio_bibox', 'bitz_bibox', 'huobi_bibox', 'coinex_bibox']
      for (let i in arr) {
        document.getElementById(i).className = 'hidden'
      }
      if (arr2.indexOf(text) !== -1) {
        document.getElementById('arb_menu').className = arr['arb_menu']
      }
      /*Скрываем открытые строки в таблице по монетам*/
      if (text === 'arb_menu') {
        let tab = document.getElementById("table_exchange").getElementsByClassName("visible")
        while (tab.length > 0) {
          document.getElementById(tab[0].id.replace(/[0-9]/g, '') + "_td").setAttribute('rowspan', '1')
          tab[0].className = "hidden"
        }
      }
      document.getElementById(text).className = arr[text]
    }
  }
}
</script>

<style scoped>

a {
  color: black;
  text-decoration: none;
}

.visible {
  visibility: visible;
}

.hidden {
  display: none;
}

.arb_menu_table td:hover {
  background: #f3bd48; /* Цвет фона при наведении */
  color: #fff; /* Цвет текста при наведении */
}

.activetable {
  background: #f3bd48; /* Цвет фона при наведении */
  color: #fff; /* Цвет текста при наведении */
}

.arb_menu_style {
  float: right;
}

.arb_menu_style a:hover {
  color: red;
}

.activelink {
  color: red;
}

.arb_menu_style td {
  border: none;
  width: 120px;
}

.arb_menu_table {
  border-collapse: collapse; /* Убираем двойные линии между ячейками */
  font-size: 13px;
  margin: auto;
}

.arb_menu_table td {
  padding: 3px; /* Поля вокруг содержимого таблицы */
  border: 1px solid black; /* Параметры рамки */
  text-align: center;
  height: 20px;
}

.td_icon {
  background-repeat: no-repeat;
  background-size: 10px 10px;
  background-position: left 15% center;
}

.table_exchange {
  border-collapse: collapse;
  font-size: 13px;
  text-align: center;
}

.table_exchange td {
  width: 111px;
}

.table_profit {
  border-collapse: collapse;
  font-size: 13px;
  text-align: center;
}

.table_profit td {
  width: 111px;
}

.arbitrage_table-visible { /* Таблицы арбитража */
  display: table;
  margin: 0 auto;
}

.arbitrage_table-visible table {
  border-collapse: collapse;
  font-size: 13px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.arbitrage_table-visible td {
  border: 1px solid black;
}

</style>