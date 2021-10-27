<template>
  <div>
    <CardHolder>
      <DeptCard
        dept="AI"
        title="Artificial Intelligence"
        status="status"
        :description="[
          'Fundamentals of Data Science',
          'Object Oriented Programming',
          'Introduction To Operating Systems',
          'Design And Analysis Of Algorithm',
          'Discrete Mathemetics',
        ]"
      />
      <DeptCard dept="CSE" />
      <DeptCard dept="IT" />
      <DeptCard dept="IT" />
      <DeptCard dept="IT" />
      <DeptCard dept="IT" />
      <DeptCard dept="IT" />
      <DeptCard dept="IT" />
    </CardHolder>
  </div>
</template>

<script>
import DeptCard from "@/components/staff/DeptCard.vue";
import CardHolder from "@/components/staff/CardHolder.vue";
export default {
  components: {
    DeptCard,
    CardHolder,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.staff-profile {
  z-index: 1;
}
.cards {
  display: flex;
  overflow: auto;
}
</style>
