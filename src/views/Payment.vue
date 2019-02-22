<template>
  <div class="payment">
    <page-title title="支払実績管理">
      <container-box-m-r>
        <el-button type="primary" size="small" @click="testError('Test Error Box.')">更新</el-button>
      </container-box-m-r>
    </page-title>

    <el-alert v-show="error" :title="message" type="error" :closable="false" show-icon></el-alert>

    <el-form :inline="true" label-position="left" :model="form" label-width="6rem">
      <el-row>
        <el-col :span="12">
          <el-form-item label="広告業者" size="small">
            <el-select
              v-model="form.vendor"
              placeholder="選択してください"
              loading-text="ロード中..."
              no-data-text="データなし"
            >
              <el-option
                v-for="item in vendorOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="パッケージ名" size="small">
            <el-input v-model="form.packageName" placeholder="入力してください" suffix-icon="el-icon-edit"/>
          </el-form-item>
        </el-col>

        <el-col :span="24">
          <el-form-item label="請求締日" size="small">
            <el-col :span="11">
              <el-form-item class="date-picker" size="small">
                <el-date-picker
                  type="date"
                  placeholder="日付を選択してください"
                  v-model="form.requestStartDate"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :span="2" class="seperator">
              <span>-</span>
            </el-col>

            <el-col :span="11">
              <el-form-item class="date-picker" size="small">
                <el-date-picker type="date" placeholder="日付を選択してください" v-model="form.requestEndDate"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="メディア名" size="small">
            <el-input v-model="form.mediaName" placeholder="入力してください" suffix-icon="el-icon-edit"/>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="支払入力" size="small">
            <el-select
              v-model="form.payStatus"
              placeholder="選択してください"
              loading-text="ロード中..."
              no-data-text="データなし"
            >
              <el-option
                v-for="item in payStatusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="商品名" size="small">
            <el-input v-model="form.itemName" placeholder="入力してください" suffix-icon="el-icon-edit"/>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="チャンネル" size="small">
            <el-select
              v-model="form.channel"
              placeholder="選択してください"
              loading-text="ロード中..."
              no-data-text="データなし"
            >
              <el-option label="PC" value="0"></el-option>
              <el-option label="Mobile" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="24">
          <el-form-item label="掲載期間" size="small">
            <el-col :span="11">
              <el-form-item class="date-picker" size="small">
                <el-date-picker
                  type="date"
                  placeholder="日付を選択してください"
                  v-model="form.registeredStartDate"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :span="2" class="seperator">
              <span>-</span>
            </el-col>

            <el-col :span="11">
              <el-form-item class="date-picker" size="small">
                <el-date-picker
                  type="date"
                  placeholder="日付を選択してください"
                  v-model="form.registeredEndDate"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <div class="search-button">
      <el-button type="primary" :loading="loading" size="small">検索</el-button>
      <el-button size="small" @click="handleClear">クリア</el-button>
    </div>

    <div class="payment-data">

    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import ContainerBoxMR from '@/components/ContainerBoxMR.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Demo',
  data() {
    return {
      form: {
        vendor: '',
        requestStartDate: '',
        requestEndDate: '',
        payStatus: '',
        mediaName: '',
        itemName: '',
        channel: '0',
        registeredStartDate: '',
        registeredEndDate: '',
      },
    }
  },
  components: {
    PageTitle,
    ContainerBoxMR,
  },
  computed: {
    ...mapState([
      'error',
      'message',
      'vendorOptions',
      'payStatusOptions',
      'loading',
      'paymentData',
    ]),
  },
  methods: {
    handleClear() {
      this.form = {
        vendor: '',
        requestStartDate: '',
        requestEndDate: '',
        payStatus: '',
        mediaName: '',
        itemName: '',
        channel: '0',
        registeredStartDate: '',
        registeredEndDate: '',
      }
    },
    ...mapMutations({
      testError: 'error',
    }),
  },
}
</script>

<style lang="scss" scoped>
.payment {
  font-size: 14px;
  max-width: 800px;

  .el-alert {
    margin-bottom: 1rem;
  }

  .el-button {
    width: 8rem;
  }

  .el-form {
    max-width: 800px;
    margin-bottom: 1rem;
    padding: 1rem 1rem 0 1rem;
    border: solid 1px #ebebeb;

    .date-picker {
      display: inline-block;
    }

    .seperator {
      text-align: center;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }

  .search-button {
    display: flex;
    justify-content: space-evenly;
  }
}

.el-form-item {
  .el-form-item {
    margin-bottom: 0;
  }
}
</style>
