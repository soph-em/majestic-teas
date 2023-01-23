<script>
	import '../app.postcss';
</script>

<div class="min-h-screen flex flex-col">
	<nav class="bg-custom-green flex py-4 justify-center px-[20%]">
		<a class="name p-1 nav-link" href="/">Majestic Tea</a>
		<div class="right">
			<a class="about p-1 nav-link" href="/">About</a>
			<a class="about p-1 nav-link" href="/">Blog</a>
			<svg
				class="self-center"
				xmlns="http://www.w3.org/2000/svg"
				width="30px"
				height="30px"
				viewBox="0 0 24 24"
				><path
					fill="white"
					d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
				/></svg
			>
		</div>
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
	.right {
		justify-content: space-between;
		display: flex;
		width: 30%;
	}
	.name {
		margin-right: auto;
	}

	.about {
		padding: 4px 10px;
	}

	.nav-link {
		@apply text-2xl text-white underline decoration-transparent hover:decoration-white transition-all;
	}

	:global(body) {
		@apply bg-slate-50;
	}
</style>
