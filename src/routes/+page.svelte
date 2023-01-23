<script lang="ts">
	import teaImg from './teas.jpg';
	import OptionsSelector from './categorySelector.svelte';
	import BlogPost from './blogPosts.svelte';
</script>

<div class="flex flex-col items-center">
	<section class="w-full flex flex-col items-center h-[500px] relative">
		<div class="w-full h-full">
			<img class="h-full w-full -z-10 object-cover" alt="tea leaves" src={teaImg} />
		</div>
		<div class="absolute text-white flex flex-col items-center h-full justify-center">
			<h1 class="heroText text-5xl text-white">Majestic Tea</h1>
			<h2 class="heroText text-3xl text-white text-center pb-3">
				Your one-stop shop to all things tea
			</h2>
		</div>
	</section>

	<section class="w-full px-[20%] py-8">
		<p class="p-2 text-lg text-center">
			Discover new types of tea, read about ways to get the most out of your tea, and find out about
			the various health benefits of tea.
		</p>
		<!-- <h2 class="text-xl">Browse Posts</h2> -->
		<!-- <div class="flex gap-5 overflow-x-scroll py-8 px-5 snap-x snap-mandatory" /> -->
		<OptionsSelector />
		<div class="blogPosts">
			<a class="post" href="/BlogPost">
				<div><BlogPost /></div>
			</a>
			<a class="post" href="/BlogPost">
				<div><BlogPost /></div>
			</a>
			<a class="post" href="/BlogPost">
				<div><BlogPost /></div>
			</a>
			<a class="post" href="/BlogPost">
				<div><BlogPost /></div>
			</a>
			<a class="post" href="/BlogPost">
				<div><BlogPost /></div>
			</a>
		</div>
	</section>
</div>

<style>
	.a {
		justify-content: center;
	}
	.heroText {
		text-shadow: 1px 1px 2px black;
	}
	.post {
		display: flex;
		flex-direction: column;
		margin: 10px;
		max-width: 50%;
		cursor: pointer;
		padding: none;
	}
	.post:hover {
		color: grey;
	}
	.blogPosts {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		box-sizing: border-box;
		justify-content: space-around;
	}
</style>
