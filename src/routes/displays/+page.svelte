<script>
	/** @type {import('./$types').PageServerData} */
	export let data;

    import { cad_path } from '$lib/store.js';
    function setCADStore(path) {
        cad_path.set(path);
    }

    let cad_path_value;
    
    cad_path.subscribe((value) => {
        cad_path_value = value;
    })

    let latest_comp = "ccc";

</script>

<div class="flex flex-col h-screen items-center">

    <h1 class="text-4xl m-5 font-bold">available competitions</h1>

    <div class="flex-row justify-center">
        {#each Object.entries(data) as [season, events]}
        <ul class="menu menu-lg menu-horizontal bg-base-200 rounded-box w-56 m-5">
            <h2 class="text-xl menu-title">
                {season}
            </h2>
            <li>
                {#each Object.entries(events) as [event, cads]}
                    <a class="font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder2-open" viewBox="0 0 16 16">
                            <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7z"/>
                        </svg>
                        {event}
                        {#if event == latest_comp}
                            <span class="badge badge-md badge-warning">NEW!</span>
                        {/if}
                    </a>

                    {#each Object.entries(cads) as [cad, path]}
                    <ul>
                        <li>
                            <a href="/displays/{season}/{event}/{cad.replace(".stl", "")}"on:click={setCADStore(path)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-richtext" viewBox="0 0 16 16">
                                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
                                    <path d="M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m1.639-3.708 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208M6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"/>
                                </svg>
                                {cad}
                            </a>
                        </li>
                    </ul>
                    {/each}
                {/each}
            </li>
        </ul>
        {/each}
    </div>
</div>