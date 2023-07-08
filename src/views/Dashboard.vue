<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <mini-statistics-card
            title="Chigit qiymati"
            :value="this.seedValue"
            :percentage="{
            value: '+505%',
            color: 'text-success',
          }"
            :icon="{
            component: 'ni ni-chart-bar-32',
            background: iconBackground,
          }"
            direction-reverse
        />
      </div>
      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <mini-statistics-card
            title="Harajatlar"
            :value="this.totalSpending"
            :percentage="{
            value: '+3%',
            color: 'text-success',
          }"
            :icon="{
            component: ' ni ni-chart-pie-35',
            background: iconBackground,
          }"
            direction-reverse
        />
      </div>
      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <mini-statistics-card
            title="Sotish"
            :value="this.purchaseValue"
            :percentage="{
            value: '-2%',
            color: 'text-danger',
          }"
            :icon="{
            component: 'ni ni-cart',
            background: iconBackground,
          }"
            direction-reverse
        />
      </div>
      <div class="col-xl-3 col-sm-6 mb-xl-0">
        <mini-statistics-card
            title="Foyda"
            :value="this.pureAmount"
            :percentage="{
            value: '+5%',
            color: 'text-success',
          }"
            :icon="{
            component: 'ni ni-money-coins',
            background: iconBackground,
          }"
            direction-reverse
        />
      </div>
    </div>
    <div class="mt-4 row mb-4">
      <div class="col-md-2 mb-3"></div>
      <div class="col-md-2 mb-3">
        <label class="mb-2">Chigit miqdori (tonna)</label>
        <input
            class="form-control"
            type="number"
            placeholder="Kiriting"
            name="password"
            v-model="seedAmount"
            required
            @input="calculateSeed"
        />
      </div>
      <div class="col-md-2 mb-3">
        <label class="mb-2">Chigit narxi</label>
        <input
            class="form-control"
            type="number"
            placeholder="Kiriting"
            name="password"
            v-model="seedCost"
            @input="calculateSeedCost"
            required
        />
      </div>
      <div class="col-md-2">
        <label class="mb-2">Dollar kursi</label>
        <input
            class="form-control"
            type="number"
            placeholder="Kiriting"
            name="password"
            v-model="usdCourse"
            @input="calculateUsdValue"
            required
        />
      </div>
      <div class="col-md-3 mb-3" style="margin-top: 35px">
        <soft-switch id="rememberMe" v-model="isQQS" name="isQQS"
                     @input="event => isQQS = event.target.checked">
          QQS
        </soft-switch>
      </div>
    </div>

    <div class="row">

      <!--  GOST    -->
      <div class="col-md-1"></div>
      <div class="card mb-5 col-md-4">
        <div class="card-header text-center pb-0">
          <h6>Gost</h6>
        </div>
        <div class="card-body px-0 pt-0 pb-2">


          <div class="row mb-3">
            <div class="col-md-4">
              <label class="mt-lg-4 px-lg-2 py-lg-2" style="font-size: 18px;font-weight: 600"> Shrot</label>
            </div>
            <div class="col-md-3">
              <label>(%)</label>
              <input class="form-control">
            </div>
            <div class="col-md-4">
              <label>Narxi</label>
              <input class="form-control">
            </div>
          </div>


          <div class="row">
            <div class="col-md-4">
              <label class="mt-lg-4 px-lg-2 py-lg-2" style="font-size: 18px;font-weight: 600"> Sholha</label>
            </div>
            <div class="col-md-3">
              <label>(%)</label>
              <input class="form-control">
            </div>
            <div class="col-md-4">
              <label>Narxi</label>
              <input class="form-control">
            </div>
          </div>


          <div class="row">
            <div class="col-md-4">
              <label class="mt-lg-4 px-lg-1 py-lg-2" style="font-size: 20px;font-weight: 750"> Qora yog'</label>
            </div>
            <div class="col-md-3">
              <label>(%)</label>
              <input class="form-control">
            </div>
          </div>


          <div class="row">
            <div class="col-md-4">
              <label class="mt-lg-4 px-lg-2 py-lg-2" style="font-size: 18px;font-weight: 600">Rafine yog'</label>
            </div>
            <div class="col-md-3">
              <label>(%)</label>
              <input class="form-control">
            </div>
            <div class="col-md-4">
              <label>Narxi</label>
              <input class="form-control">
            </div>
          </div>


          <div class="row">
            <div class="col-md-4">
              <label class="mt-lg-4 px-lg-2 py-lg-2" style="font-size: 18px;font-weight: 600">Substok</label>
            </div>
            <div class="col-md-3">
              <label>(%)</label>
              <input class="form-control">
            </div>
            <div class="col-md-4">
              <label>Narxi</label>
              <input class="form-control">
            </div>
          </div>
        </div>


      </div>


      <!--  REAL  -->
      <div class="col-md-2"></div>
      <div class="card mb-4 col-md-4">
        <div class="card-header text-center pb-0">
          <h6>Full Press</h6>
        </div>
        <div class="card-body px-0 pt-0 pb-2">

          <div class="row mb-3">
            <div class="col-md-4">
              <label class="mt-lg-4 px-lg-2 py-lg-2" style="font-size: 18px;font-weight: 600"> Shrot</label>
            </div>
            <div class="col-md-3">
              <label>(%)</label>
              <input class="form-control">
            </div>
            <div class="col-md-4">
              <label>Narxi</label>
              <input class="form-control">
            </div>
          </div>


          <div class="row">
            <div class="col-md-4">
              <label class="mt-lg-4 px-lg-2 py-lg-2" style="font-size: 18px;font-weight: 600"> Sholha</label>
            </div>
            <div class="col-md-3">
              <label>(%)</label>
              <input class="form-control">
            </div>
            <div class="col-md-4">
              <label>Narxi</label>
              <input class="form-control">
            </div>
          </div>


          <div class="row">
            <div class="col-md-4">
              <label class="mt-lg-4 px-lg-1 py-lg-2" style="font-size: 20px;font-weight: 750"> Qora yog'</label>
            </div>
            <div class="col-md-3">
              <label>(%)</label>
              <input class="form-control">
            </div>
          </div>


          <div class="row">
            <div class="col-md-4">
              <label class="mt-lg-4 px-lg-2 py-lg-2" style="font-size: 18px;font-weight: 600">Rafine yog'</label>
            </div>
            <div class="col-md-3">
              <label>(%)</label>
              <input class="form-control">
            </div>
            <div class="col-md-4">
              <label>Narxi</label>
              <input class="form-control">
            </div>
          </div>


          <div class="row">
            <div class="col-md-4">
              <label class="mt-lg-4 px-lg-2 py-lg-2" style="font-size: 18px;font-weight: 600">Substok</label>
            </div>
            <div class="col-md-3">
              <label>(%)</label>
              <input class="form-control">
            </div>
            <div class="col-md-4">
              <label>Narxi</label>
              <input class="form-control">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!--    <div class="row">-->
  <!--      <div class="col-md-2 mb-2">-->
  <!--        <label class="mt-lg-5 px-lg-4" style="font-size: 22px">Chigit</label>-->
  <!--      </div>-->
  <!--      <div class="col-md-1 mt-lg-3 mb-3">-->
  <!--        <label>(%)</label>-->
  <!--        <input-->
  <!--            class="form-control"-->
  <!--            type="number"-->
  <!--            placeholder="Kiriting"-->
  <!--            name="password"-->
  <!--            value="97"-->
  <!--            readonly-->
  <!--            required-->
  <!--        />-->
  <!--      </div>-->
  <!--      <div class="col-md-2 mt-lg-3 mb-5">-->
  <!--        <label>Miqdori (tonna)</label>-->
  <!--        <input-->
  <!--            class="form-control"-->
  <!--            type="number"-->
  <!--            placeholder="Kiriting"-->
  <!--            name="password"-->
  <!--            v-model="seedPureAmount"-->
  <!--            readonly-->
  <!--            required-->
  <!--        />-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    -->
  <div class="row mb-4">
    <div class="col-md-2">
      <label class="mt-lg-4 px-lg-4 py-lg-2" style="font-size: 22px">Xarajatlar</label>
    </div>
    <div class="col-md-2">
      <label>Qiymati ($)</label>
      <input
          class="form-control"
          type="number"
          placeholder="Kiriting"
          v-model="totalSpending"
          readonly
          required
      />
    </div>
  </div>
  <div class="row mb-3">
    <div class="col-md-1"></div>
    <div class="col-md-2 mb-3">
      <label class="mb-2">Ish haqi</label>
      <input
          class="form-control"
          type="number"
          placeholder="Kiriting"
          v-model="wage"
          @input="addSpendings"
          required
      />
    </div>
    <div class="col-md-2 mb-3">
      <label class="mb-2">Elektir energiya</label>
      <input
          class="form-control"
          type="number"
          placeholder="Kiriting"
          v-model="electr"
          @input="addSpendings"
          required
      />
    </div>
    <div class="col-md-2 mb-3">
      <label class="mb-2">Gaz</label>
      <input
          class="form-control"
          type="number"
          placeholder="Kiriting"
          v-model="gas"
          @input="addSpendings"
          required
      />
    </div>
    <div class="col-md-2 mb-3">
      <label class="mb-2">Upakovka</label>
      <input
          class="form-control"
          type="number"
          placeholder="Kiriting"
          v-model="opakovka"
          required
          @input="addSpendings"
      />
    </div>
    <div class="col-md-2 mb-3">
      <label class="mb-2">Boshqa xarajatlar</label>
      <input
          class="form-control"
          type="number"
          placeholder="Kiriting"
          v-model="other"
          required
          @input="addSpendings"
      />
    </div>
    <div class="col-md-1"></div>
  </div>
