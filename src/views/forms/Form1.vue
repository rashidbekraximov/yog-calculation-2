<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Yem-xashak xarajatlari</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2 m-4">
      <div class="row mb-5">
        <div class="col-md-4">
          <label class="mb-2" for="validationTooltip01">Mavsum</label>
          <select class="form-select" id="validationTooltip01">
            <option selected>Tanlang...</option>
            <option value="FEMALE">2023</option>
          </select>
          <div class="valid-tooltip">
            Looks good!
          </div>
        </div>
        <div class="col-md-4">
          <label>Yuk xati raqami</label>
          <soft-input
              id="password"
              type="text"
              placeholder="Kiriting"
              name="password"
              required
          />
        </div>
        <div class="col-md-4">
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
      </div>
      <div class="table-responsive p-0">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
          <tr>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder  text-center opacity-20"
            >
              Yem-xashak nomi
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
              <img src="@/assets/img/add.png" style="width: 30px; height: 30px" alt="Add">
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
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
              <img src="@/assets/img/delete1.png" style="width: 40px; height: 40px" alt="Add">
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="text-center">
        <soft-button
            class="my-4 mb-2"
            variant="gradient"
            color="success"
            full-width
        >Sign in
        </soft-button>
      </div>
    </div>
  </div>
</template>

<script>
import SoftInput from "@/components/SoftInput.vue";
import SoftSwitch from "@/components/SoftSwitch.vue";
import SoftButton from "@/components/SoftButton.vue";

export default {
  name: "Form1",
  components: {
    SoftInput,
    SoftSwitch,
    SoftButton,
  },
}
</script>

<style scoped>

</style>