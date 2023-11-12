<script lang="ts">
    import logo from '$lib/assets/logo.png';
    let links = [
        { name: 'Profile', url: '/contact' },
        // Add more links as needed
    ];
</script>

<nav class=" px-2 mt-0 w-full h-12 border-b-2 border-b-gray-200"> 
    <div class="mx-auto flex flex-wrap  w-full h-full flex-row items-center">
        <div class="flex items-center ">
            <img src={logo} alt="Logo" class="h-8 w-8 mr-2"/>
            <span class="font-semibold text-xl tracking-tight ">UBC Launch Pad</span>
        </div>
        <ul class="flex justify-end  items-center flex-grow">
            {#each links as link (link.url)}
                <li class="w-20  h-full p-0 m-0">
                    <a class=" text-sm p-0 justify-end flex" href={link.url}>
                        <div class="circle-icon p-0 m-0 h-0 bg-gray-200 "></div>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</nav>

<style lang="scss">
    .circle-icon {
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }


</style>