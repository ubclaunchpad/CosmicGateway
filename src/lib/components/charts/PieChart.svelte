<!-- <script lang="ts">
	import { arc } from 'd3-shape';
	export let segments = [
		{ size: 380, color: 'blue', label: 'Members' },
		{ size: 30, color: 'var(--color-bg-primary)', label: 'Non-members' }
	];

	const fn = arc();
	let angle = Math.PI * 2;
	$: total = segments.reduce((total, s) => total + s.size, 0);

	let arcs;
	$: {
		let acc = 0;
		arcs = segments.map((segment) => {
			const options = {
				innerRadius: 20,
				outerRadius: 40,
				startAngle: acc,
				endAngle: (acc += (angle * segment.size) / total)
			};

			return {
				color: segment.color,
				label: segment.label,
				d: fn(options),
				centroid: fn.centroid(options)
			};
		});
	}
</script>

<div>
	<svg viewBox="0 0 100 100">
		<g transform="translate(50,50)">
			{#each arcs as arc}
				<!== arc ==>
				<path d={arc.d} fill={arc.color} />
				<text x={arc.centroid[0]} y={arc.centroid[1]}>{arc.label}</text>
			{/each}
		</g>
	</svg>

	<input bind:value={angle} type="range" min={0} max={Math.PI * 2} step={0.01} />

	<button> All Users </button>
	<button> Members </button>
	<button> All Users </button>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		// max-height: 200px;
		// overflow: hidden;

		input {
			width: 100%;
		}

		svg {
			width: 100%;
			// height: fit-content;
		}

		path {
			stroke: var(--color-border-1);
			stroke-width: 0.5px;
		}

		text {
			font-size: 4px;
			text-anchor: middle;
			fill: var(--color-text-1);
			stroke: var(--color-text-1);
			stroke-width: 0;
		}

		.outline {
			/* stroke: white; */
			stroke-width: 0;
		}
	}
</style> -->


<div></div>