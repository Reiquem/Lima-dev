<script setup lang='ts'>

</script>

<template>
	<TheNav contextmenu.prevent />
	<main @contextmenu.prevent>
		<slot />
	</main>
	<TheFooter @contextmenu.prevent />
</template>
