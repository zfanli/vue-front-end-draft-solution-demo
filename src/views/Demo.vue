<template>
  <div class="payment">
    <page-title title="支払実績管理">
      <container-box-m-r>
        <page-title-button>更新</page-title-button>
      </container-box-m-r>
    </page-title>
    <error-box v-show="error" :message="message"/>
    <div class="search-box">
      <div class="search-button">
        <button>検索</button>
        <button>クリア</button>
      </div>
      <div class="search-filter">
        <div class="search-filter-sub-box">
          <label>
            広告業者
            <select class="filter-vendor" id="vendor">
              <option value></option>
            </select>
          </label>
          <label>
            請求締日
            <input class="filter-request-start" type="date">
            ~
            <input class="filter-request-end" type="date">
          </label>
        </div>
        <div class="search-filter-sub-box">
          <label>
            パッケージ名
            <input class="filter-package" type="text">
          </label>
          <label>
            支払入力
            <select name="pay-status">
              <option value></option>
            </select>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ErrorBox from '@/components/ErrorBox.vue'
import PageTitle from '@/components/PageTitle.vue'
import PageTitleButton from '@/components/PageTitleButton.vue'
import ContainerBoxMR from '@/components/ContainerBoxMR.vue'
import { mapState } from 'vuex'

export default {
  name: 'Demo',
  components: {
    ErrorBox,
    PageTitle,
    PageTitleButton,
    ContainerBoxMR,
  },
  computed: {
    ...mapState(['error', 'message']),
  },
}
</script>

<style lang="scss" scoped>
.payment {
  font-size: 14px;
  .search-box {
    display: flex;
    background-color: #e7e8fd;

    .search-button {
      flex-shrink: 0;
      flex-grow: 0;
      display: flex;
      flex-direction: column;
      padding: 1rem;

      button {
        padding: 0 1rem;
        background-color: #fff;
        border: none;
        transition: all 0.1s linear;
        cursor: pointer;

        &:hover {
          color: #673ab7;
          box-shadow: 1px 1px 5px 0 #c2c3e0;
        }

        &:not(:last-child) {
          margin-bottom: 1rem;
        }
      }
    }

    .search-filter {
      padding: 1rem;
      flex-shrink: 0;
      flex-grow: 1;
      display: flex;
      flex-wrap: wrap;

      .filter-vendor {
        width: 8rem;
        background-color: #fff;
      }

      .search-filter-sub-box {
        display: flex;
        flex-basis: 50%;
        flex-direction: column;

        input[type=date] {
          width: 8rem;
        }
      }
    }
  }
}
</style>
