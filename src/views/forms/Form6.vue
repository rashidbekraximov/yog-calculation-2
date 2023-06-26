<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Transport xarajatlar</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2 m-4">
      <div class="row mb-4">
        <div class="col-md-4 mb-3">
          <label class="mb-2" for="validationTooltip01">Xarajat guruhi</label>
          <select class="form-select" id="validationTooltip01">
            <option selected>Tanlang...</option>
            <option value="FEMALE">2023</option>
          </select>
        </div>
        <div class="col-md-4 mb-3">
          <label class="mb-2">Mavsum</label>
          <select class="form-select">
            <option selected>Tanlang...</option>
            <option value="FEMALE">2023</option>
          </select>
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
      <div class="row mb-3">
        <div class="col-md-4 mb-3">
          <label class="mb-2">Hisoblash jadval raqami</label>
          <input
              class="form-control"
              type="text"
              placeholder="Kiriting"
              name="password"
              required
          />
        </div>
        <div class="col-md-4 mb-3">
          <label class="mb-2">Qiymati</label>
          <input
              class="form-control"
              type="text"
              placeholder="Kiriting"
              name="password"
              required
          />
        </div>
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
import SoftButton from "@/components/SoftButton.vue";
import {notification} from "ant-design-vue";

export default {
  name: "Form2",
  components: {
    SoftButton,
  },
  data() {
    return {
      tableRows: [{name1: '', name2: '', name3: '', name4: '', name5: '', name6: '', name7: ''}]
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