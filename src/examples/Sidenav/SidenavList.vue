<template>
  <div
      class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
      id="sidenav-collapse-main"
  >

    <div>
      <a-menu mode="inline">
        <a-sub-menu v-for="(form,index) in forms" v-bind:key="index">
          <template>
            <shop/>
          </template>
          <template>{{ form.name }}</template>
          <a-menu-item v-for="(f,i) in form.childForms" v-bind:key="i">
            <router-link :to="f.hrefAddress"> {{f.orderNumber}}. {{ f.name }} </router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>


<!--            <ul class="navbar-nav" v-for="(form,index) in forms[0]" v-bind:key="index">-->
<!--              <li class="nav-item" v-for="(f,i) in form.childForms" v-bind:key="i">-->
<!--                <sidenav-collapse :navText="f.name" :to="{name: f.name}">-->
<!--{{f.id}}.{{f.name}}-->
<!--                </sidenav-collapse>-->
<!--              </li>-->
<!--            </ul>-->
    <!--          <li class="nav-item">-->
    <!--            <sidenav-collapse navText="Tables" :to="{ name: 'Tables' }">-->
    <!--              <template #icon>-->
    <!--                <office />-->
    <!--              </template>-->
    <!--            </sidenav-collapse>-->
    <!--          </li>-->
    <!--          <li class="nav-item">-->
    <!--            <sidenav-collapse navText="Billing" :to="{ name: 'Billing' }">-->
    <!--              <template #icon>-->
    <!--                <credit-card />-->
    <!--              </template>-->
    <!--            </sidenav-collapse>-->
    <!--          </li>-->
    <!--          <li class="nav-item">-->
    <!--            <sidenav-collapse navText="Profile" :to="{ name: 'Profile' }">-->
    <!--              <template #icon>-->
    <!--                <customer-support />-->
    <!--              </template>-->
    <!--            </sidenav-collapse>-->
    <!--          </li>-->
    <!--          <li class="nav-item">-->
    <!--            <sidenav-collapse navText="Sign In" :to="{ name: 'Sign In' }">-->
    <!--              <template #icon>-->
    <!--                <document />-->
    <!--              </template>-->
    <!--            </sidenav-collapse>-->
    <!--          </li>-->
    <!--          <li class="nav-item">-->
    <!--            <sidenav-collapse navText="Sign Up" :to="{ name: 'Sign Up' }">-->
    <!--              <template #icon>-->
    <!--                <spaceship />-->
    <!--              </template>-->
    <!--            </sidenav-collapse>-->
    <!--          </li>-->
    <!--        </ul>-->
  </div>
</template>
<script>
// import SidenavCollapse from "./SidenavCollapse.vue";
import Shop from "../../components/Icon/Shop.vue";
// import Office from "../../components/Icon/Office.vue";
// import CreditCard from "../../components/Icon/CreditCard.vue";
// import CustomerSupport from "../../components/Icon/CustomerSupport.vue";
// import Document from "../../components/Icon/Document.vue";
// import Spaceship from "../../components/Icon/Spaceship.vue";
// import { MailOutlined} from '@ant-design/icons-vue';

export default {
  name: "SidenavList",
  props: {
    cardBg: String,
  },
  data() {
    return {
      title: "Soft UI Dashboard PRO",
      controls: "dashboardsExamples",
      isActive: "active",
      forms: []
    };
  },
  components: {
    // MailOutlined,
    // AppstoreOutlined,
    // SettingOutlined,
    // SidenavCollapse,
    Shop,
    // Office,
    // CreditCard,
    // CustomerSupport,
    // Document,
    // Spaceship,
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },

    getFormList() {
      this.$http.get("menu-system").then(res => {
        console.log(res.data)
        this.forms = res.data
      })
    },
  },


  created() {
    this.getFormList();
  }
};
</script>
