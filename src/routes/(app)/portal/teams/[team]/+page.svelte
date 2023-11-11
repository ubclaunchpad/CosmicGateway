<script>
    export let data;

</script>


<div>
    <h1>{data.title}</h1>
    <div class="container">
        <div class="leftColumn">
            <div class="mediumBox">

            </div>
            <div class="mediumBox">

            </div>
        </div>
        <div class="rightColumn">
            <div class="members">

            </div>
        </div>
    </div>
</div>

<style lang="scss">
    
    .container {
        display: flex;
        border: solid black 2px;
        
    }

    .leftColumn {
        
    }

    .rightColumn {
       
    }

    .mediumBox {
        border: solid black 2px;
        width: 586px;
        height: 368px;
        background-color: rgb(227, 227, 227);
        margin: 20px;
        border-radius: 12px;
    }

    .members {
        border: solid black 2px;
        width: 586px;
        height: 100%;
        background-color: rgb(227, 227, 227);
        margin: 20px;
        border-radius: 12px;
    }

    
    
    
</style>