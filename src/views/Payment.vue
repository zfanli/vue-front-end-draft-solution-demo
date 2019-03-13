<template>
  <div class="payment">
    <page-title title="支払実績管理">
      <container-box-m-r>
        <el-button type="primary" size="small">Update</el-button>

        <!-- Drop down menu for test use -->
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-info"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="testError('Test Error Box.')">[For test] Show error box</el-dropdown-item>
            <el-dropdown-item @click.native="fillData">[For test] Fill test data</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </container-box-m-r>
    </page-title>

    <!-- Error box for show error message if exists. -->
    <el-alert v-show="error" :title="message" type="error" :closable="false" show-icon></el-alert>

    <!-- Search filter form. -->
    <el-form :inline="true" label-position="left" :model="form" label-width="6rem">
      <el-row>
        <!-- Ad Vonder: Selection -->
        <el-col :span="12">
          <el-form-item label="Ad Vonder" size="small">
            <el-select
              v-model="form.vendor"
              placeholder="Please select..."
              loading-text="Loading..."
              no-data-text="No Data"
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

        <!-- Pakage Name: Inpute -->
        <el-col :span="12">
          <el-form-item label="Pakage" size="small">
            <el-input v-model="form.packageName" placeholder="Please input..." suffix-icon="el-icon-edit"/>
          </el-form-item>
        </el-col>

        <!-- Request Deadline: Date picker for start to end -->
        <el-col :span="24">
          <el-form-item label="Deadline" size="small">
            <el-col :span="11">
              <el-form-item class="date-picker" size="small">
                <el-date-picker
                  type="date"
                  placeholder="Please select..."
                  v-model="form.requestStartDate"
                ></el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :span="2" class="seperator">
              <span>-</span>
            </el-col>

            <el-col :span="11">
              <el-form-item class="date-picker" size="small">
                <el-date-picker type="date" placeholder="Please select..." v-model="form.requestEndDate"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
        </el-col>

        <!-- Media Name: Input -->
        <el-col :span="12">
          <el-form-item label="Media Name" size="small">
            <el-input v-model="form.mediaName" placeholder="Please input..." suffix-icon="el-icon-edit"/>
          </el-form-item>
        </el-col>

        <!-- Payment: Selection -->
        <el-col :span="12">
          <el-form-item label="Payment" size="small">
            <el-select
              v-model="form.payStatus"
              placeholder="Please select..."
              loading-text="Loading..."
              no-data-text="No Data"
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

        <!-- Item Name: Input -->
        <el-col :span="12">
          <el-form-item label="Item Name" size="small">
            <el-input v-model="form.itemName" placeholder="Please input..." suffix-icon="el-icon-edit"/>
          </el-form-item>
        </el-col>

        <!-- Channel: Selection -->
        <el-col :span="12">
          <el-form-item label="Channel" size="small">
            <el-select
              v-model="form.channel"
              placeholder="Please select..."
              loading-text="Loading..."
              no-data-text="No Data"
            >
              <el-option label="PC" value="0"></el-option>
              <el-option label="Mobile" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <!-- Retister Period: Date picker for start to end -->
        <el-col :span="24">
          <el-form-item label="Period" size="small">
            <el-col :span="11">
              <el-form-item class="date-picker" size="small">
                <el-date-picker
                  type="date"
                  placeholder="Please select..."
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
                  placeholder="Please select..."
                  v-model="form.registeredEndDate"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <!-- Action buttons -->
    <div class="search-button">
      <el-button type="primary" @click="handleSearch" :loading="loading" size="small">Search</el-button>
      <el-button size="small" @click="handleClear">Clear</el-button>
    </div>

    <!-- Result list -->
    <div v-loading="loading">
      <div v-if="Object.keys(paymentData).length === 0">No Data</div>
      <payment-data-item
        v-else
        v-for="d in Object.keys(paymentData)"
        :key="paymentData[d].uniqueId"
        :item="paymentData[d]"
      />
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import ContainerBoxMR from '@/components/ContainerBoxMR.vue'
import PaymentDataItem from '@/components/PaymentDataItem.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Payment',
  data() {
    return {
      // for store form date locally
      form: {
        vendor: '',
        packageName: '',
        requestStartDate: '',
        requestEndDate: '',
        payStatus: '',
        mediaName: '',
        itemName: '',
        channel: '',
        registeredStartDate: '',
        registeredEndDate: '',
      },
    }
  },
  components: {
    PageTitle,
    ContainerBoxMR,
    PaymentDataItem,
  },
  computed: {
    // fetch attributes from state
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
    /**
     * For handle clear button onClick event.
     *
     * Reset the form to empty.
     */
    handleClear() {
      this.form = {
        vendor: '',
        requestStartDate: '',
        requestEndDate: '',
        payStatus: '',
        mediaName: '',
        itemName: '',
        channel: '',
        registeredStartDate: '',
        registeredEndDate: '',
      }
    },
    /**
     * Fill test data.
     */
    fillData() {
      this.form = {
        vendor: 'Test Vendor',
        packageName: 'Test Package',
        requestStartDate: '2019-01-01',
        requestEndDate: '2019-01-31',
        payStatus: '0',
        mediaName: 'Test Media',
        itemName: 'Test Item',
        channel: '0',
        registeredStartDate: '2019-01-02',
        registeredEndDate: '2019-01-30',
      }
    },
    handleSearch() {
      // set loading status first
      this.$store.commit('loading', true)
      // sleep a secend and then fetch data
      setTimeout(() => this.$store.dispatch('getPaymentData', this.form), 1000)
    },
    // fetch actions
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

  .el-dropdown {
    margin-left: 1rem;
  }

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
    margin-bottom: 3rem;
  }
}

.el-form-item {
  .el-form-item {
    margin-bottom: 0;
  }
}
</style>
