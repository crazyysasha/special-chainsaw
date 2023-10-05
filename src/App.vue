<script setup>
import { ref, watch } from 'vue';
import TableHead from './components/table/TableHead.vue'
import TableBody from './components/table/TableBody.vue'
const users = ref([
  { id: 1, name: 'Ozodbek', surname: 'Mamayoqubov', birthday: '2012-07-18', },
  { id: 2, name: 'Sasha', surname: 'Raimov', birthday: '1999-04-07', },
]);
</script>

<template>
  <div>
    <table>
      <TableHead></TableHead>
      <TableBody :data="users"></TableBody>
    </table>
  </div>
</template>