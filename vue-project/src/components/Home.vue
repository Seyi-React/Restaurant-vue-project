<template>
    <div>
        <h2>This is the Home page</h2> 
    </div>
</template>
<script>
export default {
    name:'Home',
    
    mounted() {
      let user = localStorage.getItem('user-info');
      if(!user) {
        this.$router.push({ name: "SignUp" });
      }
    },
}

</script>
<style>
    
</style>