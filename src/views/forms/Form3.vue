<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Yem-xashak xarajatlari</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2 m-4">
      <div class="row mb-3">
        <div class="col-md-3 mb-3">
          <label class="mb-2" for="validationTooltip01">Mavsum</label>
          <select class="form-select" id="validationTooltip01">
            <option selected>Tanlang...</option>
            <option value="FEMALE">2023</option>
          </select>
        </div>
        <div class="col-md-3">
          <label>Yuk xati raqami</label>
          <soft-input
              id="password"
              type="text"
              placeholder="Kiriting"
              name="password"
              required
          />
        </div>
        <div class="col-md-3">
          <label for="validationTooltip01" class="mb-2">Sana</label>
          <input
              id="password"
              class="form-control"
              type="date"
              placeholder="Kiriting"
              name="password"
              required
          />
        </div>
        <div class="col-md-3" style="padding-top: 35px">
          <div class="row">
            <div class="col-6">
              <label>Naqd berildi: </label>
            </div>
            <div class="col-2">
              <soft-switch id="rememberMe" name="rememberMe"  @input="event => isChecked = event.target.checked"></soft-switch>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-5" v-if="isChecked">
        <div class="col-md-3">
          <label>Qiymati</label>
          <soft-input
              type="text"
              placeholder="Kiriting"
              name="password"
              required
          />
        </div>
      </div>
      <div class="table-responsive p-0" v-else>
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
          <tr>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder  text-center opacity-20"
            >
              Mahsulot nomi
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2"
            >
              O'lchov birligi
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2"
            >
              Miqdori
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2"
            >
              Narx
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2"
            >
              Qiymati
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2"
            >
              QQS
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2"
            >
              QQS bilan qiymati
            </th>
            <th class="text-center">
              <img src="@/assets/img/add.png" style="width: 30px; height: 30px" alt="Add" @click="addRow">
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(tableData,index) in tableRows" :id="index" v-bind:key="index">
            <td>
              <select class="form-select" style="width: 150px">
                <option selected>Tanlang...</option>
                <option value="FEMALE">2023</option>
              </select>
            </td>
            <td>
              <select class="form-select" style="width: 150px">
                <option selected>Tanlang...</option>
                <option value="FEMALE">2023</option>
              </select>
            </td>
            <td>
              <input
                  id="number"
                  class="form-control"
                  style="width: 150px"
                  type="number"
                  placeholder="Kiriting"
                  name="password"
                  required
              />
            </td>
            <td>
              <input
                  class="form-control"
                  style="width: 150px"
                  type="number"
                  placeholder="Kiriting"
                  name="password"
                  required
              />
            </td>
            <td>
              <input
                  class="form-control"
                  type="number"
                  style="width: 150px"
                  placeholder="Kiriting"
                  name="password"
                  required
              />
            </td>
            <td>
              <soft-switch id="rememberMe" name="rememberMe" checked>
              </soft-switch>
            </td>
            <td>
              <input
                  style="width: 180px"
                  class="form-control"
                  type="number"
                  placeholder="Kiriting"
                  name="password"
                  readonly
              />
            </td>
            <td class="text-center">
              <img src="@/assets/img/delete1.png" style="width: 40px; height: 40px" alt="Add" @click="removeRow(index)">
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="row">
        <div class="col-md-8"></div>
        <div class="col-md-2">
          <soft-button
              class="my-4 mb-2"
              variant="gradient"
              color="success"
              full-width
          >Saqlash
          </soft-button>
        </div>
        <div class="col-md-2">
          <soft-button
              class="my-4 mb-2"
              variant="gradient"
              color="danger"
              full-width
          >Bekor qilish
          </soft-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SoftInput from "@/components/SoftInput.vue";
import SoftSwitch from "@/components/SoftSwitch.vue";
import SoftButton from "@/components/SoftButton.vue";
import {notification} from "ant-design-vue";

export default {
  name: "Form1",
  components: {
    SoftInput,
    SoftSwitch,
    SoftButton,
  },
  data() {
    return {
      tableRows: [{name1: '', name2: '', name3: '', name4: '', name5: '', name6: '', name7: ''}],
      isChecked: false
    }
  },
  methods: {
    addRow() {
      this.tableRows.push({name1: '', name2: '', name3: '', name4: '', name5: '', name6: '', name7: ''})
      notification.success({
        message: `Yangi qator qo'shildi !`,
        duration: 1
      });
    },
    removeRow(index) {
      this.tableRows.splice(index, 1);
      notification.warn({
        message: index + 1 + `-qator o'chirildi !`,
        duration: 1
      });
    }
  }
}
</script>

<style scoped>

</style>