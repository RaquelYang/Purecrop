
<template>
<div id="payment">
  <v-container>
    <v-row>
      <v-col></v-col>
      <v-col cols="12" md="8" lg="8">
        <div class="title text-center">
          <h2 class="text-h2 grey--text text--darken-3">付款服務方式</h2>
        </div>
        <div class="maincontent mt-15">
          <div class="content px-15 py-15">
          <h4 class="text-h4 light-green--text text--darken-3 font-weight-bold">付款方式</h4>
          <p class="mt-5">小農飯盒提供【信用卡付款】、【貨到付款】兩種付款方式：</p>
          <div class="subcontent">
            <h4>一、信用卡付款</h4>
            <p class="light-green--text text--darken-2 text-h6 font-weight-bold">提交訂單 > 跳轉至綠界頁面 > 填入信用卡資料 > 驗證 > 完成付款</p>
            <ul>
              <li>使用信用卡支付，網頁將會轉往3D認證授權頁面；需完成認證即可完成交易，交易全程使用安全加密，且信用卡資料將不會儲存於網站，您可以安心地使用信用卡付款！</li>
              <li>信用卡支援 Visa、MasterCard 或 JCB。</li>
            </ul>
          </div>
          <div class="subcontent">
            <h4>二、貨到付款</h4>
            <p class="light-green--text text--darken-2 text-h6 font-weight-bold">提交訂單 > 商品出貨 > 拿取商品 > 付款</p>
            <ul>
              <li>產品於下訂單下一日前會使用郵政出貨</li>
              <li>確認送貨時間會先使用行動電或連繫再進行出貨</li>
            </ul>
          </div>
          <h4 class="text-h4 light-green--text text--darken-3 font-weight-bold mt-5">退換貨承諾</h4>
          <div class="subcontent">
            <h4>一、取消訂單、辦理退貨退款</h4>
            <p>因小農隨食包為冷凍生鮮食品，不適用於消費者保護法第19條，所以並不享有7天鑑賞期喔！非商品瑕疵恕無法為您辦理退換貨，下單前請務必考慮、詢問清楚！</p>
            <ul>
              <li>不適用退貨的狀況：經拆封、食用、 因個人口感或料理方式的問題、失溫及保存問題不良等情形而導致商品變質。</li>
              <li>商品瑕疵、品項錯誤退貨：如商品有瑕疵，運輸過程造成貨品解凍或毀損、貨品品項錯誤，請於到貨2小時內拍照存證並立即與客服聯繫，以便安排後續退換貨處理，逾期恕不受理。若您委託第三人 (如: 管理室、朋友、鄰居等）代收，辦理退換貨之條件亦同; 本公司不負責簽收後之保管與商品保存責任。</li>
            </ul>
          </div>
        </div>
        </div>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</div>
</template>
<style lang="scss">
#payment{
  margin-top: 10rem;
  .maincontent{
    border: 1px solid #7CB342;
    line-height: 1.8rem;
    border-radius: 0.5rem;
    box-shadow: 0 3px 3px #888;
    h4{
      font-weight: bolder;
      font-size: 1.4rem;
      padding: 2rem 0;
    }
    li{
      margin-left: 2rem;
    }
  }
}
</style>
