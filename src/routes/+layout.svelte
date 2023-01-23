<script>
	import '../app.postcss';
</script>

<div class="min-h-screen flex flex-col">
	<nav class="bg-custom-green flex py-5 justify-center px-[20%]">
		<a class="nav-link" href="/">Majestic Tea</a>
	</nav>

	<slot />

	<div class="flex-1" />

	<nav class="w-full bg-custom-footer-blue h-[150px]">
		<!-- footer -->
		<p>
			Header Photo by <a
				href="https://unsplash.com/@stri_khedonia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
				>Alice Pasqual</a
			>
			on
			<a
				href="https://unsplash.com/s/photos/tea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
				>Unsplash</a
			>
		</p>
	</nav>
</div>

<style>
	.nav-link {
		@apply text-2xl text-white underline decoration-transparent hover:decoration-white transition-all;
	}
	/* .chestnut {
		background-color: rgb(50, 61, 17);
	} */
	:global(body) {
		@apply bg-slate-50;
	}
</style>
