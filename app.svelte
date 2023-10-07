<svelte:options customElement="say-hello" />

<script>
	let pass = "";
	let validLength = false;
	let validCase = false;
	let validSpecial = false;
	let validPass = false;

	function check() {
		validLength = pass.length > 8;
		validCase = pass.toUpperCase() != pass && pass.toLowerCase() != pass;
		validSpecial = pass.replaceAll(/\w/g, "").length > 0;
		validPass = validLength && validCase && validSpecial;
	}
	$: check(pass);
</script>

<main>
	<fieldset>
		<legend>Choose your password</legend>
		<div class="inputs">
			<input bind:value={pass} type="password" placeholder="..." />
			<button disabled={!validPass} class:valid={validPass} type="button"
				>Enter</button
			>
		</div>
		<div class="validation">
			<div>
				<div class:valid={validLength}>+8</div>
				<span>more than 8 characters</span>
			</div>
			<div>
				<div class:valid={validCase}>a..Z</div>
				<span>lower and upper case</span>
			</div>
			<div>
				<div class:valid={validSpecial}>~&#</div>
				<span>special characters</span>
			</div>
		</div>
	</fieldset>
</main>

<style>
	main {
		border: 0;
		margin: 0;
		padding: 0;
		display: flex;
		width: 100vw;
		height: 100vh;
		align-items: center;
		justify-content: center;
		font-family: Arial, Helvetica, sans-serif;
	}
	fieldset {
		padding: 2rem;
		border: 7px solid var(--Blue-700);
		border-radius: 1rem;
	}
	legend {
		font-size: 3rem;
		color: var(--Blue-700);
	}
	.inputs {
		display: flex;
		justify-content: space-between;
	}
	.inputs input,
	.inputs button {
		outline: none;
		font-size: 2rem;
		padding: 1rem;
		margin: 1rem;
		color: var(--Blue-900);
		border: 1px solid var(--Blue-400);
		background-color: var(--Blue-100);
	}
	.inputs button {
		color: var(--Blue-700);
		background-color: var(--Blue-900);
	}
	.valid {
		background-color: var(--Green-600) !important;
		color: var(--Green-200) !important;
	}
	.validation {
		display: flex;
		justify-content: space-between;
		margin: 1rem;
	}
	.validation div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.validation div div {
		width: 7rem;
		font-size: 1.33rem;
		background-color: var(--Gray-900);
		color: var(--Gray-700);
		padding: 1rem;
	}
	.validation div span {
		width: 7rem;
		color: gray;
		font-style: italic;
	}
	:root {
		--Gray-100: #f7fafc;
		--Gray-200: #edf2f7;
		--Gray-300: #e2e8f0;
		--Gray-400: #cbd5e0;
		--Gray-500: #a0aec0;
		--Gray-600: #718096;
		--Gray-700: #4a5568;
		--Gray-800: #2d3748;
		--Gray-900: #1a202c;
		--Red-100: #fff5f5;
		--Red-200: #fed7d7;
		--Red-300: #feb2b2;
		--Red-400: #fc8181;
		--Red-500: #f56565;
		--Red-600: #e53e3e;
		--Red-700: #c53030;
		--Red-800: #9b2c2c;
		--Red-900: #742a2a;
		--Orange-100: #fffaf0;
		--Orange-200: #feebc8;
		--Orange-300: #fbd38d;
		--Orange-400: #f6ad55;
		--Orange-500: #ed8936;
		--Orange-600: #dd6b20;
		--Orange-700: #c05621;
		--Orange-800: #9c4221;
		--Orange-900: #7b341e;
		--Yellow-100: #fffff0;
		--Yellow-200: #fefcbf;
		--Yellow-300: #faf089;
		--Yellow-400: #f6e05e;
		--Yellow-500: #ecc94b;
		--Yellow-600: #d69e2e;
		--Yellow-700: #b7791f;
		--Yellow-800: #975a16;
		--Yellow-900: #744210;
		--Green-100: #f0fff4;
		--Green-200: #c6f6d5;
		--Green-300: #9ae6b4;
		--Green-400: #68d391;
		--Green-500: #48bb78;
		--Green-600: #38a169;
		--Green-700: #2f855a;
		--Green-800: #276749;
		--Green-900: #22543d;
		--Teal-100: #e6fffa;
		--Teal-200: #b2f5ea;
		--Teal-300: #81e6d9;
		--Teal-400: #4fd1c5;
		--Teal-500: #38b2ac;
		--Teal-600: #319795;
		--Teal-700: #2c7a7b;
		--Teal-800: #285e61;
		--Teal-900: #234e52;
		--Blue-100: #ebf8ff;
		--Blue-200: #bee3f8;
		--Blue-300: #90cdf4;
		--Blue-400: #63b3ed;
		--Blue-500: #4299e1;
		--Blue-600: #3182ce;
		--Blue-700: #2b6cb0;
		--Blue-800: #2c5282;
		--Blue-900: #2a4365;
		--Indigo-100: #ebf4ff;
		--Indigo-200: #c3dafe;
		--Indigo-300: #a3bffa;
		--Indigo-400: #7f9cf5;
		--Indigo-500: #667eea;
		--Indigo-600: #5a67d8;
		--Indigo-700: #4c51bf;
		--Indigo-800: #434190;
		--Indigo-900: #3c366b;
		--Purple-100: #faf5ff;
		--Purple-200: #e9d8fd;
		--Purple-300: #d6bcfa;
		--Purple-400: #b794f4;
		--Purple-500: #9f7aea;
		--Purple-600: #805ad5;
		--Purple-700: #6b46c1;
		--Purple-800: #553c9a;
		--Purple-900: #44337a;
		--Pink-100: #fff5f7;
		--Pink-200: #fed7e2;
		--Pink-300: #fbb6ce;
		--Pink-400: #f687b3;
		--Pink-500: #ed64a6;
		--Pink-600: #d53f8c;
		--Pink-700: #b83280;
		--Pink-800: #97266d;
		--Pink-900: #702459;
	}
</style>
