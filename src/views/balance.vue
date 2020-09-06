<template>
  <div id="balances">
    <div class="container">
      <div class="box" style="margin-left: 660px; margin-top: 350px;">NEO<br>Amount: 2.114857<br>BTC: 0.00362064<br>USD:
        37.09
      </div>
      <div class="box" style="margin-left: 638px; margin-top: 469px;">BNB<br>Amount: 1.16882193<br>BTC: 0.00250946<br>USD:
        25.71
      </div>
      <div class="box" style="margin-left: 578px; margin-top: 574px;">GAS<br>Amount: 0.30356939<br>BTC: 0.0000475<br>USD:
        0.49
      </div>
      <div class="box" style="margin-left: 485px; margin-top: 653px;">WAVES<br>Amount: 2.06446<br>BTC: 0.00047648<br>USD:
        4.88
      </div>
      <div class="box" style="margin-left: 370px; margin-top: 694px;">ONG<br>Amount: 0.00337655<br>BTC: 0.00000005<br>USD:
        0.00
      </div>
      <div class="box" style="margin-left: 249px; margin-top: 694px;">CBM<br>Amount: 3666.6<br>BTC: 0.<br>USD: 0.00
      </div>
      <div class="box" style="margin-left: 135px; margin-top: 653px;">SXP<br>Amount: 0.01689267<br>BTC: 0.00000283<br>USD:
        0.03
      </div>
      <div class="box" style="margin-left: 41px; margin-top: 574px;">BTC<br>Amount: 0.00000552<br>BTC: 0.00000552<br>USD:
        0.06
      </div>
      <div class="box" style="margin-left: -19px; margin-top: 469px;">BTXCRD<br>Amount: 1500.03291301<br>BTC: 0.<br>USD:
        0.00
      </div>
      <div class="box" style="margin-left: -40px; margin-top: 350px;">ETC<br>Amount: 5.07471364<br>BTC: 0.0025506<br>USD:
        26.13
      </div>
      <div class="box" style="margin-left: -19px; margin-top: 230px;">OMG<br>Amount: 0.2458149<br>BTC: 0.00009413<br>USD:
        0.96
      </div>
      <div class="box" style="margin-left: 41px; margin-top: 125px;">USDT<br>Amount: 16.41488615<br>BTC: 0.00160256<br>USD:
        16.41
      </div>
      <div class="box" style="margin-left: 134px; margin-top: 46px;">XEM<br>Amount: 78.53675461<br>BTC: 0.00092502<br>USD:
        9.47
      </div>
      <div class="box" style="margin-left: 249px; margin-top: 5px;">XRP<br>Amount: 62.69351647<br>BTC: 0.00146445<br>USD:
        14.99
      </div>
      <div class="box" style="margin-left: 370px; margin-top: 5px;">DOGE<br>Amount: 71.<br>BTC: 0.00001917<br>USD: 0.20
      </div>
      <div class="box" style="margin-left: 485px; margin-top: 46px;">STR<br>Amount: 0.04878572<br>BTC: 0.00000036<br>USD:
        0.00
      </div>
      <div class="box" style="margin-left: 578px; margin-top: 125px;">SC<br>Amount: 399.4<br>BTC: 0.00012781<br>USD:
        1.31
      </div>
      <div class="box" style="margin-left: 638px; margin-top: 230px;">BTT<br>Amount: 500.<br>BTC: 0.<br>USD: 0.00</div>
      <div class="box_center" style="margin-left: 280px; margin-top: 330px;">TOTAL<br><br>BTC: 0.0134466<br>USD: 137.718<br>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "balance"
}
</script>

<style scoped>

.container {
  width: 800px;
  margin: 0 auto;
}

.box {
  -moz-border-radius: 300px;
  -webkit-border-radius: 300px;
  background-position: 0px 0px;
  -moz-box-shadow: 1px 1px 1px #FFFFFF;
  -webkit-box-shadow: 1px 1px 1px #FFFFFF;
  background-color: yellow;
  position: absolute;
  background-repeat: no-repeat;
  border: 10px solid #666666;
  float: left;
  height: 120px;
  margin: 18px;
  width: 120px;
  padding: 5px;
  font-size: 13px;
  text-align: center;
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
}

.box_center {
  -moz-border-radius: 300px;
  -webkit-border-radius: 300px;
  background-position: 0px 0px;
  -moz-box-shadow: 1px 1px 1px #FFFFFF;
  -webkit-box-shadow: 1px 1px 1px #FFFFFF;
  background-color: greenyellow;
  position: absolute;
  background-repeat: no-repeat;
  border: 10px solid #666666;
  height: 180px;
  width: 180px;
  padding: 5px;
  font-size: 15px;
  text-align: center;
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
}

.box:hover {
  border: 10px solid #111;
  z-index: 1;
  height: 150px;
  width: 150px;
  font-size: 13px;
}
</style>