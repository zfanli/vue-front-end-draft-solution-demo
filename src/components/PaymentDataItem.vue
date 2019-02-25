<template>
  <table class="pd-item" cellspacing="0">
    <thead>
      <tr>
        <th>広告業者</th>
        <th>パッケージ名</th>
        <th>掲載月</th>
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
          placeholder="月を選択してください"
          size="small"
        />
      </td>
    </tr>
    <thead>
      <tr>
        <th>請求締日</th>
        <th>支払額</th>
        <th>支払入力</th>
      </tr>
    </thead>
    <tr>
      <td>
        <el-date-picker
          v-model="inputItem.requestDeadline"
          type="date"
          placeholder="日付を選択してください"
          size="small"
        />
      </td>
      <td>
        <el-input type="number" v-model="inputItem.paidAmount" size="small"/>
      </td>
      <td>
        <el-select
          v-model="inputItem.payStatus"
          placeholder="選択してください"
          loading-text="ロード中..."
          no-data-text="データなし"
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
        <th>メディア名</th>
        <th>商品名</th>
        <th>チャンネル</th>
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
          placeholder="選択してください"
          loading-text="ロード中..."
          no-data-text="データなし"
          size="small"
        >
          <el-option label="PC" value="0"></el-option>
          <el-option label="Mobile" value="1"></el-option>
        </el-select>
      </td>
    </tr>
    <thead class="media">
      <tr>
        <th colspan="2">掲載期間</th>
        <th>価格</th>
      </tr>
    </thead>
    <tr>
      <td colspan="2">
        <el-date-picker
          v-model="inputItem.registeredStartDate"
          type="date"
          placeholder="日付を選択してください"
          size="small"
        />
        <span class="seperator">-</span>
        <el-date-picker
          v-model="inputItem.registeredEndDate"
          type="date"
          placeholder="日付を選択してください"
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
  border: 1px solid #909399;

  thead {
    padding: 0;

    tr {
      th {
        background-color: #909399;
        color: #fff;
        padding: 0.5rem;
      }
    }
  }

  .media {
    tr {
      th {
        background-color: #909399;
      }
    }
  }

  th:not(:last-child) {
    border-right: 1px solid #fff;
  }

  .el-input,
  .el-select {
    border: none;

    input {
      text-align: center;
      border: none;
      width: fit-content;
    }
  }
}
</style>
