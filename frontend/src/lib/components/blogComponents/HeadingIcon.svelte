<script>
	import { StarDoodle } from "../general/icons/doodles";
</script>


<div>
<img src={StarDoodle} alt="logo" />
<slot/>
</div>


<style lang="scss">

    div {
        
        position: static;
        width: 36px;
        

        img {
            width: 18px;

        }
    }
</style>