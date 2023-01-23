<script>
</script>

<p class="text-center text-xl">Categories</p>
<div class="filterIcons">
	<!-- select all -->
	<div title="select all options" class="iconAndText">
		<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 48 48"
			><mask id="ipSFullSelection0"
				><g fill="none" strokeLinejoin="round" strokeWidth="4"
					><path
						fill="#fff"
						stroke="#fff"
						d="M34 5H8a3 3 0 0 0-3 3v26a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Z"
					/><path stroke="#fff" strokeLinecap="round" d="M44 13.002V42a2 2 0 0 1-2 2H13.003" /><path
						stroke="#000"
						strokeLinecap="round"
						d="m13 20.486l6 5.525l10-10.292"
					/></g
				></mask
			><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSFullSelection0)" /></svg
		>
		<p class="text-xs">All</p>
	</div>
	<!-- tea equipment -->
	<div title="tea making equipment" class="iconAndText">
		<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 48 48"
			><g
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="4"
				><path
					d="M23.001 13c-7.3 0-13.458 5.07-15.379 12H38.38c-1.92-6.93-8.079-12-15.379-12Zm-16 16.593c0 4.418 1.665 8.433 4.381 11.407H34.62c2.716-2.974 4.381-6.989 4.381-11.407c0-1.594-.217-3.134-.62-4.593H7.62C7.217 26.459 7 28 7 29.593ZM27 13v-2a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v2"
				/><path
					d="M7 28s-1.985-.131-3-2.5C2.5 22 5 20 6 17c.761-2.282-.793-3.986-1.58-4.67c-.252-.22-.42-.53-.42-.865v-.618c0-.489.354-.903.843-.92C5.878 9.887 7.663 9.996 9 11c2 1.5 3 6 3 6M9 41h28m2-16a5 5 0 1 0-4.584-7"
				/></g
			></svg
		>
		<p class="text-xs">Equipment</p>
	</div>
	<!-- tea types -->
	<div title="types of tea" class="iconAndText">
		<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 48 48"
			><path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="4"
				d="M21 17c8.385-2.12 17.665-8.76 21-12c0 15-3.801 23.472-6 26c-10 11.5-20.935 6.16-23 2c-4.855-9.777 2.07-14.5 8-16ZM6 43c.412-2 2.388-6.6 7-9"
			/></svg
		>
		<p class="text-xs">Teas</p>
	</div>
	<!-- gift ideas -->
	<div title="gift ideas" class="iconAndText">
		<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24"
			><path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M20 12v10H4V12M2 7h20v5H2zm10 15V7m0 0H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zm0 0h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
			/></svg
		>
		<p class="text-xs">Gift ideas</p>
	</div>
	<!-- recipes -->
	<div title="tea recipes" class="iconAndText">
		<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 512 512"
			><path
				fill="currentColor"
				d="M436.574 120H352V64H32v344a64.072 64.072 0 0 0 64 64h192a64.072 64.072 0 0 0 64-64v-8h84.574A59.493 59.493 0 0 0 496 340.574V179.426A59.493 59.493 0 0 0 436.574 120Zm-275.2 118.894L192 269.521v57.373h-64v-57.373l30.627-30.627ZM464 340.574A27.457 27.457 0 0 1 436.574 368H320v40a32.036 32.036 0 0 1-32 32H96a32.036 32.036 0 0 1-32-32V96h80v112.266l-48 48v102.628h128V256.266l-48-48V96h144v56h116.574A27.457 27.457 0 0 1 464 179.426Z"
			/><path
				fill="currentColor"
				d="M416 180h-96v160h96a20.023 20.023 0 0 0 20-20V200a20.023 20.023 0 0 0-20-20Zm-12 128h-52v-96h52Z"
			/></svg
		>
		<p class="text-xs">Recipes</p>
	</div>
</div>

<style>
	.filterIcons {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		padding-top: 1%;
	}

	.iconAndText {
		display: flex;
		flex-direction: column;
		margin: 5px;
		border: 1px solid #f3f7f2;
		align-items: center;
		padding: 10px 20px;
		border-radius: 5px;
		@apply bg-slate-100;
		cursor: pointer;
	}

	.iconAndText:hover {
		border: solid 1px lightgray;
	}

	p {
		text-align: center;
	}
</style>
