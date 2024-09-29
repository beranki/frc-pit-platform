<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import CAD from "$lib/components/CAD.svelte";
</script>

<div class="flex w-full items-center justify-center p-10">
    <div class="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
        <h1 class="font-bold text-4xl">{data["comp"]}'s {data["cad"]}</h1>
    </div>

    <div class="divider divider-horizontal"></div>
    
    <div class="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
        
    </div>
</div>