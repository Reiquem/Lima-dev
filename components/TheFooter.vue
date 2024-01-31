<script setup lang="ts">
</script>

<template>
	<footer class="py-4 bg-slate-900 sticky">
		<div class=" flex justify-center items-center">
			<NuxtLink v-for="contato in contatos" :key="contato.url" :to="contato.url" target="_blank" :aria-label="contato.name">
				<Icon :name="contato.icon" size="2rem" />
			</NuxtLink>
		</div>
		<div class="flex justify-center items-center">
			<p>© {{ new Date().getFullYear() }} — Diogo 'Reiquem' Lima</p>
		</div>
	</footer>
</template>
