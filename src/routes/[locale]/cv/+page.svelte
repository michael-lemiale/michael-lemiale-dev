<script lang="ts">
  import Resume from "$lib/components/Resume.svelte";
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<Resume
  resume={data.resume}
  skillLabels={data.skillLabels}
  sectionLabels={data.sectionLabels}
/>
