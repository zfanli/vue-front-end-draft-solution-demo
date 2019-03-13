<template>
  <table class="pd-item">
    <thead>
      <tr>
        <th>Vendor</th>
        <th>Package Name</th>
        <th>Register Month</th>
      </tr>
    </thead>
    <tr>
      <td>
        <el-input v-model="inputItem.vendor" size="small"/>
      </td>
      <td>
        <el-input v-model="inputItem.packageName" size="small"/>
      </td>
      <td>
        <el-date-picker
          v-model="inputItem.registeredMonth"
          type="month"
          placeholder="Please select..."
          size="small"
        />
      </td>
    </tr>
    <thead>
      <tr>
        <th>Request Deadline</th>
        <th>Amount</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tr>
      <td>
        <el-date-picker
          v-model="inputItem.requestDeadline"
          type="date"
          placeholder="Please select..."
          size="small"
        />
      </td>
      <td>
        <el-input type="number" v-model="inputItem.paidAmount" size="small"/>
      </td>
      <td>
        <el-select
          v-model="inputItem.payStatus"
          placeholder="Please select..."
          loading-text="Loading..."
          no-data-text="No Data"
          size="small"
        >
          <el-option
            v-for="item in payStatusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </td>
    </tr>

    <thead class="media">
      <tr>
        <th>Media Name</th>
        <th>Item Name</th>
        <th>Channel</th>
      </tr>
    </thead>
    <tr>
      <td>
        <el-input v-model="inputItem.mediaName" size="small"/>
      </td>
      <td>
        <el-input v-model="inputItem.itemName" size="small"/>
      </td>
      <td>
        <el-select
          v-model="inputItem.channel"
          placeholder="Please select..."
          loading-text="Loading..."
          no-data-text="No Data"
          size="small"
        >
          <el-option label="PC" value="0"></el-option>
          <el-option label="Mobile" value="1"></el-option>
        </el-select>
      </td>
    </tr>
    <thead class="media">
      <tr>
        <th colspan="2">Register Period</th>
        <th>Price</th>
      </tr>
    </thead>
    <tr>
      <td colspan="2">
        <el-date-picker
          v-model="inputItem.registeredStartDate"
          type="date"
          placeholder="Please select..."
          size="small"
        />
        <span class="seperator">-</span>
        <el-date-picker
          v-model="inputItem.registeredEndDate"
          type="date"
          placeholder="Please select..."
          size="small"
        />
      </td>
      <td>
        <el-input type="number" v-model="inputItem.price" size="small"/>
      </td>
    </tr>
  </table>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    item: {
      uniqueId: Number,
      vendor: String,
      packageName: String,
      registeredMonth: String,
      requestDeadline: String,
      payStatus: String,
      mediaName: String,
      itemName: String,
      channel: String,
      registeredStartDate: String,
      registeredEndDate: String,
      price: Number,
      paidAmount: Number,
    },
  },
  data() {
    return {
      inputItem: {},
    }
  },
  computed: {
    ...mapState(['payStatusOptions']),
  },
  created() {
    this.inputItem = this.item
  },
}
</script>

<style lang="scss">
.pd-item {
  margin-bottom: 3rem;
  max-width: 800px;
  width: 100%;
  text-align: center;
  border-spacing: 0;
  border-collapse: collapse;
  color: #606266;

  thead {
    color: #909399;
  }

  th,
  td {
    height: 2rem;
    border: 1px solid #ebeef5;
  }

  .el-input,
  .el-select {
    border: none;

    input {
      text-align: center;
      border: none;
      width: fit-content;
      color: inherit;
    }
  }
}
</style>
