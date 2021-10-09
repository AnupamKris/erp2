<template>
  <div class="marks">
    <table>
      <thead>
        <tr>
          <th v-for="(item , index) in fields" :key="index">{{item}}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="mark-field" v-for="(item, index) in markData" :key="index" :class="{light: index%2==0 ? true : false}">
          <td>{{ item.subcode }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.mark }}</td>
          <td>{{ item.grade }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    markData: Object,
    fields: {
      type: Array,
      default: ["Subject Code", "Subject Name", "Mark", "Grade"]
    }
  },
  setup() {},
};
</script>

<style lang="less" scoped>
.mark-field {
  width: 100%;
  height: 100%;
}

.marks {
    width: 90%;
}

table {
  border-collapse: collapse;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  thead {
    background: #0088ff;
    tr {
      height: 50px;
      width: 100%;
      color: white;
      border: none;
    }
  }
  tbody {
    tr {
      background: lighten(#0088ff, 35);
      td {
        height: 40px;
      }
    }
    .light {
      background: lighten(#0088ff, 45);
    }
  }
}
</style>
