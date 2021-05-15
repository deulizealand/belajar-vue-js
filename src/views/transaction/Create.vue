<template lang="">
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-8">
        <router-link
          :to="{ name: 'Transaction.Index' }"
          class="btn btn-primary btn-sm rounded shadow mb-3"
          >Back</router-link
        >

        <div class="card rounded shadow">
          <div class="card-header">
            Create Transaction
          </div>
          <div class="card-body">
            <form @submit.prevent="store()">
              <div class="mb-3">
                <label for="" class="form-label">Title</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="transaction.title"
                />
                <div v-if="validation" class="text-danger">
                  {{ validation[0] }}
                </div>
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Amount</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="transaction.amount"
                />
                <div v-if="validation" class="text-danger">
                  {{ validation[0] }}
                </div>
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Type</label>
                <select class="form-select" v-model="transaction.type">
                  <option value="Expense">Expense</option>
                  <option value="Revenue">Revenue</option>
                </select>
                <div v-if="validation" class="text-danger">
                  {{ validation[0] }}
                </div>
              </div>
              <button class="btn btn-outline-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
//$router.push('Transaction.Index');
export default {
  setup() {
    const transaction = reactive({
      title: "",
      amount: "",
      type: "",
    });

    const validation = ref({});

    const router = useRouter();

    function store() {
      if (
        transaction.title == "" ||
        transaction.title == "" ||
        transaction.title == ""
      ) {
        validation.value = ["kosong"];
      } else {
        axios
          .post("http://localhost:3000/data", transaction)
          .then(() => {
            console.log("sukses");
            router.push({
              name: "Transaction.Index",
            });
          })
          .catch((err) => {
            validation.value = ["kosong"];
          });
      }
    }

    return {
      transaction,
      validation,
      store,
      router,
    };
  },
};
</script>
<style lang=""></style>
