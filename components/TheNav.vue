<script setup lang="ts">
import paginas from '~/composables/paginas'

const isDark = computed({
	get() {
		return useColorMode().value === 'dark'
	},
	set() {
		useColorMode().preference = useColorMode().value === 'dark' ? 'light' : 'dark'
	},
})

const isMenu = ref(false)
function toggleMenu() {
	isMenu.value = !isMenu.value
}
</script>

<template>
	<nav class="bg-slate-900 flex justify-center items-center space-x-12 sticky">
		<ClientOnly>
			<img src="/assets/d.png" alt="Logo" class="w-12 h-12 mr-4 bg-slate-900">
			<NuxtLink v-for="pagina in paginas" :key="pagina.label" :to="pagina.route">
				<Button label="pagina.icon" class="text-white">
					<Icon :name="pagina.icon" />
					{{ pagina.label }}
				</Button>
			</NuxtLink>
		</ClientOnly>
		<button class="md:hidden" @click="toggleMenu">
			<Icon :name="isMenu ? 'pixelarticons:close' : 'pixelarticons:menu'" size="1.5rem" class="text-[#4C4F69] dark:text-[#CDD5F4] hover:text-[#F28AA9] dark:hover:text-[#F28AA9]" />
		</button>

		<div v-if="isMenu" class="md:hidden absolute top-full left-0 right-0 bg-slate-900">
			<ul class="py-4 text-center">
				<NuxtLink v-for="pagina in paginas" :key="pagina.label" :to="pagina.route">
					<li class="py-2">
						<Button label="option.icon" class="text-white" @click="toggleMenu">
							<Icon :name="pagina.icon" />
							{{ pagina.label }}
						</Button>
					</li>
				</NuxtLink>
			</ul>
		</div>
		<button @click="isDark = !isDark">
			<Icon :name="isDark ? 'pixelarticons:moon-stars' : 'pixelarticons:sun-alt'" size="1.5rem" class="text-[#4C4F69] dark:text-[#CDD5F4] hover:text-[#F28AA9] dark:hover:text-[#F28AA9]" />
		</button>
	</nav>
</template>
