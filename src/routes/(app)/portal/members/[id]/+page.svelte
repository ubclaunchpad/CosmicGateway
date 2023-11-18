<script lang="ts">
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import type { IUser } from '$lib/types/User.js';
	export let data;

	const obj = {
		id: 881709496070406145,
		first_name: 'Lebron',
		last_name: 'James',
		pref_name: 'Lebron',
		pronouns: 'he/him', // new
		email: 'lbj@ubclaunchpad.com',
		created_at: '2023-07-12T07:30:05.398Z',
		updated_at: '2023-09-29T21:03:16.349Z',
		resume_link: 'www.none-needed.com',
		faculty: {
			id: 881038255263285249,
			label: 'Science'
		},
		standing: {
			id: 881038255380070401,
			label: '4th year'
		},
		specialization: {
			id: 881038255685632001,
			label: 'CPSC'
		},
		roles: [],
		username: 'lbj',
		member_since: 'Sept 1, 2003'
	};

	let tempImageUrl = 'https://via.placeholder.com/200';
</script>

<MainPage>
	<div slot="main" class="content">
		<h3>breadcrumb</h3>
		<h1>{data.id}</h1>
		<div class="information-wrapper">
			<div class="basic-information">
				<div class="image-container">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img src={tempImageUrl} alt="Temporary Image" />
				</div>
				<div class="name-info">
					<div class="name">
						{obj.first_name + ' ' + obj.last_name}
						({obj?.pronouns})
					</div>
					<div class="basic-information-container">
						<div class="member-information">
							<h2><b>Member Information</b></h2>
							<p>Executive</p>
							<p>Member since: {obj.member_since}</p>
							<p>Cosmic Gateway - Software Developer</p>
						</div>
						<div class="contact-information">
							<h2><b>Contact Information</b></h2>
							<p>linkedin</p>
							<p>email</p>
						</div>
					</div>
				</div>
			</div>
			<div class="personal-information-container">
				<h2><b>Personal Information</b></h2>
				<div class="personal-information">
					<div class="student-status">
						<b>Student Status</b>
						<p>Faculty: {obj.faculty.label}</p>
						<p>Student Number: 129831728093</p>
					</div>
					<div class="student-status">
						<b>Health Information</b>
						<p>Gluten Free</p>
						<div>
							Emergency Contact
							<p>Name - Relationship</p>
							<p>111-111-1111</p>
						</div>
					</div>
					<div class="student-status">
						<b>Resume</b>
						<p>Link to Resume</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</MainPage>

<style lang="scss">
	.content {
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 0;
		min-width: 100%;
		background-color: #fcfcfc;
		border: 1px solid black;

		h1 {
			font-size: 1.4rem;
		}
		flex-direction: column;
		height: 100%;
		flex: 1;
		overflow: scroll;

		.information-wrapper {
			display: flex;
			flex-direction: column;
			height: 100%;
			width: 100%;
			padding: 50px;
			border: 1px solid black;

			.image-container {
				min-width: 200px; //temp
				min-height: auto;
			}

			.basic-information {
				display: flex;
				flex-direction: row;
				height: 50%;
				border: 1px solid black;

				.name-info {
					border: 1px solid black;
					width: 100%;

					.name {
						font-size: 24px;
					}

					.basic-information-container {
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: flex-start;
						width: 100%;
						border: 1px solid black;

						.member-information,
						.contact-information {
							flex: 1;
						}
					}
				}
			}

			.personal-information-container {
				border: 1px solid black;
				height: 100%;
				width: 100%;
				display: flex;
				flex-direction: column;

				.personal-information {
					display: flex;
					border: 1px solid black;
					height: 100%;
					width: 100%;
					flex: 1;

					.student-status {
						display: flex;
						flex-direction: column;
						border: 1px solid black;
						width: 33%;
					}
				}
			}
		}
	}
</style>
