<template>
  <table
    v-if="
      staff.name &&
      staff.surname &&
      staff.age &&
      staff.experience &&
      staff.address
    "
    class="mt-5"
  >
    <thead>
      <tr>
        <th class="table-cell p-5 border-2 font-bold text-white border-bgInput">Name</th>
        <th class="table-cell p-5 border-2 font-bold text-white border-bgInput">
          Surname
        </th>
        <th class="table-cell p-5 border-2 font-bold text-white border-bgInput">
          Age
        </th>
        <th class="table-cell p-5 border-2 font-bold text-white border-bgInput">
          Experience
        </th>
        <th class="table-cell p-5 border-2 font-bold text-white border-bgInput">Address</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="table-cell p-5 border-2 text-textSecondary border-bgInput">
          {{ staff.name }}
        </td>
        <td class="table-cell p-5 border-2 text-textSecondary border-bgInput">
          {{ staff.surname }}
        </td>
        <td class="table-cell p-5 border-2 text-textSecondary border-bgInput">
          {{ staff.age }}
        </td>
        <td class="table-cell p-5 border-2 text-textSecondary border-bgInput">
          {{ staff.experience }}
        </td>
        <td class="table-cell p-5 border-2 text-textSecondary border-bgInput">
          {{ staff.address }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    staff: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="css"></style>
