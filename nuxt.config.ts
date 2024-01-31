export default defineNuxtConfig({
	css: [
		'~/assets/global.sass',
		'primevue/resources/primevue.min.css',
		'primevue/resources/themes/lara-light-blue/theme.css',
	],
	modules: ['@nuxt/image', '@nuxtjs/color-mode', 'nuxt-icon', '@nuxtjs/tailwindcss', 'nuxt-primevue', '@nuxtjs/seo'],
	colorMode: {
		preference: 'dark',
		fallback: 'dark',
		classSuffix: '',
	},
	site: {
		url: 'https://lima.dev.br/',
		name: 'Diogo Lima',
		description: 'Full Stack Developer',
		twitter: '@reiquemg',
		identity: {
			type: 'Person',
		},
	},
	devtools: { enabled: true },
})
