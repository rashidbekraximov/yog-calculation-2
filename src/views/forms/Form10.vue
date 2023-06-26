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
        <div class="col-md-3 mb-3">
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
        <div class="col-md-3 mb-3">
          <label class="mb-2" for="validationTooltip01">Partiya raqami</label>
          <select class="form-select" id="validationTooltip01">
            <option selected>Tanlang...</option>
            <option value="FEMALE">2023</option>
          </select>
        </div>
      </div>
      <div class="table-responsive p-0 mb-3">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
          <tr>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder  text-center opacity-20"
            >
              Inventar raqami
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2"
            >
              Oldingi oydagi vazni (kg)
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2"
            >
              Hozirgi vazni (kg)
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-20 ps-2"
            >
              Joriy nisbat
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
          </tr>
          </thead>
          <tbody>
          <tr v-for="(tableData,index) in tableRows" :id="index" v-bind:key="index">
            <td>
              <input
                  class="form-control"
                  style="width: 150px"
                  type="text"
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
              <input
                  class="form-control"
                  type="number"
                  style="width: 150px"
                  placeholder="Kiriting"
                  name="password"
                  required
              />
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
import SoftButton from "@/components/SoftButton.vue";

export default {
  name: "Form10",
  components: {
    SoftInput,
    SoftButton,
  },
  data() {
    return {
      tableRows: [{name1: '', name2: '', name3: '', name4: '', name5: '', name6: '', name7: ''}]
    }
  },
}
</script>

<style scoped>

</style>