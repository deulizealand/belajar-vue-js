<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-8">
        <router-link
          :to="{ name: 'Transaction.Create' }"
          class="btn btn-primary btn-sm rounded shadow mb-3"
          >Add</router-link
        >

        <div class="card rounded shadow">
          <div class="card-header">
            Transaction List
          </div>
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(trans, index) in transactions" :key="index">
                  <td>{{ trans.title }}</td>
                  <td>{{ trans.amount }}</td>
                  <td>{{ trans.type }}</td>
                  <td>
                    <div class="btn-group">
                      <router-link
                        :to="{
                          name: 'Transaction.Edit',
                          params: { id: trans.id },
                        }"
                        class="btn btn-sm btn-outline-info"
                        >Edit</router-link
                      >
                      -
                      <button
                        @click.prevent="delTrans(trans.id, index)"
                        class="btn btn-sm btn-outline-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { onMounted, ref } from "vue";
let api = "http://localhost:3000/data";
export default {
  setup() {
    let transactions = ref([]);
    onMounted(() => {
      axios
        .get(api)
        .then((res) => {
          transactions.value = res.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });
    function delTrans(id, index) {
      axios.delete(api + "/" + id).then(() => {
        transactions.value.data.splice(index, 1);
      });
    }
    return {
      transactions,
      delTrans,
    };
  },
  methods: {},
};
</script>
<style></style>
