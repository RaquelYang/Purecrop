<template>
  <div id="cartcheckout">
    <v-container class="mt-8 mt-md-16">
      <v-row>
        <v-col></v-col>
        <v-col cols="12" md="9">
          <h3 class="text-h3">無疑農｜結帳</h3>
          <v-simple-table class="mt-10 grey lighten-4 px-3 py-3">
            <thead>
              <tr>
                <th colspan="6">
                  <p class="text-start text-h6">訂單商品</p>
                  </th>
              </tr>
              <tr>
                <th class=" text-h5" width="5%"></th>
                <th class=" text-start px-5 text-h5">品名</th>
                <th class=" text-h5" width="10%"></th>
                <th class="text-h5" width="10%">單價</th>
                <th class=" text-h5" width="20%">數量</th>
                <th class="text-h5" width="15%">總計</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <v-checkbox :ripple="false"></v-checkbox>
                </td>
                <td class="text-start px-5">
                  <span class="text-h6">新鮮芭樂乾芭樂乾</span>
                </td>
                <td>
                  <img src="https://picsum.photos/50/50/?random=10">
                </td>
                <td>$99</td>
                <td>
                  <v-text-field
                    background-color="transparent"
                    hide-spin-buttons
                    readonly
                    flat
                    solo
                    type="number"
                    value="1"
                  >
                  </v-text-field>
                </td>
                <td>$99</td>
              </tr>
              <tr>
                <td colspan="2" class="text-start">
                  <form class=" align-center pt-3 px-2">
                    <label class="px-2 text-subtitle-1">留言：</label>
                    <v-textarea
                    class="message py-2 px-2 text-start"
                      outlined
                      placeholder="統一編號/警衛代收/電話聯絡時間..."
                    ></v-textarea>
                  </form>
                </td>
                <td colspan="4" class="text-start text-subtitle-1">
                  <tr>
                    <td class="text-start ps-3" width="30%">賣家資訊</td>
                    <td width="30%"></td>
                    <td class="text-end pe-3" width="30%" >$80</td>
                  </tr>
                  <tr>
                    <td class="text-start ps-3">賣家宅配</td>
                    <td>
                      <v-btn :ripple="false" plain text outlined>
                        ＋新增收件人地址
                      </v-btn>
                    </td>
                  </tr>
                  <tr>
                      <td class="text-start ps-3">電子發票</td>
                      <td>1 個未填寫收據</td>
                      <td class="text-start" >
                        <v-btn :ripple="false" plain text color="blue accent-3" class="changebtn">
                          變更
                        </v-btn>
                      </td>
                  </tr>
                </td>
              </tr>
              <tr class="">
                <td colspan="2" class="text-start">
                  <div class="d-flex">
                    <v-checkbox :ripple="false"></v-checkbox>
                    <span>全選</span>
                  </div>

                </td>
                <td colspan="4" class="text-end ">
                  <span class="text-subtitle-1">訂單金額(1商品)：</span>
                  <span class="text-h5 light-green--text text--darken-4">$123</span>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
          <v-simple-table class="mt-10 grey lighten-4 px-3 py-3">
            <tbody>
              <tr>
                <td width="20%">付款方式</td>
                <td class="text-start">
                  <v-btn :ripple="false" plain text outlined class="me-4">信用卡/金融卡</v-btn>
                  <v-btn :ripple="false" plain text outlined>銀行轉帳</v-btn>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>選擇帳戶</td>
                <td class="text-start">
                  <v-btn :ripple="false" plain text outlined>
                  ＋新增信用卡付款
                  </v-btn>
                </td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <v-row>
                    <v-col>商品總金額</v-col>
                    <v-col class="text-end">$123</v-col>
                  </v-row>
                  <v-row>
                    <v-col>運費總金額</v-col>
                    <v-col class="text-end">$60</v-col>
                  </v-row>
                  <v-row>
                    <v-col>總付款金額</v-col>
                    <v-col class="text-end">$183</v-col>
                  </v-row>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <v-btn :ripple="false" plain text outlined block large class="changebtn light-green darken-2 white--text font-weight-bold text-h6">
                    下訂單
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>

  </div>
</template>
<style lang="scss">
#cartcheckout{
  tr,td,th{
    padding: 1rem;
    text-align: center;
  }
  tr:hover{
    background-color: transparent !important;
  }
  .v-text-field.message input{
    text-align: left;
  }
  .v-text-field__details{
    margin: 0;
  }
  .v-text-field__details,.v-messages{
    min-height: 0px;
  }
  .v-input__slot{
    margin: 0;
  }
  .v-input--selection-controls{
    padding: 0;
    margin: 0;
  }
  .v-text-field input{
    text-align: center;
  }
  .v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover).changebtn .v-btn__content {
    opacity: 1;
}
}
</style>
