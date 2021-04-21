<template>
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quod
    dignissimos porro unde molestias, quasi nobis, numquam perferendis quos
    officiis a maxime ab libero tempore eos exercitationem atque consequuntur
    vero est nulla saepe! Asperiores dolores velit praesentium. Excepturi est
    animi tempore accusantium optio ratione explicabo, facere deleniti, sunt
    itaque assumenda pariatur ab commodi, deserunt eaque. Qui ab laudantium
    quidem voluptates illo suscipit exercitationem beatae omnis est quisquam
    impedit sunt dolorem numquam eos deserunt temporibus similique earum iste
    facilis, tenetur quasi quis sequi accusamus delectus. Numquam accusantium
    repellat nemo est quasi perspiciatis quis, odio repellendus rem corrupti
    maxime. Explicabo vero tenetur aliquid porro nam ab illo quaerat, voluptatum
    odit natus enim tempora. Vero voluptates explicabo et perferendis in.
    Laudantium ab distinctio consequatur suscipit veniam, odio eius fugit
    cupiditate iste dolorem dolorum debitis? Similique laboriosam eos velit a
    blanditiis. Rem deleniti dolore nihil maxime itaque cumque unde tenetur,
    amet quis magnam dignissimos animi tempore ea veniam quo mollitia porro! A
    tenetur consectetur libero dolor in commodi minima nobis facilis labore?
    Aliquam, ea veniam minus commodi ab quibusdam sit magnam obcaecati illo
    facilis tenetur necessitatibus architecto aperiam non natus deserunt
    recusandae ex accusamus error exercitationem corporis corrupti. Expedita
    dignissimos illo nesciunt ab provident!
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params.combine_id);
    this.$store.dispatch("common/fullLoading", true);
    this.getDataWithCategoryId(this.$route.params.combine_id);
  },

  methods: {
    getDataWithCategoryId(id) {
      this.$api.serviceArticleCategoryCombineIdIndex(id).then((response) => {
        console.log(response);
        this.$store.dispatch("common/fullLoading", false);
      });
    },
  },
};
</script>