</template>
<script>
import MiniStatisticsCard from "@/examples/Cards/MiniStatisticsCard.vue";
import US from "../assets/img/icons/flags/US.png";
import DE from "../assets/img/icons/flags/DE.png";
import GB from "../assets/img/icons/flags/GB.png";
import BR from "../assets/img/icons/flags/BR.png";
import {faCreditCard, faHandPointer, faScrewdriverWrench, faUsers,} from "@fortawesome/free-solid-svg-icons";
import SoftSwitch from "@/components/SoftSwitch";

export default {
  name: "dashboard-default",
  data() {
    return {
      isQQS: true,
      seedAmount: 5400,
      seedValue: 70434.783,
      purchaseValue: 95605.82,
      seedPureAmount: 174.6,
      seedCost: 4500,
      usdCourse: 11500,
      shrotPercent: 58,
      shrotAmount: 104.4,
      shrotCost: 4200,
      shrotSumValue: 438480000,
      shrotUsdValue: 38128.7,
      sholhaPercent: 18,
      sholhaAmount: 32.4,
      sholhaCost: 3000,
      sholhaSumValue: 97200000,
      sholhaUsdValue: 8452.17,

      blackOil: 21,
      blackOilAmount: 37.8,

      rafineOilPercent: 93,
      rafineOilAmount: 35.154,
      rafineOilCost: 16000,
      rafineOilSumValue: 562464000,
      rafineOilUsdValue: 48909.91,
      substokPercent: 7,
      substokAmount: 2.646,
      substokCost: 500,
      substokSumValue: 1323000,
      substokUsdValue: 115.04,

      totalSpending: 240000,
      wage: 50000,
      electr: 15000,
      gas: 15000,
      opakovka: 60000,
      other: 100000,

      pureAmount: 214828.963,

      iconBackground: "bg-gradient-success",
      faCreditCard,
      faScrewdriverWrench,
      faUsers,
      faHandPointer,
      sales: {
        us: {
          country: "United States",
          sales: 2500,
          value: "$230,900",
          bounce: "29.9%",
          flag: US,
        },
        germany: {
          country: "Germany",
          sales: "3.900",
          value: "$440,000",
          bounce: "40.22%",
          flag: DE,
        },
        britain: {
          country: "Great Britain",
          sales: "1.400",
          value: "$190,700",
          bounce: "23.44%",
          flag: GB,
        },
        brasil: {
          country: "Brasil",
          sales: "562",
          value: "$143,960",
          bounce: "32.14%",
          flag: BR,
        },
      },
    };
  },
  components: {
    MiniStatisticsCard,
    SoftSwitch,
  },
  methods: {
    // addSpendings() {
    //   this.totalSpending = this.customMathRound(this.electr + this.gas + this.wage + this.opakovka + this.other);
    //   // this.calculatePureValue()
    // },
    // calculateQQSSValue(){
    //   this.pureAmount = this.customMathRound(this.purchaseValue - (this.totalSpending + this.seedValue));
    // },
    //
    // calculatePureValue() {
    //   this.pureAmount = this.customMathRound((this.rafineOilUsdValue + this.substokUsdValue + this.shrotUsdValue + this.sholhaUsdValue) / 1.12 - (this.electr + this.gas + this.wage + this.opakovka + this.other + this.customChangeUsdAmount((this.seedCost / 1.12 * this.seedAmount * 1000))));
    //   console.log(this.pureAmount)
    // },
    //
    // calculateSeed() {
    //   // shrot
    //   this.shrotAmount = this.customMathRound(this.seedAmount * this.shrotPercent / 100);
    //   this.shrotSumValue = this.customMathRound(this.shrotCost * this.shrotAmount * 1000);
    //   this.shrotUsdValue = this.customChangeUsdAmount(this.shrotSumValue);
    //
    //   // sholha
    //   this.sholhaAmount = this.customMathRound(this.seedAmount * this.sholhaPercent / 100);
    //   this.sholhaSumValue = this.customMathRound(this.sholhaCost * this.sholhaAmount * 1000);
    //   this.sholhaUsdValue = this.customChangeUsdAmount(this.sholhaSumValue);
    //
    //   this.blackOilAmount = this.seedAmount * this.blackOil / 100;
    //   this.calculateRafineOilPercent()
    //   this.calculateAllPurchase()
    //   this.calculateSeedCost();
    //   this.calculatePureValue();
    //
    // },
    //
    // calculateShrotPercent() {
    //   this.shrotAmount = this.seedAmount * this.shrotPercent / 100;
    //   this.sholhaPercent = 76 - this.shrotPercent;
    //
    //   this.sholhaAmount = this.seedAmount * this.sholhaPercent / 100;
    //
    //   this.shrotSumValue = this.customMathRound(this.shrotCost * this.shrotAmount * 1000);
    //   this.shrotUsdValue = this.customChangeUsdAmount(this.shrotSumValue);
    //
    //   this.sholhaSumValue = this.customMathRound(this.sholhaCost * this.sholhaAmount * 1000);
    //   this.sholhaUsdValue = this.customChangeUsdAmount(this.sholhaSumValue);
    //
    //   this.calculateAllPurchase()
    // },
    //
    // calculateShrotValue() {
    //   this.shrotSumValue = this.customMathRound(this.shrotAmount * this.shrotCost * 1000);
    //   this.shrotUsdValue = this.customMathRound(this.shrotSumValue / this.usdCourse);
    //   this.calculateAllPurchase()
    //
    // },
    //
    // calculateSholhaValue() {
    //   this.sholhaSumValue = this.customMathRound(this.sholhaAmount * this.sholhaCost * 1000);
    //   this.sholhaUsdValue = this.customMathRound(this.sholhaSumValue / this.usdCourse);
    //   this.calculateAllPurchase()
    //
    // },
    //
    // calculateRafinaOilValue() {
    //   this.rafineOilSumValue = this.customMathRound(this.rafineOilAmount * this.rafineOilCost * 1000);
    //   this.rafineOilUsdValue = this.customMathRound(this.rafineOilSumValue / this.usdCourse);
    //   this.calculateAllPurchase()
    //
    // },
    //
    // calculateSubstokValue() {
    //   this.substokSumValue = this.customMathRound(this.substokAmount * this.substokCost * 1000);
    //   this.substokUsdValue = this.customMathRound(this.substokSumValue / this.usdCourse);
    //   this.calculateAllPurchase()
    // },
    //
    // calculateRafineOilPercent() {
    //   this.substokPercent = 100 - this.rafineOilPercent;
    //
    //   this.rafineOilAmount = this.customMathRound(this.blackOilAmount * this.rafineOilPercent / 100);
    //   this.rafineOilSumValue = this.customMathRound(this.rafineOilCost * this.rafineOilAmount * 1000);
    //   this.rafineOilUsdValue = this.customChangeUsdAmount(this.rafineOilSumValue);
    //
    //   this.substokAmount = this.customMathRound(this.blackOilAmount * this.substokPercent / 100);
    //   this.substokSumValue = this.customMathRound(this.substokCost * this.substokAmount * 1000);
    //   this.substokUsdValue = this.customChangeUsdAmount(this.substokSumValue);
    //   this.calculateAllPurchase()
    //
    // },
    //
    // calculateUsdValue(){
    //   this.rafineOilUsdValue = this.customChangeUsdAmount(this.rafineOilSumValue);
    //   this.substokUsdValue = this.customChangeUsdAmount(this.substokSumValue);
    //   this.shrotUsdValue = this.customChangeUsdAmount(this.shrotSumValue);
    //   this.sholhaUsdValue = this.customChangeUsdAmount(this.sholhaSumValue);
    //
    //   this.calculateAllPurchase()
    //   this.calculateSeedCost()
    // },
    //
    // calculateAllPurchase(){
    //   this.purchaseValue = this.customMathRound (this.rafineOilUsdValue + this.substokUsdValue + this.shrotUsdValue + this.sholhaUsdValue);
    //   // this.calculatePureValue()
    //   },
    //
    //
    // calculateSeedCost(){
    //   this.seedValue = this.customChangeUsdAmount(this.seedAmount * 1000 * this.seedCost / 1.12);
    //   this.calculatePureValue()
    // },
    //
    // calculateWithQQSPurchaseAndSeedValue(isQQS){
    //   if (isQQS){
    //     this.calculateAllPurchase();
    //     this.calculateSpendings()
    //     this.seedValue = this.customMathRound ( this.seedValue * 1.12 );
    //   }else {
    //     this.calculateSeedCost();
    //     this.purchaseValue = this.customMathRound ( this.purchaseValue / 1.12 );
    //     this.calculatePureValue()
    //     this.addSpendings();
    //   }
    // },
    //
    // calculateSpendings(){
    //   this.totalSpending = this.customMathRound(this.electr * 1.12 + this.gas * 1.12 + this.opakovka * 1.12 + this.other * 1.12 * 0.6 + this.other * 0.4 + this.wage);
    // },
    //
    // customMathRound(amount) {
    //   return Math.round(amount * 1000) / 1000;
    // },
    // customChangeUsdAmount(value) {
    //   return this.customMathRound(value / this.usdCourse);
    // }
  },
  created() {
    // this.calculateSeed()
    // this.calculateWithQQSPurchaseAndSeedValue(false)
    // this.calculatePureValue()
  }
};
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
