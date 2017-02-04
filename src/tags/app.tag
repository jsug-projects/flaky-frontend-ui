<app>
	<div id="page-wrapper">
		<div id="page"></div>
	</div>
	<script>
		if (this.root.dataset.authorized === 'true') {
			this.opts.state.trigger('login');
		}
	</script>
</app>