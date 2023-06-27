<template>
  <div className="py-4 container-fluid">
    <div className="row">
      <div className="col-12">
        <authors-table
          :header="header"
        />
      </div>
    </div>
  </div>
</template>

<script>

import AuthorsTable from "./components/AuthorsTable";

export default {
  name: "Documents",
  components: {
    AuthorsTable,
  },
  data(){
    return {
      header : "Documents"
    }
  }
};


</script>
