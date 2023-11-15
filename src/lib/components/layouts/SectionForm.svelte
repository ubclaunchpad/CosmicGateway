<section class="flex items-center justify-center h-full w-full flex-col gap-4 p-2 ">
	<div class="flex flex-col items-start justify-start h-full w-full max-w-3xl p-4 overflow-y-scroll
		shadow-sm rounded-md  border border-gray-200
	 ">
		<div class="p-2 w-full flex flex-col gap-2">
			<slot name="header" />
		</div>
		<slot />
	</div>
</section>