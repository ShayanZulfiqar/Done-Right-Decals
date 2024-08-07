document.addEventListener('DOMContentLoaded', function() {
	const tabs = document.querySelectorAll('.swan-tabs-headers input[type="radio"]');
	const tabContents = document.querySelectorAll('.tab-content1');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
			const ariaLabelledby = this.id;
            const label = document.querySelector(`label[for="${ariaLabelledby}"]`);
			const content = document.querySelector(`div[aria-labelledby="${ariaLabelledby}"]`);
			tabContents.forEach(content => content.classList.remove('swan-tab-selected'));
			content.classList.add('swan-tab-selected');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.swan-collapsible-summary-button').forEach(button => {
        button.addEventListener('click', function() {
            const content = document.getElementById(this.getAttribute('aria-controls'));
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            this.setAttribute('aria-expanded', !isExpanded);
            content.classList.toggle('swan-collapsible-content-open');
        });
    });
});
